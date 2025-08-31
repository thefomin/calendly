import "react-router-dom";

export const ROUTES = {
  HOME: "/",
  ORG: "/:org",
  DATE: "/:org/:eventId",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  MEET: "/:org/:time",
  BOARD: "/boards/:boardId",
} as const;

export type PathParams = {
  [ROUTES.DATE]: {
    org: string;
    eventId: string;
  };
  [ROUTES.ORG]: {
    org: string;
  };
};

declare module "react-router-dom" {
  interface Register {
    params: PathParams;
  }
}
