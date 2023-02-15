import { createContext, useState } from "react";

interface IModelContext {
  modal: boolean
  open:() => void
  close: () => void
}

export const ModalContext = createContext <IModelContext> ({
  modal: false,
  open: () => {},
  close: () => {}
})

export const ModalState = ({ children }: {children: React.ReactNode}) => {
  const [modal, setModel] = useState(false)

  const open = () => setModel(true)
  const close = () => setModel(false)
  return (
    <ModalContext.Provider value={{ modal, open, close }}>
      { children }
    </ModalContext.Provider>
  )
}