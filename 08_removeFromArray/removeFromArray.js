//this is the first trial (return a wrong array)
// const removeFromArray = function (array, item) {
//     const indices = [];
//     let index = array.indexOf(item);
//     while (index !== -1) {
//         indices.push(index);
//         index = array.indexOf(item, index + 1);
//     }
//     let finalarray;
//     for (let i = 0; i < indices.length; i++) {
//         finalarray = array.splice(indices[i], 1);
//     }
//     return finalarray;
// };

//this is my second trial (5 failed 3 passed) don't accept multiple args
// const removeFromArray = function (array, item) {
//     const indices = [];
//     let index = array.indexOf(item);
//     while (index !== -1) {
//         indices.push(index);
//         index = array.indexOf(item, index + 1);
//     }
//     for (let i = indices.length - 1; i >= 0; i--) {
//         array.splice(indices[i], 1);
//     }
//     return array;
// };

//this is my third trial (this is bullshit)
// const removeFromArray = function (array, ...args) {
//     const indices = [];
//     let index = array.indexOf();
//     while (index !== -1) {
//         indices.push(index);
//         index = array.indexOf(...args, index + 1);
//     }
//     for (let i = indices.length - 1; i >= 0; i--) {
//         array.splice(indices[i], 1);
//     }
//     return array;
// };

/*this is my forth trial (7passed , 1 failed) (after the help of chatgpt)
duplicate indices can be collected,
and removing items by index shifts the array, causing incorrect removals.*/

// const removeFromArray = function (array, ...args) {
//     const indices = [];
//     for (let arg of args) {
//         let index = array.indexOf(arg);
//         while (index !== -1) {
//             indices.push(index);
//             index = array.indexOf(arg, index + 1);
//         }
//     }

//     for (let i = indices.length - 1; i >= 0; i--) {
//         array.splice(indices[i], 1);
//     }
//     return array;
// };

//chatgpt solution one (pass) the easiest and shortest one
const removeFromArray = (array, ...args) => {
    return array.filter((el) => !args.includes(el));
};

//chtgpt solution two (pass)
// const removeFromArray = function (array, ...args) {
//     for (let i = array.length - 1; i >= 0; i--) {
//         if (args.includes(array[i])) {
//             array.splice(i, 1);
//         }
//     }
//     return array;
// };

// solution sheet
// const removeFromArray = function (array, ...args) {
//     let newArray = [];
//     array.forEach((item) => {
//         if (!args.includes(item)) {
//             newArray.push(item);
//         }
//     });
//     return newArray;
// };

// Do not edit below this line
module.exports = removeFromArray;
