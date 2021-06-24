
const fs = require('fs');
const upload = {}
console.log('Write file moduled working.')

upload.writeFile = (file,directoryName,fileType) => {
    return new Promise((resolve, reject) => {
        try {
            fs.writeFile(directoryName, file, fileType, (err) => {
                if (err) {
                    console.log(err.message);
                    reject(err)
                }else{
                    resolve({status : true})
                }
            })
        } catch (e) {
            console.log(e)
            reject(e) 
        }
    })
}

exports.data = upload
