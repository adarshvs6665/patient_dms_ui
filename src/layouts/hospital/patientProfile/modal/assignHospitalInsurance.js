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

export default function AssignHospitalInsuranceModal(props) {

  const [wallet, setWallet] = useState("0xe99E8bD7eed9Aa2CDFc9cad5681E183b5282cDed");

  const handleClose = () => props.setOpen(false);

  const handleSubmit = () => {
    alert("Clicked");
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Assign New Hospital
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
                  value={wallet}
                  onChange={(event) => {
                    console.log(event.target.value);
                    setWallet(event.target.value);
                  }}
                >
                  <MenuItem value={"0xe99E8bD7eed9Aa2CDFc9cad5681E183b5282cDed"}>
                    0xe99E8bD7eed9Aa2CDFc9cad5681E183b5282cDed
                  </MenuItem>
                  <MenuItem value={"0xe99E8bD7DFc9c183b52adeed9Aa2C5681E82cDed"}>
                    0xe99E8bD7DFc9c183b52adeed9Aa2C5681E82cDed
                  </MenuItem>
                  <MenuItem value={"0xe99E8bD7ee9c183b52ad5681E82cDedd9Aa2CDFc"}>
                    0xe99E8bD7ee9c183b52ad5681E82cDedd9Aa2CDFc
                  </MenuItem>
                </Select>
              </FormControl>
            </ArgonBox>

            <ArgonBox mb={2}>
            </ArgonBox>
            <Stack mt={4} mb={1} direction={"row"} gap={2}>
              <ArgonButton color="secondary" size="medium" onClick={handleClose} fullWidth>
                Cancel
              </ArgonButton>
              <ArgonButton color="dark" size="medium" onClick={handleSubmit} fullWidth>
                Create Hospital
              </ArgonButton>
            </Stack>
            <ArgonBox mt={3} textAlign="center"></ArgonBox>
          </ArgonBox>
        </Box>
      </Modal>
    </div>
  );
}
