import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"
import { useBus } from "../Context/BusProvider"

const Card = ({ img, name, seats }) => {
  const { setBus } = useBus()
  const navigate = useNavigate()

  const clickHandler = () => {
    setBus({ name, seats })
    navigate("/dashboard/book/")
  }

  return (
    <StyledLi onClick={clickHandler}>
      <img src={img} className="busImg" alt="bus " />
      <div className="info">
        <h4>{name}</h4>
        <span>
          Seats Available:{" "}
          {seats.reduce((t, current) => {
            if (!current) return t + 1
            return t
          }, 0)}
        </span>
      </div>
    </StyledLi>
  )
}

const StyledLi = styled.li`
  width: 20%;
  aspect-ratio: 1/1.25;
  overflow: hidden;
  background: #fff;
  color: #000;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  cursor: pointer;
  transition: transform ease 200ms;
  &:hover {
    transform: scale(1.1);
  }
  .busImg {
    width: 100%;
    height: 70%;

    object-fit: cover;
  }
  .info {
    height: 30%;
    padding: var(--padding);
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
export default Card
