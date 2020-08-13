/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var aResult =[],
        aTweetWords = tweet.split(' ');

    aResult = aTweetWords.filter(function (word) {
        return word.charAt(0) == '#';
    }).map(function (word) {
        return word.substr(1);
    });

    return aResult;
};
