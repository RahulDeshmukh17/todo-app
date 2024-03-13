const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      success: true,
      data: todos,
      message: "data fetched successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: true,
      data: "internal server error",
      message: err.message,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todosById = await Todo.findById({ _id: id });

    if (!todosById) {
      return res.status(404).json({
        success: false,
        message: "no data found with given id",
      });
    }

    res.status(200).json({
      success: true,
      data: todosById,
      message: `data fetched successfully by id = ${id}`,
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: true,
      data: "internal server error",
      message: err.message,
    });
  }
};
