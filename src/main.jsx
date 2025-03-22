import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Router/Router.jsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
<<<<<<< HEAD

=======
>>>>>>> f00b61d29c7a311281fb746c6088badb7b581913
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
<<<<<<< HEAD
      </QueryClientProvider> 
=======
      </QueryClientProvider>
>>>>>>> f00b61d29c7a311281fb746c6088badb7b581913
    </Provider>
  </StrictMode>
);
