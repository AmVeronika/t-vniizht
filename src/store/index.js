import {createStore} from "vuex";
// import { user_module } from "./user_module";

export default createStore({
    state: {
        tableData: [
            {
                "ordNumber": 1,
                "carNumber": "94003894",
                "trainIndex": "035004766035601",
                "trainNumber": "9999",
                "carStatus": "составлен в поезд",
                "invoiceId": "923210370",
                "invoiceNumber": "ЭО560089",
                "stateId": 34,
                "lastOperDt": "2019-08-11T20:51:00.000Z"
            },
            {
                "ordNumber": 2,
                "carNumber": "94139292",
                "trainIndex": "035004766035601",
                "trainNumber": "9999",
                "carStatus": "составлен в поезд",
                "invoiceId": "923210370",
                "invoiceNumber": "ЭО560089",
                "stateId": 34,
                "lastOperDt": "2019-08-12T20:55:00.000Z"
            },
            {
                "ordNumber": 3,
                "carNumber": "94189768",
                "trainIndex": null,
                "trainNumber": null,
                "carStatus": "",
                "invoiceId": "924094926",
                "invoiceNumber": "ЭО730743",
                "stateId": 3,
                "lastOperDt": null
            },
            {
                "ordNumber": 4,
                "carNumber": "94950078",
                "trainIndex": null,
                "trainNumber": null,
                "carStatus": "",
                "invoiceId": "924094926",
                "invoiceNumber": "ЭО730743",
                "stateId": 3,
                "lastOperDt": null
            },
            {
                "ordNumber": 5,
                "carNumber": "54964036",
                "trainIndex": null,
                "trainNumber": null,
                "carStatus": "",
                "invoiceId": "924094926",
                "invoiceNumber": "ЭО730743",
                "stateId": 3,
                "lastOperDt": null
            },
            {
                "ordNumber": 6,
                "carNumber": "94949708",
                "trainIndex": null,
                "trainNumber": null,
                "carStatus": "",
                "invoiceId": "924094926",
                "invoiceNumber": "ЭО730743",
                "stateId": 3,
                "lastOperDt": null
            },
            {
                "ordNumber": 7,
                "carNumber": "94395381",
                "trainIndex": null,
                "trainNumber": null,
                "carStatus": "",
                "invoiceId": "924094926",
                "invoiceNumber": "ЭО730743",
                "stateId": 3,
                "lastOperDt": null
            },
            {
                "ordNumber": 8,
                "carNumber": "94420957",
                "trainIndex": null,
                "trainNumber": null,
                "carStatus": "осмотрен в техническом отношении",
                "invoiceId": "924094926",
                "invoiceNumber": "ЭО730743",
                "stateId": 35,
                "lastOperDt": "2019-08-14T10:04:00.000Z"
            },
            {
                "ordNumber": 9,
                "carNumber": "94693793",
                "trainIndex": null,
                "trainNumber": null,
                "carStatus": "осмотрен в техническом отношении",
                "invoiceId": "924094926",
                "invoiceNumber": "ЭО730743",
                "stateId": 35,
                "lastOperDt": "2019-08-14T10:04:00.000Z"
            },
            {
                "ordNumber": 10,
                "carNumber": "59910554",
                "trainIndex": null,
                "trainNumber": null,
                "carStatus": "осмотрен в техническом отношении",
                "invoiceId": "924094926",
                "invoiceNumber": "ЭО730743",
                "stateId": 35,
                "lastOperDt": "2019-08-14T14:22:00.000Z"
            },
            {
                "ordNumber": 11,
                "carNumber": "94949773",
                "trainIndex": null,
                "trainNumber": null,
                "carStatus": "осмотрен в техническом отношении",
                "invoiceId": "924094926",
                "invoiceNumber": "ЭО730743",
                "stateId": 35,
                "lastOperDt": "2019-07-28T00:30:00.000Z"
            },
            {
                "ordNumber": 12,
                "carNumber": "94968922",
                "trainIndex": null,
                "trainNumber": null,
                "carStatus": "осмотрен в техническом отношении",
                "invoiceId": "924094926",
                "invoiceNumber": "ЭО730743",
                "stateId": 35,
                "lastOperDt": "2019-08-14T10:04:00.000Z"
            }
        ],
        titleTable: [
            {
                name: 'ordNumber',
                label: '№ п/п',
            },
            {
                name: 'carNumber',
                label: 'Номер Вагона',
            },
            {
                name: 'trainIndex',
                label: 'Индекс Поезда',
            },
            {
                name: 'trainNumber',
                label: 'Номер поезда',
            },
            {
                name: 'carStatus',
                label: 'Статус',
            },
            {
                name: 'lastOperDt',
                label: 'Дата-время операции',
            },
            {
                name: 'invoiceNumber',
                label: '№ накладной',
            },
            {
                name: 'invoiceId',
                label: 'ИД накладной',
            },
            {
                name: 'stateId',
                label: 'stateId',
            },
        ],
        editValues: [
            {
                name: 'trainNumber',
                label: 'Номер поезда',
                type: 'number',
                value: '',
            },
            {
                name: 'lastOperDt',
                label: 'Дата-время операции',
                type: 'datetime-local',
                value: '',
            },
            {
                name: 'invoiceNumber',
                label: '№ накладной',
                type: 'text',
                value: '',
            },
            {
                name: 'invoiceId',
                label: 'ИД накладной',
                type: 'number',
                value: '',
            },
        ],
    },
    getters: {
        getTableData: (state) => state.tableData,
        getTitleTable: (state) => state.titleTable,
        getEditValues: (state) => state.editValues,
    },
    mutations: {
        setTableData: (state, payload) => {
            const ind = state.tableData.findIndex(x => x['ordNumber'] === payload['ordNumber']);
            if (ind > -1) {
                state.tableData[ind] = payload;
            }
        },
    },
    actions: {},
    modules: {
        // user_module,
    },
    strict: true,
});
