import { useState } from 'react';

const useForm = () => {
  const [formValues, setFormValues] = useState({
    movingFrom: '',
    movingTo: '',
    moveDate: '',
    description: '',
    name: '',
    email: '',
    phoneNumber: '',
    referralSource: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };
  

  return { formValues, setFormValues, handleInputChange };
};

export default useForm;
