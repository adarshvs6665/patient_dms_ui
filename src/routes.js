// Argon Dashboard 2 MUI layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Profile from "layouts/profile";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import Hospital from "layouts/admin/hospital";
import Insurance from "layouts/admin/insurance";
import PatientGrid from "layouts/hospital/patientGrid";
import PatientProfile from "layouts/hospital/patientProfile";
import InsurancePatientGrid from "layouts/insurance/insurancePatientGrid";
import InsurancePatientProfile from "layouts/insurance/insurancePatientProfile";
import PatientProfilePatient from "layouts/patient/patientProfile";

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
    name: "Hospitals",
    key: "hospitals",
    route: "/admin/hospital",
    icon: (
      <ArgonBox component="i" color="error" fontSize="14px" className="ni ni-building" />
    ),
    component: <Hospital />,
  },
  {
    type: "route",
    name: "Insurances",
    key: "insurance-companies",
    route: "/admin/insurance-companies",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-credit-card" />
    ),
    component: <Insurance />,
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
    name: "Hospital Main",
    key: "hsp-main",
    route: "/hospital/patients",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <PatientGrid/>,
  },
  {
    type: "route",
    name: "Patient Profile Hospital",
    key: "hsp-pat-prp",
    route: "/hospital/patient-profile",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <PatientProfile/>,
  },
];

export const adminRoutes = [
  {
    type: "route",
    name: "Hospital",
    key: "hospitals",
    route: "admin/hospitals",
    icon: (
      <ArgonBox component="i" color="error" fontSize="14px" className="ni ni-building" />
    ),
    component: <Hospital />,
  },
  {
    type: "route",
    name: "Insurance Company",
    key: "insurance-companies",
    route: "admin/insurance-companies",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-credit-card" />
    ),
    component: <Insurance />,
  }
];
export const hospitalRoutes = [
  {
    type: "route",
    name: "Patients",
    key: "patients",
    route: "/hospital/patients",
    icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-02" />,
    component: <PatientGrid/>,
  },
  {
    type: "route",
    name: "Patient Profile Hospital",
    key: "patient-profile",
    route: "/hospital/patient-profile",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <PatientProfile/>,
  },
];

export const patientRoutes = [
  {
    type: "route",
    name: "Profile",
    key: "profile",
    route: "/patient/profile",
    icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-02" />,
    component: <PatientProfilePatient/>,
  }
];

export const insuranceRoutes = [
  {
    type: "route",
    name: "Patients",
    key: "patients",
    route: "/insurance/patients",
    icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-02" />,
    component: <InsurancePatientGrid/>,
  },
  {
    type: "route",
    name: "Patient Profile Hospital",
    key: "patient-profile",
    route: "/insurance/patient-profile",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <InsurancePatientProfile/>,
  },
];

export default routes;
