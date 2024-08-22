/*************

Run the following command to generate the hashed-answers.json file in test/utils
folder from the answers-solution.json file

node generate-hashed-answers.js

*************/

const fs = require('fs');
const path = require('path');
const { hash, hashBody } = require('./test/utils');

const answers = require('./answers-solution.json');

try {
  for (let answerNumber in answers) {
    const answer = answers[answerNumber];
    const { request, response } = answer;

    let hashedMethods;
    if (Array.isArray(request.method)) {
      hashedMethods = request.method.map(method => hash(method));
    } else hashedMethods = hash(request.method);

    answers[answerNumber] = {
      request: {
        method: hashedMethods,
        URL: hash(request.URL),
        headers: hash(request.headers),
        body: hashBody(request.body)
      },
      response: {
        headers: hash(response.headers),
        statusCode: hash(response.statusCode),
        body: hashBody(response.body)
      }
    }
  }
  fs.writeFileSync(path.join(__dirname, 'test', 'utils', 'hashed-answers.json'), JSON.stringify(answers, null, '  '));
  console.log('Successfully generated test/utils/hashed-answers.json file');
} catch (err) {
  console.error(err);
  console.log('There was an error generating the test/utils/hashed-answers.json file');
}
