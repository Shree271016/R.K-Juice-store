import React from 'react'
import './mystyle.css'

const First = () => {
    let styleObj = {
        frontSize: '40px',
        color: 'green',
        backgroundColor: 'gray',

    }
    return (
        <div>
            <h1 style={{ color: 'blue', textAlign: 'center' }}>
                This is first component .
            </h1>
            <h1 style={styleObj}>Second Heading</h1>
            <h1 className='demo'>From external css</h1>
        </div>
    )
}

export default First