/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ArgonBox from "components/ArgonBox";
import ArgonButton from "components/ArgonButton";

import { Stack } from "@mui/material";
import ReportPdf from "examples/pdfGenerator";

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

export default function PdfModal(props) {
  const handleClose = () => props.setOpen(false);

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
            Enter patient details
          </Typography>
          <ArgonBox>
            <ReportPdf />
          </ArgonBox>
          <ArgonBox component="form" role="form" sx={{ mt: 2 }}>
            <Stack mt={4} mb={1} direction={"row"} gap={2}>
              <ArgonButton color="secondary" size="medium" onClick={handleClose} fullWidth>
                Cancel
              </ArgonButton>
              <ArgonButton color="dark" size="medium" onClick={handleClose} fullWidth>
                Create Patient
              </ArgonButton>
            </Stack>
            <ArgonBox mt={3} textAlign="center"></ArgonBox>
          </ArgonBox>
        </Box>
      </Modal>
    </div>
  );
}
