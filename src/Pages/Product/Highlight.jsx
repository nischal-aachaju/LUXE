const HighlightComp = ({ e }) => {
  return (
    <div className="w-1/3 h-full  border-gray-400/30 border flex justify-center flex-col overflow-hidden items-center">
      <span className="font-mont font-bold text-xl">
        {e.mText}
        <sup className="text-gray-400 font-normal text-[12px]">
          {e.subScript}
        </sup>
      </span>
      <span className="font-mont text-[8px] font-medium">{e.secText}</span>
    </div>
  );
};

const Highlights = () => {
  const comps = [
    { mText: "250", subScript: "g", secText: "LIGHTWEIGHT" },
    { mText: "30", subScript: "h", secText: "PLAYTIME" },
    { mText: "PRO", subScript: "", secText: "AUDIO" },
  ];

  return (
    <div className="h-23.5 w-full flex items-center justify-center mb-8">
      {comps.map((item, idx) => {
        return <HighlightComp e={item} key={idx} />;
      })}
    </div>
  );
};

export default Highlights;
