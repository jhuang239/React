import EventsList from "../components/EventsList";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();
  // * The `Await` component is used to render the `EventsList` component after the `events` promise is resolved.
  return (
    // * The `Suspense` component is used to show a loading message while the `events` promise is being resolved.
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>{(events) => <EventsList events={events.events} />}</Await>;
    </Suspense>
  );
}
export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // handle error
    throw new Response(JSON.stringify({ message: "Failed to load events" }), { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
}

export async function loader() {
  return {
    events: loadEvents(),
  };
}
