# Modify `initCaching` function from the `index.js` file. The function will simulate a caching counter for each time a section of the website is being accessed.
## Function should pass the following requirements: 
- ### Returned value of the init function should be an object;
- ### Returned object should contain two functions: pageAccessCounter & getCache;
- ### initCache function should declare an empty object that will be accessed by both functions: pageAccessCounter & getCache. When pageAccessCounter function is called cache object should store a counter that represents the number of times that a section of the website was accessed. getCache function should return the modified object declared initially in the initCache function. For example the following function calls: 
    + ### cache.pageAccessCounter('about') should modify the object to { 'about': 1 }
    + ### cache.pageAccessCounter('about') should modify the object to { 'about': 2 }
    + ### cache.pageAccessCounter('contact') should modify the object to { 'about': 2, 'home': 1}   
- ### When no parameter is provided to pageAccessCounter function it should increse the counter for home page. For example:
    + ### cache.pageAccessCounter() should modify the object to { 'home': 1};
    + ### cache.pageAccessCounter() should modify the object to { 'home': 2};    
- ### Page section provided as parameter for pageAccessCounter should not be case sensitive. For example:
    + ### cache.pageAccessCounter('about') should modify the object to { 'about': 1};
    + ### cache.pageAccessCounter('ABOUT') should modify the object to { 'about': 2};

# Instructions 
- ## Install [NodeLTS](https://nodejs.org/en/)
- ## Run `npm install` in the root directory;
- ## Evaluate yourself by using `npm test` command;