import * as React from "react";
import { Event } from "../../lib/types";
import { formatDate } from "../../lib/utils";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";

interface EventRowProps {
  event: Event;
}

const EventRow: React.FC<EventRowProps> = ({ event }) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {event.title}
      </TableCell>
      <TableCell align="center">{formatDate(event.start)}</TableCell>
      <TableCell align="center">{formatDate(event.finish)}</TableCell>
      <TableCell align="center">
        <Button variant="contained" size="small" className="p-2">
          Részletek
        </Button>
        <Button variant="outlined" color="error" size="small">
          Törlés
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default EventRow;
