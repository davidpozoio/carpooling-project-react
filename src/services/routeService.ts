import { environment } from "../environment/config";
import axios from "../interceptors/globalInterceptor";
import {
  RouteGetResponse,
  RoutePostRequest,
  RoutePostResponse,
} from "../models/routeModel";
import { addStopsInRoute } from "./stopService";

export function getAllRoutes() {
  return axios.get<RouteGetResponse[]>(`${environment.BACKEND_HOST}/route`);
}

export function getAllMyRoutes() {
  return axios.get<{ data: RouteGetResponse[] }>(
    `${environment.BACKEND_HOST}/route/userRoutes`
  );
}

export function createRoute(route: RoutePostRequest) {
  return axios.post<RoutePostResponse>(
    `${environment.BACKEND_HOST}/route`,
    route
  );
}

export function createRouteAndAddStops(
  route: RoutePostRequest & { stops: number[] }
) {
  return createRoute(route).then((res) => {
    return addStopsInRoute({
      routeId: res.data.id,
      routeStops: route.stops.map((stop) => ({
        stopId: stop,
        arriveHour: "2023-10-10",
        position: 1,
      })),
    });
  });
}

export function deleteRoute(id: number) {
  return axios.delete<string>(`${environment.BACKEND_HOST}/route/${id}`);
}
