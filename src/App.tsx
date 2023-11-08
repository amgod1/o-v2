import { useEffect } from "react"
import { Header } from "./components/Header"
import { Settings } from "./components/Settings"
import { Ticket } from "./components/Ticket"
import { ModalContextProvider } from "./context/ModalContext"
import { TicketContextProvider } from "./context/TicketContext"
import { x } from "./constants/x"

export const App = () => {
  if (localStorage.getItem("x") !== x) {
    return null
  }

  return (
    <ModalContextProvider>
      <TicketContextProvider>
        <Header />
        <Ticket />
        <Settings />
      </TicketContextProvider>
    </ModalContextProvider>
  )
}
