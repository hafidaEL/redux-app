import constants from './constants';
import { combineReducers } from 'redux';

const initialState = {
    montantInitial : 0 ,
    ui : {
        showinfo : false
    }
}

const uiReducer = (state=initialState.ui, action) =>{
    switch (action.type) {
        case constants.TOGGLE_INFO :
            console.log('TOGGLE_INFO, state :'+state.showinfo);
            return Object.assign({}, {showinfo : !state.showinfo})
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


