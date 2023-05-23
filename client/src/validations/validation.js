// Can be improved (add new ones or needed)
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
    else if(Number(newBreed.minWeight) > Number(newBreed.maxWeight)){
        errors.weight = "Max weight must be greater than min weight";
    }
    else if(Number(newBreed.minHeight) > Number(newBreed.maxHeight)){
        errors.weight = "Max height must be greater than min height";
    }
    else if(newBreed.minLifespan.length === 0 || newBreed.maxLifespan.length === 0) {
        errors.life_span = "This value can't be emppty";
    }
    else if(Number(newBreed.minLifespan) > Number(newBreed.maxLifespan)){
        errors.weight = "Max life span must be greater than min life span";
    }
    else if(!/^[0-9]+$/.test(newBreed.minLifespan) || !/^[0-9]+$/.test(newBreed.maxLifespan) ){
        errors.life_span = "Only numeric values allowed";
    }

    return errors;
  };

export default validateForm;