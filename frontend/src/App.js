import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RouterLayout from './pages/RouterLayout';
import HomePage from './pages/HomePage';
import EventsPage, {  loader as eventLoader} from './pages/EventsPage';
import EventDetailPage, {loader as eventDetailLoader, action as deleteEventAction} from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import EventRouterLayout from './pages/EventRoot';
import ErrorPage from './pages/Error';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletteraction }from './pages/NewsLetter';
import AuthenticationPage , { action as authenticationAction } from './pages/Authentication';
import { action as logoutAction } from './pages/Logout';
import { checkAuthLoader, tokenLoader } from './utils/auth';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RouterLayout />,
    id: 'root',
    errorElement: <ErrorPage />,
    loader: tokenLoader,
    children: [
      { index: true , element: < HomePage /> },
      { path: 'events' , element: < EventRouterLayout /> ,
            id: 'eventslist',
            loader: eventLoader,
        children: [
          { 
            index: true , 
            element: < EventsPage />,
            fallbackElement: <p>Loading events...</p>,
          },
          { 
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              { index: true , element: < EventDetailPage />, action: deleteEventAction},
              { path: 'edit' , element: < EditEventPage />, action: manipulateEventAction, loader: checkAuthLoader},
            ],
           },
          { path: 'new' , element: < NewEventPage />, action: manipulateEventAction, loader: checkAuthLoader},
        ]
      },
      { path: 'newsletter', element: <NewsletterPage/>, action: newsletteraction},
      { path: 'auth', element: <AuthenticationPage />, action: authenticationAction},
      { path: 'logout', element: null , action: logoutAction }
    ],

  }
])


function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
