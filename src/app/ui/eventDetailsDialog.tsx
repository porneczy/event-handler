import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { formatDate } from "../lib/utils";

interface EventDetailsDialogProps {
  open: boolean;
  handleClose: () => void;
  eventId?: string;
}

const EventDetailsDialog: React.FC<EventDetailsDialogProps> = ({
  open,
  handleClose,
  eventId,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    details: "",
    location: "",
    start: "",
    finish: "",
  });

  useEffect(() => {
    if (eventId) {
      setFormData({
        title: eventId || "",
        details: eventId || "",
        location: eventId || "",
        start: eventId || "",
        finish: eventId || "",
      });
    }
  }, [eventId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{eventId ? "Esemény részletei" : "Új esemény"} </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          name="title"
          label="Cím"
          type="text"
          fullWidth
          value={formData.title}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="details"
          name="details"
          label="Részletek"
          multiline
          rows={4}
          fullWidth
          value={formData.details}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="start"
          name="start"
          label="Kezdete"
          type="text"
          fullWidth
          value={eventId}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          margin="dense"
          id="finish"
          name="finish"
          label="Vége"
          type="text"
          fullWidth
          value={eventId}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          margin="dense"
          id="location"
          name="location"
          label="Helyszín"
          type="text"
          fullWidth
          value={formData.location}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Mégse</Button>
        <Button onClick={handleClose} color="primary">
          Mentés
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EventDetailsDialog;
