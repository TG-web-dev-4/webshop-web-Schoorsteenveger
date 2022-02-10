let lastId = 0;

export default function shoppingCartreducer(state = [], action) {
    switch (action.type) {
        case 'houseAdded':
            return [
                ...state,

                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case "houseRemoved":
            return state.filter(house => house.id !== action.payload.id);
        default:
            return state;
    }
}
// // if else
//  export default function reducer(state = [], action) {
//     if (action.type === 'productAdded')
//         return [
//             ...state,
//             {
//                 id: ++lastId,
//                 description: action.payload.description,
//                 resolved: false
//             }
//         ];
//     else if (action.type === 'productRemoved')
//         return state.filter(product => product.id !== action.payload.id);

//     return state;
// }

// switch
