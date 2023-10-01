'use strict';

export default class Formatter {
    static epochToReadableDate(epoch) {
        return new Date(epoch).toLocaleTimeString('en-NZ', {
            hour12: false,
            hour: 'numeric',
            minute: 'numeric',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        });
    }
}
