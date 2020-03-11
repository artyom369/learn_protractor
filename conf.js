exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/my-test.js'],
    jasmineNodeOpts: {
        showColors: true, 
    }
};
