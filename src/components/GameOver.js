import React from "react";

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

export default GameOver;