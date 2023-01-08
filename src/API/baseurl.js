const baseURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://busbooking.herokuapp.com"

export default baseURL
