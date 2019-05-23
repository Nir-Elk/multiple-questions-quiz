import React from "react";

class Question extends React.Component{

    render() {

        const {current,answers,currentQuestion,onChoose} = this.props;
        return(
            <>
                <div>{current.question}</div>
                <div>
                    {current.choices.map((choice, index) => <div key={choice + index}
                                                                 onClick={() => onChoose(index)}>
                        <input
                            type="radio" onChange={() => null}
                            checked={answers[currentQuestion] === index}
                            name="choice"
                            value={choice}/>{choice}</div>)}
                </div>
            </>
        );
    }

}

export default Question;