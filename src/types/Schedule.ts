type Schedule = {
    name: string;
    color: string;
    url: string;
    tasks:
        {
            name: string;
            start: number;
            end: number;
        }[]
}