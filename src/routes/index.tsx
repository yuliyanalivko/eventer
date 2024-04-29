import { HomePage } from "pages/HomePage";
import { BTLPage } from "pages/BTLPage";
import { CorporateEventsPage } from "pages/CorporateEventsPage";
import EventPage from "pages/EventPage";

import PathConstants from "./path-constants";
import { RouteObject } from "react-router-dom";
import ConceptPage from "pages/ConceptPage";
import { AboutPage } from "pages/AboutPage";
import { ContactPage } from "pages/ContactPage";
import { PortfolioPage } from "pages/PortfolioPage";

const routes: RouteObject[] = [
  {
    path: PathConstants.HOME,
    element: <HomePage />,
  },
  {
    path: PathConstants.BTL,
    children: [
      {
        index: true,
        element: <BTLPage />,
      },
      {
        path: `${PathConstants.EVENT}`,
        element: <EventPage />,
      },
    ],
  },
  {
    path: PathConstants.CORPORATE_EVENTS,
    children: [
      {
        index: true,
        element: <CorporateEventsPage />,
      },
      {
        path: `${PathConstants.EVENT}`,
        element: <EventPage />,
      },
      {
        path: `${PathConstants.CONCEPT}`,
        element: <ConceptPage />,
      },
    ],
  },
  {
    path: PathConstants.ABOUT,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
    ],
  },
  {
    path: PathConstants.CONTACTS,
    children: [
      {
        index: true,
        element: <ContactPage />,
      },
    ],
  },
  {
    path: PathConstants.PORTFOLIO,
    children: [
      {
        index: true,
        element: <PortfolioPage />,
      },
    ],
  },
];

export default routes;
