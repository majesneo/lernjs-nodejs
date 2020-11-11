const User = require('./user')
const log = require('./logger')(module)
const db = require('./db')
db.connect();

function run() {
    let vasya = new User('Вася')
    let petya = new User('Петя')
    vasya.hello(petya)
  log(db.getPhrase('Run successful'))
}

if (module.parent) {
    exports.run = run;
}else {
    run();
}

