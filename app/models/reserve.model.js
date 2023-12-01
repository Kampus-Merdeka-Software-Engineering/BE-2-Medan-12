module.exports = (sequelize, Sequelize) => {
    const Reserve = sequelize.define('reservation',{
        checkin: {
            type: Sequelize.DATEONLY,
        },
        checkout: {
            type: Sequelize.DATEONLY,
        },
        type: {
            type: Sequelize.STRING,
        },
        guest: {
            type: Sequelize.INTEGER,
        }
    });
    return Reserve;
}