import bgImage from "../assets/purple-bg.png";
import card1 from "../assets/top-contributors.png";
import card2 from "../assets/ideas-dept.png";
import card3 from "../assets/ideas-impact.png";
import madel from "../assets/madel.png";

const Leaderboard = () => {
  return (
    <section className="w-full text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="max-w-7xl mx-auto pt-[40px] pb-[100px]">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex justify-center mb-4"><span className="text-3xl"><img src={madel} alt="img" className="w-[90px]"/></span></div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal">Innovation <span className="font-bold">Leaderboard</span></h2>
          <p className="mt-3 text-sm sm:text-base text-gray-200 w-100 mx-auto">
            Track the pulse of innovation across the firm. See how many ideas are
            flowing, what’s under review, and what’s already making an impact.
          </p> 
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 p-8">
          <div className="bg-white rounded-2xl shadow-lg p-3">
            <img src={card1} alt="Top Contributors" className="w-full h-auto rounded-xl object-cover" />
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-3">
            <img src={card2}  alt="Ideas by Department"  className="w-full h-auto rounded-xl object-cover" />
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-3">
            <img src={card3}  alt="Ideas by Impact" className="w-full h-auto rounded-xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;