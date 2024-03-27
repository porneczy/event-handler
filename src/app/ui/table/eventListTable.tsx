import * as React from "react";
import { Event } from "../../lib/types";
import EventListTableRow from "./eventListTableRow";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

interface EventListTableProps {
  events: Event[];
}

const EventListTable: React.FC<EventListTableProps> = ({ events }) => {
  return (
    <TableContainer sx={{ maxWidth: 1000 }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="event list table">
        <TableHead>
          <TableRow>
            <TableCell>Cím</TableCell>
            <TableCell align="center">Kezdete</TableCell>
            <TableCell align="center">Vége</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event) => (
            <EventListTableRow key={event.id} event={event} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EventListTable;
