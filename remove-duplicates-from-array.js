// Remove duplicates from array
var testArr = ["a", "a", "b", "b", "c"];

function removeDuplicates(arr) {
    return arr.filter(function(elem, index, fullArr) {
        return index === fullArr.indexOf(elem);
   });
}

removeDuplicates(testArr);


// Remove duplicates from array ES6
const testArr = ["a", "a", "b", "b", "c"];

const removeDuplicates = arr => arr.filter((elem, index, fullArr) => {
    return index === fullArr.indexOf(elem);
});

removeDuplicates(testArr);
