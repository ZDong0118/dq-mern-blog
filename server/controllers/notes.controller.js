import mongoose from 'mongoose';
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

export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, note } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Note with id: ${id}`);

  const updatedNote = { title, note, _id: id };

  await NoteContent.findByIdAndUpdate(id, updatedNote, { new: true });

  res.json(updatedNote);
};

export const deleteNote = (req, res) => {
  res.send('deleteNote work');
};
