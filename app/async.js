exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: async function(value) {
    return await value;
  },

  manipulateRemoteData: function(url) {
    return fetch(`../${url}`)
          .then((res) => {
            if (res.ok) {
              return res.json()
                .then(({ people }) => people.map(i => i.name).sort());
            }
            return Promise.reject(new Error(`Ошибка: ${res.status}`));
          })
  }
};
