const pflichtfaecher: Schedule[] = [
    {name: "AVS", color: "#ff8723", id: '448.011',  url: "https://tc.tugraz.at/main/course/view.php?id=364", tasks: [
            {name: "MPI Tutorial", start: new Date("4.10.2024").getTime(), end: new Date("4.30.2024").getTime()},
            {name: "MP0", start: new Date("5.1.2024").getTime(), end: new Date("5.7.2024").getTime()},
            {name: "MP1", start: new Date("5.8.2024").getTime(), end: new Date("5.14.2024").getTime()},
            {name: "MP2", start: new Date("5.15.2024").getTime(), end: new Date("5.28.2024").getTime()},
        ]},
    {name: "D & A", color: "#fffa1a", id: 'INF.04032UF', url: "https://tc.tugraz.at/main/course/view.php?id=1561", tasks: [
            {name: "Blatt 1", start: new Date("3.8.2024").getTime(), end: new Date("3.22.2024").getTime()},
        ]},
    {name: "Data Management", color: "#00a3ff", id: 'INF.02018UF',  url: "https://tc.tugraz.at/main/course/view.php?id=1998", tasks: [
            {name: "Exercise 1", start: new Date("3.18.2024").getTime(), end: new Date("3.26.2024").getTime()},
            {name: "Exercise 2", start: new Date("4.22.2024").getTime(), end: new Date("5.7.2024").getTime()},
            {name: "Exercise 3", start: new Date("5.13.2024").getTime(), end: new Date("5.28.2024").getTime()},
        ]},
    {name: "Signalverarbeitung", color: "#03be5c", id: '442.002', url: "https://tc.tugraz.at/main/course/view.php?id=615", tasks: [
            {name: "A1", start: new Date("3.1.2024").getTime(), end: new Date("3.17.2024").getTime()},
            {name: "A2", start: new Date("3.18.2024").getTime(), end: new Date("3.24.2024").getTime()},
            {name: "A3", start: new Date("3.25.2024").getTime(), end: new Date("4.21.2024").getTime()},
            {name: "A4", start: new Date("4.22.2024").getTime(), end: new Date("4.28.2024").getTime()},
            {name: "A5", start: new Date("4.29.2024").getTime(), end: new Date("5.5.2024").getTime()},
            {name: "A6", start: new Date("5.6.2024").getTime(), end: new Date("5.19.2024").getTime()},
            {name: "A7", start: new Date("5.20.2024").getTime(), end: new Date("6.9.2024").getTime()},
            {name: "A8", start: new Date("6.10.2024").getTime(), end: new Date("6.16.2024").getTime()},
        ]},
    {name: "SigV KV", color: "#11ad14", id: '442.004', url: "https://tc.tugraz.at/main/course/view.php?id=2400", tasks: [
            {name: "Frage 1", start: new Date("3.7.2024").getTime(), end: new Date("3.10.2024").getTime()},
            {name: "Frage 2", start: new Date("3.21.2024").getTime(), end: new Date("4.7.2024").getTime()},
            {name: "Frage 3", start: new Date("4.18.2024").getTime(), end: new Date("4.21.2024").getTime()},
            {name: "Frage 4", start: new Date("5.9.2024").getTime(), end: new Date("5.12.2024").getTime()},
            {name: "Frage 5", start: new Date("5.16.2024").getTime(), end: new Date("6.2.2024").getTime()},
            {name: "Frage 6", start: new Date("6.3.2024").getTime(), end: new Date("6.9.2024").getTime()},
            {name: "Frage 7", start: new Date("6.20.2024").getTime(), end: new Date("6.23.2024").getTime()},
        ]},
    {name: "SLP", color: "#e51616", id: '705.004', url: "https://www.iaik.tugraz.at/teaching/materials/slp/assignments/", tasks: [
            {name: "A1", start: new Date("3.1.2024").getTime(), end: new Date("3.14.2024").getTime()},
            {name: "A2", start: new Date("3.15.2024").getTime(), end: new Date("4.11.2024").getTime()},
            {name: "A3", start: new Date("4.12.2024").getTime(), end: new Date("4.25.2024").getTime()},
            {name: "A4", start: new Date("4.26.2024").getTime(), end: new Date("5.9.2024").getTime()},
            {name: "A5", start: new Date("5.10.2024").getTime(), end: new Date("5.23.2024").getTime()},
            {name: "A6", start: new Date("5.24.2024").getTime(), end: new Date("6.6.2024").getTime()},
        ]},
];

const freifaecher: Schedule[] = [
    {name: "Programmieren C++", color: "#a21862", id: 'MAT.156UF',  url: "https://imsc.uni-graz.at/haasegu/Lectures/Kurs-C/SS24/index.html", tasks: [
            {name: "A1", start: new Date("3.1.2024").getTime(), end: new Date("3.18.2024").getTime()},
            {name: "A2", start: new Date("3.19.2024").getTime(), end: new Date("4.15.2024").getTime()},
            {name: "A3", start: new Date("4.16.2024").getTime(), end: new Date("4.29.2024").getTime()},
            {name: "A4", start: new Date("4.30.2024").getTime(), end: new Date("5.13.2024").getTime()},
            {name: "A5", start: new Date("5.14.2024").getTime(), end: new Date("6.3.2024").getTime()},
            {name: "A6", start: new Date("6.4.2024").getTime(), end: new Date("6.17.2024").getTime()},
        ]},
    {name: "Schaltungssimulation", color: "#07bea3", id: '439.086',  url: "https://tc.tugraz.at/main/course/view.php?id=1440", tasks: [
            {name: "A1", start: new Date("3.20.2024").getTime(), end: new Date("4.14.2024").getTime()},
        ]},
];

export {pflichtfaecher, freifaecher};