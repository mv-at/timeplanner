import TimeButtons from "@/components/TimeButtons";

const DayHeaders = (props: { days: number, firstDay: number }) => {

    const formatDay = (day: number) => {
        switch (day) {
            case 0:
                return 'Sun';
            case 1:
                return 'Mon';
            case 2:
                return 'Tue';
            case 3:
                return 'Wed';
            case 4:
                return 'Thu';
            case 5:
                return 'Fri';
            case 6:
                return 'Sat';
        }
        return '';
    }

    const formatDate = (date: Date) => {
        return props.days > 7 ? (date.getDate() + '.') : (formatDay(date.getDay()) + ' ' + date.getDate() + '. ' + (date.getMonth() + 1) + '.');
    }

    const dayHeaders = [];

    for (let i = 0; i < props.days; i++) {
        dayHeaders.push(<div key={i}
                             className={'row-start-1 flex justify-center items-center border-white px-1 ' + (i == props.days - 1 ? 'border-x-2' : 'border-l-2')}
                             style={{gridColumnStart: i + 3}}>
            <span className="text-white font-bold">{formatDate(new Date(props.firstDay + i * 86400000))}</span>
        </div>);
    }

    return (
        <>
            {dayHeaders}
            <TimeButtons days={props.days} firstDay={props.firstDay}/>
        </>
    )
}

export default DayHeaders;