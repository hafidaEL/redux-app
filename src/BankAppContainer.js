/*import React, { Component } from 'react';*/
import BankApp from './BankApp';
/*import constants from './constants';*/
import bankActionCreators from './bankActionCreators';
/*import bankStore from './bankStore';*/
import { connect } from 'react-redux';

/*
class BankAppContainer extends Component {
    constructor(props) {
        super(props);
     
        this.state = { compte : bankStore.getState().compte } ;
    }
    componentDidMount() {
        this.unsubscribe = bankStore.subscribe( () => this.setState ({ compte : bankStore.getState().compte }) ) 
    }
    componentWillUnmount() {
       this.unsubscribe();
    }
    
    render() {
        return (
            <BankApp 
                compte={this.state.compte}
                onDepot={ (montant) => bankStore.dispatch(bankActionCreators.depotSurCompte(montant)) }
                onRetrait={ (montant) => bankStore.dispatch(bankActionCreators.retraitSurCompte(montant)) }
            />
        )
    }
}*/

const mapStateToProps = (state) => {
    return {
        compte : state.compte
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onDepot: (montant) => {  dispatch(bankActionCreators.depotSurCompte(montant))},
        onRetrait: (montant) => {  dispatch(bankActionCreators.retraitSurCompte(montant))},
        onToggle: () =>  {  dispatch(bankActionCreators.toggleInfo()) }
    }
}


const BankAppContainer = connect(mapStateToProps, mapDispatchToProps) (BankApp) ;
export default BankAppContainer; 