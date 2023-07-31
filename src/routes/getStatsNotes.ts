import { Express, Request, Response } from "express";
import { getStats } from "../services/getStats";

const getStatsNotes = (app: Express) => {
    app.get("/notes/stats", getStats)
}
export default getStatsNotes