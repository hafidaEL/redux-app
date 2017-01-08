import constants from './constants';
import bankActionCreators from './bankActionCreators';


describe('actions', () => {
  it('devrait creer une action depot sur compte', () => {
    const montant = 500;
    const expectedAction = {
      type: constants.DEPOT_COMPTE,
      montant
    }
    expect(bankActionCreators.depotSurCompte(montant)).toEqual(expectedAction)
  })
})