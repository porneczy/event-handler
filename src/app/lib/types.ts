export interface EventDetailsDialogProps {
  open: boolean;
  handleClose: () => void;
  eventId?: string;
}

export interface DeleteEventConfirmDialogProps {
  open: boolean;
  handleClose: () => void;
  event: Event;
}

export interface Event {
  id: string;
  title: string;
  start: string;
  finish: string;
}

export interface EventListTableProps {
  events: Event[];
}

export interface EventRowProps {
  event: Event;
}