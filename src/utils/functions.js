const handleCheckboxChange = (state, setState, id) => {
    if (state?.includes(id)) {
      setState(state?.filter((item) => item != id));
    } else {
      setState([...state, id]);
    }
  };


  const youTubeLinkParser = (url) => {
    const arr = url?.split("https://youtu.be/")
    if(arr?.length > 1) {
      return arr[1]
    }else {
      return arr[0]
    }
  }

 const generateSlug = (inputString) => {
    return inputString
      ?.toLowerCase()
      ?.replace(/[^a-z0-9]/g, '-')
      ?.replace(/-+/g, '-')
      ?.replace(/^-|-$/g, '');
  }

  export {handleCheckboxChange, youTubeLinkParser, generateSlug}