const useValidation = (formValues, step) => {
    const errors = {};
  
    if (step === 1) {
      if (!formValues.movingFrom.trim()) {
        errors.movingFrom = 'Moving From is required';
      }
      if (!formValues.movingTo.trim()) {
        errors.movingTo = 'Moving To is required';
      }
      if (!formValues.moveDate.trim()) {
        errors.moveDate = 'Move Date is required';
      }
    } else if (step === 2) {
      if (!formValues.name.trim()) {
        errors.name = 'Name is required';
      }
      if (!formValues.email.trim()) {
        errors.email = 'Email is required';
      }
      if (!formValues.phoneNumber.trim()) {
        errors.phoneNumber = 'Phone Number is required';
      }
    }
  
    return errors;
  };
  
  export default useValidation;
  