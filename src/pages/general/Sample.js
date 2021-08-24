import { render } from "react-dom";
import  React from "react";
import { ScheduleComponent, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

function Sample() {
    return (
        <ScheduleComponent agendaDaysCount={1}>
          <Inject services={[Agenda, Resize, DragAndDrop]}/>
        </ScheduleComponent>
    );
}

export default Sample
/* render(<Default />, document.getElementById("sample")); */