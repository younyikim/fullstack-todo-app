const { Router } = require('express');
const {
    getToDo,
    saveToDo,
    updateToDo,
    deleteToDo,
} = require('../controllers/todoController');

const router = Router();

router.get('/todos', getToDo);
router.post('/todos', saveToDo);
router.put('/todos/:id', updateToDo);
router.delete('/todos/:id', deleteToDo);

module.exports = router;
