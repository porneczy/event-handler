import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Event } from "../lib/types";

interface DeleteEventConfirmDialogProps {
  open: boolean;
  handleClose: () => void;
  event: Event;
}

const DeleteEventConfirmDialog: React.FC<DeleteEventConfirmDialogProps> = ({
  open,
  handleClose,
  event,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Biztosan törli a következő eseményt?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {event.title}
          <br />
          <span className="text-xs text-slate-500">ID: {event.id}</span>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="error">
          Törlés
        </Button>
        <Button onClick={handleClose}>Mégse</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteEventConfirmDialog;
