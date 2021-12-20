// import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()
    // const onClick = () => {
    //     alert('Button Clicked');
    // }

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button
                    color={showAdd ? 'red' : 'green'}
                    text={showAdd ? 'Close' : 'Add'}
                    onClick={onAdd}
                />
            )}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
    // title: PropTypes.string.isRequired // if default proptypes not given then it shows error
}

// CSS for JS
{/* <h1 style={headingStyle}>{title}</h1> */ }
// const headingStyle = {
//     color:'red',
//     backgroundColor:'black'
// }

export default Header
