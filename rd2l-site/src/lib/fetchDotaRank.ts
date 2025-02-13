export const fetchDotaRank = async (steamID64: string) => {
  const response = await fetch(`https://api.opendota.com/api/players/${steamID64}`);
  const data = await response.json();
  return data.rank_tier; // Returns rank tier (e.g., 70 = Divine 1, 80 = Immortal)
};