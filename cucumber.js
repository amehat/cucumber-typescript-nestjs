const common = [
    'features/**/*.feature',
    '--require step-definitions/**/*.ts',
    '--require hooks/**/*.ts',
    '--require-module',
    'ts-node/register/transpile-only',
    '--format-options \'{ "snippetInterface" :"async-await"}\'',
    '--format summary',
    '--format @cucumber/pretty-formatter',
    '--format cucumber-console-formatter',
    '--publish-quiet'
].join(' ');

module.exports = {
    default: common
};