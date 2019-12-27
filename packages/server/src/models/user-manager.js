export default class UserManager {
  constructor(database) {
    this.database = database;
  }

  validate(auth) {
    return new Promise((resolve, reject) => {
      this.database.get('users')
        .then((users) => {
          const validUser = users.find(
            (user) => user.content.auth === auth,
          );

          if (validUser) {
            resolve();
          } else {
            reject();
          }
        });
    });
  }
}
