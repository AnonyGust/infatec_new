import infatecFetch from "../../axios/config";

export const createWarning = async (imageName, message, imageFile) => {
    const formData = new FormData();
  
    formData.append('imageName', imageName);
    formData.append('message', message);
    formData.append('imgUri', '');
    formData.append('loginId', '1');
    formData.append('imageFile', imageFile);
  
    try {
      const token = sessionStorage.getItem('bearer');
      await infatecFetch.post('/api/Warnings/CreateNewWarning', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log(formData);
    } catch (error) {
      console.error(error);
    }
  };
  