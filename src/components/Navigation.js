import React from "react";
import {connect} from "react-redux";
import {doneAction, nextAction, prevAction} from "../actions/quizActions";
import data from "../data";

class Navigation extends React.Component {

    render() {
        const {currentQuestion, nextAction, prevAction, doneAction} = this.props;
        const showNextBtn = currentQuestion !== data.questions.length - 1;
        return (
            <>
                <button disabled={!currentQuestion} onClick={prevAction}>prev</button>
                {
                    showNextBtn?<button onClick={nextAction}>next</button>:<button onClick={doneAction}>done</button>
                }
            </>
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