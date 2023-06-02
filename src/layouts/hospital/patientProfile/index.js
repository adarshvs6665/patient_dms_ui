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
import profilesListData from "layouts/hospital/patientProfile/data/HospitalListData";
import HospitalInsuranceList from "./hospitalInsuranceList";
import ReportInformation from "./components/ReportInformation";



const bgImage =
  "https://images.pexels.com/photos/207601/pexels-photo-207601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

function Overview() {

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
      <Header />
      <ArgonBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <ProfileInfoCard
              title="profile information"
              info={{
                fullName: "Shef rehmon",
                mobile: "9988776655",
                email: "rehmon@mail.com",
                gender:"male",
                dob:"01-01-0001",
                bloodgroup:"rarest of rarest",
                location: "Kazhakuttam",
              }}
            />
          </Grid>
          <Grid item xs={12} xl={8}>
            <HospitalInsuranceList title="Authorized Hospitals" list={profilesListData} />
          </Grid>
          <Grid item xs={12} md={12} xl={12}>
            <ReportInformation/>
          </Grid>
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
}
export default Overview;
