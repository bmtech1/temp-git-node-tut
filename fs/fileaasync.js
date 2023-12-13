const {readFile, writeFile} = require('fs');
//console.log('start')
readFile('./first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    //console.log(result)
    const firstText = result
    readFile('./second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const secondText = result

      writeFile(
            './result-async.txt',
            'Here is the result: ${firstText}, ${secondText}',
            (err, result)=>{
                if (err) {
                    return
                }
                console.log('done with this task')
            }
        )
    })
})
//console.log('starting next task')