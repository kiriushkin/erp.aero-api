import fileService from './file.service.js';

class FileControllers {
  async upload(req, res) {
    try {
      if (!req.file)
        return res.status(400).send({ message: 'File is missing.' });

      const data = await fileService.uploadFile(req.file);

      res.status(201).send(data);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }

  async list(req, res) {
    try {
      const { list_size: listSize, page } = req.query;

      console.log(listSize, page);

      const data = await fileService.getList(listSize, page);

      res.send(data);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }
}

export default new FileControllers();
