import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Programs } from "./pages/Programs";
import { Contacts } from "./pages/Contacts";
import { FAQ } from "./pages/FAQ";
import { ProgramDetail } from "./pages/ProgramDetail";
import { Privacy } from "./pages/Privacy";
import { Workshops } from "./pages/Workshops";
import { Events } from "./pages/Events";
import { Promotions } from "./pages/Promotions";
import { Shop } from "./pages/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/programs",
    Component: Programs,
  },
  {
    path: "/programs/:slug",
    Component: ProgramDetail,
  },
  {
    path: "/workshops",
    Component: Workshops,
  },
  {
    path: "/events",
    Component: Events,
  },
  {
    path: "/promotions",
    Component: Promotions,
  },
  {
    path: "/shop",
    Component: Shop,
  },
  {
    path: "/contacts",
    Component: Contacts,
  },
  {
    path: "/faq",
    Component: FAQ,
  },
  {
    path: "/privacy",
    Component: Privacy,
  },
]);
