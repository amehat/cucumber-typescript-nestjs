const common = [
    `--format ${
        process.env.CI || !process.stdout.isTTY ? 'progress' : 'progress-bar'
    }`,
    '--require-module ts-node/register', 
    '--require ./features/support/**/*.ts',
    '--require ./dist/features/support/**/*.js',
].join(' ');

module.exports = {
    default: common,
};
