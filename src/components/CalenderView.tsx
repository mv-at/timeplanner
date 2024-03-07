import TimeButtons from "@/components/TimeButtons";
import AppTitle from "@/components/AppTitle";
import DayHeaders from "@/components/DayHeaders";
import ScheduleEntry from "@/components/ScheduleEntry";
import semester from "@/lib/semesterAssignments";

const CalenderView = (props: { days: number, firstDay: number }) => {

    return (
        <div className='grid flex-1' style={{gridTemplateColumns: '350px 40px repeat(' + props.days + ', 1fr) 40px 60px', gridTemplateRows: '40px repeat(10, 80px)'}}>
            <AppTitle/>
            <DayHeaders days={props.days} firstDay={props.firstDay}/>
            {semester.map((sched, index) => <ScheduleEntry sched={sched} key={index} index={index} days={props.days} firstDay={props.firstDay}/>)}
        </div>
    );
}

export default CalenderView;