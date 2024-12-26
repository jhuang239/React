import { Outlet } from "react-router-dom";
import EventNavigation from "../components/EventsNavigation";

export default function EventRoot() {
  return (
    <>
      <EventNavigation />
      <Outlet />
    </>
  );
}
