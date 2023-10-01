'use strict';

import Formatter from '../shared/Formatter.js';

export default class HygrometerService {
    async get(){
        const response = await fetch(`./data/hygrometer-data.json`);
        return response.json().then(this.getFormattedData)
    }
    create(){}

    getFormattedData(data){
        return data.map((item) => {
            return {
                datetime: Formatter.epochToReadableDate(item.datetime),
                humidity: item.humidity += `%`
            };
        })
    }
}
