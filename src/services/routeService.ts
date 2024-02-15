import { environment } from "../environment/config";
import axios from "../interceptors/globalInterceptor";
import {
  RouteGetResponse,
  RoutePostRequest,
  RoutePostResponse,
} from "../models/routeModel";

export function getAllRoutes() {
  return axios.get<RouteGetResponse[]>(`${environment.BACKEND_HOST}/route`);
}

export function createRoute(route: RoutePostRequest) {
  return axios.post<RoutePostResponse>(
    `${environment.BACKEND_HOST}/route`,
    route
  );
}
