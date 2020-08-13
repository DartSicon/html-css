/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var sResult = '';

    var aHashtagsInLowerCase = hashtags.map(function (hashtag) {
        return hashtag.toLowerCase();
    })

    var aUniqueHashtags = aHashtagsInLowerCase.filter(function(hashtag, index, self){
        return self.indexOf(hashtag) == index
    });

    sResult = aUniqueHashtags.join(', ');

    return sResult;
};
