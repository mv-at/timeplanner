import AppTitle from "@/components/AppTitle";
import DayHeaders from "@/components/DayHeaders";
import ScheduleEntry from "@/components/ScheduleEntry";
import {pflichtfaecher, freifaecher} from "@/lib/semesterAssignments";
import TimeRangeCycler from "@/components/TimeRangeCycler";

const CalenderView = (props: { days: number, firstDay: number }) => {

    const rows = pflichtfaecher.length + 1 + freifaecher.length;

    return (
        <div className='grid flex-1' style={{
            gridTemplateColumns: '20rem 2.5rem repeat(' + props.days + ', 1fr) 2.5rem 3.5rem',
            gridTemplateRows: '2.5rem repeat(' + pflichtfaecher.length + ', 5rem) 2.5rem repeat(' + freifaecher.length + ', 5rem) 1fr'
        }}>
            <AppTitle/>
            <div className='bg-gradient-to-r from-zinc-800 to-gray-800'
                 style={{gridColumnStart: 3, gridColumnEnd: props.days + 4, gridRowStart: 1, gridRowEnd: 13}}/>
            {pflichtfaecher.map((sched, index) => <ScheduleEntry sched={sched} key={index} index={index} days={props.days} firstDay={props.firstDay}/>)}
            {freifaecher.map((sched, index) => <ScheduleEntry sched={sched} key={index} index={index + pflichtfaecher.length + 1} days={props.days} firstDay={props.firstDay}/>)}
            <div className='bg-gradient-to-r from-zinc-800 from-25% to-transparent' style={{gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 1, gridRowEnd: rows + 3}}/>
            <div className='bg-gradient-to-l from-gray-800 from-25% to-transparent'
                 style={{gridColumnStart: props.days + 3, gridColumnEnd: props.days + 4, gridRowStart: 1, gridRowEnd: rows + 3}}/>
            <div className='bg-gray-800'
                 style={{gridColumnStart: props.days + 4, gridColumnEnd: props.days + 5, gridRowStart: 1, gridRowEnd: rows + 3}}/>
            <DayHeaders days={props.days} firstDay={props.firstDay}/>
            <TimeRangeCycler days={props.days} firstDay={props.firstDay}/>
            <div className='flex justify-center items-center' style={{gridRowStart: 2 + pflichtfaecher.length, gridColumnStart: 1, gridColumnEnd: props.days + 5}}>
                <div className='bg-zinc-400 h-[2px] flex-1 m-4 rounded-full'/>
                <span className='text-white text-lg leading-none'>Freifächer und Wahlfächer</span>
                <div className='bg-zinc-400 h-[2px] flex-1 m-4'/>
            </div>
        </div>
    );
}

export default CalenderView;