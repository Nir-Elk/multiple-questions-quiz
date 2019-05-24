import React from "react";
import {connect} from "react-redux";
import {chooseAction} from "../actions/quizActions";
import data from "../data";
import styled from "styled-components";

const ChoiceRow = styled.div`
    cursor: pointer;
    margin-bottom: 10px;
`;

export const Title = styled.h5`
    cursor: default;
    margin-bottom: 10px;
`;

class Question extends React.Component {

    render() {
        const {answers, currentQuestion, chooseAction} = this.props;
        const current = data.questions[currentQuestion];
        return (
            <>
                <Title>{current.question}</Title>
                {current.choices.map((choice, index) =>
                    <ChoiceRow className="input-group" key={choice + index} onClick={() => chooseAction(index)}>
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input
                                    type="radio"
                                    onChange={() => null}
                                    checked={answers[currentQuestion] === index}
                                    name="choice"
                                    value={choice}/>

                            </div>
                        </div>
                        <span type="text" className="form-control">{choice}</span>
                    </ChoiceRow>
                )}
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