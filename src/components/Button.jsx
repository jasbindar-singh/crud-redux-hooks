import React from 'react'
import { connect } from 'react-redux'
import { changeTheme } from '../redux/theme/theme.action'

function Button(props) {
    console.log("Button Rendered!")
    return (
        <div className='btn' onClick={props.toggleTheme}>Toggle Theme</div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        toggleTheme: function(){
            dispatch(changeTheme())
        }
    }
}

export default connect(null, mapDispatchToProps)(Button)
