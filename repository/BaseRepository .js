class BaseRepository {
  constructor(Model) {
    this.Model = Model;
  }

  findAll() {
    throw new Error("Not implemented");
  }

  findById() {
    throw new Error("Not implemented");
  }

  create() {
    throw new Error("Not implemented");
  }

  update() {
    throw new Error("Not implemented");
  }

  delete() {
    throw new Error("Not implemented");
  }
}
