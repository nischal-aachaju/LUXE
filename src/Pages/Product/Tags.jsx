const TagComp = ({ e }) => {
  return (
    <div className="border-gray-400/30 border h-6.5 w-fit px-2  flex justify-center items-center font-mont text-sm font-light py-2">
      {e}
    </div>
  );
};

const Tags = () => {
  const list = ["Bluetooth 5", "Voice Assistant", "ANC"];

  return (
    <div className="h-10 w-full flex gap-2 items-center mb-2">
      {list.map((item, idx) => {
        return <TagComp e={item} key={idx} />;
      })}
    </div>
  );
};

export default Tags;
