import * as assert from 'assert';
import { When, Then } from '@cucumber/cucumber';

import { Greeter } from '../../src/greeter.service';

When('the greeter says hello', function () {
  this.whatIHeard = new Greeter().sayHello();
});

Then('I should have heard {string}', function (expectedResponse) {
  assert.equal(this.whatIHeard, expectedResponse);
});
