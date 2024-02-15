import { environment } from "../environment/config";
import axios from "../interceptors/globalInterceptor";
import { LoginDto, SignupDto } from "../models/authDto";
import { UserPostResponse } from "../models/userModel";

export function login(user: LoginDto) {
  return axios.post<UserPostResponse>(
    `${environment.BACKEND_HOST}/auth/login`,
    user
  );
}

export function signup(user: SignupDto) {
  return axios.post<UserPostResponse>(
    `${environment.BACKEND_HOST}/users`,
    user
  );
}

export function auth() {
  return axios.get(`${environment.BACKEND_HOST}/auth/me`);
}
