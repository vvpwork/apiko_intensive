import React from 'react';
import T from 'prop-types'

import {Checkbox } from './checkbox'
import {Icon } from './Icon'
import { Text} from './Text'

import '../index.css'



export const TodoItem = ({ todo, onSwitch }) => {
    return (
        <div className='todoItem'>
            <Checkbox {...{todo, onSwitch}} /> 
            <Text size='24px'>
                {todo.text}
            </Text>
            <Icon width='20px' color='red' name='remove' />
        </div>
    )
}


TodoItem.propTypes = {
  todo: T.shape({
    _id: T.string.isRequired,
    text: T.string.isRequired,
    complited: T.bool.isRequired
  }).isRequired,
  onSwitch: T.func.isRequired
};