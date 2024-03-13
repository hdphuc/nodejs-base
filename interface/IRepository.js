function IRepository(Model) {
  this.Model = Model;

  this.findAll = async () => {
    return await this.Model.find({});
  };

  this.findById = async (id) => {
    return await this.Model.findById(id);
  };

  this.create = async (data) => {
    const instance = new this.Model(data);
    return await instance.save();
  };

  this.update = async (id, data) => {
    const instance = await this.Model.findById(id);
    if (!instance) return null;

    Object.assign(instance, data);
    return await instance.save();
  };

  this.delete = async (id) => {
    return await this.Model.findByIdAndDelete(id);
  };
}
