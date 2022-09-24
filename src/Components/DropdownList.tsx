import React from 'react'
import DropdownItem from './DropdownItem'
import {TDropdownProps} from "../Interfaces/Interfaces"

export default function DropdownList({searchMatches, phrase} : TDropdownProps) {
  return (
    <div>{searchMatches.map((item : any) => <DropdownItem itemData={item} phrase={phrase}/>)}</div>
  )
}
