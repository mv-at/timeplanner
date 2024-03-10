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
        let r = parseInt(color.substring(1, 3), 16);
        let g = parseInt(color.substring(3, 5), 16);
        let b = parseInt(color.substring(5, 7), 16);
        let brightness = (0.299*r + 0.587*g + 0.114*b);
        return (brightness >= 100) ? 'black' : 'white';
    }

    const formatDate = (date: number) => {
        const d = new Date(date);
        return d.getDate() + '. ' + (d.getMonth() + 1) + '.'
    }

    const darkenColor = (amount: number) => {
        let color = props.sched.color;
        let r = parseInt(color.substring(1, 3), 16);
        let g = parseInt(color.substring(3, 5), 16);
        let b = parseInt(color.substring(5, 7), 16);
        r = Math.floor(r * (1 - amount));
        g = Math.floor(g * (1 - amount));
        b = Math.floor(b * (1 - amount));
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    const tasks: ReactNode[] = [];

    props.sched.tasks.forEach(task => {
        const start = Math.floor((task.start - props.firstDay) / 86400000) + 4;
        const end = Math.floor((task.end - props.firstDay) / 86400000) + 5;
        if (start > 2 + props.days || end < 4) return;
        let params = '';
        if (start < 3)
            params += ' pl-10';
        else
            params += ' rounded-l-lg ml-2 pl-2';
        if (end > 3 + props.days)
            params += ' pr-10';
        else
            params += ' rounded-r-lg mr-2';
        tasks.push(<div key={task.name} className={"my-2 flex flex-col justify-center overflow-hidden" + params} style={{gridColumnStart: max(2, start), gridColumnEnd: min(end, 4 + props.days), gridRowStart: props.index + 2, backgroundColor: props.sched.color, boxShadow: '4px 4px 2px ' + darkenColor(.5)}}>
            <span style={{color: getTextColor()}} className='font-bold text-xl text-nowrap'>{task.name}</span>
            <span style={{color: getTextColor()}} className="text-sm text-nowrap">{formatDate(task.start) + ' - ' + formatDate(task.end)}</span>
        </div>)
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