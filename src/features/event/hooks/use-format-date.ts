import { format } from "date-fns";
import { enUS, ru } from "date-fns/locale";

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const formatMonth = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
};

type LocaleKey = "en" | "ru";

export function useFormattedDate(
  date?: string | Date,
  locale: LocaleKey = "en",
) {
  if (!date) return "";

  const locales = {
    en: enUS,
    ru: ru,
  };

  return format(new Date(date), "EEEE, d MMMM, yyyy", {
    locale: locales[locale],
  });
}
