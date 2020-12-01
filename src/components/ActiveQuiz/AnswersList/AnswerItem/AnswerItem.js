import React from 'react';
import classes from './AnswerItem.module.scss'

const AnswerItem = props => (
    <li
        className={classes.AnswerItem}
        onClick={() => props.onAnswerClick(props.answer.id)}>
        {props.answer.text}
    </li>
)


export default AnswerItem