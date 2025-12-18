import { Link } from "react-router-dom";
import EventsList from "../components/EventsList";
import PageContent from "../components/PageContent";
import EventsPage from "./EventsPage";

function HomePage() {
    return (<PageContent title={'Welcome to our Events Planning'}>
        <Link to="/events" style={{textDecoration: 'none', color: 'white'}}>Explore Our events</Link>
        {/* <EventsPage /> */}
    </PageContent>
    )
}

export default HomePage;