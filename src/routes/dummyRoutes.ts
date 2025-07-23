
import { Router } from "express";
import { PlayingCountries } from "../controller/sportsControllers";

const sportsroute = Router();
const currentPlayingCountries = new PlayingCountries()
sportsroute.get("/countries",currentPlayingCountries.allCountries);

export {sportsroute}