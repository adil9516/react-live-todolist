import React, { useState } from 'react'
import List from './List'
function App(){
	const [Inputlist,setInputlist]=useState('')
	const [Items,setItems] = useState([])
    function ItemEvent(event){
        setInputlist(event.target.value)

	}
	const listofIttems=()=>{
		setItems((oldvalues)=>{
			return [...oldvalues,Inputlist]
		})
		setInputlist("")
	}
	const deleteItem=(id)=>{
		setItems((oldvalues)=>{
			return oldvalues.filter((arrElements,index)=>{
				return index !== id
			})

		})
        
    }
    return(<div>
    <div className='container'>
		<header>
			<b> To Do  List </b>
		</header>
        <br></br>
	<div className="input">
			<input className="ip" type="text" name="input" placeholder="Add items" onChange={ItemEvent} value={Inputlist} />
			<button className="btn-add" onClick={listofIttems}>+</button>
			
	</div>
		<div className="list">
			<ul className="li-list">
             {Items.map((itemval,index)=>{
              return <List text={itemval} onSelect={deleteItem} key={index} id={index}/>
			})}
				
               
			</ul>
		</div>
		
	</div>

    </div>)
}
export default App;