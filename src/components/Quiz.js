import React from 'react';
import Question from "./Question";
import Navigation from "./Navigation";
import GameOver from "./GameOver";
import {connect} from "react-redux";

class Quiz extends React.Component {
    render() {
        return this.props.grade === false ? <><Question/><Navigation/></> : <GameOver/>;
    }
}

function mapStateToProps(state) {
    const {quiz} = state;
    return {
        grade: quiz.grade
    }
}

export default connect(mapStateToProps)(Quiz);
