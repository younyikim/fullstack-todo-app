const todoModel = require('../models/todoModel');
const doneModel = require('../models/doneModel');

/*
 * Todo List
 */
module.exports.getToDo = async (req, res) => {
    const todo = await todoModel.find();

    res.send(todo);
};

module.exports.saveToDo = async (req, res) => {
    const { text } = req.body;

    todoModel.create({ text }).then((data) => {
        console.log('Added Successfully :', data);
        res.send(data);
    });
};

module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body;

    todoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.send('Update Successfully'))
        .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body;

    todoModel
        .findByIdAndDelete(_id)
        .then(() => res.send('Delete Successfully'))
        .catch((err) => console.log(err));
};

/*
 * Done List
 */
module.exports.getDone = async (req, res) => {
    const doneList = await doneModel.find();

    res.send(doneList);
};

module.exports.deleteDone = async (req, res) => {
    const { _id } = req.body;

    doneModel
        .findByIdAndDelete(_id)
        .then(() => res.send('Delete done item successfully'))
        .catch((err) => console.log(err));
};

/*
 * Todo / Done List 공통
 */
module.exports.toggleTodo = async (req, res) => {
    const { _id, isChecked } = req.body;

    try {
        // isChecked 플래그에 따라 todo 또는 done 리스트에서 변경 대상 항목을 찾는다.
        const itemToUpdate = isChecked
            ? await todoModel.findById(_id)
            : await doneModel.findById(_id);

        if (!itemToUpdate) {
            return res.status(404).send('항목을 찾을 수 없습니다.');
        }

        if (isChecked) {
            // 할일 목록에서 완료 목록으로 이동
            await doneModel.create({ text: itemToUpdate.text });
            await todoModel.findByIdAndDelete(_id);
        } else {
            // 완료 목록에서 할일 목록으로 이동
            await doneModel.findByIdAndDelete(_id);
            await todoModel.create({ text: itemToUpdate.text });
        }

        res.send('상태가 성공적으로 업데이트되었습니다.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
