import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import ticketReducer from "../features/tickets/ticketSlice";
import noteReducer from "../features/notes/noteSlice";

//for any reducer created bring here:
export const store = configureStore({
  reducer: {
    //why called ticketReducer??
    auth: authReducer,
    tickets: ticketReducer,
    notes: noteReducer,
  },
});
