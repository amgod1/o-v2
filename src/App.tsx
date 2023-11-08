import { Header } from "./components/Header"
import { Settings } from "./components/Settings"
import { Ticket } from "./components/Ticket"
import { ModalContextProvider } from "./context/ModalContext"
import { TicketContextProvider } from "./context/TicketContext"

export const App = () => {
  return (
    <ModalContextProvider>
      <TicketContextProvider>
        {localStorage.getItem("x") ===
          "8ec13e0a9aeb4a648c0d3e6f3c82cde7a9f51e8f18cd4cf988b70e38a3a825d8b0c4d6c5c3c4e0aa39a5e8db1605fa0c4f40f9402d3d4b269bbd03d1c0d80e3691c29502da2b0b8202a9t1" && (
          <>
            <Header />
            <Ticket />
            <Settings />
          </>
        )}
      </TicketContextProvider>
    </ModalContextProvider>
  )
}
