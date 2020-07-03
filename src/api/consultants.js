import client from "./client";

const endpoint = "/consultants";

const getConsultants = () => client.get(endpoint);

export default {
  getConsultants,
};
