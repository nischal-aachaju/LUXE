const CollectionsSection = ({ data }) => {
  return (
    <div className="group relative flex items-center justify-center overflow-hidden h-60 w-44 md:h-72 md:w-48 lg:w-60 lg:h-80 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer">
      <img
        className="object-contain w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
        src={data.thumbnail}
        alt={data.title || "Collection"}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

      <div className="absolute flex flex-col justify-between w-full h-full p-3 md:p-4">
        <div className="flex justify-start">
          <span className="text-[10px] md:text-[11px] py-1 px-3 font-semibold text-white uppercase tracking-wider backdrop-blur-md bg-white/15 border border-white/20 rounded-full shadow-sm transition-all duration-300 group-hover:bg-white/25 group-hover:scale-105">
            {data.category}
          </span>
        </div>

        <div className="flex flex-col gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          {data.brand && (
            <span className="text-[10px] md:text-[11px] py-1.5 px-3 font-bold text-gray-900 uppercase tracking-wide bg-white/95 backdrop-blur-sm rounded-md w-fit shadow-md transition-all duration-300 group-hover:bg-white group-hover:shadow-lg">
              {data.brand}
            </span>
          )}

          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <span className="text-[11px] md:text-xs text-white font-medium tracking-wide">
              Explore Details
            </span>
            <svg
              className="w-3 h-3 md:w-4 md:h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>


    </div>
  );
};

export default CollectionsSection;
