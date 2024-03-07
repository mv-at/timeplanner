type Schedule = {
    name: string;
    color: string;
    tasks:
        {
            name: string;
            start: number;
            end: number;
        }[]
}