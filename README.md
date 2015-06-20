# Steps:
        npm install
        /usr/bin/scss --no-cache --update sass/:build/css/
Then:

        npm run build
you are ready to browse index.html 

__or__ 

        npm run dev
you are ready to browse http://127.0.0.1:8080/webpack-dev-server/ 

# Explanations:
### Dependencies installation 
        npm install
This will install libraries defined in package.json under node_modules folder
        
### Webpack
WebPack combines multiple js files into one - bundle.js. It can minify images more than x10 times. 
It can create source maps to a bundled code which is very useful for debugging. 
It can also uglify js files. 

Provided configuration files are:
* package.json: installs all dependencies by running "npm install" via command line.  
* webpack.config.js: configures webpack to generate files into `build` dir for development. It generates js source map as well.
* webpack.production.config.js: configures webpack to generate files into `dist` dir for production. No source maps are here.

Running webpack:
----------------
        node_modules/.bin/webpack
or easier way:
        
        npm run build
generates files into `build` where we have source maps for js and css. 

Running dev server:
------------------
        npm run dev
Instead of running build command after every change in the code manually, we can run a Webpack Dev Server that does it for us.
The server will watch changes in the code, recompile just the portion that changed, and refresh the browser sitting at url:
__http://127.0.0.1:8080/webpack-dev-server/__:


Note: if chrome cant browse http://localhost:8080/webpack-dev-server/
Then change localhost to '127.0.0.1'
 
 
if npm gives errors, this might help on mac:
sudo chown -R $USER /usr/local


### Installing the Sass/SCSS transpiler

For Mac
-------
        gem install scss
        
For Win
-------
1. Download and install Ruby.
2. Specify a path variable for the folder where the Ruby executable file and the gem.bat file are stored. This lets you launch Ruby and Gem Manager from any folder and ensures that Ruby is successfully launched during transpilation.
3. Type one of the following commands at the command line prompt:

        gem install scss
or

        gem install sass
The tool is installed to the folder where Ruby executable file and the gem.bat file are stored.


Running SCSS preprocessor in the project command line:
-----------------------------------------------------
        /usr/bin/scss --no-cache --update sass/:build/css/
This command takes files from 'sass/' folder and compiles them into 'build/css/' folder. 
It also creates maps for being able to see original .scss files instead of one main.css while debugging. 


Running for deployment:
----------------------
        npm run deploy
generates files into `build` where we don't want to keep source maps. Don't forget to change index.html in the project folder to reference the right files.
Instead of `build/css/main.css` and `build/bundle.js` it should be `dist/css/main.css` and `dist/bundle.js`. 
Also copy a file `build/css/main.css` into `dist/css/main.css`.
        

## Old instructions for history:

### Source maps removal 
If source-maps are not needed on production then remove a reference to them from the end of each file (last commented line):
 - ./build/css/main.css
 - ./build/bundle.js
 

### Static server for serving images from different domain:
1. Install static-server, if not installed:

        sudo  npm -g install static-server
        
2. Go to the project folder

3. Run the server:

        $ static-server

4. Access the image via:
`http://localhost:9080/img/icon_atube.png`


##### Install react tools:

        sudo npm install -g react-tools
        jsx --watch src/ build/


