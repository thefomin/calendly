import { BookingLayout, BookingDatePicker } from "../components";
import { BookingHeader } from "../components/booking-header";

function HomePage() {
  return (
    <BookingLayout header={<BookingHeader />} title="Выберите дату и время">
      <BookingDatePicker />
    </BookingLayout>
  );
}

export const Component = HomePage;
