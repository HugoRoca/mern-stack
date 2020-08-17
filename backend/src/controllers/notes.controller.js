const NoteModel = require("../models/Note");
const notesController = {};

notesController.getNotes = async (req, res) => {
  const notes = NoteModel.find();
  res.json(notes);
};
notesController.createNote = async (req, res) => {
  res.send("");
};
notesController.updateNote = (req, res) => {
  res.send("");
};
notesController.deleteNote = (req, res) => {
  res.send("");
};
notesController.getNote = (req, res) => {
  res.send("");
};

module.exports = notesController;
