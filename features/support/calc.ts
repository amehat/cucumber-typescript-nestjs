import * as assert from 'assert';
import { When, Then } from '@cucumber/cucumber';

import Calcul from '../../src/calcul.service';

When(`J'ajoute {int} and {int}`, function (int1, int2) {
    this.result = new Calcul().add(int1, int2);
});

Then('I should get {int}', function (int) {
    assert.equal(this.result, int);
});