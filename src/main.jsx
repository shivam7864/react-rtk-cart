import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store,persistor } from "./app/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { NotificationProvider } from "./app/context/showNotification.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
         <NotificationProvider>
          <App />
        </NotificationProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
