import React from 'react'
import { useDispatch } from 'react-redux'
import { changeTheme } from '../redux/theme/theme.action'

function Button() {
    console.log("Button Rendered!")

    const dispatch = useDispatch()

    return (
        <div className='btn' onClick={() => dispatch(changeTheme())}>Toggle Theme</div>
    )
}

// function mapDispatchToProps(dispatch){
//     return {
//         toggleTheme: function(){
//             dispatch(changeTheme())
//         }
//     }
// }

// export default connect(null, mapDispatchToProps)(Button)
export default Button
