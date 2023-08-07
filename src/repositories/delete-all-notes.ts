import { Notes } from "../../data/sequelize";

export const deleteAllNotes = async () => {
  try {
    await Notes.destroy({
      truncate: true
    });
  } catch (error) {
    throw new Error("Error deleting all notes");
  }
};
