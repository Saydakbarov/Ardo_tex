const handleCheckboxChange = (state, setState, id) => {
    if (state?.includes(id)) {
      setState(state?.filter((item) => item != id));
    } else {
      setState([...state, id]);
    }
  };

  export {handleCheckboxChange}