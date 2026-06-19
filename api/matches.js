export default function handler(req, res) {

  const matchesData = [
    {
      league: "مباراة ودية",
      time: "2026-03-27T20:00:00",
      team1: { name: "ليبيا" },
      team2: { name: "النيجر" },
      channels: [{ name: "ليبيا الرياضية", url: "go:lybiasp" }]
    }
  ];

  const { league, team } = req.query;

  let data = matchesData;

  if (league) {
    data = data.filter(m => m.league.includes(league));
  }

  if (team) {
    data = data.filter(m =>
      m.team1.name.includes(team) ||
      m.team2.name.includes(team)
    );
  }

  res.status(200).json({
    success: true,
    count: data.length,
    data
  });
}
