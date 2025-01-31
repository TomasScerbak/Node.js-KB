// npm  - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <package_name>

// global dependency - use it in any project
// npm install -g <package_name>
// sudo install -g <package_name> for Mac
// examples would be nodemon where we use the same package in every node application

// package.json - manifest file (stores important information about project/package)
// manual approach (create package.json in the root , create properties)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)
// package.json is used to see our project meta data as well as module dependencies
// it is good practice to put node_modules into .gitignore file to pass only clean code

// we can install devDependcies as well
// example npm i nodemon --D
// or npm i nodemon --save-dev
// both will do the same thing

// we can also add scripts into package.json to create our own commands
// for example we can use "start": node <fileName> so that this command is executed at the beggining
// or we can se "dev": nodemon <fileName> and then execute npm run dev it will start the server and nodemon will watch
// for the changes in application so we don't need to restart it all the time
// to stop nodemon press Ctrl + C

// Un-installing the packages
// npm uninstall <packageName>
// Nuclear approeach how to uninstall whole node_module is to
// delete <packageName> from node_modules
// removing package-lock.json from root
// remove package from dependencies in package.json
