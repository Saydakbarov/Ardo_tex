import Magnifier from "react-magnifier";

const ImageGallery = ({
  data,
  currentIndex,
  open,
  setOpen,
  setCurrentIndex,
  type,
  numbers
}) => {
  const handleClose = () => {
    setOpen(false);
    setCurrentIndex(0);
  };
  return (
    <div
      className={
        open
          ? "fixed bg-[#0000006c] top-0 left-0 w-screen  h-screen flex items-center justify-center z-[200] "
          : "hidden"
      }
    >
      <div className="w-full h-full bg-white md:rounded-md  relative p-8 ">
        <div className="flex justify-end mb-5">
          <button
            className=" w-[30px] h-[30px] flex flex-col items-center justify-center"
            onClick={handleClose}
          >
            <span className="block w-full h-[2px] md:h-[3px] bg-black rotate-45"></span>
            <span className="block w-full h-[2px] md:h-[3px] bg-black mt-[-2px] md:mt-[-3px] -rotate-45"></span>
          </button>
        </div>
        <button
          className=" w-[30px] h-[40px]  opacity-80 absolute top-[50%] left-[10px] translate-y-[-50%]"
          onClick={() => {
            if (currentIndex > 0) {
              setCurrentIndex(currentIndex - 1);
            }
          }}
        >
          <img
            src="/img/right-arrow.png"
            alt=""
            className="w-full h-full object-contain rotate-180"
          />
        </button>
        <button
          className=" w-[30px] h-[40px] opacity-80 absolute top-[50%] right-[10px] translate-y-[-50%]"
          onClick={() => {
            if (currentIndex < data.length - 1) {
              setCurrentIndex(currentIndex + 1);
            }
          }}
        >
          <img
            src="/img/right-arrow.png"
            alt=""
            className="w-full h-full object-contain "
          />
        </button>
        {data?.map((item, index) => (
          <div
            key={item}
            className={`w-full h-full overflow-x-auto  p-4 relative ${
              index == currentIndex ? "block" : "hidden"
            }`}
          >
           <Magnifier className="rounded-md"  src={item} />
           {
            type == "material" && (
              <span className="text-lg md:text-2xl font-bold absolute z-[2] text-white top-[20px] right-[20px] ">{numbers ?  numbers[index] : "0"}</span>
            )
           }
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
