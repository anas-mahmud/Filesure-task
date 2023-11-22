import instance from "../../axios";

export const getAllArtist = async () => {
   try {
      const response = await instance.get("/artist");
      // console.log(response);
      return response?.data;
   } catch (error) {
      console.log(error.message);
   }
};

export const getArtistById = async (_id) => {
   try {
      const response = await instance.get(`/artist/${_id}`);
      // console.log(response);
      return response?.data;
   } catch (error) {
      console.log(error.message);
   }
};