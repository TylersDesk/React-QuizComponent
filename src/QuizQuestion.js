import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
    constructor (props) {
        super(props);
    }

    handleClick(buttonText) {
        if (this.props.quiz_question.answer === buttonText) {
            this.props.showNextQuestionHandler();
        }
    }

    render() {
        
        let answers = this.props.quiz_question.answer_options.map((answer,index)=>
            <QuizQuestionButton 
                clickHandler={this.handleClick.bind(this)} 
                key={index} 
                button_text={answer}/>
        ) 

        return (
        <main>
            <section>
                <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
                <ul>
                    {answers}
                </ul>
            </section>
        </main>
        )
    }
}

export default QuizQuestion;