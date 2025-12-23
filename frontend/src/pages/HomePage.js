import { Link } from "react-router-dom";
import PageContent from "../components/PageContent";

function HomePage() {
    return (<PageContent title={'Welcome to our Events Planning'}>
        <Link to="/events" style={{textDecoration: 'none', color: 'white'}}>Explore Our events</Link>
        {/* <EventsPage /> */}
    </PageContent>
    )
}

export default HomePage;