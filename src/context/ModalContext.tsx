import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react"

interface ModalContext {
  showModal: boolean
  setShowModalHandler: () => void
}

const ModalContext = createContext<ModalContext>({
  showModal: false,
  setShowModalHandler: () => {},
})

export const ModalContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const setShowModalHandler = () => setShowModal((prev) => !prev)

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModalHandler,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => useContext(ModalContext)
