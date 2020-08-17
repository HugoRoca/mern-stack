const NoteModel = require("../models/Note");
const notesController = {};

notesController.getNotes = async (req, res) => {
  const notes = await NoteModel.find();
  res.json(notes);
};

notesController.createNote = async (req, res) => {
  const { title, content, author, date } = req.body;
  const newNote = new NoteModel({ title, content, author, date });
  await newNote.save();
  res.json({ message: "Note save" });
};

notesController.updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content, author, date } = req.body;
  await NoteModel.findOneAndUpdate({ _id: id }, { title, content, author, date });
  res.json({ message: "Note updated" });
};

notesController.deleteNote = async (req, res) => {
  const { id } = req.params;
  await NoteModel.findByIdAndDelete(id);
  res.json({ message: "Note delete" });
};

notesController.getNote = async (req, res) => {
  const { id } = req.params;
  const note = await NoteModel.findById(id);
  res.json(note);
};

module.exports = notesController;
