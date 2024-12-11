const Heading = ({ children, heading }) => {
  return (
    <div className=" w-11/12 max-w-[1080px] mx-auto pt-4 flex items-center justify-center">
      <div className="relative group">
        <div className="w-28 h-28 rounded-full bg-white/10 shadow-xl group-hover:scale-105 hover:bg-blend-saturation"></div>
        <h2 className="text-3xl w-full text-sec font-robot font-semibold leading-6 absolute top-12 left-12 tracking-4 group-hover:scale-105">
          {heading}
        </h2>
      </div>  
    </div>
  );
};

export default Heading;
