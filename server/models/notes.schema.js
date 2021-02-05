import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
  title: String,
  note: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const NoteContent = mongoose.model('NoteContent', noteSchema);

export default NoteContent;
