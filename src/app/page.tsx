import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EventListTable from "./ui/table/eventListTable";
import { events } from "@/app/lib/placeholder-data";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-screen-xl flex-col items-center justify-center p-24 m-auto">
      <div className="flex justify-end w-full p-6">
        <Button startIcon={<AddIcon />} variant="contained" size="small">
          Új esemény
        </Button>
      </div>
      <div className="w-full">
        <EventListTable events={events} />
      </div>
    </main>
  );
}
