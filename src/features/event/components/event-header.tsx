import { PathParams, ROUTES } from "@/shared/model/routes";
import {
  Button,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/kit";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { EventDto } from "../types";

export const EventHeader = ({ event }: { event: EventDto }) => {
  const params = useParams<PathParams[typeof ROUTES.DATE]>();
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date") || "";
  const month = searchParams.get("month") || "";
  const queryString = searchParams.toString();
  const linkTo =
    "/" + params.org + (queryString ? `?date=${date}&month=${month}` : "");
  return (
    <div className="h-full py-6 flex-1 basis-0">
      <CardHeader className="gap-0 ">
        {params.eventId ? (
          <div className="mb-6">
            <Link to={linkTo}>
              <Button
                className="rounded-full h-[43px] w-[43px] text-[#0069ff]"
                variant="outline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                >
                  <path
                    d="M6 11L1 6M1 6L6 1M1 6H15"
                    stroke="#0069ff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        ) : (
          <></>
        )}
        <CardDescription className="text-base font-bold">
          {event.companyName}
        </CardDescription>
        <CardTitle className="text-3xl font-bold">{event.title}</CardTitle>
        <CardDescription className="text-base font-bold">
          {event.description}
        </CardDescription>
      </CardHeader>
    </div>
  );
};
