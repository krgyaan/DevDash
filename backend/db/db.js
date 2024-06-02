const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        const connInstance = await mongoose.connect(`${process.env.MDB_URI}/devdash}`);
        console.log(`\n Connected to MongoDB!! DB Host: ${connInstance.connection.host}`);
    } catch (error) {
        console.error(`DB ${process.env.MDB_URI}`, error);
        // throw error;
        process.exit(1);
    }
};

module.exports = dbConnection;