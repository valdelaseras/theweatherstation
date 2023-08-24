'use strict';

export class CTable extends HTMLElement {
    constructor( service ) {
        super();

        this.service = service;
        this.data = [];
    }

    connectedCallback() {
        this.data = this.service.get()

        this.service.get()
            .then((data) => { this.data = data })
            .finally(() => this.buildTable());
    }

    buildTable() {
        const table = document.createElement('table');

        const thead = this.buildTableHead();
        const tbody = this.buildTableBody();

        table.appendChild(thead);
        table.appendChild(tbody);

        this.append(table);
    }

    buildTableHead(){
        const thead = document.createElement('thead');
        const tr = this.buildTableRow();

        // Get the keys of the first object which will make up the table head(ers)
        Object.keys(this.data[0]).forEach((prop) => {
            let th = document.createElement('th');
            th.innerText = prop;
            tr.appendChild(th);
        });

        thead.appendChild(tr);
        return thead;
    }

    buildTableBody() {
        const tbody = document.createElement('tbody');

        // Build a row for every entry in the data set
        for(let i = 0; i < this.data.length; i++) {
            let tr = this.buildTableRow();

            // Add tds with the value of each key of every entry
            for(const [key, value] of Object.entries(this.data[i])) {
                let td = document.createElement('td');
                td.innerText = `${value}`;
                tr.appendChild(td);
            }

            tbody.appendChild(tr);
        }

        return tbody;
    }

    buildTableRow() {
        return document.createElement('tr');
    }
}

customElements.define('c-table', CTable);
