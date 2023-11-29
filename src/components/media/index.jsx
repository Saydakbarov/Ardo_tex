const Media = ({ type = "img", src, className, style }) => {
  if (type == "img") {
    return (
      <div className="px-4">
        <img
          src={src}
          className={`my-[20px] block w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-md object-cover ${className}`}
          style={style}
        />
      </div>
    );
  } else if (type == "video") {
    return (
      <div className="px-4">
        <video
          src={src}
          className={`my-[20px] block w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-md object-cover ${className}`}
          style={style}
        ></video>
      </div>
    );
  } else if (type == "youtube") {
    return (
      <div className="px-4">
        <iframe
          className={`my-[20px] block w-full h-[350px] sm:h-[400px] md:h-[500px] rounded-md object-cover ${className}`}
          src={`https://www.youtube.com/embed/${src}`}
          title="YouTube video player"
        />
      </div>
    );
  } else {
    return (
      <div className="px-4">
        <img
          src={src}
          className={`my-[20px] block w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-md object-cover ${className}`}
          style={style}
        />
      </div>
    );
  }
};

export default Media;
