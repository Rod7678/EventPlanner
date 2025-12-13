import { useParams } from "react-router-dom";
import EventItem from "../components/EventItem";
import EVENTS from "../events";


function EventDetailPage() {
    const params = useParams();
    const events = [...EVENTS];
    const selectedEventIndex = events.findIndex((m)=> m.id === params.eventId);
    
    return (
        <>
        <h1>Its Event detail Page</h1>
        <EventItem event={events[selectedEventIndex]}/>
        </>
    )
}

export default EventDetailPage;