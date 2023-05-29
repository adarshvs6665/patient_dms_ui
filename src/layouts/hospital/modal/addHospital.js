/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ArgonBox from "components/ArgonBox";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

import { Stack } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddHospitalModal(props) {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [wallet, setWallet] = useState("");

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
            Add New Hospital
          </Typography>
          <ArgonBox component="form" role="form" sx={{ mt: 2 }}>
            <ArgonBox mb={2}>
              <ArgonInput
                type="text"
                placeholder="Name"
                size="large"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </ArgonBox>
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
            <ArgonBox mb={2}>
              <ArgonInput
                type="text"
                placeholder="Address"
                size="large"
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonInput
                type="text"
                placeholder="State"
                size="large"
                onChange={(event) => {
                  setState(event.target.value);
                }}
              />
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonInput
                type="tel"
                placeholder="Phone"
                size="large"
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonInput
                type="select"
                placeholder="Wallet"
                size="large"
                onChange={(event) => {
                  setWallet(event.target.value);
                }}
              />
            </ArgonBox>
            <Stack mt={4} mb={1} direction={"row"} gap={2}>
              <ArgonButton color="secondary" size="medium" onClick={handleClose} fullWidth>
                Cancel
              </ArgonButton>
              <ArgonButton color="primary" size="medium" onClick={handleSubmit} fullWidth>
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
