const _ = require("lodash");

const getInfoData = ({fileds = [], object = {}}) => {
    return _.pick(object, fileds);
};

const getSelectData = (select = []) => {
    return Object.fromEntries(select.map(el => [el, 1]));
}

const getUnSelectData = (unSelect = []) => {
    return Object.fromEntries(unSelect.map(el => [el, 0]));
}

module.exports = {
    getInfoData,
    getSelectData,
    getUnSelectData,
    updateNestedObjectParser
}