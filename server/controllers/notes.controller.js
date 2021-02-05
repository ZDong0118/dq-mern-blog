import NoteContent from '../models/notes.schema.js';

export const getNotes = async (req, res) => {
  try {
    const noteData = await NoteContent.find();
    res.status(200).json(noteData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createNote = async (req, res) => {
  const note = req.body;
  const newNote = new NoteContent(note);

  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updateNote = (req, res) => {
  res.send('updateNote work');
};
export const deleteNote = (req, res) => {
  res.send('deleteNote work');
};
