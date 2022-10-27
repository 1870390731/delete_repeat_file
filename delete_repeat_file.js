require('./get_name_repeat_files.js')
require('./get_content_repeat_file.js')

const fs = require('fs')
const repeat_files = require('./content_repeat_files.json')
console.time('delete')
for (const key in repeat_files) {
    for (const iterator of repeat_files[key]) {
        console.log(iterator);
        fs.rmSync(iterator)
    }
}
console.timeEnd('delete')