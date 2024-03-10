import Image from "next/image";
import CalenderView from "@/components/CalenderView";

export default function Home(props: { searchParams: { [name: string]: string | string[] } }) {

    const getDays = () => {
        if (props.searchParams['days']) {
            const res = parseInt(props.searchParams['days'] as string);
            if (isNaN(res) || res < 1 || res > 31)
                return 7;
            return res;
        }
        return 7;
    }

    const getFirstDay = () => {
        if (props.searchParams['firstDay']) {
            const res = parseInt(props.searchParams['firstDay'] as string);
            if (isNaN(res))
                return Date.now();
            return res;
        }
        return Date.now();
    }

    return (
        <div className='min-h-screen w-full bg-zinc-800 flex flex-col noselect'>
            <CalenderView days={getDays()} firstDay={getFirstDay()}/>
        </div>
    );
}
