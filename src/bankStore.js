import { createStore, applyMiddleware } from 'redux';
import bankReducer from './bankReducer';

/*Exemple de middleware = un logger permettant de tracer toutes les actions dispatchées*/
const logger = (store) => (next) => (action) => {
    console.log("dispatching : ", action);
    return next(action);
};

const bankStore = createStore(
    bankReducer, 
    applyMiddleware(logger)
);


export default bankStore;