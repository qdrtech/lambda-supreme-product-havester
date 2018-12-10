const app = require('./App');


app.getAllProductsMobile("all", (...args) => {
    var productArray = [];
    for(let section in args[0]){
        productArray = productArray.concat(args[0][`${section}`]);
    }
    console.log(productArray);
})
