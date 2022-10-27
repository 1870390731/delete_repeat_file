const fs = require('fs')
const repeat_files = require('./name_repeat_files.json')
const deleted_files = {}
console.time('get_content_repeat_file')
for (const key in repeat_files) {
    console.log(key);
    const arr = repeat_files[key]
    for (let index = 0; index < arr.length; index++) {
        const file = fs.readFileSync(arr[index])
        for (let j = index + 1; j < arr.length; j++) {
            if (file.equals(fs.readFileSync(arr[j]))) {
                if (deleted_files[key]) {
                    deleted_files[key].push(arr[index])
                } else {
                    deleted_files[key] = [arr[index]]
                }
                arr.splice(index,1)
                index--
                break
            }
        }
    }
}
fs.writeFileSync('./content_repeat_files.json', JSON.stringify(deleted_files))
fs.writeFileSync('./after_delete_files.json', JSON.stringify(repeat_files))
console.timeEnd('get_content_repeat_file')