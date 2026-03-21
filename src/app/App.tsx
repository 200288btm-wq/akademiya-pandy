import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ModalProvider } from "./components/ModalContext";

export default function App() {
  return (
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  );
}
