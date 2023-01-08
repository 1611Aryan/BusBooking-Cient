import styled from "@emotion/styled"

const Seat = ({ booked, seat, setModal, setSeat }) => {
  const clickHandler = () => {
    setSeat(seat)
    setModal(true)
  }

  return (
    <StyledLi className={booked ? "booked" : ""} onClick={clickHandler}>
      {seat}
    </StyledLi>
  )
}

const StyledLi = styled.li`
  width: 6rem;
  aspect-ratio: 1/1;
  border-radius: 5px;
  background: #fff;
  border: 2px solid #222;
  color: #000;
  cursor: pointer;

  display: grid;
  place-items: center;
`
export default Seat
