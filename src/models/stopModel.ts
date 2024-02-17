export interface StopGetResponse {
  id: 1;
  name: string;
  description: string;
}

export interface StopAddRouteRequest {
  routeId: number;
  routeStops: RouteStop[];
}

export interface RouteStop {
  position: number;
  arriveHour: string;
  stopId: number;
}

export interface RouteStopResponse extends RouteStop {}
