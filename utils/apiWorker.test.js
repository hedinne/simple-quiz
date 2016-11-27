const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const api = require('./apiWorker');

chai.use(chaiAsPromised);
chai.should();
const expect = chai.expect;

describe('getQuestions', () => {
  it('should return a object', () => {
    expect(api.getQuestions('any', 'easy', 10))
      .to.eventually.become('obj');
  });
  it('should return empty object if no parameters', () => {
    expect(api.getQuestions()).to.eventually
      .equal({ response_code: 2, results: [] });
  });
});
