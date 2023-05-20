const validateForm = (newBreed) => {
    const errors = {};

    if(newBreed.name.length === 0){
      errors.name = "This value can't be emppty";
    }
    else if(!/^[a-zA-Z0-9 ]*$/.test(newBreed.name)){
      errors.name = "Only alphabetical and numeric values allowed";
    }
    else if(newBreed.minHeight.length === 0 || newBreed.maxHeight.length === 0) {
        errors.height = "This value can't be emppty";
    }
    else if(!/^[0-9]+$/.test(newBreed.minHeight) || !/^[0-9]+$/.test(newBreed.maxHeight) ){
        errors.height = "Only numeric values allowed";
    }
    else if(newBreed.minWeight.length === 0 || newBreed.maxWeight.length === 0) {
        errors.weight = "This value can't be emppty";
    }
    else if(!/^[0-9]+$/.test(newBreed.minWeight) || !/^[0-9]+$/.test(newBreed.maxWeight) ){
        errors.weight = "Only numeric values allowed";
    }
    else if(newBreed.minLifespan.length === 0 || newBreed.maxLifespan.length === 0) {
        errors.life_span = "This value can't be emppty";
    }
    else if(!/^[0-9]+$/.test(newBreed.minLifespan) || !/^[0-9]+$/.test(newBreed.maxLifespan) ){
        errors.life_span = "Only numeric values allowed";
    }


    return errors;
  };

export default validateForm;