// importer les reducers et les constantes
import bankReducer from './bankReducer';
import constants from './constants'; 

describe('Bank Reducer', () => {
  it('should return the initial state', () => {
    expect(
      bankReducer(undefined, {})
    ).toEqual(
        {
          compte : 0 ,
          ui : {
              showinfo : false
          }
        }
    )
  })

  it('quand on ajoute 300 euros à etat initial, on passe à 300 euros ', () => {
    expect(
      bankReducer(  {
                    compte : 0,
                     "ui": {
                         showinfo : false
                      }     
                }, {
                    type: constants.DEPOT_COMPTE, 
                    montant: 300
                })
    ).toEqual(
                {
                    compte : 300,
                     "ui": {
                         showinfo : false
                      }     
                }
    ) })

     it('quand on clique sur bouton toggleinfo, showinfo passe à true ', () => {
    expect(
      bankReducer(  {
                    compte : 15000,
                     "ui": {
                         showinfo : false
                      }     
                }, {
                    type: constants.TOGGLE_INFO
                })
    ).toEqual(
                {
                    compte : 15000,
                     "ui": {
                         showinfo : true
                      }     
                }
    ) })


  it('quand on clique sur bouton toggleinfo, showinfo passe à false ', () => {
      expect(
        bankReducer(  {
                      compte : 15000,
                      "ui": {
                          showinfo : true
                        }     
                  }, {
                      type: constants.TOGGLE_INFO
                  })
      ).toEqual(
                  {
                      compte : 15000,
                      "ui": {
                          showinfo : false
                        }     
                  }
      ) })

})