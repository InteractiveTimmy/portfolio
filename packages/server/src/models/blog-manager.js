export default class BlogManager {
  constructor(database) {
    this.database = database;
  }

  list() {
    return this.database.get('blogs');
  }

  get(blogId) {
    return this.list()
      .then((blogs) => blogs.find(
        (blog) => blog.id === blogId,
      ));
  }
}
