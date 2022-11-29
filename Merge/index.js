/**
 * Following Imperative way -
 * @params - Arraay
 * @returns - Array
 */
function merge(sea, fresh) {
    const result = [];
    while(sea.length !== 0 && fresh.length !== 0) {
        let fish = '';
        if(sea[0] < fresh[0]) {
            fish = sea[0]
            for(let i = 0; i < sea.length - 1; i++) {
                sea[i] = sea[i + 1];
                sea[i + 1] = sea[i];
            }
            sea.length = sea.length - 1;
        } else {
            fish = fresh[0]
            for(let i = 0; i < fresh.length - 1; i++) {
                fresh[i] = fresh[i + 1];
                fresh[i + 1] = fresh[i];
            }
            fresh.length = fresh.length - 1;
        }
        result[result.length] = fish;
    }
    return result;
}

/**
 * Following Declarative way -
 */
// function merge(sea, fresh) {
//     const result = [];
//     while(sea.length !== 0 && fresh.length !== 0) {
//         let fish = ''
//         if(sea[0] < fresh[0]) {
//             fish = sea.splice(0, 1);
//         } else {
//             fish = fresh.splice(0, 1);
//         }
//         result[result.length] = fish[0];
//     }
//     return result;
// }

const sea = ['Asp', 'Carp', 'Ide', 'Trout'];
const fresh = ['Cod', 'Herring', 'Marlin'];

const r = merge(sea, fresh);
console.log(r);