const handleCheckboxChange = (state, setState, id) => {
    if (state?.includes(id)) {
      setState(state?.filter((item) => item != id));
    } else {
      setState([...state, id]);
    }
  };


  const youTubeLinkParser = (url) => {
    const arr = url?.split("https://youtu.be/")
    return arr[1]
  }

  export {handleCheckboxChange, youTubeLinkParser}