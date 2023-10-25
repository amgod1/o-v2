import { buses } from "../constants/buses"
import { trolleybuses } from "../constants/trolleybuses"

type BusNumber = keyof typeof buses
type TrolleybusNumber = keyof typeof trolleybuses
export type TransportNumber = BusNumber | TrolleybusNumber
