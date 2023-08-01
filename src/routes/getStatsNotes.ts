import { Express } from "express";
import { getStats } from "../repositories/getStats";

const getStatsNotes = (app: Express) => {
    app.get("/notes/stats", getStats)
}
export default getStatsNotes