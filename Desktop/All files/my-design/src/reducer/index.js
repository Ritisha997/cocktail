


export const reducer = (state=[], action) =>{
if(action.type === 'SET_COCKTAILS'){
    return [action.value]
}
return state;
}
export const setTheCocktail = (value) => {
	type: "SET_COCKTAILS", value;
};


