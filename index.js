require('./vue-detective.polyfill') // for vue files

const madge = require('madge');

madge('sample-js/play.js').then((res) => {
    console.log(res.obj());
});

madge('sample-js/play.es.js').then((res) => {
    console.log(res.obj());
});

madge('sample-vue/App.vue', {
    fileExtensions: ['js', 'vue'],
}).then((res) => {
    console.log(res.obj());
});
