/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    var MAX_MINUTS = 1440;

    var totalMinutes = Math.floor((hours * 60) + minutes);
    totalMinutes += interval;

    if (totalMinutes >= MAX_MINUTS ) {
        totalMinutes %= MAX_MINUTS;
    }

    var tempHours   = Math.floor(totalMinutes / 60);
    var tempMinutes = Math.floor(totalMinutes % 60);

    if (tempHours < 10) {tempHours = "0" + tempHours;}
    if (tempMinutes < 10) {tempMinutes = "0" + tempMinutes;}

    return tempHours + ":" + tempMinutes;
};
