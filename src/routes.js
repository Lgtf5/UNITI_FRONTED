import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomeView />,
    children: [
      {
        path: "/LoginView.jsx",
        element: <LoginButton />,
      },
      {
        path: "/RegisterView.jsx",
        element: <RegisterView />,
      }
    ]
  }
]);

export default router;