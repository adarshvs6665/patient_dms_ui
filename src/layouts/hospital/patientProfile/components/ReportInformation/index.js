// @mui material components
import Card from "@mui/material/Card";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Report page components
import Report from "layouts/hospital/patientProfile/components/Report";

function ReportInformation() {
  return (
    <Card id="delete-account">
      <ArgonBox pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Report Information
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pt={1} pb={2} px={2}>
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Report
            name="oliver liam"
            company="viking burrito"
            email="oliver@burrito.com"
            vat="FRB1235476"
          />
          <Report
            name="lucas harper"
            company="stone tech zone"
            email="lucas@stone-tech.com"
            vat="FRB1235476"
          />
          <Report
            name="ethan james"
            company="fiber notion"
            email="ethan@fiber.com"
            vat="FRB1235476"
            noGutter
          />
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default ReportInformation;
