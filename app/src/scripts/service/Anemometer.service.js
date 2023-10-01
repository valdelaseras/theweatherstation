'use strict';

import Formatter from '../shared/Formatter.js';

export default class AnemometerService {
    async get(){
        const response = await fetch(`./data/anemometer-data.json`);
        return response.json().then(this.getFormattedData)
    }
    create(){}

    getFormattedData(data){
        return data.map((item) => {
            return {
                ...item,
                direction: item.direction.toUpperCase(),
                datetime: Formatter.epochToReadableDate(item.datetime),
            };
        })
    }
}
