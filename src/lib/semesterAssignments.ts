const semester: Schedule[] = [
    {name: "SLP", color: "09a2da", tasks: [
            {name: "A1", start: new Date("3.1.2024").getTime(), end: new Date("3.14.2024").getTime()},
            {name: "A2", start: new Date("3.15.2024").getTime(), end: new Date("4.11.2024").getTime()},
            {name: "A3", start: new Date("4.12.2024").getTime(), end: new Date("4.25.2024").getTime()},
            {name: "A4", start: new Date("4.26.2024").getTime(), end: new Date("5.9.2024").getTime()},
            {name: "A5", start: new Date("5.10.2024").getTime(), end: new Date("5.23.2024").getTime()},
            {name: "A6", start: new Date("5.24.2024").getTime(), end: new Date("6.6.2024").getTime()},
        ]},
    {name: "Programmieren C++", color: "e3154b", tasks: [
            {name: "A1", start: Date.now() - 4*86400000, end: Date.now() + 86400000 * 6},
        ]},
    {name: "D & A", color: "11ad14", tasks: [
            {name: "Blatt 1", start: Date.now() + 4*86400000, end: Date.now() + 86400000 * 10},
        ]},
];

export default semester;