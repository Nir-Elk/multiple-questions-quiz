import React from "react";

class Navigation extends React.Component {

    render() {
        const {currentQuestion,prevClick,nextClick,doneClick,showNextBtn} = this.props;
        return(
          <>
              <button disabled={!currentQuestion} onClick={prevClick}>
                  prev
              </button>

              {
                  showNextBtn &&
                  <button onClick={nextClick}>next</button>
              }
              {
                  !showNextBtn &&
                  <button onClick={doneClick}>done</button>
              }

          </>
        );
    }
}

export default Navigation;