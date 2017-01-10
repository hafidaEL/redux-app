  

  
  initialUI : {
        showInfo: false
    }


const uiReducer = (state = initialState.initialUI, action) => {
    switch (action.type) {
        case constants.TOGGLE_INFO :
            console.log("showinfo "+state.showInfo);
            return { showInfo : ! state.showInfo };  
        default :
            return state;
    }
} 

