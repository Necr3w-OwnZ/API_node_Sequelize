module.exports = (sequelize, Sequelize) => {
    const Skills = sequelize.define("skills", {
      title: {
        type: Sequelize.STRING
      }
    });
  
    return Skills;
  };