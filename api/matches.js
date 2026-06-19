import { matches } from "../data/matches.js";

export default function handler(req, res) {
  res.status(200).json({
    success: true,
    count: matches.length,
    matches
  });
}
