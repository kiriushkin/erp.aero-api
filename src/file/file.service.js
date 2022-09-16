import File from '../models/File.js';

class FileService {
  async uploadFile(file) {
    console.log(file);
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

    await File.create(data);

    return data;
  }

  async getList(size = 10, page = 1) {
    const offset = size * (page - 1);

    return await File.findAll({ offset, limit: +size, raw: true });
  }
}

export default new FileService();
