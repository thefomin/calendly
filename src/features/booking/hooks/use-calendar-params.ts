import React from "react";
import { useSearchParams } from "react-router-dom";
import { formatDate, formatMonth } from ".";

export function useCalendarParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dateParam = searchParams.get("date") || undefined;
  const monthParam = searchParams.get("month") || undefined;
  const selectedDate = dateParam ? new Date(dateParam) : undefined;
  const today = new Date();
  const initialMonth = monthParam
    ? new Date(
        Number(monthParam.split("-")[0]), // год
        Number(monthParam.split("-")[1]) - 1, // месяц
      )
    : new Date();
  const [date, setDate] = React.useState<Date | undefined>(selectedDate);
  const [month, setMonth] = React.useState<Date>(initialMonth);

  const handleSelectDate = (selectedDate: Date | undefined) => {
    setDate(selectedDate);

    if (selectedDate) {
      const isoDate = formatDate(selectedDate);
      const isoMonth = formatMonth(selectedDate);

      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set("date", isoDate);
        newParams.set("month", isoMonth);
        return newParams;
      });
    }
  };
  return {
    handleSelectDate,
    searchParams,
    setSearchParams,
    date,
    month,
    setMonth,
    today,
  };
}
