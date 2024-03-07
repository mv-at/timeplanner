const TimeButtons = (props: { days: number, firstDay: number }) => {

    const backDate = props.firstDay - 86400000 * props.days;
    const forwardDate = props.firstDay + 86400000 * props.days;

    return (
        <>
            <a className='row-start-1 flex justify-center items-center'
               style={{gridColumnStart: 2}}
               href={'/?days=' + props.days + '&firstDay=' + backDate}>
                <span className='text-zinc-400 text-2xl -mt-1.5'>&lt;</span>
            </a>
            <a className='row-start-1 flex justify-center items-center'
               style={{gridColumnStart: props.days + 3}}
               href={'/?days=' + props.days + '&firstDay=' + forwardDate}>
                <span className='text-zinc-400 text-2xl -mt-1.5'>&gt;</span>
            </a>
        </>
    )
}

export default TimeButtons;