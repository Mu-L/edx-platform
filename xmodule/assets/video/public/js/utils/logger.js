/* eslint-disable no-console */
let Logger = {
    log: function(eventName, data) {
        if (typeof window.Logger !== 'undefined') {
            window.Logger.log(eventName, data);
        } else {
            console.log(`[Logger] ${eventName}:`, data);
        }
    }
};

export default Logger; 