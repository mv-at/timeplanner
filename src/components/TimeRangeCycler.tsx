const TimeRangeCycler = (props: {days: number, firstDay: number}) => {

    const nextDays = () => {
        if (props.days <= 7)
            return 14;
        else if (props.days <= 14)
            return 30;
        return 7;
    }

    return (
        <a href={'/?days=' + nextDays() + '&firstDay=' + props.firstDay} className='flex justify-center items-center' style={{gridColumnStart: props.days + 4, gridRowStart: 1}}>
            <img src='calendar.svg' alt='calendar' className='w-7 h-7 hover:brightness-125' />
        </a>
    );
}

export default TimeRangeCycler;