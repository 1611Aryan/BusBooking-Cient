import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import getBussesAPI from "../API/getBusses.api"
import Card from "../Components/Card"
import logo from "./../Media/logo.png"

const Dashboard = () => {
  const [busses, setBusses] = useState([])

  const busImages = [
    "https://townsquare.media/site/723/files/2018/09/simplyusandabus.jpg?w=980&q=75",
    "https://tvnz-1-news-prod.cdn.arcpublishing.com/resizer/mm8iWiGGHEbpu9KkU1FdrMv_IPw=/800x450/filters:format(jpg):quality(70):focal(-5x-5:5x5)/cloudfront-ap-southeast-2.images.arcpublishing.com/tvnz/T57XOU6KWFG4HDYBYTZ3IDO5IU.jpg",
    "https://live.staticflickr.com/2274/2213560395_29f63fc894_z.jpg",
  ]

  const logout = () => {
    localStorage.removeItem("User")
    window.location.reload()
  }

  useEffect(() => {
    ;(async () => {
      try {
        const data = await getBussesAPI()
        setBusses(data)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  return (
    <StyledDashboard>
      <header>
        <img src={logo} alt="logo" className="logo" />
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </header>
      <section>
        <h1>Available Busses</h1>
        <ul className="cards">
          {busses.map((bus, index) => (
            <Card
              key={index}
              img={busImages[index % busImages.length]}
              name={bus.name}
              seats={bus.seats}
            />
          ))}
        </ul>
      </section>
    </StyledDashboard>
  )
}

const StyledDashboard = styled.main`
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

    padding: var(--padding);
    position: relative;
    color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;

    flex-direction: column;

    h1 {
      font-size: 2rem;
    }

    ul {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--padding);
    }
  }
`
export default Dashboard
