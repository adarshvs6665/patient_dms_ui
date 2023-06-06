/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import ArgonBox from "components/ArgonBox";
import ArgonButton from "components/ArgonButton";

import { Stack } from "@mui/material";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useArgonController } from "context";
import { fetchUnAuthorisedHospitals } from "services/hospital/fetchUnauthorisedHospitals";
import { fetchUnAuthorisedInsurances } from "services/hospital/fetchUnauthorisedInsurance";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { authorizeHospital } from "services/hospital/authoriseHospital";
import { authorizeInsuranceCompany } from "services/hospital/authoriseInsurance";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function AssignHospitalInsuranceModal({ open, setOpen, type }) {
  const [controller, dispatch] = useArgonController();
  const { auth } = controller;
  const { id } = useParams();

  const [toBeAuthorizedId, setToBeAuthorizedId] = useState("");
  const [insuranceData, setInsuranceData] = useState([]);
  const [hospitalData, setHospitalData] = useState([]);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetchUnAuthorisedInsurances(id, auth.id).then((response) => {
      setInsuranceData(response.data.unAuthorizedInsuranceCompanies);
    });

    fetchUnAuthorisedHospitals(id, auth.id).then((response) => {
      setHospitalData(response.data.unauthorizedHospitals);
    });
  }, []);

  useEffect(() => {
    setToBeAuthorizedId("");
  }, [type]);

  const handleSubmit = async () => {
    if (type === "hospital") {
      const data = {
        hospitalId: auth.id,
        patientId: id,
        hospitalToBeAuthorizedId: toBeAuthorizedId,
      };

      const response = await authorizeHospital(data);
      console.log(response);
      if (response.status === "success") {
        toast(response.message);
        setToBeAuthorizedId("");
        setOpen(false);
      } else {
        toast(response.message);
      }
    }
    if (type === "insurance") {
      const data = {
        hospitalId: auth.id,
        patientId: id,
        insuranceCompanyToBeAuthorizedId: toBeAuthorizedId,
      };
      const response = await authorizeInsuranceCompany(data);
      console.log(response);
      if (response.status === "success") {
        toast(response.message);
        setToBeAuthorizedId("");
        setOpen(false);
      } else {
        toast(response.message);
      }
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {type === "hospital" ? "Assign New Hospital" : "Assign New Insurance"}
          </Typography>
          <ArgonBox component="form" role="form" sx={{ mt: 2 }}>
            <ArgonBox sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select
                  sx={{
                    padding: 2,
                    paddingLeft: 0,
                    "& .MuiSelect-icon": {
                      right: 12,
                      pointerEvents: "none", // Disable pointer events on the icon
                    },
                    "& .MuiSelect-root:focus .MuiSelect-icon": {
                      color: "primary.main", // Change the icon color when the component is focused
                    },
                    "& .MuiSelect-root.Mui-disabled .MuiSelect-icon": {
                      color: "rgba(0, 0, 0, 0.26)", // Change the icon color when the component is disabled
                    },
                  }}
                  displayEmpty // Display the selected value when no option is selected
                  IconComponent={ArrowDropDownIcon}
                  value={toBeAuthorizedId}
                  onChange={(event) => {
                    console.log(event.target.value);
                    setToBeAuthorizedId(event.target.value);
                  }}
                >
                  <MenuItem value={""}>
                    {type === "hospital" ? "Select Hospital" : "Select Insurance"}
                  </MenuItem>

                  {type === "hospital"
                    ? hospitalData.map((item, key) => {
                        return (
                          <MenuItem key={key} value={item.hospitalId}>
                            {item.name}
                          </MenuItem>
                        );
                      })
                    : insuranceData.map((item, key) => {
                        return (
                          <MenuItem key={key} value={item.insuranceCompanyId}>
                            {item.name}
                          </MenuItem>
                        );
                      })}
                </Select>
              </FormControl>
            </ArgonBox>

            <ArgonBox mb={2}></ArgonBox>
            <Stack mt={4} mb={1} direction={"row"} gap={2}>
              <ArgonButton color="secondary" size="medium" onClick={handleClose} fullWidth>
                Cancel
              </ArgonButton>
              <ArgonButton color="dark" size="medium" onClick={handleSubmit} fullWidth>
                {type === "hospital" ? "Create Hospital" : "Create Insurance"}
              </ArgonButton>
            </Stack>
            <ArgonBox mt={3} textAlign="center"></ArgonBox>
          </ArgonBox>
        </Box>
      </Modal>
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
    </div>
  );
}
