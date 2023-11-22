import instance from "../../axios";

export const getAllAccountant = async () => {
   try {
      const response = await instance.get("/artist");
      // console.log(response);
      return response?.data;
   } catch (error) {
      console.log(error.message);
   }
};

export const getAccountantById = async (_id) => {
   try {
      const response = await instance.get(`/artist/${_id}`);
      // console.log(response);
      return response?.data;
   } catch (error) {
      console.log(error.message);
   }
};

export const getRestAccountantById = async (_id) => {
   try {
      const response = await instance.get(`/artist/rest-artist/${_id}`);
      // console.log(response);
      return response?.data;
   } catch (error) {
      console.log(error.message);
   }
};