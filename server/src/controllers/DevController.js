const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    const devExists = await Dev.findOne({ github_username: github_username });

    if (devExists) {
      return res.json(devExists);
    }

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, bio, avatar_url } = apiResponse.data;

    const techsArray = parseStringAsArray(techs);

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude]
    }

    const dev = await Dev.create({
      name,
      github_username,
      bio,
      avatar_url,
      techs: techsArray,
      location
    });

    // filtrar as conexões a no maximo 10 km de distancia
    // e que batam nas techs
    const sendSocketMessageTo = findConnections(
      { latitude, longitude },
      techsArray
    );

    sendMessage(sendSocketMessageTo, 'new-dev', dev);

    return res.json(dev);
  },

  // async update(req, res) {
  //   // não atualiza o github_username
  // },

  // async destroy(req, res) {},
}