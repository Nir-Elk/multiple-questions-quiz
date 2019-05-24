import React from "react";
import {connect} from "react-redux";
import {doneAction, nextAction, prevAction} from "../actions/quizActions";
import data from "../data";
import styled from "styled-components";

const FlexBox = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:space-between;
`;

class Navigation extends React.Component {

    render() {
        const {currentQuestion, nextAction, prevAction, doneAction} = this.props;
        const showNextBtn = currentQuestion !== data.questions.length - 1;
        return (
            <FlexBox>
                <button type="button" className="btn btn-secondary" disabled={!currentQuestion} onClick={prevAction}>prev</button>
                {
                    showNextBtn?<button type="button" className="btn btn-secondary" onClick={nextAction}>next</button>:<button type="button" className="btn btn-secondary" onClick={doneAction}>done</button>
                }
            </FlexBox>
        );
    }
}

function mapStateToProps(state) {
    const {quiz} = state;
    return {
        currentQuestion: quiz.currentQuestion
    }
}

export default connect(mapStateToProps, {nextAction, prevAction, doneAction})(Navigation);