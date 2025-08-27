import { cn } from "@/shared/lib/css";
import { PathParams, ROUTES } from "@/shared/model/routes";
import { Button } from "@/shared/ui/kit";
import { Link, useSearchParams, useParams } from "react-router-dom";

interface DateListProps {
  time?: string;
  date?: Date | undefined;
  expanded: boolean;
  onExpand: () => void;
}

export const DateList = ({ time, date, expanded, onExpand }: DateListProps) => {
  const [searchParams] = useSearchParams();
  const { org } = useParams<PathParams[typeof ROUTES.ORG]>();

  let to = "";
  if (date && time && org) {
    const [hours, minutes] = time.split(":").map(Number);
    const dateTime = new Date(date);
    dateTime.setHours(hours);
    dateTime.setMinutes(minutes);

    const dateId = dateTime.toISOString(); // 👈 твой dateId
    to = `/${org}/${dateId}?${searchParams.toString()}`;
  }

  console.log({ date, time, org, to });

  return (
    <div
      className={cn(
        "flex w-full overflow-hidden",
        expanded ? "gap-2" : "gap-0",
      )}
    >
      {/* Основная кнопка */}
      <Button
        onClick={onExpand}
        className={cn(
          "flex transition-all duration-300 flex-row gap-2 items-center border-[#0069ff80] hover:bg-transparent bg-transparent hover:border-[#0069ff] cursor-pointer px-3 py-2.5 h-[52px] rounded-sm",
          expanded
            ? "flex-[1_1_50%] bg-[#0009] hover:bg-[#0009] text-white hover:border-none"
            : "flex-[1_1_100%]",
        )}
        variant="outline"
      >
        <div
          className={cn(
            "w-[8px] h-[8px] rounded-full bg-[#40d794]",
            expanded ? "hidden" : "",
          )}
        ></div>
        <div
          className={cn(
            "text-[#0069ff] font-bold text-sm",
            expanded ? "text-white" : "",
          )}
        >
          {time}
        </div>
      </Button>

      {to && (
        <Button
          asChild
          className={cn(
            "overflow-hidden p-0 w-0 flex transition-all duration-300 flex-row gap-2 items-center border-[#0069ff80] hover:bg-[#0066e6]  hover:text-white text-medium text-base bg-[#0069ff] text-white hover:border-[#0069ff] cursor-pointer h-[52px] rounded-sm",
            expanded ? "flex-[1_1_50%] opacity-100" : "flex-[1_1_0%] opacity-0",
          )}
          variant="outline"
        >
          <Link to={to} className="text-white">
            Далее
          </Link>
        </Button>
      )}
    </div>
  );
};
