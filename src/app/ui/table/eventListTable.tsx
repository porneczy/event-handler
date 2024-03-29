"use client";

import * as React from "react";
import { EventListTableProps } from "../../lib/types";
import EventListTableRow from "./eventListTableRow";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import EventDetailsDialog from "../eventDetailsDialog";

const EventListTable: React.FC<EventListTableProps> = ({ events }) => {
  const [openDetailsDialog, setOpenDetailsDialog] = React.useState(false);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="event list table">
        <TableHead>
          <TableRow>
            <TableCell>Cím</TableCell>
            <TableCell align="center">Kezdete</TableCell>
            <TableCell align="center">Vége</TableCell>
            <TableCell align="center">
              <Button
                startIcon={<AddIcon />}
                variant="contained"
                size="small"
                onClick={() => setOpenDetailsDialog(true)}
              >
                Új esemény
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event) => (
            <EventListTableRow key={event.id} event={event} />
          ))}
        </TableBody>
      </Table>
      <EventDetailsDialog
        open={openDetailsDialog}
        handleClose={() => setOpenDetailsDialog(false)}
      />
    </TableContainer>
  );
};

export default EventListTable;
