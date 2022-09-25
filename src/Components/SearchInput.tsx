import React from 'react'
import {TInputProps} from "../Interfaces/Interfaces"


export default function SearchInput({inputValue, inputHandler} : TInputProps) {
  return (
    <div>
        <input type="text" placeholder="Type to search..." value={inputValue} onChange={e => inputHandler(e)}/>
    </div>
  )
}
