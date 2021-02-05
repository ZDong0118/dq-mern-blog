import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
  title: string,
  note: string,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const NoteContent = mongoose.model('NoteContent', noteSchema);

export default NoteContent;
