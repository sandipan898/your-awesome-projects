const ig = require('./instagram');

(async () => {

    await ig.initialize(); 

    await ig.login('xyz@gmail.com','*********');

    await ig.likeTagsProcess(['cars', 'food']);

    debugger;

})()
