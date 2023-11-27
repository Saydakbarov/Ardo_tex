const Media = ({type = "img" , src, className, style}) => {
   if(type == "img") {
   return <div className="px-4">
    <img src={src} className={`my-[20px] block w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-md object-cover ${className}`} style={style} />
   </div>
   } else if(type == "img") {
    return <div className="px-4">
        <video src={src} className={`my-[20px] block w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-md object-cover ${className}`} style={style} ></video>
    </div>
   }else {
    return  <div className="px-4">
        <img src={src} className={`my-[20px] block w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-md object-cover ${className}`} style={style} />
    </div>
   }
}

export default Media