import { createBrowserRouter } from "react-router-dom";
import { App } from "./app";
import { ROUTES } from "@/shared/model/routes";
import { Providers } from "./providers";

export const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <App />
      </Providers>
    ),
    children: [
      {
        // loader: protectedLoader,
        // element: <>123</>,
        children: [
          {
            path: ROUTES.ORG,
            lazy: () => import("@/features/home/ui/home.page"),
          },
          {
            path: ROUTES.DATE,
            lazy: () => import("@/features/home/ui/date-id.page"),
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
      //   {
      //     path: ROUTES.HOME,
      //     loader: () => redirect(ROUTES.BOARDS),
      //   },
    ],
  },
]);
