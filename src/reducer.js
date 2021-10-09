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

        default:
            return state;
    }
};

export default reducer;
