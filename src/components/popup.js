import React, { useState } from "react"
import ReactDOM from "react-dom"
import Modal from "styled-react-modal"

const Popup = ({ children, content }) => {
  const StyledModal = Modal.styled`
  width: 100%;
  max-width: 20rem;
  height: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`

  const [isOpen, setIsOpen] = useState(false)

  function toggleModal(e) {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button onClick={toggleModal}>{children}</button>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <button
          onClick={toggleModal}
          className="absolute top-0 right-0 w-6 h-6"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" fill="white" />
            <line
              x1="3.33793"
              y1="20.3085"
              x2="20.3085"
              y2="3.33794"
              stroke="black"
              stroke-width="0.5"
            />
            <line
              x1="3.69149"
              y1="3.33794"
              x2="20.662"
              y2="20.3085"
              stroke="black"
              stroke-width="0.5"
            />
          </svg>
        </button>
        <div className="text-sm">
          <div className="m-8">{content}</div>
        </div>
      </StyledModal>
    </>
  )
}
export default Popup
