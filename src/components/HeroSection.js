
import bgImage from "../assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section
      className="w-full text-white relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})`,}}>
      <div className="relative max-w-9xl mx-auto px-10 py-6 "> 
        <p class="text-yellow-400 text-[22px] mb-3 tracking-wide ">Ideate • Collaborate • Get recognised</p>
        <h1 className="text-3xl sm:text-5xl lg:text-9xl font-bold leading-tight pt-[20px] sm:pt-[30px] lg:pt-[40px]">AI Ideas Hub</h1>
        <p className="mt-10 text-md sm:text-base lg:text-lg text-gray-300 text-white"> Where Ideas Shape Future</p>
      </div>
    </section>
  );
};

export default HeroSection;