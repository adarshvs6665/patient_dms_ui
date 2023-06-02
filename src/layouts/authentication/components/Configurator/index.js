// react-github-btn
import GitHubButton from "react-github-btn";

// @mui material components
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Custom styles for the Configurator
import ConfiguratorRoot from "layouts/authentication/components/Configurator/ConfiguratorRoot";

// Argon Dashboard 2 MUI context
import {
  useArgonController,
  setOpenConfigurator,
  setDarkSidenav,
  setMiniSidenav,
  setFixedNavbar,
  setSidenavColor,
  setDarkMode,
} from "context";

function Configurator() {
  const [controller, dispatch] = useArgonController();
  const { openConfigurator, darkSidenav, miniSidenav, fixedNavbar, sidenavColor, darkMode } =
    controller;
  const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handledarkSidenav = () => setDarkSidenav(dispatch, true);
  const handleWhiteSidenav = () => setDarkSidenav(dispatch, false);
  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);
  const handleDarkMode = () => {
    setDarkSidenav(dispatch, !darkMode);
    setDarkMode(dispatch, !darkMode);
  };

  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
      <ArgonBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={3}
        pb={0.8}
        px={3}
      >
        <ArgonBox>
          <ArgonTypography variant="h5">Switch Roles</ArgonTypography>
        </ArgonBox>

        <Icon
          sx={({ typography: { size, fontWeightBold }, palette: { dark, white } }) => ({
            fontSize: `${size.md} !important`,
            fontWeight: `${fontWeightBold} !important`,
            color: darkMode ? white.main : dark.main,
            stroke: darkMode ? white.main : dark.main,
            strokeWidth: "2px",
            cursor: "pointer",
            mt: 2,
          })}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </ArgonBox>

      <Divider />

      <ArgonBox pt={1.25} pb={3} px={3}>
        <ArgonBox mt={5} mb={2}>
          <ArgonBox mb={2}>
            <ArgonButton
              component={Link}
              href="/authentication/patient/sign-in"
              rel="noreferrer"
              color="info"
              fullWidth
            >
              Patient Sign In
            </ArgonButton>
          </ArgonBox>
          <ArgonBox mb={2}>
            <ArgonButton
              component={Link}
              href="/authentication/hospital/sign-in"
              rel="noreferrer"
              color="primary"
              fullWidth
            >
              Hospital Sign In
            </ArgonButton>
          </ArgonBox>
          <ArgonBox mb={2}>
          <ArgonButton
            component={Link}
            href="/authentication/insurance/sign-in"
            rel="noreferrer"
            color="warning"
            fullWidth
          >
            Insurance Sign In
            </ArgonButton>
          </ArgonBox>
          <ArgonButton
            component={Link}
            href="/authentication/admin/sign-in"
            rel="noreferrer"
            color="dark"
            fullWidth
          >
            Admin Sign in
            </ArgonButton>
        </ArgonBox>
      </ArgonBox>
    </ConfiguratorRoot>
  );
}

export default Configurator;
