import axios from "./index";

export const PlanetsAPI = {
  path: "planets/",
  getAllPlanets() {
    return axios.get(this.path);
  },
  getPlanet(id) {
    return axios.get(`${this.path}${id}`);
  },
};

export const API = {
  getEntity(url) {
    return axios.get(url);
  },
};
