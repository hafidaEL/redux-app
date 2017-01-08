import constants from './constants';

const bankActionCreators = {
   depotSurCompte(montant) {
        return  { type: constants.DEPOT_COMPTE , montant  } ;
   } ,
   retraitSurCompte(montant) {
        return  { type: constants.RETRAIT_COMPTE , montant  } ;
   },
   toggleInfo() {
       return { type: constants.TOGGLE_INFO }
   }
};

export default bankActionCreators;