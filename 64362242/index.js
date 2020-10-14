const { parse, format } = require('date-fns')

const dateString = '10-13-20';
const date = parse(dateString, 'MM-dd-yy', new Date())

const result = format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
console.log(result)
