var FormData = require('form-data');
var fs = require('fs');
var fetch = require('node-fetch');
var path = require('path');

async function getConfidenceData(videoFilePath) {
    return new Promise(async (resolve, reject) => {
        let form = new FormData();
        let readStream = fs.createReadStream(path.resolve(`./${videoFilePath}`));
        form.append('wavFile', readStream);

        let fetchData = await fetch('http://192.168.43.10:5000/confidence', {
            method: 'POST',
            mode: 'cors',
            headers: form.getHeaders(),
            body: form,
        });

        let confidenceData = await fetchData.text();
        resolve(confidenceData);
    });
}

module.exports = getConfidenceData;