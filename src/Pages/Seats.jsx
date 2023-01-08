import styled from "@emotion/styled"
import { useState } from "react"
import BookModal from "../Components/BookModal"
import Seat from "../Components/Seat"
import { useBus } from "../Context/BusProvider"
import logo from "./../Media/logo.png"

const Seats = () => {
  const { bus } = useBus()
  const [modal, setModal] = useState()
  const [seat, setSeat] = useState(0)
  return (
    <StyledMain>
      {modal && <BookModal setModal={setModal} seat={seat} />}
      <header>
        <img src={logo} alt="logo" className="logo" />
        <button className="btn">Logout</button>
      </header>
      <section className="main">
        <h1>Book Seats</h1>
        <h4>{bus.name}</h4>
        <ul>
          {bus.seats.map((s, i) => (
            <Seat
              key={i}
              booked={s}
              seat={i + 1}
              setSeat={setSeat}
              setModal={setModal}
            />
          ))}
        </ul>
      </section>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  width: 100%;

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
  .main {
    width: 100%;
    min-height: 90vh;
    height: auto;

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
    h4 {
      font-size: 1.5rem;
    }
    ul {
      margin-top: 10%;
      align-self: center;
      width: 65%;
      display: flex;
      flex-wrap: wrap;
      gap: calc(var(--padding));

      .booked {
        background: #999;
        cursor: no-drop;
      }
    }
  }
`
export default Seats
