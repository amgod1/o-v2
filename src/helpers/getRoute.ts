import { buses } from "../constants/buses"
import { trolleybuses } from "../constants/trolleybuses"

type BusNumber = keyof typeof buses
type TrolleybusNumber = keyof typeof trolleybuses
type currentNumber = BusNumber | TrolleybusNumber

export const getRoute = (
  busNumber: currentNumber,
  isBus: boolean,
  direction: boolean
) => {
  const route = isBus
    ? buses[busNumber as BusNumber]
    : trolleybuses[busNumber as TrolleybusNumber]

  return direction ? route : route.split(" - ").reverse().join(" - ")
}
