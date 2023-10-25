import {
  FC,
  PropsWithChildren,
  ChangeEvent,
  createContext,
  useContext,
  useState,
} from "react"
import { DateInfo, getCurrentDateInfo } from "../helpers/getCurrentDateInfo"
import { TransportNumber } from "../types/TransportNumber"

interface TicketContext {
  dateInfo: DateInfo
  setDateInfoHandler: () => void

  isBus: boolean
  setBusTransport: () => void
  setTrolleybusTransport: () => void

  busNumber: TransportNumber
  setBusNumberHandler: (event: ChangeEvent<HTMLSelectElement>) => void

  busId: string
  setBusIdHandler: (event: ChangeEvent<HTMLInputElement>) => void

  direction: boolean
  setForwardDirection: () => void
  setBackwardDirection: () => void

  ticketsCount: number
  setTicketsCountHandler: (newCount: number) => () => void
}

const TicketContext = createContext<TicketContext>({
  dateInfo: { time: "", date: "" },
  setDateInfoHandler: () => {},

  isBus: true,
  setBusTransport: () => {},
  setTrolleybusTransport: () => {},

  busNumber: "1",
  setBusNumberHandler: () => {},

  busId: "",
  setBusIdHandler: () => {},

  direction: true,
  setForwardDirection: () => {},
  setBackwardDirection: () => {},

  ticketsCount: 1,
  setTicketsCountHandler: () => () => {},
})

export const TicketContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [dateInfo, setDateInfo] = useState<DateInfo>(
    (JSON.parse(localStorage.getItem("dateInfo")!) as DateInfo) || {
      time: "",
      date: "",
    }
  )
  const [isBus, setIsBus] = useState<boolean>(
    Boolean(localStorage.getItem("isBus")) || false
  )
  const [busNumber, setBusNumber] = useState<TransportNumber>(
    (localStorage.getItem("busNumber") as TransportNumber) || "1"
  )
  const [busId, setBusId] = useState<string>(
    localStorage.getItem("busId") || ""
  )
  const [direction, setDirection] = useState<boolean>(
    Boolean(localStorage.getItem("direction")) || false
  )
  const [ticketsCount, setTicketsCount] = useState<number>(() => {
    const storedTicketsCount = localStorage.getItem("ticketsCount")
    return typeof storedTicketsCount === "string"
      ? parseInt(storedTicketsCount)
      : 1
  })

  const setDateInfoHandler = () => {
    const currentDateInfo = getCurrentDateInfo()

    localStorage.setItem("dateInfo", JSON.stringify(currentDateInfo))
    setDateInfo(currentDateInfo)
  }

  const setBusTransport = () => {
    localStorage.setItem("isBus", " ")
    setIsBus(true)

    localStorage.setItem("busNumber", "1")
    setBusNumber("1")
  }
  const setTrolleybusTransport = () => {
    localStorage.setItem("isBus", "")
    setIsBus(false)

    localStorage.setItem("busNumber", "1")
    setBusNumber("1")
  }

  const setBusNumberHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedNumber = event.target.value as TransportNumber

    localStorage.setItem("busNumber", selectedNumber)
    setBusNumber(selectedNumber)
  }

  const setBusIdHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedId = event.target.value

    localStorage.setItem("busId", selectedId)
    setBusId(selectedId)
  }

  const setForwardDirection = () => {
    localStorage.setItem("direction", " ")
    setDirection(true)
  }

  const setBackwardDirection = () => {
    localStorage.setItem("direction", "")
    setDirection(false)
  }

  const setTicketsCountHandler = (newCount: number) => () => {
    localStorage.setItem("ticketsCount", String(newCount))
    setTicketsCount(newCount)
  }

  return (
    <TicketContext.Provider
      value={{
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
      }}
    >
      {children}
    </TicketContext.Provider>
  )
}

export const useTicketContext = () => useContext(TicketContext)
