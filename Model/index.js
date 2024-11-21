const dbConfing = require('../config/dbConfing')

const {Sequelize , DataTypes} = require('sequelize')


const sequelize = new Sequelize(
    dbConfing.DB,
    dbConfing.USER,
    dbConfing.PASSWORD,{
        host : dbConfing.HOST,
        dialect:dbConfing.dialect
    }
)

sequelize.authenticate().then((res)=>{
console.log('db connect ...')
}).catch((err)=>{
    console.log(err)
})


const db  ={}

db.Sequelize =Sequelize ,
db.sequelize = sequelize

db.user = require('./UserModel')(sequelize , DataTypes)
db.contactus = require('./ContactusModel')(sequelize , DataTypes)


db.sequelize.sync({force :false}).then(()=> console.log("re-sync done")).catch((err)=> console.log(err))


module.exports = db