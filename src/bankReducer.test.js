import bankReducer from './bankReducer';
import constants from './constants';


describe('Bank Reducer', () => {
  it('should return the initial state', () => {
    expect(
      bankReducer(undefined, {})
    ).toEqual(
      {
        compte : 0,
        ui: { showInfo : false}
      }
    )
  })

  it('should handle DEPOT_COMPTE', () => {
    expect(
      bankReducer(  {
                    compte : 0,
                     "ui": {"showInfo": false}
                }, {
                    type: constants.DEPOT_COMPTE,
                    montant: 300
      })
    ).toEqual(
                {
                    compte : 300,
                     "ui": {"showInfo": false}
                }
    )

  })
})