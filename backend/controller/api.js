const getConfidenceData = require('../functions/getConfidenceData');

async function apiController(inputFile) {
    let confidenceData = await getConfidenceData(inputFile.path);
    return confidenceData;
} 

module.exports = apiController;