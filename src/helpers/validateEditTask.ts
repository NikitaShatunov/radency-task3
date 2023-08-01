import * as yup from "yup";
import { Request, Response, NextFunction } from "express";
export const validateEditTask = async (req: Request, res: Response, next: NextFunction) => {
  const newtask = yup.object({
    name: yup.string().required(),
    content: yup.string().required(),
    archived: yup.boolean()
  });
  try {
    await newtask.validate(req.body);
    next();
  } catch (e: any) {
    return res.status(400).send(e.message);
  }
};
