// Argon Dashboard 2 MUI layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in"
import SignUp from "layouts/authentication/sign-up";
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

const routes = [
  {
    type: "route",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
    component: <Dashboard />,
  },
  {
    type: "route",
    name: "Tables",
    key: "tables",
    route: "/tables",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-calendar-grid-58" />
    ),
    component: <Tables />,
  },
  {
    type: "route",
    name: "Billing",
    key: "billing",
    route: "/billing",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-credit-card" />,
    component: <Billing />,
  },
  {
    type: "route",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <Profile />,
  },
  {
    type: "route",
    name: "Admin Sign In",
    key: "admin-sign-in",
    route: "/authentication/admin/sign-in",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <SignIn role='Admin' title='Admin Sign In' />,
  },
  {
    type: "route",
    name: "Patient Sign In",
    key: "patient-sign-in",
    route: "/authentication/patient/sign-in",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <SignIn role='Patient' title='Patient Sign In' />,
  },
  {
    type: "route",
    name: "Insurance Sign In",
    key: "insurance-sign-in",
    route: "/authentication/insurance/sign-in",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <SignIn role='Insurance' title='Insurance Sign In' />,
  },
  {
    type: "route",
    name: "Hospital Sign In",
    key: "hospital-sign-in",
    route: "/authentication/hospital/sign-in",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <SignIn role='Hospital' title='Hosptail Sign In' />,
  },
];

export default routes;
