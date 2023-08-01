import { Express, Request, Response } from "express";
import { getStats } from "../repositories/getStats";
import { HTTP_CODES } from "../consts";

const getStatsNotes = (app: Express) => {
    app.get("/notes/stats", async (req: Request, res: Response) => {
      try {
        //calculate stats
        const stats = await getStats()
      res.send(stats)
      }
      catch(e: any) {
        res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(e.message)
      }
    })
}
export default getStatsNotes