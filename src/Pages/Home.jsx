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

import { Autoplay, Pagination } from "swiper/modules";

const Home = () => {
  const data = useContext(ApiDataContext);
  const collections = data.slice(2, 6);
  const newArrivel = data.slice(6, 10);

  const swiperData = [


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
        {
      bgImg:
        "src/assets/images/productpg/hero1.png",
      badge: "Polo Originals",
      title: "Refined",
      emphasis: "Sophistication",
      description:
        "Iconic silhouettes meet modern luxury. Designed for those who value quiet confidence and timeless elegance.",
      ctaPrimary: "DISCOVER POLO",
      ctaSecondary: "VIEW LOOKBOOK",
    },
  ];


  return (
    <div className="mb-10 pt-14">
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
          <Link to="/all-products"
            className="text-[15px] w-fit font-semibold text-[#ff9500] flex"
            href=""
          >
            <>VIEW ALL</> <ArrowRight size={20} strokeWidth={1.7} />
          </Link>
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
      <div className="flex flex-col justify-between w-full bg-linear-to-b from-gray-200 to-gray-50 bg py-8">
        <div className="flex flex-col items-center gap-2 py-8 h-30">
          <p className="uppercase  text-sm text-shadow-[0px_0px_0.1px_#000] font-bold tracking-wide text-[#d4af37]">
            Fresh Drop
          </p>
          <h5 className="font-serif text-2xl tracking-wider scale-y-120">
            This Week's Arrivals
          </h5>
        </div>

        <div className="grid w-full grid-cols-2 gap-4 md:gap-6 px-4 md:px-8 py-4 place-items-center md:grid-cols-4">
          {newArrivel.map((elem, idx) => {
            return (
              <Link key={idx} to={`/products/${elem.id}`} className="w-full">
                <div className="group h-80 relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer">
                  <div className="relative overflow-hidden bg-linear-to-br from-gray-50 to-gray-100">
                    <img
                      className="w-full h-48 md:h-56 lg:h-64 object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-105"
                      src={elem.thumbnail}
                      alt={elem.title}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-[10px] font-semibold text-white uppercase tracking-wider bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full">
                        Quick View
                      </span>
                    </div>

                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold text-white uppercase tracking-wide bg-linear-to-r from-amber-500 to-orange-500 px-2.5 py-1 rounded-full shadow-sm">
                        New
                      </span>
                    </div>
                  </div>

                  <div className="p-3 md:p-4 space-y-2 flex flex-col ">
                    <span className="inline-block text-[10px] md:text-[11px] uppercase tracking-wider text-amber-600 font-semibold">
                      {elem.category}
                    </span>

                    <h5 className="text-sm h-10 md:text-[15px] font-serif font-medium text-gray-900 leading-tight line-clamp-2 group-hover:text-amber-700 transition-colors duration-300">
                      {elem.title}
                    </h5>

                    <div className="flex items-center   pt-1">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg md:text-xl font-bold text-gray-900">
                          ${elem.price}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded-full">
                        <Star
                          size={14}
                          fill="#fbbf24"
                          color="#fbbf24"
                          strokeWidth={0}
                        />
                        <span className="text-xs font-semibold text-gray-700">
                          {elem.rating}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="w-full py-2 text-center text-xs font-semibold text-white uppercase tracking-wider bg-linear-to-r from-gray-800 to-gray-900 rounded-lg hover:from-gray-900 hover:to-black transition-all duration-300">
                        Add to Cart
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center justify-center w-full h-16 md:mb-6">
          <button className=" hover:bg-gray-100 uppercase border-[1.5px] border-gray-400/60 text-[13px] font-semibold tracking-wide  text-gray-800 bg-white px-4 py-[0.4rem]">
            {" "}
            <Link to="/all-products ">View All Products</Link>
          </button>
        </div>
      </div>
      <HomeLastSection />
    </div>
  );
};

export default Home;
