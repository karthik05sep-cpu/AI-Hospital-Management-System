const { Low } = require("lowdb");
const { JSONFile } = require("lowdb/node");

const adapter = new JSONFile("db.json");

const db = new Low(adapter, {
    patients: [],
    appointments: [],
    doctors: []
});

async function connectDB() {

    await db.read();

    db.data ||= {
        patients: [],
        appointments: [],
        doctors: []
    };

    await db.write();

    console.log("LowDB Connected Successfully");

}

module.exports = {
    db,
    connectDB
};