import * as types from "./mutations-types";
import axios from "axios";

export const getProducts = ({ commit }) => {
  axios.get("http://localhost:8081/products").then((resp) => {
    commit(types.GET_PRODUCTS, resp.data);
  });
};

export const addProducts = ({ commit }, add) => {
  axios.post("http://localhost:8081/products", add).then((resp) => {
    commit(types.ADD_PRODUCTS, resp.data);
  });
};
