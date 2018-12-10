const axios = require("axios");

var app = {};

const options = {
    uri: "http://supremenewyork.com"
};

app.getAllProductsMobile = async (category, callback) => {
    options.uri += "/mobile_stock.json";
    try {
        const response = await axios.get(options.uri, {
            headers: {
                Accept: 'application/json, text/plain, */*',
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
            }
        }).then((response) => {
            let categoryData = response.data.products_and_categories;
            callback(categoryData, category)
        });
    } catch (error) {
        console.error(error)
        callback(null, null, error)
    }
}

module.exports = app;