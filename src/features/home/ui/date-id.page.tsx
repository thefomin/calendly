import { BookingForm, BookingLayout } from "../components";
import { BookingHeader } from "../components/booking-header";

function DateIdPage() {
  return (
    <BookingLayout header={<BookingHeader />} title="Введите данные">
      <BookingForm />
    </BookingLayout>
  );
}

export const Component = DateIdPage;
