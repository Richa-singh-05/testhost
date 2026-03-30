import bgRight from "../assets/right-bg.png"; 

const Scoreboard = () => {
  return (
    <section className="w-full bg-[#f1f1fa] relative overflow-hidden sm:p-[18px]">
      <img src={bgRight} alt="Background" className="absolute right-0 bottom-0 top-[-4] w-[43%]" />
      <div className="max-w-7xl mx-auto pt-[90px] pb-[80px]">
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-normal text-gray-800">
            Idea <span className="text-[#4a0688] font-bold">Scoreboard</span>
          </h2>
          <p className="mt-3 mb-12 text-sm sm:text-base text-[#5e5e5e] leading-relaxed">
            Duis interdum, mi ut mollis dapibus, turpis ipsum luctus velit,
            at bibendum erat elit fermentum dui. Donec non orci sollicitudin,
            congue orci ac, finibus.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <div>
              <h3 className="text-3xl sm:text-5xl font-bold text-purple-500">
                85
              </h3>
              <p className="mt-4 text-sm text-gray-900 border-t-[2px] border-[#d8d8d8] pt-2 w-40 font-semibold">
                All Ideas
              </p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-5xl font-bold text-[#0da292]">
                31
              </h3>
              <p className="mt-4 text-sm text-gray-900 border-t-[2px] border-[#d8d8d8] pt-2 w-40 font-semibold">
                In Review
              </p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-5xl font-bold text-[#f6a142]">
                12
              </h3>
              <p className="mt-4 text-sm text-gray-900 border-t-[2px] border-[#d8d8d8] pt-2 w-40 font-semibold">
                Under Implementation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scoreboard;