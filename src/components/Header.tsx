import { FC } from "react"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import { IoIosArrowBack } from "react-icons/io"
import { useModalContext } from "../context/ModalContext"

export const Header: FC = () => {
  const { setShowModalHandler } = useModalContext()

  return (
    <header>
      <div className="header__tickets">
        <IoIosArrowBack size="1.5rem" />
        <h2 className="header__tickets--heading">Tickets</h2>
      </div>
      <button className="header__button" onClick={setShowModalHandler}>
        <AiOutlineQuestionCircle size="1.5rem" />
      </button>
    </header>
  )
}
