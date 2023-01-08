import axios from "axios"
import baseURL from "./baseurl"

const SignUpApi = async ({ email, password }) => {
  try {
    const res = await axios.post(
      baseURL + "/signup",
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

export default SignUpApi
