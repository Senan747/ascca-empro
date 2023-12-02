import React from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";

function AlertDialog({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Xəbərdarlıq"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Texniki problemlər səbəbi ilə bəzi səhifələr açılmır
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} autoFocus>
          Aydındır
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AlertDialog;
