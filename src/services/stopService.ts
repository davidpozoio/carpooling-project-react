import { environment } from "../environment/config";
import axios from "../interceptors/globalInterceptor";
import { StopAddRouteRequest, StopGetResponse } from "../models/stopModel";

export function getAllStops() {
  return axios.get<StopGetResponse[]>(`${environment.BACKEND_HOST}/stops`);
}

export function addStopsInRoute(routeStop: StopAddRouteRequest) {
  return axios.post(
    `${environment.BACKEND_HOST}/route/addRouteStops`,
    routeStop
  );
}
