import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ModalProvider } from "./components/ModalContext";
import { ContentProvider } from "./content/ContentContext";

export default function App() {
  return (
    <ContentProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </ContentProvider>
  );
}
