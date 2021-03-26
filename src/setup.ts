import api from "./api";
import { Auth } from "aws-amplify";

require("dotenv").config();

const baseURL = process.env.REACT_APP__AXIOS_BASEURL;

export function configureAxios() {
  api.setBaseURL(baseURL || "");
  api.interceptors.request.use(async (config) => {
    const Session = await Auth.currentSession();
    const accessJwtToken = Session.getAccessToken().getJwtToken();
    if (accessJwtToken) {
      config.headers["Authorization"] = `Bearer ${accessJwtToken}`;
    }
    return config;
  });
}
