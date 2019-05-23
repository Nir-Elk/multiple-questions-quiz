import React from 'react';
import data from '../data'
import Question from "./Question";
import Navigation from "./Navigation";
import GameOver from "./GameOver";

class Quiz extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.nextClick = this.nextClick.bind(this);
        this.prevClick = this.prevClick.bind(this);
        this.onChoose = this.onChoose.bind(this);
        this.doneClick = this.doneClick.bind(this);
        this.init = this.init.bind(this);
    }

    componentDidMount() {
        this.init();
    }


    nextClick() {
        this.setState(prevState => {
            prevState.currentQuestion++;
            return prevState;
        });
    }

    prevClick() {
        this.setState(prevState => {
            prevState.currentQuestion--;
            return prevState;
        });
    }

    doneClick() {
        const singleAnswerGrade = 100 / this.state.answers.length;
        this.setState(prevState=> {
            prevState.grade = prevState.answers
                .map((answer, index) => (answer === data.questions[index].correctAnswer ? singleAnswerGrade : 0))
                .reduce((current, total) => current + total);

            return prevState;
        });


    }

    onChoose(choice) {
        this.setState(prevState => {
            prevState.answers[prevState.currentQuestion] = choice;
            return prevState;
        });
    }

    init() {
        this.setState({currentQuestion: 0, answers: data.questions.map(() => -1), grade: false});
    }

    render() {
        const current = data.questions[this.state.currentQuestion];
        const showNextBtn = this.state.currentQuestion !== data.questions.length - 1;
        return (
            <div>
                {
                    this.state.grade === false &&
                    <div>
                        <Navigation showNextBtn={showNextBtn} currentQuestion={this.state.currentQuestion} prevClick={this.prevClick} nextClick={this.nextClick} doneClick={this.doneClick}/>
                        {
                            <Question current={current} onChoose={this.onChoose} answers={this.state.answers} currentQuestion={this.state.currentQuestion}/>
                        }
                    </div>
                }
                {
                    this.state.grade !== false &&
                    <GameOver init={this.init} grade={this.state.grade}/>
                }
            </div>
        );
    }
}

export default Quiz;
