import fileService from './file.service.js';

class FileControllers {
  async uploadFile(req, res) {
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

  async getFile(req, res) {
    try {
      if (!req.params.id)
        return res.status(400).send({ message: 'File id is required.' });

      const file = await fileService.getFile(req.params.id);

      if (!file)
        return res.status(404).send({ message: 'File does not exist.' });

      delete file.path;

      res.send(file);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }

  async getList(req, res) {
    try {
      const { list_size: listSize, page } = req.query;

      const data = await fileService.getList(listSize, page);

      res.send(data);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }

  async downloadFile(req, res) {
    try {
      if (!req.params.id)
        return res.status(400).send({ message: 'File id is required.' });

      const file = await fileService.getFile(req.params.id);

      if (!file)
        return res.status(404).send({ message: 'File does not exist.' });

      res.download(file.path, `${file.name}.${file.ext}`);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }

  async updateFile(req, res) {
    try {
      if (!req.file || !req.params.id)
        return res.status(400).send({ message: 'File and/or id are missing.' });

      const file = await fileService.getFile(req.params.id);

      if (!file)
        return res.status(404).send({ message: 'File does not exist.' });

      const data = await fileService.updateFile(file, req.file);

      res.status(200).send(data);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }

  async deleteFile(req, res) {
    try {
      if (!req.params.id)
        return res.status(400).send({ message: 'File id is required.' });

      const file = await fileService.getFile(req.params.id);

      if (!file)
        return res.status(404).send({ message: 'File does not exist.' });

      await fileService.deleteFile(file);

      res.send({ message: 'File deleted.' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }
}

export default new FileControllers();
