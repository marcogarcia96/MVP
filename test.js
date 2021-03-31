const partPicker = require('@kbco/pcpartpicker');

function queryPartPicker (type) {
    return partPicker.query(partPicker.constants.urls[type], partPicker.constants[type])
}

function searchPartPicker(type, query) {
    return partPicker.search(type, query)
}

searchPartPicker('cpu', 'Ryzen')
    .then(function (parts) {
        console.log(parts)
    })