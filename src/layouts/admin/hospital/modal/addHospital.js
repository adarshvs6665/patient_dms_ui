/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import ArgonBox from "components/ArgonBox";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";
import { Stack } from "@mui/material";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { fetchUnusedAddresses } from "services/admin/fetchWalletAddres";
import { useArgonController } from "context";
import { adminAddHospital } from "services/admin/addHospital";
import { ToastContainer, toast } from "react-toastify";

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

export default function AddHospitalModal(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [wallet, setWallet] = useState("");
  const [unUsedAddresses, setUnUsedAddress] = useState(null);
  const [controller] = useArgonController();
  const { auth } = controller;

  React.useEffect(() => {
    fetchUnusedAddresses().then((addresses) => {
      setUnUsedAddress(addresses.data.addresses);
    });
  }, [props.open]);

  const handleClose = () => props.setOpen(false);

  const handleSubmit = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
      address: address,
      state: state,
      phone: phone,
      wallet: wallet,
      adminId: auth.id,
    };
    const response = await adminAddHospital(data);
    console.log(response);
    if (response.status === "success") {
      toast(response.message);
      setWallet("");
      props.setOpen(false);
    } else {
      toast(response.message);
    }
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
            <ArgonBox sx={{ minWidth: 120 }}>
              <FormControl fullWidth size="small">
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
                  value={wallet && wallet}
                  onChange={(event) => {
                    console.log(event.target.value);
                    setWallet(event.target.value);
                  }}
                >
                  <MenuItem sx={{ width: "35vw" }} value={""}>
                    Select Address
                  </MenuItem>

                  {unUsedAddresses &&
                    unUsedAddresses.map((item, key) => {
                      return (
                        <MenuItem sx={{ width: "35vw" }} key={key} value={item}>
                          {item}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </ArgonBox>

            <ArgonBox mb={2}>
              {/* <ArgonInput
                type="select"
                placeholder="Wallet"
                size="large"
                onChange={(event) => {
                  setWallet(event.target.value);
                }}
              />
               */}
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
