import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEventPage() {
    const data = useRouteLoaderData('event-detail');
    return (
        <>
        <h1 style={{textAlign: 'center'}}>Lets Update event details</h1>
        <EventForm event={data.event} method="patch"/>
        </>
    )
}

export default EditEventPage;