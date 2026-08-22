import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Programs } from "./pages/Programs";
import { Contacts } from "./pages/Contacts";
import { FAQ } from "./pages/FAQ";
import { ProgramDetail } from "./pages/ProgramDetail";
import { Privacy } from "./pages/Privacy";
import { Workshops } from "./pages/Workshops";

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
