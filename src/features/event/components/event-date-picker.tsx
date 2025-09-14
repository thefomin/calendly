import { Calendar } from "@/shared/ui/kit";
import { useState } from "react";
import { useCalendarParams } from "../hooks";
import { ru } from "date-fns/locale";
import { DateList } from ".";
import { format } from "date-fns";
import { AvailabilityStatus, EventDto } from "../types";
import { useCapitalizeFirst } from "../hooks/use-capitalize-first";

export const EventDatePicker = ({ event }: { event: EventDto }) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const { handleSelectDate, date, month, setMonth, today } =
    useCalendarParams();

  const availableDates = Array.from(
    new Set(
      event.availabilities
        .filter((slot) => slot.status === AvailabilityStatus.FREE)
        .map((slot) => new Date(slot.date).toDateString()),
    ),
  ).map((d) => new Date(d));

  const selectedSlots = event.availabilities.filter(
    (slot) =>
      date &&
      new Date(slot.date).toDateString() === date.toDateString() &&
      slot.status === AvailabilityStatus.FREE,
  );

  return (
    <div className="flex flex-row space-between gap-6 transition-all duration-300">
      <div className="w-3/4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelectDate}
          locale={ru}
          month={month}
          onMonthChange={(newMonth) => {
            const firstMonth = new Date(
              today.getFullYear(),
              today.getMonth(),
              1,
            );
            if (newMonth < firstMonth) return;
            setMonth(newMonth);
          }}
          className="w-full bg-transparent p-0 capitalize"
          showOutsideDays={false}
          modifiers={{
            available: availableDates,
          }}
          modifiersClassNames={{
            available:
              "bg-[#0069ff11] rounded-full hover:bg-[#0069ff26] text-[#0069ff]",
          }}
          disabled={(day) =>
            !availableDates.some((d) => d.toDateString() === day.toDateString())
          }
        />
      </div>
      <div className="w-[45%] flex flex-col gap-3 text-base font-normal">
        {selectedSlots.length !== 0 && (
        <h3 className="leading-[38px] mb-2.5 normal-case">
          {date
            ? useCapitalizeFirst(format(date, "EEEE, d MMMM", { locale: ru }))
            : "Выберите дату"}
        </h3>
)}
        {selectedSlots.map((slot) => (
          <DateList
            key={slot.id}
            time={slot.time}
            date={new Date(slot.date)}
            expanded={expanded === slot.time}
            onExpand={() =>
              setExpanded(expanded === slot.time ? null : slot.time)
            }
          />
        ))}
      </div>
    </div>
  );
};
