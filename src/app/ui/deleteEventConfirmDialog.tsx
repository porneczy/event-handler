import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { DeleteEventConfirmDialogProps } from "../lib/types";
import { deleteEvent } from "../lib/data";

const DeleteEventConfirmDialog: React.FC<DeleteEventConfirmDialogProps> = ({
  open,
  handleClose,
  event,
}) => {
  const handleDeleteEvent = () => {
    deleteEvent(event.id);
    handleClose();
  };

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
        <Button onClick={handleClose}>Mégse</Button>
        <Button onClick={handleDeleteEvent} color="error">
          Törlés
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteEventConfirmDialog;
