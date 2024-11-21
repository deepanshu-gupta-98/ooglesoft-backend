
module.exports = (sequelize , DataTypes)=>{
    const ContactUs = sequelize.define("contact_us",{
      name :{
          type: DataTypes.STRING, 
          allowNull : false
      },
      email :{
          type: DataTypes.STRING, 
          allowNull : false
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false
    }}, {
        timestamps: false // Disable timestamps if not needed
    })
  
    return ContactUs
  }