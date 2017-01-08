import constants from './constants';

const bankActionCreators = {
   depotSurCompte(montant) {
        return  { type: constants.DEPOT_COMPTE , montant  } ;
   } ,
   retraitSurCompte(montant) {
        return  { type: constants.RETRAIT_COMPTE , montant  } ;
   }
};

export default bankActionCreators;