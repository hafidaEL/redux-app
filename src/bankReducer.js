import constants from './constants';

const initialState = {
    compte : 0
}


const bankReducer = (state=initialState, action) => {
    switch (action.type) {
        case constants.DEPOT_COMPTE :
            return { compte : state.compte + parseFloat(action.montant) };  
        case constants.RETRAIT_COMPTE :
            return { compte : state.compte - parseFloat(action.montant) };  
        default :
            return state;
    }
}

export default bankReducer;
