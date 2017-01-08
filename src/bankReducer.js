import constants from './constants';
import { combineReducers } from 'redux';

const initialState = {
    compte : 0,
    showInfo: false
}

const uiReducer = (state = {showInfo : initialState.showInfo}, action) => {
    switch (action.type) {
        case constants.TOGGLE_INFO :
            return { showInfo : ! state.showInfo };  
        default :
            return state;
    }
} 

const montantReducer = (state={ compte : initialState.compte }, action) => {
    switch (action.type) {
        case constants.DEPOT_COMPTE :
            return { compte : state.compte + parseFloat(action.montant) };  
        case constants.RETRAIT_COMPTE :
            return { compte : state.compte - parseFloat(action.montant) };  
        default :
            return state;
    }
}
const bankReducer = combineReducers({montant: montantReducer, ui: uiReducer});

export default bankReducer;


