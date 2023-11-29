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

  export {handleCheckboxChange, youTubeLinkParser}