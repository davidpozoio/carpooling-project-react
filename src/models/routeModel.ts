import { RouteStopResponse } from "./stopModel";

export interface RouteGetResponse {
  id: number;
  name: string;
  startDate: number;
  description: string;
  routeStop: RouteStopResponse[];
}

export interface RoutePostRequest {
  name: string;
  description: string;
  startDate: string;
}

export interface RoutePostResponse {
  id: number;
  name: string;
  startDate: number;
  description: string;
}
