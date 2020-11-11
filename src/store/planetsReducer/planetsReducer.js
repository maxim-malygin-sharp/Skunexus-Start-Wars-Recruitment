import { PlanetsAPI } from "../../network/api";
import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

export const getPlanets = createAsyncThunk("planets/getPlanets", async () => {
  const response = await PlanetsAPI.getAllPlanets();
  return response.data;
});

export const getPlanet = createAsyncThunk("planets/getPlanet", async (id) => {
  const response = await PlanetsAPI.getPlanet(id);
  return response.data;
});

const initialState = {
  planets: null,
  currentPlanet: null,
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
    });
    builder.addCase(getPlanet.fulfilled, (state, action) => {
      state.currentPlanet = action.payload;
    });
  },
});

export const getPlanetsList = (state) => state.planets.planets;
export const getPlanetInfo = createSelector(
  (state) => state.planets.currentPlanet,
  (currentPlanet) => currentPlanet
);

export const { setCurrentPlanet } = Planets.actions;
export default Planets.reducer;
