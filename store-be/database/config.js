const { connect } = require('mongoose');


const connectionDB = async () => {
  try {
    await connect(process.env.MONGO_DB)
    .then(()=> console.log("DB Connection successfully!"))
  } catch (error) {
      console.log(error);
  }
}

module.exports= { connectionDB }