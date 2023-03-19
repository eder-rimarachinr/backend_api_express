const { tracksModel } = require('../models');

/**
 * Obtener la lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
  const data = await tracksModel.find({});
  res.send({ data })
}

/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => { }

/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
  const { body } = req;
  console.log(body);
  const data = await tracksModel.create(body)
  res.send({data})
}

/**
 * Update un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItems = (req, res) => { }

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItems = (req, res) => { }

module.exports = { getItems, getItem, createItem, updateItems, deleteItems }