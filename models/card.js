module.exports = function(sequelize, DataTypes) {
    var Card = sequelize.define("Card", {
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      text: DataTypes.STRING,
      list_group1: DataTypes.STRING,
      list_group2: DataTypes.STRING,
      list_group3: DataTypes.STRING
    }); 
    return Card;
};

