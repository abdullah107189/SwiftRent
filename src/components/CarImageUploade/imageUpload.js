import axios from 'axios';
export const imageUpload = async imageData => {
  if (!imageData) {
    // console.error('No image selected!');
    return null;
  }

  const formData = new FormData();
  formData.append('file', imageData);
  formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_API_KEY
      }/image/upload`,
      formData
    );
    return response.data.secure_url;
  } catch (error) {
    // console.error(
    //   'Error uploading image:',
    //   error.response ? error.response.data : error.message
    // );
    return null;
  }
};
