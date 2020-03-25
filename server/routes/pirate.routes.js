const PirateCtrl = require("../controllers/pirate.controller");
const {authenticate} = require('../config/jwt.config');


module.exports = app => {
    app.post('/api/pirates/new',PirateCtrl.createPirate);
    app.get('/api/pirates', authenticate,PirateCtrl.showAllPirates);
    app.get("/api/pirates/:id", authenticate,PirateCtrl.showOnePirate);
    app.put("/api/pirates/:id/edit", PirateCtrl.editPirate);
    app.delete("/api/pirates/:id",PirateCtrl.deletePirate);
};