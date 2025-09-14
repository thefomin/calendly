import "react-router-dom";

export const ROUTES = {
  HOME: "/",
  ORG: "/:org",
  INVITEES: "/:org/invitees/:bookingId",
  DATE: "/:org/:eventId",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  MEET: "/:org/:time",
  LK: "/l",
} as const;

export type PathParams = {
  [ROUTES.DATE]: {
    org: string;
    eventId: string;
  };
  [ROUTES.ORG]: {
    org: string;
  };
  [ROUTES.INVITEES]: {
    org: string;
    bookingId: string;
  };
};

declare module "react-router-dom" {
  interface Register {
    params: PathParams;
  }
}
