const app = require('../index');

beforeAll(() => {
    try {
        if(app.FIRST_NAME.length < 3 && app.LAST_NAME.length < 3 && app.GRUPA.length !== 4) {
            throw new Error('Student details are not completed');
        }
    } catch(err) {
        //You must complete the student details first
        process.exit(1);
    }
})

describe('Testing initCache function', () => {
    test('Returned value of the init function should be an object', (done) => {
        const cache = app.initCaching();
        expect(typeof cache === 'object').toBeTruthy();
        done();
    });
    test('Returned object should contain two functions: pageAccessCounter & getCache', (done) => {
        const cache = app.initCaching();
        expect(cache.pageAccessCounter).toBeInstanceOf(Function);
        expect(cache.getCache).toBeInstanceOf(Function);
        done();
    });
    test(`- initCache function should declare an empty object that will be accessed by both functions: pageAccessCounter & getCache.
     - When pageAccessCounter function is called cache object should store a counter that represents the number of times that a section of the website was accessed. getCache function should return the modified object declared initially in the initCache function
     For example the following function calls: 
     - cache.pageAccessCounter('about') should modify the object to { 'about': 1 }
     - cache.pageAccessCounter('about') should modify the object to { 'about': 2 }
     - cache.pageAccessCounter('contact') should modify the object to { 'about': 2, 'home': 1}   
    `, (done) => {
        const cache = app.initCaching();
        cache.pageAccessCounter('about');
        cache.pageAccessCounter('about');
        cache.pageAccessCounter('about');
        cache.pageAccessCounter('contact');
        expect(cache.getCache().about).toBe(3);
        expect(cache.getCache().contact).toBe(1);
        done();
    });
    test(`When no parameter is provided to pageAccessCounter function it should increse the counter for home page
        For example:
        - cache.pageAccessCounter() should modify the object to { 'home': 1};
        - cache.pageAccessCounter() should modify the object to { 'home': 2};    
    `, (done) => {
        const cache = app.initCaching();
        cache.pageAccessCounter('about');
        cache.pageAccessCounter('about');
        cache.pageAccessCounter();
        cache.pageAccessCounter();
        expect(cache.getCache().about).toBe(2);
        expect(cache.getCache().home).toBe(2);
        done();
    })
    test(`Page section provided as parameter for pageAccessCounter should not be case sensitive.
      For example:
      - cache.pageAccessCounter('about') should modify the object to { 'about': 1};
      - cache.pageAccessCounter('ABOUT') should modify the object to { 'about': 2};
    `, (done) => {
        const cache = app.initCaching();
        cache.pageAccessCounter('about');
        cache.pageAccessCounter('ABOUT'); 
        expect(cache.getCache().about).toBe(2);
        done();
    });
})
