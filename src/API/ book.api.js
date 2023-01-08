import axios from "axios"
import baseURL from "./baseurl"

const bookAPI = async ({ name, seat }) => {
  try {
    const res = await axios.post(
      baseURL + "/bus/book",
      { name, seat },
      {
        withCredentials: true,
      }
    )
    return res
  } catch (err) {
    throw err
  }
}

export default bookAPI
