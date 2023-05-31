// @mui material components
import Link from "@mui/material/Link";

// Argon Dashboard 2 MUI components
import ArgonButton from "components/ArgonButton";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI context
import { useArgonController } from "context";
import { useNavigate } from "react-router-dom";

// Images
import icon from "assets/images/illustrations/icon-documentation.svg";
import { useEffect, useState } from "react";
import { setRole } from "context";

function SidenavFooter() {
  const [controller, dispatch] = useArgonController();
  const { miniSidenav, darkSidenav, role } = controller;
  const navigate = useNavigate();

  const handleLogout = ()=>{
    if (role==='admin'){
      setRole(dispatch, "")
      localStorage.setItem("auth", JSON.stringify({ role: "", id: "" }));
      navigate("authentication/admin/sign-in");
    }
    if (role==='hospital'){
      setRole(dispatch, "")
      localStorage.setItem("auth", JSON.stringify({ role: "", id: "" }));
      navigate('authentication/hospital/sign-in')
    }
  }


  return (
    <ArgonBox opacity={miniSidenav ? 0 : 1} sx={{ transition: "opacity 200ms linear" }}>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonButton
          onClick={()=>{handleLogout()}}
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
