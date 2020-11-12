import { PlanetsAPI } from "../../network/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPlanets = createAsyncThunk(
  "planets/getPlanets",
  async (page) => {
    const response = await PlanetsAPI.getAllPlanets(page);
    return response.data;
  }
);

export const getPlanet = createAsyncThunk("planets/getPlanet", async (id) => {
  const response = await PlanetsAPI.getPlanet(id);
  return response.data;
});

const initialState = {
  planets: null,
  currentPlanet: null,
  totalCount: null,
  rowsPerPage: null,
};

const Planets = createSlice({
  name: "planets",
  initialState,
  reducers: {
    setCurrentPlanet(state, action) {
      state.currentPlanet = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPlanets.fulfilled, (state, action) => {
      state.planets = action.payload.results;
      state.totalCount === null && (state.totalCount = action.payload.count);
      state.rowsPerPage === null &&
        (state.rowsPerPage = action.payload.results.length);
    });
    builder.addCase(getPlanet.fulfilled, (state, action) => {
      state.currentPlanet = action.payload;
    });
  },
});

export const getPlanetsList = (state) => state.planets.planets;
export const getPlanetInfo = (state) => state.planets.currentPlanet;
export const getTotalCount = (state) => state.planets.totalCount;
export const getRowsPerPage = (state) => state.planets.rowsPerPage;

export const { setCurrentPlanet } = Planets.actions;
export default Planets.reducer;
