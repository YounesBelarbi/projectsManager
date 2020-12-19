const initialState = {
    title: 'Bonjour',
    results: {},
    question: "Pour ou contre la congolemexicalisation ?",
    oui: 0,
    non: 0
  };
  
  export default (state = initialState, action) => {
    console.log('reducer[votes] >>',action);
  
    switch(action.type) {

      default: {
        return state;
      }
    }
}