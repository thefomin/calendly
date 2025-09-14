import { Card } from "@/shared/ui/kit";

interface BookingProps {
  header?: React.ReactNode;
  children: React.ReactNode;
  title?: string;
}

export const EventLayout = ({ header, children, title }: BookingProps) => {
  return (
    <div className="container mx-auto p-4 justify-center flex items-center h-full text-[#232E3F]">
      <Card className="flex flex-row border-none rounded-3xl max-w-[1060px] min-w-[900px] min-h-[550px] p-0 bg-white">
        {header && (
          <div className="w-2/6 min-w-[300px] border-r-[1px] border-r-[#d7d7d7]">{header}</div>
        )}
        <div className="flex flex-col w-full pb-6 pr-6 pt-6 gap-2">
          <div className="flex flex-col w-full pb-6 pr-6 pt-6 gap-2">
            {title && (
              <h2 className="font-bold text-xl pl-3 mb-6">
                {title}
              </h2>
            )}

            {children}
          </div>
        </div>
      </Card>
    </div>
  );
};
