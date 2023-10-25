import { useMemo } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { useModalContext } from "../context/ModalContext"
import { useTicketContext } from "../context/TicketContext"
import { buses } from "../constants/buses"
import { getRoute } from "../helpers/getRoute"
import { trolleybuses } from "../constants/trolleybuses"

export const Settings = () => {
  const { showModal, setShowModalHandler } = useModalContext()
  const {
    dateInfo,
    setDateInfoHandler,
    isBus,
    setBusTransport,
    setTrolleybusTransport,
    busNumber,
    setBusNumberHandler,
    busId,
    setBusIdHandler,
    direction,
    setForwardDirection,
    setBackwardDirection,
    ticketsCount,
    setTicketsCountHandler,
  } = useTicketContext()

  const sortedBuses = useMemo(() => {
    const transport = isBus ? buses : trolleybuses
    return Object.keys(transport).sort((a, b) => parseInt(a) - parseInt(b))
  }, [isBus])

  return (
    showModal && (
      <section className="settings__wrapper">
        <button className="settings--close" onClick={setShowModalHandler}>
          <AiOutlineCloseCircle size="2rem" />
        </button>
        <div className="settings--items">
          <div className="settings--item">
            <p>time: {dateInfo.time}</p>
            <button className="settings--button" onClick={setDateInfoHandler}>
              update time
            </button>
          </div>
          <div className="settings--item">
            <button
              className={`settings--button ${isBus && "active-button"}`}
              onClick={setBusTransport}
            >
              bus
            </button>
            <button
              className={`settings--button ${!isBus && "active-button"}`}
              onClick={setTrolleybusTransport}
            >
              trolleybus
            </button>
          </div>
          <div className="settings--item">
            <p>number:</p>
            <select
              className="settings--select"
              value={busNumber}
              onChange={setBusNumberHandler}
            >
              {sortedBuses.map((bus) => (
                <option key={bus}>{bus}</option>
              ))}
            </select>
          </div>
          <div className="settings--item">
            <p>id:</p>
            <input
              className="settings--input"
              value={busId}
              onChange={setBusIdHandler}
            />
          </div>
          <div className="settings--item">
            <button
              className={`settings--button ${direction && "active-button"}`}
              onClick={setForwardDirection}
            >
              forward
            </button>
            <button
              className={`settings--button ${!direction && "active-button"}`}
              onClick={setBackwardDirection}
            >
              backward
            </button>
          </div>
          <p>{getRoute(busNumber, isBus, direction)}</p>
          <div className="settings--item">
            {[1, 2, 3, 4, 5].map((number) => (
              <button
                key={number}
                className={`settings--button ${
                  ticketsCount === number && "active-button"
                }`}
                onClick={setTicketsCountHandler(number)}
              >
                {number}
              </button>
            ))}
          </div>
        </div>
      </section>
    )
  )
}
