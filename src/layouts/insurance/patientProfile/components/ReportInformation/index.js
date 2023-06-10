/* eslint-disable react/prop-types */
// @mui material components
import { Icon, Tooltip } from "@mui/material";
import Card from "@mui/material/Card";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";


// Report page components
import Report from "layouts/insurance/patientProfile/components/Report";

function ReportInformation({ patientReports}) {
  return (
    <Card id="delete-account">
      <ArgonBox pt={3} px={2} pb={2} display="flex" justifyContent="space-between" alignItems="center">
        <ArgonTypography variant="h6" fontWeight="medium">
          Patient Reports
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pt={1} pb={2} px={2} sx={{ height: "50vh", overflowY: "scroll" }}>
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {patientReports.reverse().map((item, key) => {
            return (
              <Report
                key={key}
                dateOfVisit={item.dateOfVisit}
                causeOfVisit={item.causeOfVisit}
                condition={item.condition}
                description={item.description}
                doctor={item.doctor}
                medication={item.medication}
                hospitalId={item.hospitalId}
                reportId={item.reportId}
                hospitalName={item.hospitalName}
              />
            );
          })}
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default ReportInformation;
