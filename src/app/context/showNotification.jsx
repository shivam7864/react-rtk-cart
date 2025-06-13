import { createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const showNotification = (message, type = "default") => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "info":
        toast.info(message);
        break;
      case "warning":
        toast.warning(message);
        break;
      default:
        toast(message);
        break;
    }
  };
  return (
    <NotificationContext.Provider value={showNotification}>
      {children}
      <ToastContainer position="top-right" autoClose={3500} />
    </NotificationContext.Provider>
  );
};