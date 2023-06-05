// @mui material components
import Grid from "@mui/material/Grid";
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "./ProfileInfoCard";

// Overview page components
import Header from "layouts/hospital/patientProfile/components/Header";

// Data
import HospitalListData from "layouts/hospital/patientProfile/data/HospitalListData";
import HospitalInsuranceList from "./hospitalInsuranceList";
import ReportInformation from "./components/ReportInformation";
import { useParams } from "react-router-dom";
import { fetchPatientProfile } from "services/common/fetchPatient";
import { useState, useEffect } from "react";
import { useArgonController } from "context";
import { fetchAuthorisedHospitals } from "services/hospital/fetchAuthorisedHospitals";
import { fetchAuthorisedInsurances } from "services/hospital/fetchAuthorisedInsurances";
import { fetchPatientReports } from "services/hospital/fetchPatientList";

const bgImage =
  "https://images.pexels.com/photos/207601/pexels-photo-207601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

function Overview() {
  const { id } = useParams();
  const [pateientProfile, setPateientProfile] = useState({});
  const [reportType, setReportType] = useState("hospital");
  const [hospitalListData, setHospitalListData] = useState([]);
  const [insuranceListData, setInsuranceListData] = useState([]);
  const [patientReports, setPatientReports] = useState([]);
  const [controller, dispatch] = useArgonController();
  const { auth } = controller;

  useEffect(() => {
    fetchPatientProfile(id).then((response) => {
      setPateientProfile(response.data);
    });
    fetchAuthorisedHospitals(id, auth.id).then((response) => {
      console.log(response.data);
      setHospitalListData(response.data.authorizedHospitals);
    });
    fetchAuthorisedInsurances(id, auth.id).then((response) => {
      setInsuranceListData(response.data.authorizedInsuranceCompanies);
    });
    fetchPatientReports(id, auth.id).then((response) => {
      setPatientReports(response.data.reports);
    });
  }, []);

  return (
    <DashboardLayout
      sx={{
        backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.info.main, 0.6),
            rgba(gradients.info.state, 0.6)
          )}, url(${bgImage})`,
        backgroundPositionY: "50%",
      }}
    >
      <Header patientData={pateientProfile} setReportType={setReportType} />
      <ArgonBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <ProfileInfoCard
              title="profile information"
              info={{
                fullName: pateientProfile.name,
                mobile: pateientProfile.phone,
                email: pateientProfile.email,
                gender: pateientProfile.gender,
                dob: pateientProfile.dob,
                address: pateientProfile.address,
                state: pateientProfile.state,
              }}
            />
          </Grid>
          <Grid item xs={12} xl={8}>
            <HospitalInsuranceList
              title={reportType === "hospital" ? "Authorized Hospitals" : "Authorized Insurances"}
              list={reportType === "hospital" ? hospitalListData : insuranceListData}
              type={reportType}
            />
          </Grid>
          <Grid item xs={12} md={12} xl={12}>
            <ReportInformation patientReports={patientReports}/>
          </Grid>
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
}
export default Overview;
