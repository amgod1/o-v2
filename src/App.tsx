import { Header } from "./components/Header"
import { Settings } from "./components/Settings"
import { Ticket } from "./components/Ticket"
import { ModalContextProvider } from "./context/ModalContext"
import { TicketContextProvider } from "./context/TicketContext"

export const App = () => {
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
