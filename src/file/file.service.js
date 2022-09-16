import fs from 'fs/promises';
import File from '../models/File.js';

class FileService {
  async getFile(id) {
    return File.findByPk(id, { raw: true });
  }

  async uploadFile(file) {
    const { originalname, mimetype, size, path } = file;
    const [name, ext] = originalname.split('.');
    const data = {
      name,
      ext,
      mimetype,
      size,
      uploadDate: new Date(),
      path,
    };

    const result = await File.create(data, { raw: true });

    delete result.path;

    return result;
  }

  async getList(size = 10, page = 1) {
    const offset = size * (page - 1);

    return await File.findAll({
      offset,
      limit: +size,
      raw: true,
      attributes: ['id', 'name', 'ext', 'mimetype', 'size', 'uploadDate'],
    });
  }

  async updateFile(oldData, file) {
    fs.unlink(oldData.path);

    const { originalname, mimetype, size, path } = file;
    const [name, ext] = originalname.split('.');
    const data = {
      name,
      ext,
      mimetype,
      size,
      uploadDate: new Date(),
      path,
    };

    await File.update(data, { where: { id: oldData.id } });

    data.id = oldData.id;

    delete data.path;

    return data;
  }

  async deleteFile(data) {
    const fileDeletion = fs.unlink(data.path);
    const dbDeletion = File.destroy({ where: { id: data.id } });

    return await Promise.all([fileDeletion, dbDeletion]);
  }
}

export default new FileService();
