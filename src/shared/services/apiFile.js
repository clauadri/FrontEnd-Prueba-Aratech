import axios from "axios";

const baseURL = process.env.REACT_APP_BACK_URL;

export const fileUpload = async (data) => {
    try {
        await axios.post(baseURL + 'files/upload', data)
    } catch (error) {
        throw(error)
    }
}
