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
       <div className="flex flex-col gap-3">
         <div className="flex flex-col">
          <CardDescription className="text-base font-semibold text-red-800">
            {event.companyName}
          </CardDescription>
          <h1 className="text-3xl font-bold">{event.title}</h1>
        </div>
        <div className="mt-3 flex flex-col gap-2">
         <div className=" flex flex-row gap-2 items-center font-medium">
          <span className="flex w-5 h-5">
            <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" role="img"><path d="M.5 5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5 3.269V5l1.759 2.052" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </span>
          {event.duration} мин
          </div>
          <div className="flex flex-row gap-2 items-center font-medium">
           <span className="flex w-5 h-5">
              <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" role="img"><path d="M7.192 3.731V2.5a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4.692a1 1 0 0 0 1-1V6.269l1.573.839a.5.5 0 0 0 .735-.441V3.333a.5.5 0 0 0-.735-.441Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </span>
            {event.description}
          </div>
          </div>
       </div>
        

        {/* <div className="text-base font-bold">
          {event.description}
        </div> */}
      </CardHeader>
    </div>
  );
};
