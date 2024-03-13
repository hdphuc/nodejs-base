class MySQLRepository extends BaseRepository {
  constructor(Model) {
    super(Model);
  }

  async findAll() {
    return await this.Model.findAll();
  }

  async findById(id) {
    return await this.Model.findByPk(id);
  }

  async create(data) {
    return await this.Model.create(data);
  }

  async update(id, data) {
    const instance = await this.Model.findByPk(id);
    if (!instance) return null;

    return await instance.update(data);
  }

  async delete(id) {
    return await this.Model.destroy({ where: { id } });
  }
}
