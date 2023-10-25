import { FC } from "react"
import { useTicketContext } from "../context/TicketContext"
import { getRoute } from "../helpers/getRoute"
import { generateTicketNumber } from "../helpers/generateTicketNumber"

export const Ticket: FC = () => {
  const { dateInfo, isBus, busNumber, busId, direction, ticketsCount } =
    useTicketContext()

  return [...Array(ticketsCount)].map((_, index) => (
    <div className="main" key={index}>
      <div className="main__logo">
        <img src="./logo.gif" className="main__logo--gif" alt="logo" />
      </div>
      <div className="main__text">
        <h6 className="main__text--heading">Минск</h6>
        <p className="main__text--paragraph">
          Государственное предприятие "Минсктранс"
        </p>
      </div>
      <div className="images">
        <img src="./qr-code.svg" alt="qr-code" />
        <img src="./buses.png" alt="qr-code" />
      </div>
      <h3 className="text--number">
        Рег.знак: {busId} {isBus ? "A" : "T"}_№{busNumber} (
        {getRoute(busNumber, isBus, direction)})
      </h3>
      <div className="ticket__info">
        <div className="ticket__info--item">
          <p className="ticket__info--gray">Vehicle number</p>
          <p className="ticket__info--black">0100385</p>
        </div>
        <div className="ticket__info--item">
          <p className="ticket__info--gray">Ticket number</p>
          <p className="ticket__info--black">{generateTicketNumber()}</p>
        </div>
      </div>
      <div className="ticket__info">
        <div className="ticket__info--item">
          <p className="ticket__info--gray">Purchase date</p>
          <p className="ticket__info--black">{dateInfo.date}</p>
        </div>
        <div className="ticket__info--item">
          <p className="ticket__info--gray">Time</p>
          <p className="ticket__info--black">{dateInfo.time}</p>
        </div>
      </div>
      <h6 className="main__text--heading price">
        0,85 <span>BYN</span>
      </h6>
      <p className="main__text--paragraph">Разовый</p>
    </div>
  ))
}
