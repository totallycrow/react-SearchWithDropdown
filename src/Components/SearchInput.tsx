import React from 'react'
import {TInputProps} from "../Interfaces/Interfaces"


export default function SearchInput({inputValue, inputHandler} : TInputProps) {
  return (
    <div>
        <input type="text" value={inputValue} onChange={e => inputHandler(e)}/>
    </div>
  )
}
