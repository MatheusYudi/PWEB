module.exports = () => {

    this.list = (connection, callback) => {
        connection.query('SELECT * from professores', callback);
    };

    this.get = (connection, callback) => {
        connection.query('SELECT * from professores WHERE id_professor=1', callback);
    };

    this.save = (data, connection, callback) => {
        connection.query('INSERT into professores SET ?', data, callback);
    };

    return this;
}