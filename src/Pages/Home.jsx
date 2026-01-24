import { ArrowRight, Star } from "lucide-react";
import CollectionsSection from "../Components/common/CollectionsSection";
import { ApiDataContext } from "../Context/ContextApi";
import { useContext } from "react";
import HomeLastSection from "../Components/layout/HomeLastSection";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import SwiperHomeComp from "./SwiperHomeComp";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Home = () => {
  const data = useContext(ApiDataContext);
  const collections = data.slice(2, 6);
  const newArrivel = data.slice(10, 14);

  const swiperData = [
    {
      bgImg:
        "https://www.ralphlauren.com/on/demandware.static/-/Library-Sites-RalphLauren_NA_Library/default/dwfd2413f2/img/202601/20260113-homepage/0113_hp_c01_img.jpg",
      badge: "Polo Originals",
      title: "Refined",
      emphasis: "Sophistication",
      description:
        "Iconic silhouettes meet modern luxury. Designed for those who value quiet confidence and timeless elegance.",
      ctaPrimary: "DISCOVER POLO",
      ctaSecondary: "VIEW LOOKBOOK",
    },

    {
      bgImg:
        "https://sidemenclothing.com/cdn/shop/files/DESKTOP_3ea6fdb7-6507-4a32-b8ec-0cbe94591299.png?v=1754048578&width=2000",
      badge: "Limited Drop",
      title: "Bold",
      emphasis: "Streetwear",
      description:
        "Unapologetic designs built for presence. Statement pieces inspired by culture, confidence, and movement.",
      ctaPrimary: "SHOP DROP",
      ctaSecondary: "SEE STYLES",
    },

    {
      bgImg:
        "https://media.tommy.com/us/static/images/scheduled_marketing/2026/01/08_HP_FullTile04_dt.jpg",
      badge: "Autumn Collection 2026",
      title: "American",
      emphasis: "Heritage",
      description:
        "A modern interpretation of timeless American style. Elevated essentials crafted for effortless confidence.",
      ctaPrimary: "SHOP NOW",
      ctaSecondary: "EXPLORE COLLECTION",
    },

    {
      bgImg:
        "https://assets2.razerzone.com/images/pnx.assets/21f5126aadd2d7c83d92234486dc619b/collab-cinnamoroll-2026-homepage-desktop2x.webp",
      badge: "Collaboration 2026",
      title: "Playful",
      emphasis: "Performance",
      description:
        "Where high-performance gaming meets iconic character design. Built to stand out, engineered to win.",
      ctaPrimary: "SHOP COLLAB",
      ctaSecondary: "LEARN MORE",
    },
  ];

  return (
    <div className="mb-10 mt-14">
      <Swiper
        pagination={{ dynamicBullets: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {swiperData.map((data, idx) => (
          <SwiperSlide key={idx}>
            <SwiperHomeComp data={data} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full px-4 pt-8 mb-12 h-fit md:px-16">
        <div className="flex justify-between ">
          <h1 className="font-serif text-xl">Curated Collections</h1>
          <a
            className="text-[15px] w-fit font-semibold text-[#ff9500] flex"
            href=""
          >
            VIEW ALL <ArrowRight size={20} strokeWidth={1.7} />
          </a>
        </div>
        <p className="text-[12px]">
          Explore our finest categories selected for you.
        </p>

        <div className="grid w-full grid-cols-2 gap-4 mt-10 h-fit md:grid-cols-4 place-items-center">
          {collections.map((e, idx) => {
            return (
              <Link key={e.id} to={`/products/${e.id}`}>
                <CollectionsSection key={idx} data={e} />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-between w-full bg-gray-100 h-210 md:h-120">
        <div className="flex flex-col items-center gap-2 py-8 h-30">
          <p className="uppercase  text-sm text-shadow-[0px_0px_0.1px_#000] font-bold tracking-wide text-[#d4af37]">
            Fresh Drop
          </p>
          <h5 className="font-serif text-2xl tracking-wider scale-y-120">
            This Week's Arrivals
          </h5>
        </div>

        <div className="grid w-full grid-cols-2 px-4 py-0 h-160 md:h-100 place-items-center md:grid-cols-4">
          {newArrivel.map((elem, idx) => {
            return (
              <Link key={idx} to={`/products/${elem.id}`}>
                <div className="mx-1 max-h-85 w-fit shrink-0 ">
                  <img
                    className="bg-white border h-50 md:h-60 border-gray-300/80"
                    src={elem.thumbnail}
                    alt=""
                  />
                  <div className="flex flex-col w-full h-20 pt-2">
                    <h5 className="text-[14px] font-serif">{elem.title}</h5>
                    <div className="flex ">
                      <div className="w-1/2 ">
                        <p className="text-[12px] uppercase">{elem.category}</p>
                        <div>
                          <p className="text-[13px] font-bold">${elem.price}</p>
                        </div>
                      </div>

                      <div className=" w-1/2 h-full flex justify-end text-[14px] gap-1 pr-2">
                        <Star
                          size={18}
                          fill="#ffd700"
                          color="#000"
                          strokeWidth={0.2}
                        />
                        <p>{elem.rating}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center justify-center w-full h-16 md:mb-6">
          <button className="  uppercase border-[1.5px] border-gray-400/60 text-[13px] font-semibold tracking-wide  text-gray-800 bg-white px-4 py-[0.4rem]">
            {" "}
            <Link to="/all-products">View All Products</Link>
          </button>
        </div>
      </div>
      <HomeLastSection />
    </div>
  );
};

export default Home;
