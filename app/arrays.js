exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: (arr, item) => arr.indexOf(item),

  sum: (arr) => arr.reduce(function (acc, cur) { return acc + cur; }, 0),

  remove: (arr, item) => arr.filter(function (i) { return i !== item; } ),

  removeWithoutCopy: (arr, item) => {
    let idx = arr.indexOf(item);
    while ( idx !== -1) {
      arr.splice(idx, 1);
      idx = arr.indexOf(item);
    }
    return arr;
  },

  append: (arr, item) => {
    arr.push(item);
    return arr;
  },

  truncate: (arr) => {
    arr.pop()
    return arr;
  },

  prepend: (arr, item) => {
    arr.unshift(item);
    return arr;
  },

  curtail: (arr) => {
    arr.splice(0,1);
    return arr;
  },

  concat: (arr1, arr2) => [...arr1, ...arr2],

  insert: (arr, item, index) => {
    arr.splice(index, 0, item);
    return arr;
  },

  count: (arr, item) => {
    let count = 0;
    for (let i=0; i<arr.length; i++) {
      if(arr[i] === item)
        count++;
    }

    return count;
  },

  duplicates: (arr) => {
    const resObj = arr.reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
    const res = Object.keys(resObj).filter((item) => resObj[item] > 1)
                .map(string => +string);
    return res;
  },

  square: (arr) => arr.map((i) => Math.pow(i, 2)),

  findAllOccurrences: (arr, target) => {
    let res = [];
    for (let i=0; i<arr.length; i++) {
      if(arr[i] === target)
      res.push(i);
    }
    return res;
  }
};
