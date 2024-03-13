class MongoDBRepository extends BaseRepository {
  constructor(Model) {
    super(Model);
  }

  async findAll() {
    return await this.Model.find({});
  }

  async findById(id) {
    return await this.Model.findById(id);
  }

  async create(data) {
    const instance = new this.Model(data);
    return await instance.save();
  }

  async update(id, data) {
    const instance = await this.Model.findById(id);
    if (!instance) return null;

    Object.assign(instance, data);
    return await instance.save();
  }

  async delete(id) {
    return await this.Model.findByIdAndDelete(id);
  }
}
