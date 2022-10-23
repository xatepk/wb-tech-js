exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    return n <= 1 ? n : recursionAnswers.fibonacci(n - 1) + recursionAnswers.fibonacci(n - 2);
  },

  validParentheses: function(n) {
    let result = 0;

    function bracesCounter(left, right) {
      if (left === 0 && right === 0){
        result++;
      }
      if (left > right){
        return 0;
      }
      
      if (left > 0){
        bracesCounter(left - 1, right);
      }
      if (right > 0){
        bracesCounter(left, right - 1);
      }

      return result;
    }

    return new Array(bracesCounter(n, n)).fill(n);
  }
};
