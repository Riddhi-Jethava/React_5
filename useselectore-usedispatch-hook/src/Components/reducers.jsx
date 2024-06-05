const initialState = {
    customers: [],
    interactions: [],
    opportunities: []
};

const crmReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return {
                ...state,
                customers: [...state.customers]
            };

        case 'ADD_INTERACTION':
            return {
                ...state,
                interactions: [...state.interactions]
            };

        case 'ADD_OPPORTUNITY':
            return {
                ...state,
                opportunities: [...state.opportunities]
            };

        default:
            return state;

    }
}

export default crmReducer;
