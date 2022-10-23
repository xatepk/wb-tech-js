exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & (num >> (bit - 1))
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: num => {
    if (num < 0 || num > 255 || num % 1 !== 0) {
      throw new Error(n + " does not fit in a byte");
    }
    return ("000000000" + num.toString(2)).substr(-8);
  },

  multiply: function(a, b) {
    return (a * b);
  }
};
