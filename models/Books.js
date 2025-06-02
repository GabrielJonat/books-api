export default (sequelize, DataType) => {
    const books = sequelize.define('Books', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
        }
    },{
    timestamps: false 
})
    return books;
}