import axios from "./index";

export const PlanetsAPI = {
  path: "planets/",
  getAllPlanets(page = 1) {
    return axios.get(`${this.path}?page=${page}`);
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
