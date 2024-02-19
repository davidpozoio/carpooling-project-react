const ROUTES = {
  HOME: {
    ME: "/home",
  },
  AUTH: {
    ME: "/auth",
    get LOGIN() {
      return `${this.ME}/login`;
    },
    get SIGNUP() {
      return `${this.ME}/signup`;
    },
  },
  ROUTES: {
    ME: "/routes",
    get MY_ROUTES() {
      return `${this.ME}/me`;
    },
  },
};

export default ROUTES;
