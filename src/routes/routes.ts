import { Express, Request, Response } from "express";
import { addNotes } from "../repositories/add-notes";
import { validateNewTask } from "../helpers/validate-new-task";
import { deleteAllNotes } from "../repositories/delete-all-notes";
import { deleteNoteById } from "../repositories/delete-note-by-id";
import { getNotes } from "../repositories/get-notes";
import { editNote } from "../repositories/edit-note";
import { getStats } from "../repositories/get-stats";
import { validateEditTask } from "../helpers/validate-edit-task";
import { getNoteById } from "../repositories/get-note-by-id";
import { HTTP_CODES } from "../constans";

export const createNoteRouter = (app: Express) => {
  //firstly it validates request
  app.post("/notes", validateNewTask, async (req: Request, res: Response) => {
    try {
      //write new notes in db
      await addNotes(req.body);
      res.sendStatus(HTTP_CODES.CREATED);
    } catch (e: any) {
      res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(e.message);
    }
  });
};
export const deleteAllNotesRouter = (app: Express) => {
  app.delete("/notes", (req: Request, res: Response) => {
    try {
      deleteAllNotes();
      res.sendStatus(HTTP_CODES.OK);
    } catch (e: any) {
      res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(e.message);
    }
  });
};
export const deleteNoteByIdRouter = (app: Express) => {
  app.delete("/notes/:id", async (req: Request, res: Response) => {
    try {
      if ((await deleteNoteById(+req.params.id)) === null) {
        return res.sendStatus(HTTP_CODES.NO_CONTENT);
      }
      res.sendStatus(HTTP_CODES.OK);
    } catch (e: any) {
      res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(e.message);
    }
  });
};
export const editNoteRouter = (app: Express) => {
  app.patch(
    "/notes/:id",
    validateEditTask,
    async (req: Request, res: Response) => {
      try {
        //edit notes from repositories
        const editFile = await editNote(req.body, +req.params.id);
        if (!editFile) {
          res.sendStatus(HTTP_CODES.NO_CONTENT);
          return;
        }
        res.sendStatus(HTTP_CODES.OK);
      } catch (e: any) {
        res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(e.message);
      }
    }
  );
};
export const getStatsNotes = (app: Express) => {
  app.get("/notes/stats", async (req: Request, res: Response) => {
    try {
      //calculate stats
      const stats = await getStats();
      res.send(stats);
    } catch (e: any) {
      res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(e.message);
    }
  });
};
export const noteIdRouter = (app: Express) => {
  app.get("/notes/:id", async (req: Request, res: Response) => {
    //search note by id
    const note = await getNoteById(+req.params.id);
    if (!note) {
      res.sendStatus(HTTP_CODES.NOT_FOUND);
    } else res.send(note);
  });
};
export const noteRouter = (app: Express) => {
  app.get("/notes", async (req: Request, res: Response) => {
    //function getNotes get all notes from db, and return it
    const notes = await getNotes();
    if (notes.length) {
      res.send(notes);
      return;
    }
    res.sendStatus(HTTP_CODES.NOT_FOUND);
  });
};
