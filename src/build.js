import BarometerService from "./scripts/service/Barometer.service.js";
import TemperatureService from "./scripts/service/Temperature.service.js";
import {CTable} from "./scripts/components/c-table.js";

let barometerService, temperatureService;

window.onload = () => {
    barometerService = new BarometerService();
    temperatureService = new TemperatureService();

    build();
}

const build = () => {
    buildTable( 'barometer', barometerService );
    buildTable( 'temperature', temperatureService );
}

const buildTable = ( id, service ) => {
    const slot =  document.querySelector(`#${id} slot[name="table-slot"]`);
    const table = new CTable( service );
    slot.append(table);
}
