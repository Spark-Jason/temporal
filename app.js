const _ = require('lodash')


const items = [1, [23], [23, [323]]]

const newItems = _.flattenDeep(items)