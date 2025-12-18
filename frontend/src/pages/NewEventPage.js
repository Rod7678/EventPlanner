import EventForm from "../components/EventForm";

function NewEventPage() {
    return (
        <>
        <h1 style={{textAlign: 'center'}}>Lets Add New Event</h1>
        <EventForm method="post"/>
        </>
    )
}

export default NewEventPage;


