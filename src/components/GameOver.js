import React from "react";
import {connect} from "react-redux";
import {init} from "../actions/quizActions";
import styled from "styled-components";
import {Title} from "./Question";

const Centered = styled.div`
    text-align: center;
`;

class GameOver extends React.Component {
    render() {
        const {init, grade} = this.props;
        return (
            <Centered>
                <Title>Game Over!</Title>
                <h6>Your Grade is {grade}</h6>
                <button type="button" className="btn btn-secondary" onClick={init}>Start Over</button>
            </Centered>
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