import { createBrowserRouter, redirect } from "react-router-dom";
import { App } from "./app";
import { ROUTES } from "@/shared/model/routes";
import { Providers } from "./providers";
import NotFound from "./not-found";
import { Layout } from "lucide-react";
import { LayoutRoot } from "./layout";

export const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <LayoutRoot>
          <App />
        </LayoutRoot>
      </Providers>
    ),
    errorElement: <NotFound />,
    children: [
      {
        // loader: protectedLoader,
        // element: <>123</>,
        children: [
          {
            path: ROUTES.ORG,
            lazy: () => import("@/features/event/pages/event.page"),
          },
          {
            path: ROUTES.DATE,
            lazy: () => import("@/features/event/pages/event-id.page"),
          },
          {
            path: ROUTES.INVITEES,
            lazy: () => import("@/features/event/pages/invitees.page"),
          },
          //   {
          //     path: ROUTES.RECENT_BOARDS,
          //     lazy: () =>
          //       import("@/features/boards-list/boards-list-recent.page"),
          //   },
          // {
          //   path: ROUTES.MEET,
          //   lazy: () => import("@/features/meet/meet.page"),
          // },
        ],
      },

      //   {
      //     path: ROUTES.LOGIN,
      //     lazy: () => import("@/features/auth/login.page"),
      //   },
      //   {
      //     path: ROUTES.REGISTER,
      //     lazy: () => import("@/features/auth/register.page"),
      //   },
      {
        path: ROUTES.HOME,
        lazy: () => import("@/features/event/pages/home.page"),
      },
    ],
  },
]);
