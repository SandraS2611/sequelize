const { Router } = require("express")
const {
    crearTarea,
    todasLasTareas,
    buscarTarea,
    actualizarTareas,
    borrarTarea,
} = require("../controllers/task.controllers")

const router = Router()

router.post("/", crearTarea)
router.get("/", todasLasTareas)
router.get("/:id", buscarTarea)
router.put("/:id", actualizarTareas)
router.delete("/:id", borrarTarea)

module.exports = router