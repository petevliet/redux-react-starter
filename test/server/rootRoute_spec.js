import request from 'request';
import {expect} from 'chai';
import Helper from './../specs_helper.js';

describe('root route', function() {

  it('request to `/` returns 200', (done) => {
    request.get(
      {url: Helper.domain() + '/'},
      (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        done();
      })
  });

});
