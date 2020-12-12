import React from 'react';
import classes from './AnswerItem.module.scss'

const AnswerItem = props => {

    const cls = [classes.AnswerItem]

    if (props.answerState) {
        console.log("Answer state: " + props.answerState);

        cls.push(classes[props.answerState])
    }

    return (
        <li
            className={cls.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}>
            {props.answer.text}
        </li>
    )
}


export default AnswerItem