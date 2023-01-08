import axios from "axios"
import baseURL from "./baseurl"

const LoginApi = async ({ email, password }) => {
  console.log({ email, password })
  try {
    const res = await axios.post(
      baseURL,
      { email, password },
      {
        withCredentials: true,
      }
    )
    return res
  } catch (err) {
    throw err
  }
}

export default LoginApi
