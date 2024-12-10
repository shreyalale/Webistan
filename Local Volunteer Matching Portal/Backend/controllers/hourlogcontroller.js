const HourLog = require('../models/hourlog');

exports.createLog = (req, res) => {
  const newLog = req.body;
  HourLog.create(newLog, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, ...newLog });
  });
};

exports.getAllLogs = (req, res) => {
  HourLog.getAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.updateLog = (req, res) => {
    const logId = req.params.id;
    const updatedLog = req.body;

    HourLog.updateById(logId, updatedLog, (err) => {
        if (err) return res.status(500).send(err);
        res.json({ id: logId, ...updatedLog }); // Send the updated data back
    });
};

exports.deleteLog = (req, res) => {
    const logId = req.params.id;

    HourLog.deleteById(logId, (err) => {
        if (err) return res.status(500).send(err);
        res.status(204).send(); // Send no content on successful deletion
    });
};