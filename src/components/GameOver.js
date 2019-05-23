import React from "react";
import {connect} from "react-redux";
import {init} from "../actions/quizActions";

class GameOver extends React.Component {
    render() {
        const {init, grade} = this.props;
        return (
            <>
                <button onClick={init}>Start Over</button>
                {grade}
            </>
        );
    }
}

function mapStateToProps(state) {
    const {quiz} = state;
    return {
        grade: quiz.grade
    }
}

export default connect(mapStateToProps, {init})(GameOver);