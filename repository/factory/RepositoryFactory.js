class RepositoryFactory {
  static createRepository(type, Model) {
    switch (type) {
      case "mysql":
        return new MySQLRepository(Model);
      case "mongodb":
        return new MongoDBRepository(Model);
      default:
        throw new Error("Unsupported database type");
    }
  }
}
