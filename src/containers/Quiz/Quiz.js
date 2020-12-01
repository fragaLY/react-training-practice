import React, {Component} from 'react'
import classes from './Quiz.module.scss'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {

    state = {
        quiz: [
            {   question: 'Who is your favourite president?',
                answers: [
                    {text: 'Tikhanouskaya', id: 1},
                    {text: 'Lukashesku', id: 2},
                    {text: 'Pynia', id: 3},
                    {text: 'Trump', id: 4}
                ],
                correctAnswerId: 1
            },
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log(answerId)
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer all questions</h1>
                    <ActiveQuiz
                        onAnswerClick={this.onAnswerClickHandler}
                        question={this.state.quiz[0].question}
                        answers={this.state.quiz[0].answers}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz