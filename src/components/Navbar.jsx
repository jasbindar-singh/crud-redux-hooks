import React from 'react'
import Button from './Button'

function Navbar(props) {
    console.log("Navbar Rendered!")
    return (
        <div className='navbar'>
            <h1>Todo Redux Hooks</h1>
            <Button theme={props.theme}/>
        </div>
    )
}

export default Navbar
