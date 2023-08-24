'use strict';

import Formatter from '../shared/Formatter.js';

export default class TemperatureService {
    async get() {
        const response = await fetch(`./data/temperature-data.json`);
        return response.json().then(this.formatData)
    }

    create(){}

    formatData(data){
        return data.map((item) => {
            return {
                datetime: Formatter.epochToReadableDate(item.datetime),
                temperature: item.temperature += '°C'
            };
        })
    }
}
