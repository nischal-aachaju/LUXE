const CollectionsSection = ({ data }) => {
  return (
    <div className="relative h-54 w-42  md:h-66 md:w-40 lg:w-56 lg:h-80  bg-gray-300/40  overflow-hidden flex justify-center items-center ">
      <img className=" object-contain " src={data.thumbnail} alt="Img" />
      <div className="absolute bg-amber-500/00 h-full w-full p-2 flex flex-col justify-between">
        <div className="text-[11px] py-0.5 font-semibold text-[#ffffff] w-fit h-fit  uppercase backdrop-blur-xs bg-black/30    px-3">
          {data.category}
        </div>
        {data.brand ? (
          <div className="text-[11px] py-0.5 px-2 font-semibold text-[#000000] w-fit h-fit  uppercase bg-white ">
            {data.brand}
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default CollectionsSection;
