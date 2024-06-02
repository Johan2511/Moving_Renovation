const sendFormData = async (formData) => {
    try {
      const response = await fetch('URL_DEL_SERVIDOR', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        return { success: true };
      } else {
        const errorData = await response.json();
        return { success: false, error: errorData.message };
      }
    } catch (error) {
      return { success: false, error: 'Network error' };
    }
  };
  
  export default sendFormData;
  