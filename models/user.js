module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      permCU: DataTypes.BOOLEAN,
      permCUD: DataTypes.BOOLEAN
    }); 
    return User;
};

