import { Calendar } from "@/shared/ui/kit";
import { useState } from "react";
import { useCalendarParams } from "../hooks";
import { availableSlots } from "./data";
import { ru } from "date-fns/locale";
import { DateList } from ".";
import { format } from "date-fns";

export const BookingDatePicker = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const { handleSelectDate, date, month, setMonth, today } =
    useCalendarParams();

  const availableDates = availableSlots.map((slot) => slot.date);
  const capitalizeFirst = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);
  const selectedSlot = availableSlots.find(
    (slot) => date && slot.date.toDateString() === date.toDateString(),
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
        <h3 className="leading-[38px] mb-2.5 normal-case">
          {date
            ? capitalizeFirst(format(date, "EEEE, d MMMM", { locale: ru }))
            : "Выберите дату"}
        </h3>

        {selectedSlot?.times.map((time) => (
          <DateList
            key={time}
            time={time}
            date={selectedSlot.date}
            expanded={expanded === time}
            onExpand={() => setExpanded(expanded === time ? null : time)}
          />
        ))}
      </div>
    </div>
  );
};
