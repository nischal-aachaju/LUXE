import { useState } from "react";

export const BannerTag = ({ text }) => {
  return (
    <div className="w-fit h-fit flex justify-center items-center font-md absolute bg-black top-2 left-2 text-white text-[8px] font-mont px-2 py-1">
      {text}
    </div>
  );
};

const Imgcomp = ({ link, onClick }) => {
  return (
    <img
      className="w-[24%] border-gray-400/30 border aspect-square"
      src={link}
      onClick={onClick}
    />
  );
};

const Imgs = ({ images, thumbnail, bannerTag }) => {
  const [thumb, setthumb] = useState(thumbnail);

  return (
    <div className="w-full h-fit flex flex-col mb-8 relative md:w-[60%]  max-w-124 mx-auto ">
      <img
        src={thumb}
        alt=""
        className="w-full shadow-[0_0_12px_rgba(0,0,0,0.15)] mb-6"
      />
      {bannerTag && <BannerTag text={bannerTag} />}
      <div className="w-full  flex gap-1 justify-baseline items-center overflow-hidden shrink-0">
        {images.map((img, idx) => {
          return (
            <Imgcomp
              link={img}
              key={idx}
              onClick={() => {
                setthumb(img);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Imgs;
