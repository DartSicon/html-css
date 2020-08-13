var oDateObject = {
    date: null,
    add: function (value, operation) {
        if (new RegExp('^[1-9]\\d*$').exec(value) == undefined) {
            throw new TypeError("Необходимо передать положительное число!");
        }

        switch (operation) {
            case 'years':
                this.date.setFullYear(this.date.getFullYear() + value);
                break;
            case 'hours':
                this.date.setHours(this.date.getHours() + value);
                break;
            case 'months':
                this.date.setMonth(this.date.getMonth() + value);
                break;
            case 'days':
                this.date.setDate(this.date.getDate() + value);
                break;
            case 'minutes':
                this.date.setMinutes(this.date.getMinutes() + value);
                break;
            default:
                throw new TypeError("Некорректный параметр.");
        }

        return this;
    },

    subtract: function (value, operation) {
        if (new RegExp('^[1-9]\\d*$').exec(value) == undefined) {
            throw new TypeError("Необходимо передать положительное число!");
        }

        switch (operation) {
            case 'years':
                this.date.setFullYear(this.date.getFullYear() - value);
                break;
            case 'hours':
                this.date.setHours(this.date.getHours() - value);
                break;
            case 'months':
                this.date.setMonth(this.date.getMonth() - value);
                break;
            case 'days':
                this.date.setDate(this.date.getDate() - value);
                break;
            case 'minutes':
                this.date.setMinutes(this.date.getMinutes() - value);
                break;
            default:
                throw new TypeError("Некорректный параметр.");
        }

        return this;
    }
};

Object.defineProperty(oDateObject, 'value', {
    get: function () {

        var sDateFormat = [this.date.getFullYear(),
                          ((this.date.getMonth() + 1) > 9 ? (this.date.getMonth() + 1) : '0' + (this.date.getMonth() + 1)),
                          (this.date.getDate() > 9 ? this.date.getDate() : '0' + this.date.getDate())].join('-') + ' ' +
                          [(this.date.getHours() > 9 ? this.date.getHours() : '0' + this.date.getHours()),
                           (this.date.getMinutes() > 9 ? this.date.getMinutes() : '0' + this.date.getMinutes())].join(':');

        return sDateFormat;
    }
});

/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var oDate = new Date(date);
    oDateObject.date = oDate;
    return oDateObject;
};
