
let dbUser = process.env.DB_USER || "";
let dbPass = process.env.DB_PASS || "";
let dbHost = process.env.DB_HOST || "127.0.0.1";
let dbPort = process.env.DB_PORT || "27017";
let dbName = process.env.DB_NAME || "db_name";
let dbAuth = process.env.DB_AUTH || 0;

module.exports.dbUser = dbUser;
module.exports.dbPass = dbPass;
module.exports.dbHost = dbHost;
module.exports.dbPort = dbPort;
module.exports.dbName = dbName;
module.exports.dbAuth = parseInt(dbAuth);