import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const List=(props)=>{
    
    return (
        <div>

        <FontAwesomeIcon onClick={()=>{

        props.onSelect(props.id)}} className="ficon" icon={faTrashAlt} /> <li className="list-item">{props.text}</li>
        </div>)
      
}

export default List
