import React, {useState } from 'react';
import T from 'prop-types'

export const TodoInput = ({ onAdd }) => {
const [value, setInput] = useState('')

    const handleChangeInput = ({target:{value} }) => {
        setInput(value)
    }
    
    const handleSubmit = ev => {
        ev.preventDefault()
        if(value === '') return
        onAdd(value);
        setInput('')

    }
    return (
        <form className ='form' onSubmit={handleSubmit}>
            <input type="text" name='todoinput' value={value} onChange={handleChangeInput} />
        </form>
    )
}

TodoInput.propTypes = {
    onAdd: T.func.isRequired,  
}