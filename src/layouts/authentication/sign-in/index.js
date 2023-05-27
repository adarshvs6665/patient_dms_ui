/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";
import PropTypes from "prop-types";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";
import { ToastContainer, toast } from "react-toastify";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";
import { adminLoginService ,} from "services/loginService";
import { hospitalLoginService } from "services/loginService";
import { patientLoginService } from "services/loginService";
import { insuranceLoginService } from "services/loginService";

Illustration.propTypes = {
  role: PropTypes.string,
  title: PropTypes.string,
};

//image

const insuranceBG =
  "https://images.pexels.com/photos/16282318/pexels-photo-16282318/free-photo-of-a-person-filling-in-documents.jpeg?auto=compress&cs=tinysrgb&w=1600";
const hospitalBG =
  "https://images.pexels.com/photos/6320167/pexels-photo-6320167.jpeg?auto=compress&cs=tinysrgb&w=1600";
const patientBG =
  "https://images.pexels.com/photos/695953/pexels-photo-695953.jpeg?auto=compress&cs=tinysrgb&w=1600";
const adminBG =
  "https://images.pexels.com/photos/3143813/pexels-photo-3143813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

function Illustration({ role, title }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (email === "" || password === "") {
      toast("Email or Password cannot be empty");
    } else {
      switch (role) {
        case "Admin":
          try {
            const response = await adminLoginService({email,password});
            console.log("Res",response);
          } catch (error) {
            toast(error.message)
          }
          break;
        case "Patient":
          try {
            const response = await patientLoginService({email,password});
            console.log("Res",response);
          } catch (error) {
            toast(error.message)
          }
          break;
        case "Hospital":
          try {
            const response = await hospitalLoginService({email,password});
            console.log("Res",response);
          } catch (error) {
            toast(error.message)
          }
          break;
        case "Insurance":
          try {
            const response = await insuranceLoginService({email,password});
            console.log("Res",response);
          } catch (error) {
            toast(error.message)
          }
          break;
        default:
          toast("user login faild");
          break;
      }
    }
  };

  const bgImage =
    role === "Admin"
      ? adminBG
      : role === "Patient"
      ? patientBG
      : role === "Hospital"
      ? hospitalBG
      : insuranceBG;

  return (
    <IllustrationLayout
      title={`${role} Sign In`}
      description="Enter your email and password to sign in"
      illustration={{
        image: bgImage,
        title: title,
      }}
    >
      <ArgonBox component="form" role="form">
        <ArgonBox mb={2}>
          <ArgonInput
            type="email"
            placeholder="Email"
            size="large"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonInput
            type="password"
            placeholder="Password"
            size="large"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </ArgonBox>
        <ArgonBox mt={4} mb={1}>
          <ArgonButton
            color="info"
            size="large"
            fullWidth
            onClick={() => {
              handleSubmit();
            }}
          >
            Sign In
          </ArgonButton>
        </ArgonBox>
        <ArgonBox mt={3} textAlign="center"></ArgonBox>
      </ArgonBox>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </IllustrationLayout>
  );
}

export default Illustration;
