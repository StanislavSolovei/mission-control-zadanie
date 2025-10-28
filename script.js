function newMission() {
    const missionName = prompt("Napisz nazwę dla swojej nowej misji:");
    const typeName = prompt("Podaj typ misji:");
    return {
        nazwa: missionName,
        typ: typeName
    }
}

function yourNewTeam() {
    const yourTeam = prompt("Kogo chcesz wziąć do udziału tej misji?");
    return {
        zaloga: [yourTeam]
    }
}

function distanceMission() {
    const chekedDistance = prompt("Czy masz distancje do tej misji? 1 - Tak, 2 - Nie");
    if (chekedDistance = 1) {
        const yourDistance = prompt("Napisz w jednostkach astronomicznych (AU):");
        return {
            dystans: yourDistance
        }
    } else {
        const noDistance = "Nie ma dystancji";
        return {
            dystans: noDistance
        }
    }
}

function celMission() {
    const purposeMission = prompt("Jaki jest cel twojej misji?")
    return {
        celeBadawcze: [purposeMission]
    }
}

function thingsMission() {
    const yourThingsMission = prompt("Co będziesz brać na swoją misje?");
    const checkProcentYourReserves = prompt("Super! Czy chcesz napisać dla sobie procent twoich zapasów? 1 - Tak, 2 - Nie")
    if (checkProcentYourReserves = 1) {
        const yourProcentReserves = prompt("Dobrze, to napisz swój procent zapasów:");
        return {
            ladowania: {
                narzedzia: [yourThingsMission],
                zapasy: yourProcentReserves
            }
        }
    } else {
        const noProcentReserves = "Nie podane danych zapasów w procentach"
        return {
            ladowania: {
                narzedzia: [yourThingsMission],
                zapasy: noProcentReserves
            }
        }
    }
}

const myMission = {
    ...newMission(),
    ...yourNewTeam(),
    ...distanceMission(),
    ...celMission(),
    ...thingsMission()
}

function allInformation(myMission) {
    console.log(`*** RAPORT MISJI: ${myMission.nazwa} ***`);
    console.log(`Typ misji: ${myMission.typ}`);
    console.log(`Przebyty dystans: ${myMission.dystans} AU`);
    console.log(`Pozostałe zapasy: ${myMission.ladowania.zapasy}`)
    console.log("--- ZAŁOGA ---");
    console.log(`- ${myMission.zaloga}`);
    console.log("--- SPRZĘT W ŁADOWNI ---");
    console.log(`- ${myMission.ladowania.narzedzia}`)
}

allInformation(myMission);
