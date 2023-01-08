import styled from "@emotion/styled"
import { useState } from "react"
import bookAPI from "../API/ book.api"
import { useBus } from "../Context/BusProvider"

const BookModal = ({ seat, setModal }) => {
  const cancel = () => {
    setModal(false)
    window.location.reload()
  }
  const { bus } = useBus()
  const [message, setMessage] = useState("")

  const book = async () => {
    try {
      const res = await bookAPI({ name: bus.name, seat })
      setMessage(res.data.message)
    } catch (err) {
      setMessage("Please Try Again Later")
      console.log(err)
    }
  }

  return (
    <StyledSection onClick={cancel}>
      <div onClick={e => e.stopPropagation()}>
        {message ? (
          message
        ) : (
          <>
            <h2>Are You sure you want to book Seat: {seat}</h2>
            <button onClick={book}>Confirm</button>
          </>
        )}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0008;
  backdrop-filter: blur(2px);

  display: grid;
  place-items: center;

  div {
    padding: calc(var(--padding) * 2);
    width: 40%;
    color: #000;
    background: #fff;
    border-radius: 10px;
    button {
      margin-top: 3rem;
      background: green;
      border-radius: 10px;
      color: #fff;
      padding: calc(var(--padding) / 2) var(--padding);
    }
  }
`
export default BookModal
