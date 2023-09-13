import React from 'react'
import "./button.scss"
export default function Button(props) {
  return (
    <button id='button' {...props} >{props.children}</button>
  )
}
