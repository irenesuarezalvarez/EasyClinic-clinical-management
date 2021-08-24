import React from "react";
import { ScheduleComponent, Inject, Day, Week, Month, Agenda } from 'scheduler-react'; // '@syncfusion/ej2-react-schedule';
 
const Calendar = () => {
    return(
        <div>
            <h1>Calendar page</h1>
            <ScheduleComponent>
                 <Inject services={[Day, Week, Month, Agenda]}/>
            </ScheduleComponent>
        </div>
       
    )
}

export default Calendar;