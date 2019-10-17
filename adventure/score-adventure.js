function scoreAdventure(choice, adventureId, ally) {
    // add hp to user according to the choice's consequences
    ally.wp += choice.wp;
    // add gold to the user according to the choices consqencuewbnf
    ally.sc += choice.sc;
    // set this quest id to completed in the user
    ally.completed[adventureId] = true;
}

export default scoreAdventure;