import { FC } from "react"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import { IoIosArrowBack } from "react-icons/io"

export const Header: FC = () => {
  return (
    <header>
      <div className="header__tickets">
        <IoIosArrowBack size="2rem" />
        <h2 className="header__tickets--heading">Tickets</h2>
      </div>
      <AiOutlineQuestionCircle size="2rem" />
    </header>
  )
}
