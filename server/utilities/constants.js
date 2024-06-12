const CardNames = {
    FINANCE: "duke",
    FORCE: "assassin",
    SPEC1: "captain",
    COMM: "ambassador",
    SPEC2: "contessa",
    values: function () {
        return [this.FINANCE, this.FORCE, this.SPEC1, this.COMM, this.SPEC2]
    }
 };
 
const AllActions = {
    income: {
        influence: "all",
        blockableBy: [],
        isChallengeable: false,
        moneyDelta: 1
    },
    coup: {
        influence: "all",
        blockableBy: [],
        isChallengeable: false,
        moneyDelta: -7
    },
    finance1: {
        influence: CardNames.FINANCE,
        blockableBy: [],
        isChallengeable: true,
        moneyDelta: 3
    },
    force1: {
        influence: CardNames.FORCE,
        blockableBy: [CardNames.FORCE],
        isChallengeable: true,
        moneyDelta: -3
    },
    comm1: {
        influence: CardNames.COMM,
        blockableBy: [],
        isChallengeable: true,
        moneyDelta: 0
    },
    specInt1: {
        influence: CardNames.SPEC1,
        blockableBy: [CardNames.SPEC1, CardNames.COMM],
        isChallengeable: true,
        moneyDelta: 2 // EDGE CASE: if victim only has 1 or 0 coins
    },
    specInt2: {
        influence: CardNames.SPEC2,
        blockableBy: [CardNames.SPEC2, CardNames.COMM],
        isChallengeable: true,
        moneyDelta: 2 // EDGE CASE: if victim only has 1 or 0 coins
    }
};

const UsedActions = {AllActions[0], AllActions[1], AllActions[2], AllActions[3], AllActions[4]};

/*
const CounterActions = {
    block_steal: {
        influences: [CardNames.AMBASSADOR, CardNames.CAPTAIN]
    },
    block_assassinate: {
        influences: [CardNames.CONTESSA]
    },
};
*/
module.exports = {
    CardNames: CardNames,
    Actions: UsedActions,
    CounterActions: CounterActions,
}
