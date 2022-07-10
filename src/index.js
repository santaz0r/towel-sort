// You should implement your task here.

module.exports = function towelSort(matrix) {
    const newArr = [];

    if (matrix) {
        matrix.map((i, index) =>
            index % 2 === 0
                ? newArr.push(...i)
                : newArr.push(...i.sort((a, b) => b - a))
        );
        return newArr;
    } else {
        return [];
    }
};
