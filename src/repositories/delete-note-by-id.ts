import { Notes } from "../../data/sequelize";

export const deleteNoteById = async (id: number) => {
  try {
    const result = await Notes.destroy({
      where: {
        id: id
      }
    });
    console.log(result);
    

    if (result === 0) {
      return null; // If no rows were deleted (note doesn't exist), return null
    }

    return result; // Return the deleted note
  } catch (error) {
    throw new Error("Error deleting note by id");
  }
};
