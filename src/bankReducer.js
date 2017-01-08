import constants from './constants';

const initialState = {
    compte : 0
}


const bankReducer = (state, action) => {
    switch (action.type) {
        case constants.CREATION_COMPTE :
            return initialState;
        case constants.DEPOT_COMPTE :
            console.log("debug depot : "+state.compte + parseFloat(action.montant));
            return { compte : state.compte + parseFloat(action.montant) };  
        case constants.RETRAIT_COMPTE :
            return { compte : state.compte - parseFloat(action.montant) };  
        default :
            return state;
    }
}

export default bankReducer;
