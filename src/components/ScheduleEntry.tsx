import {ReactNode} from "react";

const ScheduleEntry = (props: {sched: Schedule, index: number, days: number, firstDay: number }) => {

    const max = (a: number, b: number) => {
        return a > b ? a : b;
    }

    const min = (a: number, b: number) => {
        return a < b ? a : b;
    }

    const getTextColor = () => {
        let color = props.sched.color;
        let r = parseInt(color.substring(1, 2), 16);
        let g = parseInt(color.substring(3, 2), 16);
        let b = parseInt(color.substring(5, 2), 16);
        let yiq = (r + g + b) / 3;
        return (yiq >= 128) ? 'black' : 'white';
    }

    const formatDate = (date: number) => {
        const d = new Date(date);
        return d.getDate() + '. ' + (d.getMonth() + 1) + '.'
    }

    const tasks: ReactNode[] = [];

    props.sched.tasks.forEach(task => {
        const start = Math.floor((task.start - props.firstDay) / 86400000) + 4;
        const end = Math.floor((task.end - props.firstDay) / 86400000) + 5;
        if (start > 2 + props.days || end < 4) return;
        let rounded = '';
        if (start < 3)
            tasks.push(<div key={task.name} className="col-start-2 my-2" style={{gridRowStart: props.index + 2, background: 'linear-gradient(to right,rgba(0,0,0,0),' + props.sched.color + ')'}}/>);
        else
            rounded += ' rounded-l-lg ml-2';
        if (end > 3 + props.days)
            tasks.push(<div key={task.name} className="my-2" style={{gridColumnStart: 3 + props.days, gridRowStart: props.index + 2, background: 'linear-gradient(to left,rgba(0,0,0,0),' + props.sched.color + ')'}}/>);
        else
            rounded += ' rounded-r-lg mr-2';
        tasks.push(<div key={task.name} className={"my-2 pl-2 flex flex-col justify-center" + rounded} style={{gridColumnStart: max(3, start), gridColumnEnd: min(end, 3 + props.days), gridRowStart: props.index + 2, backgroundColor: props.sched.color}}>
            <span style={{color: getTextColor()}} className='font-bold text-xl'>{task.name}</span>
            <span style={{color: getTextColor()}} className="text-sm">{formatDate(task.start) + ' - ' + formatDate(task.end)}</span>
        </div>)
    });

    return (
        <>
            <div className="col-start-1 ml-3 m-2 rounded-lg flex flex-col justify-center items-center"
                style={{gridRowStart: props.index + 2, backgroundColor: props.sched.color}}>
                <span className="text-xl font-bold" style={{color: getTextColor()}}>{props.sched.name}</span>
                <a className="text-sm underline" href={props.sched.url} style={{color: getTextColor()}}>Aufgaben</a>
            </div>
            {tasks}
        </>
    )
}

export default ScheduleEntry;