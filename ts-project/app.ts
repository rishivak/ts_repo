enum People {
    shivi,
    rishi,
    tarsh,
    rajeev,
    cheenu,
  }
  
  let tripBY: string[] = [People[People.cheenu], People[People.rajeev], People[People.tarsh]];
  let homeStay: string[] = [People[People.rishi], People[People.shivi]];
  
  console.log("People who were traveling: ", tripBY);
  console.log("People who were staying at home: ", homeStay);
  