import { FC } from "react"

export const Ticket: FC = () => (
  <main>
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
    <h3 className="text--number">Рег.знак: XXXX T_№XX ()</h3>
    <div className="ticket__info">
      <div className="ticket__info--item">
        <p className="ticket__info--gray">Vehicle number</p>
        <p className="ticket__info--black">0100385</p>
      </div>
      <div className="ticket__info--item">
        <p className="ticket__info--gray">Ticket number</p>
        <p className="ticket__info--black">0100385</p>
      </div>
    </div>
    <div className="ticket__info">
      <div className="ticket__info--item">
        <p className="ticket__info--gray">Purchase date</p>
        <p className="ticket__info--black">0100385</p>
      </div>
      <div className="ticket__info--item">
        <p className="ticket__info--gray">Time</p>
        <p className="ticket__info--black">0100385</p>
      </div>
    </div>
    <h6 className="main__text--heading price">
      0,85 <span>BYN</span>
    </h6>
    <p className="main__text--paragraph">Разовый</p>
  </main>
)
