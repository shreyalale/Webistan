//import kiya express to create router
const express = require('express');
//create kiya router object to handle routes
const router = express.Router();

//import kiya hourlogcontroller, jisme request handling ka logic hai
const hourLogController = require('../controllers/hourlogcontroller');

//call kiya createlog function ko hourlogcontroller mein se new log create krne ke liye
router.post('/logs', hourLogController.createLog);
//call kiya getallogs function ko hourlogcontroller fetch krne ke liye
router.get('/logs', hourLogController.getAllLogs);
//call kiya updatelog function ko hourlogcontroller mein se update krne ke liye
router.put('/logs/:id', hourLogController.updateLog);
//call kiya deletelog function ko hourlogcontroller mein se delete krne ke liye
router.delete('/logs/:id', hourLogController.deleteLog);

//export kiya router ko
module.exports = router;
