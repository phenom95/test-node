const db = require('../models');

exports.store = async (req, res) => {
  try {
    let cake = await db.Cake.create(req.body);
    return res
      .status(201)
      .json(cake);
  } catch (err) {
    return res
      .status(403)
      .json({
        message: 'Oups ! la création du gateau n\'a pas eu lieue',
        error: err.message
      });
  }
};

module.exports.all = async (req, res) => {
  try {
    let socks = await db.Cake.find();
    return res
      .status(200)
      .json(socks);
  } catch (err) {
    return res
      .status(500)
      .json({
        message: 'Oups ! Une erreur est survenue',
        error: err.message
      });
  }
};

module.exports.show = async (req, res) => {
  try {
    let sock = await db.Sock.findById(req.params.id);
    return res
      .status(200)
      .json(sock);
  } catch (err) {
    return res
      .status(404)
      .json({
        message: 'Oups ! Une erreur est survenue',
        error: err.message
      });
  }
};

module.exports.update = async (req, res) => {
  try {
    let sock = await db.Sock.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    return res
      .status(200)
      .json(sock);
  } catch (err) {
    return res
      .status(404)
      .json({
        message: 'Oups ! Une erreur est survenue',
        error: err.message
      });
  }
};

module.exports.delete = async (req, res) => {
  try {
    await db.Sock.findByIdAndRemove(req.params.id);
    return res
      .status(204)
      .json({});
  } catch (err) {
    return res
      .status(404)
      .json({
        message: 'Oups ! Une erreur est survenue',
        error: err.message
      });
  }
};
