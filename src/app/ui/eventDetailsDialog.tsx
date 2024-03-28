import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { formatDate } from "../lib/utils";
import { useQuery } from "@apollo/client";
import { GET_EVENT } from "../lib/queries";

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
  const { data } = useQuery(GET_EVENT, {
    variables: { eventId },
    skip: !eventId,
  });

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    start: "",
    finish: "",
  });

  useEffect(() => {
    if (data && data.event) {
      const { event } = data;
      setFormData({
        title: event.title || "",
        description: event.description || "",
        location: event.location?.name || "",
        start: formatDate(event.start) || "",
        finish: formatDate(event.finish) || "",
      });
    }
  }, [data]);

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
          id="description"
          name="description"
          label="Részletek"
          multiline
          rows={4}
          fullWidth
          value={formData.description}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="start"
          name="start"
          label="Kezdete"
          type="text"
          fullWidth
          value={formatDate(formData.start)}
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
          value={formatDate(formData.start)}
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
