import {ReactNode} from "react";
import Task from "@/components/Task";

const ScheduleEntry = (props: {sched: Schedule, index: number, days: number, firstDay: number }) => {

    const tasks: ReactNode[] = [];

    const getTextColor = () => {
        let color = props.sched.color;
        let r = parseInt(color.substring(1, 3), 16);
        let g = parseInt(color.substring(3, 5), 16);
        let b = parseInt(color.substring(5, 7), 16);
        let brightness = (0.299*r + 0.587*g + 0.114*b);
        return (brightness >= 100) ? 'black' : 'white';
    }

    props.sched.tasks.forEach((task, index) => {
        tasks.push(<Task id={props.sched.id + '-' + index} task={task} days={props.days} firstDay={props.firstDay} color={props.sched.color} row={props.index} />);
    });

    return (
        <>
            <div className="col-start-1 ml-3 m-2 rounded-lg flex flex-col justify-center items-center border-2 border-gray-900"
                style={{gridRowStart: props.index + 2, backgroundColor: props.sched.color}}>
                <span className="text-xl font-bold" style={{color: getTextColor()}}>{props.sched.name}</span>
                <a className="text-sm underline" href={props.sched.url} style={{color: getTextColor()}}>Aufgaben &#8599;</a>
            </div>
            {tasks}
        </>
    )
}

export default ScheduleEntry;