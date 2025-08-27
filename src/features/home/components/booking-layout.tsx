import { Card } from "@/shared/ui/kit";

interface BookingProps {
  header: React.ReactNode;
  children: React.ReactNode;
  title: string;
}

export const BookingLayout = ({ header, children, title }: BookingProps) => {
  return (
    <div className="container mx-auto p-4 justify-center flex items-center h-full">
      <Card className="flex flex-row border-none rounded-lg max-w-[1060px] min-w-[900px] min-h-[550px] p-0">
        <div className="w-2/6 min-w-[300px] border-r-[1px]">{header}</div>
        <div className="flex flex-col w-full pb-6 pr-6 pt-6 gap-2">
          <div className="flex flex-col w-full pb-6 pr-6 pt-6 gap-2">
            <h2 className="font-bold text-xl text-[#0a2540] pl-3 mb-6">
              {title}
            </h2>
            {children}
          </div>
        </div>
      </Card>
    </div>
  );
};
