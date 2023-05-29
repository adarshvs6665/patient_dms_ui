// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
// Argon Dashboard 2 MUI examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Stack } from "@mui/material";
import ArgonButton from "components/ArgonButton";
import { useState } from "react";
import insuranceTableData from "./data/insuranceTableData";
import AddInsuranceModal from "./modal/addInsurance";

function Insurance() {
  const { columns, rows } = insuranceTableData;
  const [open, setOpen] = useState(false);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Card style={{ height: "80vh", overflowY: "scroll" }}>
            <Stack direction="row" justifyContent="space-between">
              <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                <ArgonTypography variant="h6">Insurance Company List</ArgonTypography>
              </ArgonBox>
              <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                <ArgonButton
                  component="a"
                  target="_blank"
                  rel="noreferrer"
                  color="dark"
                  fullWidth
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                  &nbsp;{"Add Insurance"}&nbsp;
                </ArgonButton>
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
              }}
            >
              <Table columns={columns} rows={rows} />
            </ArgonBox>
          </Card>
        </ArgonBox>
      </ArgonBox>
      <AddInsuranceModal open={open} setOpen={setOpen} />
      <Footer />
    </DashboardLayout>
  );
}

export default Insurance;
