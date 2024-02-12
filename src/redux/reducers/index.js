import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs(state, action) {
      return { ...state, jobs: action.payload }; // Ritorna un nuovo oggetto che aggiorna solo l'array di jobs
    },
  },
});

export const { setJobs } = jobsSlice.actions;
export default jobsSlice.reducer;
