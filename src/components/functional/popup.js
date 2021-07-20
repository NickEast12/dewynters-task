import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const PopupStyles = styled.aside`
  width: 100%;
  height: 100%;
  background: var(--secondaryAlpha);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  transition: all 0.35s ease;
  animation: backgroundIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  .pop {
    animation: in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 1.5rem 2rem 1.5rem;
    width: 70%;
    border-radius: 1px;
    margin: var(--auto);
    background: #fff;
    @media only screen and (min-width: 768px) {
      width: 40%;
    }
    @media only screen and (min-width: 1280px) {
      width: 40%;
      p {
        font-size: 25px;
      }
      strong {
        font-size: 25px;
      }
    }
    .close {
      position: absolute;
      background: none;
      top: 0.75rem;
      right: 1rem;
      border: solid 2px var(--main);
      border-radius: 1.5px;
      width: 20px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        width: 20px;
        height: 2px;
        background: var(--main);
      }
    }
    p {
      margin: 0;
      padding: 0;
      span {
        color: var(--secondary);
        font-weight: 800;
      }
    }
    strong {
      margin-top: 1rem;
      span {
        color: var(--secondary);
      }
    }
  }
`
function Popup(props) {
  const { trigger, setTrigger } = props
  return trigger ? (
    <PopupStyles onClick={() => setTrigger(false)}>
      <div className="pop">
        <button
          type="button"
          className="close"
          onClick={() => setTrigger(false)}
        >
          <div />
        </button>
        <p>
          You selected <span>Sunday 11 April 2021 at 7pm</span> as your original
          performance date.
        </p>
        <strong>
          Your new performance date will be: <br />
          <span>Sunday 20 June 2021, 7PM</span>
        </strong>
      </div>
    </PopupStyles>
  ) : (
    ''
  )
}

Popup.propTypes = {
  setTrigger: PropTypes.func,
  trigger: PropTypes.any,
}

export default Popup
