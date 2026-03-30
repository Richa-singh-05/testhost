
import process from "../assets/process.png";

const ProcessFlow = () => {
  return (
<section className="w-full bg-[#ffffff] py-10 sm:py-14 lg:py-16">
  <div className="max-w-9xl mx-auto px-4 sm:px-4 lg:px-4">
    <img src={process} alt="altimg"  className="w-full h-auto object-contain mb-6"/>
    <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-6 sm:gap-8 lg:gap-0 lg:justify-between">
      <div className="flex items-start gap-2 w-full sm:w-1/2 lg:w-auto">
        <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#632fcc]">
          01 <span className="font-light">|</span>
        </span>
        <div>
          <span className="font-medium text-[#632fcc] pt-[5px] inline-block"> Submit Idea</span>
          <p className="mt-1 text-xs sm:text-sm text-black leading-relaxed max-w-[180px]"> In molestie mauris mattis consequat ultrices.</p>
        </div>
      </div>
      <div className="flex items-start gap-2 w-full sm:w-1/2 lg:w-auto">
        <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0cc0df]"> 02 <span className="font-light">|</span>
        </span>
        <div>
          <span className="font-medium text-[#0cc0df] pt-[5px] inline-block"> T1 Review</span>
          <p className="mt-1 text-xs sm:text-sm text-black leading-relaxed max-w-[180px]">Etiam id convallis odio, eget congue tu</p>
        </div>
      </div>
      <div className="flex items-start gap-2 w-full sm:w-1/2 lg:w-auto">
        <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#e95121]">03 <span className="font-light">|</span></span>
        <div><span className="font-medium text-[#e95121] pt-[5px] inline-block"> T2 Review</span>
          <p className="mt-1 text-xs sm:text-sm text-black leading-relaxed max-w-[180px]">Vestibulum metus augue</p>
        </div>
      </div>
      <div className="flex items-start gap-2 w-full sm:w-1/2 lg:w-auto">
        <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#8956ee]"> 04 <span className="font-light">|</span></span>
        <div><span className="font-medium text-[#8956ee] pt-[5px] inline-block">Approval & Implementation </span>
          <p className="mt-1 text-xs sm:text-sm text-black leading-relaxed max-w-[180px]">feugiat ac metus ut</p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default ProcessFlow;
