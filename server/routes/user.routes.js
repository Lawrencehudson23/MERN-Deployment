const UserCtrl = require('../controllers/user.controller');

module.exports = app => {
    app.post("/api/users", UserCtrl.register);
    app.post('/api/users/login', UserCtrl.login);
    app.delete('/api/users/logout', UserCtrl.logout);
    
    
}