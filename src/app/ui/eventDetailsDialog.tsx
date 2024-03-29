import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useQuery } from "@apollo/client";
import { GET_EVENT } from "../lib/queries";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import Image from "next/image";
import { fetchImage, postEvent, putEvent } from "../lib/data";
import { EventDetailsDialogProps } from "../lib/types";

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
    location: { name: "" },
    start: "",
    finish: "",
    photo: { id: "", url: "" },
  });

  useEffect(() => {
    if (data && data.event) {
      const { event } = data;
      const { title, description, location, start, finish, photo } = event;
      fetchImage(photo?.id)
        .then((photoUrl) => {
          setFormData({
            title: title || "",
            description: description || "",
            location: { name: location?.name || "" },
            start: start || "",
            finish: finish || "",
            photo: { id: photo?.id || "", url: photoUrl || "" },
          });
        })
        .catch((error) => {
          console.error("Error fetching image:", error);
        });
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateTimeChange = (
    fieldName: string,
    newValue: dayjs.Dayjs | null
  ) => {
    if (newValue) {
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: newValue.toISOString(),
      }));
    }
  };

  const handlePostEvent = () => {
    const { photo, ...postData } = formData;
    postEvent({ ...postData, photo: { id: photo.id } });
    handleClose();
  };

  const handlePutEvent = () => {
    const { photo, ...putData } = formData;
    putEvent({ ...putData, photo: { id: photo.id } }, eventId);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{eventId ? "Esemény részletei" : "Új esemény"}</DialogTitle>
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
        {(formData.start || formData.finish || !eventId) && (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flex flex-col mt-2 mb-1">
              <DateTimePicker
                name="start"
                label="Kezdete"
                defaultValue={formData.start ? dayjs(formData.start) : null}
                onChange={(newValue) => handleDateTimeChange("start", newValue)}
              />
              <div className="m-1" />
              <DateTimePicker
                name="finish"
                label="Vége"
                defaultValue={formData.finish ? dayjs(formData.finish) : null}
                onChange={(newValue) =>
                  handleDateTimeChange("finish", newValue)
                }
              />
            </div>
          </LocalizationProvider>
        )}
        <TextField
          margin="dense"
          id="location"
          name="location"
          label="Helyszín"
          type="text"
          fullWidth
          value={formData.location.name}
          onChange={handleChange}
        />
        {(formData.photo.url || !eventId) && (
          <Image
            src={formData.photo.url}
            width={70}
            height={70}
            alt="Picture of the author"
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Mégse</Button>
        <Button
          onClick={eventId ? handlePutEvent : handlePostEvent}
          color="primary"
        >
          Mentés
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EventDetailsDialog;
