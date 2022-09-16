class InfoControllers {
  getId(req, res) {
    res.send({ id: req.decode.id });
  }
}

export default new InfoControllers();
