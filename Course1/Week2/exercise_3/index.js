// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var aCommandParams = [];

    aCommandParams = command.split(' ');

    switch(aCommandParams[0]){
        case 'ADD':
            return addContact(aCommandParams[1], aCommandParams[2]);
            break;
        case 'REMOVE_PHONE':
            return removePhone(aCommandParams[1]);
            break;
        case 'SHOW':
            return show();
    }

    return bResult;
};

function addContact(name, phones) {
    var aPhones = phones.split(',');

    if (phoneBook.hasOwnProperty(name)) {
        phoneBook[name] = phoneBook[name].concat(aPhones);
    } else {
        phoneBook[name] = aPhones;
    }
}

function removePhone(phone) {
        var phoneIsRemoved = false;

    Object.keys(phoneBook).forEach(function(key,index) {
        var aPhones = phoneBook[key];

        phoneBook[key] = aPhones.filter(function (numberInPhoneBook) {
            if (numberInPhoneBook != phone) {
                return true;
            } else {
                phoneIsRemoved = true;
                return false;
            }
        });
    });

    return phoneIsRemoved;
}

function show() {
    var aResult = [],
        sContactData = '';

    Object.keys(phoneBook)
        .sort()
        .forEach(function(key, i) {
            var aPhones = phoneBook[key]

            if (aPhones !== undefined && aPhones.length !== 0) {
                sContactData = key + ': ' + aPhones.join(', ');
                aResult.push(sContactData);
            }
        });

    return aResult;
}


