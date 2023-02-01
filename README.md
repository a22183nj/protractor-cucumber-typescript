### Protractor-Cucumber-TypeScript Framework  

#### Setup
<pre>
1. npm install
2. npm run webdriver-update
</pre>

#### Run Automation
<pre>
1. npm run webdriver-start  //run in separate terminal
2. npm run build            //transpile .ts to .js
3. npm test
</pre>

ps
1. presence of a tsconfig.json file indicates that the directory is the root of a TypeScript project
2. tsconfig.json file specifies the root files and the compiler options required to compile the project
3. by default, cucumber async hooks and steps timeout after 5000 milliseconds, this can be modified @https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/timeouts.md

