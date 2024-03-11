type Schedule = {
    name: string;
    color: string;
    url: string;
    id: string;
    tasks:
        {
            name: string;
            start: number;
            end: number;
        }[]
}