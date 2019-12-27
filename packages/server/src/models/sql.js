import mysql from 'mysql';

export default class SQL {
  constructor(config) {
    this.config = config;

    this.pool = mysql.createPool(config);
  }

  stop() {
    return new Promise((resolve, reject) => {
      this.pool.end((error) => {
        if (error) {
          reject(error);
        }

        resolve();
      });
    });
  }

  getConnection() {
    return new Promise((resolve, reject) => {
      this.pool.getConnection((error, connection) => {
        if (error) {
          reject(error);
        }

        resolve(connection);
      });
    });
  }

  query(connection, query) {
    return new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
        connection.release();

        if (error) {
          reject(error);
        }

        resolve(results);
      });
    });
  }

  get(table) {
    return this.getConnection()
      .then((connection) => this.query(connection, `SELECT * FROM ${table}`))
      .then((results) => {
        let itemOutput = {};

        return results.map((result) => {
          itemOutput = {};

          Object.keys(result).forEach((key) => {
            try {
              itemOutput[key] = JSON.parse(result[key]);
            } catch (e) {
              itemOutput[key] = result[key];
            }
          });

          return itemOutput;
        });
      });
  }

  set(table, content, id) {
    const json = JSON.stringify(content);

    return this.getConnection()
      .then((connection) => this.query(
        connection,
        `UPDATE ${table} SET content = ${json} WHERE id = ${id}`,
      ));
  }
}
