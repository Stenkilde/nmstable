var request = require('./request.js');

/**
 * Get collection of images
 * @param options
 * @returns {axios.Promise|Promise.<T>|*}
 */
function collection() {

    return request.get('elements.json')
        .then(function(response) {
            return {
                collection: response
            };
        });
}

module.exports = {
    collection: collection
};
