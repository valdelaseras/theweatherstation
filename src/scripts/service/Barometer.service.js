'use strict';

import Formatter from '../shared/Formatter.js';

export default class BarometerService {
    async get(){
        const response = await fetch(`./data/barometer-data.json`);
        return response.json().then(this.getFormattedData)
    }
    create(){}

    getFormattedData(data){
        return data.map((item) => {
            return {
                ...item,
                datetime: Formatter.epochToReadableDate(item.datetime)
            };
        })
    }
}
