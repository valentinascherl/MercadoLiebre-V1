const fs = require("fs");
let home = fs.readFileSync(__dirname + '/base.html', 'utf-8');

module.exports = {
    home: (req,res) => {
        res.send(home);
    }
}