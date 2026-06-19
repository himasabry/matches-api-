import { matches } from "../data/matches.js";

export default function handler(req, res) {
  const { league, team } = req.query;

  let data = matches;

  // فلترة بالـ league
  if (league) {
    data = data.filter(m =>
      m.league.includes(league)
    );
  }

  // فلترة بالـ team
  if (team) {
    data = data.filter(m =>
      m.team1.name.includes(team) ||
      m.team2.name.includes(team)
    );
  }

  res.status(200).json({
    success: true,
    count: data.length,
    matches: data
  });
}
