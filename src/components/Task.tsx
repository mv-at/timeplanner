"use client";

import {useEffect, useState} from "react";

const Task = (props: { id: string, task: any, days: number, firstDay: number, color: string, row: number }) => {

    const [completed, setCompleted] = useState(false);
    const [color, setColor] = useState(props.color)

    useEffect(() => {
        setColor(completed ? '#888888' : props.color)
    }, [completed])

    useEffect(() => {
        if (localStorage !== undefined)
            setCompleted(localStorage.getItem(props.id) === "completed")
    }, []);

    const handleClick = () => {
        if (completed) {
            setCompleted(false);
            localStorage.removeItem(props.id)
        } else {
            setCompleted(true)
            localStorage.setItem(props.id, 'completed')
        }
    }

    const max = (a: number, b: number) => {
        return a > b ? a : b;
    }

    const min = (a: number, b: number) => {
        return a < b ? a : b;
    }

    const getTextColor = () => {
        let r = parseInt(color.substring(1, 3), 16);
        let g = parseInt(color.substring(3, 5), 16);
        let b = parseInt(color.substring(5, 7), 16);
        let brightness = (0.299 * r + 0.587 * g + 0.114 * b);
        return (brightness >= 100) ? 'black' : 'white';
    }

    const formatDate = (date: number) => {
        const d = new Date(date);
        return d.getDate() + '. ' + (d.getMonth() + 1) + '.'
    }

    const darkenColor = (amount: number) => {
        let r = parseInt(color.substring(1, 3), 16);
        let g = parseInt(color.substring(3, 5), 16);
        let b = parseInt(color.substring(5, 7), 16);
        r = Math.floor(r * (1 - amount));
        g = Math.floor(g * (1 - amount));
        b = Math.floor(b * (1 - amount));
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    const start = Math.floor((props.task.start - props.firstDay) / 86400000) + 4;
    const end = Math.floor((props.task.end - props.firstDay) / 86400000) + 5;
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

    return (<div id={props.id}
                 className={"my-2 flex flex-col justify-center overflow-hidden" + params}
                 onClick={handleClick}
                 style={{
        gridColumnStart: max(2, start),
        gridColumnEnd: min(end, 4 + props.days),
        gridRowStart: props.row + 2,
        backgroundColor: color,
        boxShadow: '4px 4px 2px ' + darkenColor(.5)
    }}>
        <span style={{color: getTextColor()}} className='font-bold text-xl text-nowrap'>{props.task.name}</span>
        <span style={{color: getTextColor()}} className='text-sm text-nowrap'>{formatDate(props.task.start) + ' - ' + formatDate(props.task.end)}</span>
    </div>)
}

export default Task;