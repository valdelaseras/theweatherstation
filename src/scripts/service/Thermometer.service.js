'use strict';

import Formatter from '../shared/Formatter.js';

export default class ThermometerService {
    async get() {
        const response = await fetch(`./data/thermometer-data.json`);
        return response.json().then(this.getFormattedData)
    }

    create(){}

    getFormattedData(data){
        return data.map((item) => {
            return {
                datetime: Formatter.epochToReadableDate(item.datetime),
                temperature: item.temperature += '°C'
            };
        })
    }
}
