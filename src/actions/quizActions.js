export const CHOOSE_ACTION = "CHOOSE_ACTION" ;
export const NEXT_ACTION = "NEXT_ACTION" ;
export const PREV_ACTION = "PREV_ACTION" ;
export const DONE_ACTION = "DONE_ACTION" ;
export const INIT_ACTION = "INIT_ACTION" ;

export const chooseAction = (choice) => dispatch => {
    dispatch({
        type: CHOOSE_ACTION,
        payload: choice
    })
};

export const nextAction = () => dispatch => {
    dispatch({
        type: NEXT_ACTION
    })
};

export const prevAction = () => dispatch => {
    dispatch({
        type: PREV_ACTION
    })
};

export const doneAction = () => dispatch => {
    dispatch({
        type: DONE_ACTION
    })
};

export const init = () => dispatch => {
    dispatch({
        type: INIT_ACTION
    })
};