/*import React, { Component } from 'react';*/
import BankApp from './BankApp';
/*import constants from './constants';*/
import bankActionCreators from './bankActionCreators';

const {toggleInfo, depotSurCompte , retraitSurCompte} = bankActionCreators ; 

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
    console.log("state ??? "+state);
    return {
        compte : state.compte,
        showInfo : state.ui.showinfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onDepot: (montant) => {  dispatch(depotSurCompte(montant))},
        onRetrait: (montant) => {  dispatch(retraitSurCompte(montant))},
        onToggle: ()=>{ dispatch(toggleInfo()) }
    }
}


const BankAppContainer = connect(mapStateToProps, mapDispatchToProps) (BankApp) ;

export default BankAppContainer; 