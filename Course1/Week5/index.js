module.exports = {
    holder: {},
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        if (!this.holder[event]) {
            this.holder[event] = [];
        }

        var aSubscribers = this.holder[event];
        aSubscribers.push({
            subscriber: subscriber,
            handler: handler.bind(subscriber)
        });

        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        var aSubscribers = this.holder[event];

        if (aSubscribers) {
            var aSubscribersNew = aSubscribers.filter(function (element) {
                return element.subscriber !== subscriber;
            })

            this.holder[event] = aSubscribersNew;
        }
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        var aSubscribers = this.holder[event];

        if (aSubscribers) {
            aSubscribers.forEach(function (element) {
                if (element.subscriber !== undefined && element.handler !== undefined) {
                    element.handler();
                }
            });
        }

        return this;
    }
};
