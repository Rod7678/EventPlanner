import { useLoaderData, useParams } from "react-router-dom";
import EventItem from "../components/EventItem";


function EventDetailPage() {
    const params = useParams();
    const data = useLoaderData();
    const events = data.events;
    const selectedEventIndex = events.findIndex((m)=> m.id === params.eventId);
    
    return (
        <>
        <h1>Its Event detail Page</h1>
        <EventItem event={events[selectedEventIndex]}/>
        </>
    )
}

export default EventDetailPage;