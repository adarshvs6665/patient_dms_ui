import { useState, useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Argon Dashboard 2 MUI example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Argon Dashboard 2 MUI themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Argon Dashboard 2 MUI routes
import routes from "routes";
import { hospitalRoutes, adminRoutes } from "routes";

// Argon Dashboard 2 MUI contexts
import { useArgonController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import brand from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";

// Icon Fonts
import "assets/css/nucleo-icons.css";
import "assets/css/nucleo-svg.css";
import { Handshake } from "@mui/icons-material";

export default function App() {
  const [controller, dispatch] = useArgonController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    darkSidenav,
    darkMode,
    auth,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const [tmpRoutes, setTmpRoutes] = useState([]);
  const [brandName, setBrandName] = useState("PMS DAPP");

  useEffect(() => {
    if (auth.role === "admin") {
      setTmpRoutes(adminRoutes);
      setBrandName("Admin Dash");
    } else if (auth.role === "hospital") {
      setTmpRoutes(hospitalRoutes);
      setBrandName("Hospital Dash");
    }
  }, [auth]);

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <ArgonBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </ArgonBox>
  );

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={darkSidenav || darkMode ? brand : brandDark}
              brandName={brandName}
              routes={tmpRoutes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {configsButton}
          </>
        )}

        <Routes>
          <Route
            exact
            path="/authentication/admin/sign-in"
            element={<SignIn role="Admin" title="Admin Sign In" />}
            key="admin-sign-in"
          />
          <Route
            exact
            path="/authentication/patient/sign-in"
            element={<SignIn role="Patient" title="Patient Sign In" />}
            key="patient-sign-in"
          />
          <Route
            exact
            path="/authentication/insurance/sign-in"
            element={<SignIn role="Insurance" title="Insurance Sign In" />}
            key="insurance-sign-in"
          />
          <Route
            exact
            path="/authentication/hospital/sign-in"
            element={<SignIn role="Hospital" title="Hosptail Sign In" />}
            key="hospital-sign-in"
          />
          <Route exact path="/sign-in" element={<SignIn />} key="admin-sign-in" />
          <Route exact path="/sign-up" element={<SignUp />} key="admin-sign-up" />

          {/* if admin is logged in only admin routes are enabled */}
          {auth.role === "hospital" && getRoutes(hospitalRoutes)}

          {/* if hospital is logged in only hospital routes are enabled */}
          {auth.role === "admin" && getRoutes(adminRoutes)}

          {/* if admin is logged in and any random route is accessed the page is redirected to admin dashboard */}
          {auth.role === "admin" && <Route path="*" element={<Navigate to="/admin/hospital" />} />}

          {/* if admin is logged in and any random route is accessed the page is redirected to admin dashboard */}
          {auth.role === "hospital" && (
            <Route path="*" element={<Navigate to="/hospital/patients" />} />
          )}
        </Routes>
      </>
    </ThemeProvider>
  );
}
