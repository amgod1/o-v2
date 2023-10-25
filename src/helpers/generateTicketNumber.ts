export const generateTicketNumber = () => {
  let ticketNumber = "ES"

  for (let i = 0; i < 9; i++) {
    ticketNumber += Math.floor(Math.random() * 10)
  }

  return ticketNumber
}
