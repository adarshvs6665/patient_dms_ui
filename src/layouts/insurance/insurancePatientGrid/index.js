// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
// Argon Dashboard 2 MUI examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Table from "examples/Tables/Table";

// Data
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import hospitalTableData from "./data/patientTableData";
import { Stack } from "@mui/material";
import ArgonButton from "components/ArgonButton";
import { useState } from "react";
import AddPatientModal from "./modal/addPatient";

function InsurancePatientGrid() {
  const { columns, rows } = hospitalTableData;
  const [open, setOpen] = useState(false);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Card>
            <Stack direction="row" justifyContent="space-between">
              <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                <ArgonTypography variant="h6">Patient List</ArgonTypography>
              </ArgonBox>
            </Stack>
            <ArgonBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
                height: "75vh", overflowY: "scroll"
              }}
            >
              <Table columns={columns} rows={rows} />
            </ArgonBox>
          </Card>
        </ArgonBox>
      </ArgonBox>
      <AddPatientModal open={open} setOpen={setOpen} />
    </DashboardLayout>
  );
}

export default InsurancePatientGrid;
