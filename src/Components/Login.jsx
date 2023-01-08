import styled from "@emotion/styled"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginApi from "../API/login.api"
import { useUser } from "../Context/UserProvider"

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  })

  const { setUser } = useUser()
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const changeHandler = e =>
    setInput(input => ({ ...input, [e.target.name]: e.target.value }))

  const submitHandler = async e => {
    e.preventDefault()
    try {
      const res = await LoginApi(input)
      setUser(res.data.payload)
      setMessage(res.data.message)
      navigate("/dashboard")
    } catch (err) {
      console.log(err)
      setMessage(err.response.data.message)
    }
  }

  return (
    <StyledForm onSubmit={submitHandler}>
      <span>{message}</span>
      <div className="container">
        <label htmlFor="email">Email:</label>
        <br />
        <input name="email" onChange={changeHandler} type="email" required />
      </div>
      <div className="container">
        <label htmlFor="password">Password:</label>
        <br />
        <input
          name="password"
          onChange={changeHandler}
          type="password"
          required
        />
      </div>
      <button>Login</button>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  width: 35%;
  height: 75%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  background: #fffc;
  color: #000;
  padding: var(--padding);
  border-radius: 10px;

  .container {
    width: 100%;
    label {
      font-size: 1.5rem;
    }
    input {
      width: 100%;
      font-size: 1rem;
      background: coral;
    }
    > * + * {
      margin-top: 1rem;
    }
  }

  input,
  button {
    padding: calc(var(--padding) / 3) calc(var(--padding) / 4);
    border-radius: 5px;
  }

  button {
    background: #fff;
    color: coral;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
  }
`

export default Login
