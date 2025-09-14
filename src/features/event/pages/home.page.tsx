import { Button } from "@/shared/ui/kit";

function HomePage() {
  return (
    <section className="flex justify-center w-full px-10">
      <div className="flex flex-col gap-10 py-[72px] w-full max-w-[1200px]">
        <div className="flex gap-8 w-full justify-center">
          <div className="flex items-center justify-between gap-6 max-w-[710px]">
            <div className="flex flex-col w-full">
              <h1 className="text-[4.25rem] font-bold text-center flex tracking-[-0.2px] leading-[1.2]">
                просто договориться о встрече
              </h1>
              <p className="pt-6 pb-6 text-center text-[1.25rem] font-normal ">
                сервис, который упрощает назначение встреч.
              </p>
              <div className="flex justify-center flex-col w-full items-center pt-4">
                <div className="flex justify-center flex-col gap-2 w-full items-center">
                  <Button className="bg-[#000] rounded-[8px] h-[52px] w-[200px]  px-1.5 py-1.5 text-base font-normal ">
                    попробовать
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
}

export const Component = HomePage;
