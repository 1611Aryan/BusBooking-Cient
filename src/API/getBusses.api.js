import axios from "axios"
import baseURL from "./baseurl"

const getBussesAPI = async () => {
  try {
    const res = await axios.get(baseURL + "/bus/view", {
      withCredentials: true,
    })
    return res.data.payload
  } catch (err) {
    throw err
  }
}

export default getBussesAPI
