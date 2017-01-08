import constants from './constants';
import { combineReducers } from 'redux';

const initialState = {
    montantInitial : 0,
    initialUI : {
        showInfo: false
    }
}

const uiReducer = (state = initialState.initialUI, action) => {
    switch (action.type) {
        case constants.TOGGLE_INFO :
            console.log("showinfo "+state.showInfo);
            return { showInfo : ! state.showInfo };  
        default :
            return state;
    }
} 

const montantReducer = (state = initialState.montantInitial , action) => {
    switch (action.type) {
        case constants.DEPOT_COMPTE :
            return state + parseFloat(action.montant) ;  
        case constants.RETRAIT_COMPTE :
            return state - parseFloat(action.montant) ;  
        default :
            return state;
    }
}
const bankReducer = combineReducers({compte: montantReducer, ui: uiReducer});

export default bankReducer;


