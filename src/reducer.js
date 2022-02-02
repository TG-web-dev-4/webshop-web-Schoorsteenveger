let lastId = 0;
// if else
 export default function reducer(state = [], action) {
    if (action.type === 'bugAdded')
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ];
    else if (action.type === 'bugRemoved')
        return state.filter(bug => bug.id !== action.payload.id);

    return state;
}

// // switch
// function reducer(state = [], action) {
//     switch (action.type) {
//         case 'bugAdded':
//             return [
//                 ...state,

//                 {
//                     id: ++lastId,
//                     description: action.payload.description,
//                     resolved: false
//                 }
//             ];
//         case "bugremoved":
//             return state.filter(bug => bug.id !== action.payload.id);
//         default:
//             return state;
//     }
// }