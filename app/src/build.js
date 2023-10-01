import {CTable} from "./scripts/components/c-table.mjs";
import "reflect-metadata"; // @TODO

import BarometerService from "./scripts/service/Barometer.service.js";
import ThermometerService from "./scripts/service/Thermometer.service.js";
import HygrometerService from "./scripts/service/Hygrometer.service.js";
import AnemometerService from "./scripts/service/Anemometer.service.js";

let barometerService,
    thermometerService,
    hygrometerService,
    anemometerService

window.onload = () => {
    barometerService = new BarometerService();
    thermometerService = new ThermometerService();
    hygrometerService = new HygrometerService();
    anemometerService = new AnemometerService();

    build();
}

const build = () => {
    buildTable( 'barometer', barometerService );
    buildTable( 'thermometer', thermometerService );
    buildTable( 'anemometer', anemometerService );
    buildTable( 'hygrometer', hygrometerService );
}

const buildTable = ( id, service ) => {
    const target =  document.querySelector(`#${id} .section-table`);
    const table = new CTable( service );
    target.append(table);
}
