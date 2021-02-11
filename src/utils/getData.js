import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

function getProducts() {
  return apiClient.get("/products");
}
function getProduct(id) {
  return apiClient.get(`/products/${id}`);
}

function postReview(id, review) {
  return apiClient.post(`/products/${id}`, { reviews: [review] });
}

export { getProduct, getProducts, postReview };
