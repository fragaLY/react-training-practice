import React, {Component} from 'react'
import classes from './Quiz.module.scss'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {

    state = {
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: 'Who is your favourite president?',
                id: 1,
                answers: [
                    {text: 'Tikhanouskaya', id: 1},
                    {text: 'Lukashenko', id: 2},
                    {text: 'Zelenskiy', id: 3},
                    {text: 'Trump', id: 4}
                ],
                correctAnswerId: 1
            },
            {
                question: 'The latest BY election date is ?',
                id: 2,
                answers: [
                    {text: '14 August 2020', id: 1},
                    {text: '15 August 2020', id: 2},
                    {text: '11 August 2020', id: 3},
                    {text: '9 August 2020', id: 4}
                ],
                correctAnswerId: 4
            },
        ]
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    onAnswerClickHandler = answerId => {
        const question = this.state.quiz[this.state.activeQuestion]

        if (question.correctAnswerId === answerId) {

            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('Finished quiz')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)


        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer all questions</h1>
                    <ActiveQuiz
                        onAnswerClick={this.onAnswerClickHandler}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        answerState={this.state.answerState}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz