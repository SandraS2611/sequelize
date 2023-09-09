const { TaskModel } = require("../models/Task");

async function crearTarea(req, res) {
  const { title, done } = req.body
  await TaskModel.create({ title, done })
  res.send("Tarea creada")
}


async function todasLasTareas(req, res) {
    const todas = await TaskModel.findAll()
    res.json(todas);
  }
  

async function buscarTarea(req, res) {
  const id = req.params.id;
  const tareas = await TaskModel.findByPk(id);
  if (tareas == null) {
    return res.send("No se encontro ninguna tarea con esa id");
  }
  res.json(tareas);
}


async function actualizarTareas(req, res) {
const id = req.params.id
const { title, done } = req.body

await TaskModel.update({title, done}, {
    where: {
        id
    }
})

  res.send("Tarea actualizada");
}


async function borrarTarea(req, res) {
  const id = req.params.id;
  await TaskModel.destroy({
    where: {
      id,
    },
  });

  res.send("eliminada");
}


module.exports = {
  crearTarea,
  todasLasTareas,
  buscarTarea,
  actualizarTareas,
  borrarTarea,
};
