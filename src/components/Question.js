import React from "react";
import {connect} from "react-redux";
import {chooseAction} from "../actions/quizActions";
import data from "../data";

class Question extends React.Component {

    render() {
        const {answers, currentQuestion, chooseAction} = this.props;
        const current = data.questions[currentQuestion];
        return (
            <>
                <div>{current.question}</div>
                <div>
                    {current.choices.map((choice, index) =>
                        <div key={choice + index} onClick={() => chooseAction(index)}>
                            <input
                                type="radio"
                                onChange={() => null}
                                checked={answers[currentQuestion] === index}
                                name="choice"
                                value={choice}/>
                            {choice}
                        </div>
                    )}
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    const {quiz} = state;
    return {
        currentQuestion: quiz.currentQuestion,
        answers: quiz.answers
    }
}

export default connect(mapStateToProps, {chooseAction})(Question);