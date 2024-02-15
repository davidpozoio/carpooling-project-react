export interface RouteGetResponse {
  id: number;
  name: string;
  startDate: number;
  description: string;
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
