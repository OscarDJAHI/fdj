export interface Player {
  idPlayer: string;
  idTeam: string;
  idTeam2: string;
  idAPIfootball: string;
  strNationality: string;
  strPlayer: string;
  strTeam: string;
  strTeam2: string;
  strSport: string;
  dateBorn: string;
  strNumber: string;
  dateSigned: string;
  strSigning: string;
  strWage: string;
  strOutfitter: string;
  strKit: string;
  strBirthLocation: string;
  strDescriptionEN: string;
  strGender: string;
  strSide: string;
  strPosition: string;
  strHeight: string;
  strThumb: string;
  strCutout: string;
  strRender: string;
}

export interface Players {
  player : Player[];
}
