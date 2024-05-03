const { Router } = require('express');
const {
    getToDo,
    saveToDo,
    updateToDo,
    deleteToDo,
    getDone,
    deleteDone,
    toggleTodo,
} = require('../controllers/todoController');

const router = Router();

router.get('/todos', getToDo);
router.get('/done', getDone);

router.post('/todos', saveToDo);

router.put('/todos/:id', updateToDo);
router.put('/todos/toggle/:id', toggleTodo);

router.delete('/todos/:id', deleteToDo);
router.delete('/done/:id', deleteDone);

module.exports = router;
