import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import Login from "../Components/Login"
import Signup from "../Components/Signup"
import homeBg from "./../Media/homeBg.jpg"
import logo from "./../Media/logo.png"

const Home = () => {
  return (
    <StyledMain>
      <header>
        <img src={logo} alt="logo" className="logo" />
        <Link to="/admin/login" className="btn">
          Admin
        </Link>
      </header>
      <section>
        <img src={homeBg} className="homeBg" alt="bus terminal" />
        <div className="overlay"></div>
        <h1>Convrse Bus Terminal</h1>
        <div className="forms">
          <Login />
          <Signup />
        </div>
      </section>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  width: 100%;
  height: 100vh;
  header {
    width: 100%;
    height: 10vh;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: calc(var(--padding) / 2) var(--padding);

    .logo {
      height: 100%;
      object-fit: cover;
    }

    .btn {
      padding: calc(var(--padding) / 3) calc(var(--padding) / 2);
      background: #fff;
      color: #000;
      border-radius: 5px;
    }
  }
  section {
    width: 100%;
    height: 90vh;
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: var(--padding);

    h1 {
      z-index: 2;
      font-size: 3rem;
      color: #fff;
    }

    .forms {
      width: 100%;
      flex: 1;
      z-index: 2;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .homeBg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #0008;
    }
  }
`
export default Home
