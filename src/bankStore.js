import { createStore } from 'redux';
import bankReducer from './bankReducer';

const bankStore = createStore(bankReducer);

export default bankStore;