import * as yup from "yup";
import { Request, Response, NextFunction } from "express";

export const validateNewTask = async (req: Request, res: Response, next: NextFunction) => {
  const newtask = yup.object({
    name: yup.string().required(),
    category: yup.mixed().oneOf(["Shop", "Random Thought", "Gym", "Idea"] as const).required(),
    content: yup.string().required(),
  });

  try {    
    await newtask.validate(req.body);
    next();
  } catch (e: any) {
    return res.status(400).send(e.message);
  }
};
