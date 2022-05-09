export interface Team {
  idTeam: string;
  idSoccerXML: string;
  idAPIfootball: string;
  intLoved: string;
  strTeam: string;
  strTeamShort: string;
  strAlternate: string;
  intFormedYear: string;
  strSport: string;
  strLeague: string;
  idLeague: string;
  strLeague2: string;
  idLeague2: string;
  strLeague3: string;
  idLeague3: string;
  strStadium: string;
  strKeywords: string;
  strRSS: string;
  strStadiumThumb: string;
  strStadiumDescription: string;
  strStadiumLocation: string;
  intStadiumCapacity: string;
  strWebsite: string;
  strFacebook: string;
  strTwitter: string;
  strInstagram: string;
  strDescriptionEN: string;
  strDescriptionDE: string;
  strDescriptionFR: string;
  strDescriptionIT: string;
  strDescriptionJP: string;
  strDescriptionRU: string;
  strDescriptionES: string;
  strDescriptionPT: string;
  strDescriptionNO: string;
  strKitColour1: string;
  strKitColour2: string;
  strGender: string;
  strCountry: string;
  strTeamBadge: string;
  strTeamJersey: string;
  strTeamLogo: string;
  strTeamFanart1: string;
  strTeamFanart2: string;
  strTeamFanart3: string;
  strTeamFanart4: string;
  strTeamBanner: string;
  strYoutube: string;
  strLocked: string;
}

export interface Teams {
  teams: Team[];
}
