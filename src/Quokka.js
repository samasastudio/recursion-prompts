var augmentElements = function(array, aug) {
    if (array.length === 0) {
        return [];
    }
    var currentArray = array[0];
    currentArray.push(aug)
    return [currentArray].concat(augmentElements(array.slice(1), aug));
};

augmentElements([[],[3],[7]], 5); //?
// [[5],[3,5],[7,5]]