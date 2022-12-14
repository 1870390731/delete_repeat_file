const fs = require('fs')
const path = require('path')
console.time('get_name_repeat_files')
const repeat_files = {}
getAllFile(path.resolve(__dirname, '../'))
fs.writeFileSync('./name_repeat_files.json', JSON.stringify(repeat_files))
console.timeEnd('get_name_repeat_files');

function getAllFile(dir, files = {}){
    fs.readdirSync(dir).forEach(ele => {
        const complete_path = path.resolve(dir, ele)
        console.log(complete_path);
        const stat = fs.statSync(complete_path)
        if (stat.isFile()) {
            if (files[ele]) {
                files[ele].push(complete_path)
                repeat_files[ele] = files[ele]
            } else {
                files[ele] = [complete_path]
            }
        } else {
            getAllFile(complete_path, files)
        }
    })
    return files
}