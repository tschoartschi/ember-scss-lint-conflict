/* eslint-env node */
'use strict';

module.exports = {
  name: 'merge',

  included() {
    this._super.included.apply(this, arguments);
  }
};
