export const environment = {
  production: false,
};

const API_KEY = "50130162"

/*
  LEAGUES APIs
*/
export const GET_LEAGUES = `https://www.thesportsdb.com/api/v1/json/${API_KEY}/all_leagues.php`;

/*
  TEAMS APIs
*/
export const GET_TEAM_BY_TEAM_ID = `https://www.thesportsdb.com/api/v1/json/${API_KEY}/lookupteam.php?id=`;
export const GET_TEAMS_BY_LEAGUE = `https://www.thesportsdb.com/api/v1/json/${API_KEY}/search_all_teams.php?l=`;

/*
  PLAYERS APIs
*/
export const GET_PLAYERS_BY_TEAM_ID = `https://www.thesportsdb.com/api/v1/json/${API_KEY}/lookup_all_players.php?id=`;
