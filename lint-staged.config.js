/* eslint-env node */
module.exports = {
  '*.{ts,js,json,md}': 'prettier --write',
  '*.{ts,js}': 'eslint --fix',
};
