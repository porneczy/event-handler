"use client";

import * as React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EventDetailsDialog from "../eventDetailsDialog";
import DeleteEventConfirmDialog from "../deleteEventConfirmDialog";
import { EventRowProps } from "../../lib/types";
import { formatDate } from "../../lib/utils";

const EventRow: React.FC<EventRowProps> = ({ event }) => {
  const [openDetailsDialog, setOpenDetailsDialog] = React.useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          {event.title}
        </TableCell>
        <TableCell align="center">{formatDate(event.start)}</TableCell>
        <TableCell align="center">{formatDate(event.finish)}</TableCell>
        <TableCell align="center">
          <div className="flex justify-center justify-around w-full">
            <Button
              onClick={() => setOpenDetailsDialog(true)}
              startIcon={<EditIcon />}
              variant="contained"
              size="small"
            >
              Részletek
            </Button>
            <Button
              onClick={() => setOpenDeleteDialog(true)}
              startIcon={<DeleteIcon />}
              variant="outlined"
              color="error"
              size="small"
            >
              Törlés
            </Button>
          </div>
        </TableCell>
      </TableRow>
      {openDetailsDialog && (
        <EventDetailsDialog
          open={openDetailsDialog}
          handleClose={() => setOpenDetailsDialog(false)}
          eventId={event.id}
        />
      )}
      {openDeleteDialog && (
        <DeleteEventConfirmDialog
          open={openDeleteDialog}
          handleClose={() => setOpenDeleteDialog(false)}
          event={event}
        />
      )}
    </React.Fragment>
  );
};

export default EventRow;
