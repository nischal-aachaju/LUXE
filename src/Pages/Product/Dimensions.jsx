const DimensionComp = ({ e }) => {
  return (
    <div className="flex flex-col items-center justify-center w-1/3 h-full overflow-hidden bg-white border border-gray-400/30">
      <span className="text-xl font-bold font-mont">
        {e.length}
        <sup className="text-gray-400 font-normal text-[12px]">
          {e.subScript}
        </sup>
      </span>
      <span className="font-mont text-[8px] font-medium">{e.secText}</span>
    </div>
  );
};

const Dimesions = ({ width, height, depth }) => {
  
  const comps = [
    { length: width, subScript: "cm", secText: "WIDTH" },
    { length: height, subScript: "cm", secText: "HEIGHT" },
    { length: depth, subScript: "cm", secText: "DEPTH" },
  ];

  return (
    <div className="h-23.5 w-full flex items-center justify-center mb-8">
      {comps.map((item, idx) => {
        return <DimensionComp e={item} key={idx} />;
      })}
    </div>
  );
};

export default Dimesions;
