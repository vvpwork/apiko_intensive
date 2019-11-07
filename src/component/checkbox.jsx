/*eslint-disable */
import React, { useState, useEffect} from 'react';
import T from 'prop-types'

export const Checkbox = ({ todo, onSwitch }) => {
    const [checked, setChecked] = useState(false);
    const onChange = ({ target: { value } }) => {
        onSwitch(value);
        setChecked(!checked)
    }
    useEffect(() => {
         setChecked(todo.complited)
     }, [])


    return <input type="checkbox" value= {todo._id} onChange={onChange} checked={checked }/>
}



Checkbox.propTypes = {
    todo: T.shape({
        _id: T.string.isRequired,
        text: T.string.isRequired,
        complited: T.bool.isRequired
    }).isRequired,
    onSwitch: T.func.isRequired
}