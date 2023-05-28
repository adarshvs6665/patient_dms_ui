// @mui material components
import Link from "@mui/material/Link";

// Argon Dashboard 2 MUI components
import ArgonButton from "components/ArgonButton";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI context
import { useArgonController } from "context";

// Images
import icon from "assets/images/illustrations/icon-documentation.svg";

function SidenavFooter() {
  const [controller] = useArgonController();
  const { miniSidenav, darkSidenav } = controller;

  return (
    <ArgonBox opacity={miniSidenav ? 0 : 1} sx={{ transition: "opacity 200ms linear" }}>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonButton
          component={Link}
          href="#"
          rel="noreferrer"
          color="dark"
          size="small"
          fullWidth
          sx={{ mb: 1 }}
        >
          Log out
        </ArgonButton>
        {/* <ArgonButton
          component={Link}
          href="https://www.creative-tim.com/product/argon-dashboard-material-ui"
          target="_blank"
          rel="noreferrer"
          color="info"
          size="small"
          fullWidth
          mb={2}
        >
          Log out
        </ArgonButton> */}
      </ArgonBox>
    </ArgonBox>
  );
}

export default SidenavFooter;
