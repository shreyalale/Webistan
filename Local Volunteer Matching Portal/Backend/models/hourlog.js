const db = require('../config/db');

const HourLog = {};

HourLog.create = (log, callback) => {
  const query = 'INSERT INTO HourLogs (name, phone, email, date, time) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [log.name, log.phone, log.email, log.date, log.time], callback);
};

HourLog.getAll = (callback) => {
  db.query('SELECT * FROM HourLogs', callback);
};

HourLog.updateById = (id, log, callback) => {
  const query = 'UPDATE HourLogs SET name=?, phone=?, email=?, date=?, time=? WHERE id=?';
  db.query(query, [log.name, log.phone, log.email, log.date, log.time, id], callback);
};

HourLog.deleteById = (id, callback) => {
  const query = 'DELETE FROM HourLogs WHERE id=?';
  db.query(query, [id], callback);
};

module.exports = HourLog;