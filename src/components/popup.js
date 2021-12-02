import React, { useState } from "react"
import ReactDOM from "react-dom"
import Modal from "styled-react-modal"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Popup = ({ children, headline, content, product }) => {
  console.log({product})
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
          className="absolute top-0 right-0 w-6 h-6 m-2"
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
        {!product ? <div className="text-sm">
          {headline && <h5 className="m-8">{headline}</h5>}
          <div className="m-8">{content}</div>
        </div> :
        <div className="">
          <div className="m-8">
            <p className="mr-4">{product.Title}, ${product.Price}</p>
            <div className="my-8 aspect-w-4 aspect-h-4">
              <img src={product.Images[0].thumbnails.full.url} alt={product.Title} />
            </div>
            {product.Status === "Available" ? <OutboundLink href={product.URL} className="primary-button w-full">Buy</OutboundLink> : <span className="primary-button w-full block opacity-25 pointer-events-none">Sold Out</span>}
          </div>
        </div>
  }
      </StyledModal>
    </>
  )
}
export default Popup
