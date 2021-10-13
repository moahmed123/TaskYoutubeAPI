export const initialState = {    
    data: []
};

const reducer = (state = [], action) => {
    const reduced = { ...state };

    switch (action.type) {

        case "SEARCH_DATA_YOUTUBE":
            return {
                ...reduced,
                data: action.payload.data.items
            };  
        case "Sub_header_YOUTUBE":
            return {
                ...reduced,
                subHeader: action.payload.data.pageInfo
            };
        case "Loading_DATA_YOUTUBE":
            return {
                ...reduced,
                Loading: true
            }; 
        case "VALUE_OF_SEARCH":
            return {
                ...reduced,
                SeachValue: action.payload
            };        
        default:
            return state;
    }
};

export default reducer;
