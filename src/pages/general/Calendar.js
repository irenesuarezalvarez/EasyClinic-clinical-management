import  React from "react";
import styled from "styled-components";
import '../../Calendar.css';

import { Schedule, Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, ResourceDirective, ResourcesDirective } from '@syncfusion/ej2-react-schedule';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import Box from "../../components/layouts/Box";



function Calendar (){
  var scheduleObj = new Schedule();
 /*  const data = [{
      Id: 2,
      Subject: 'Guido',
      StartTime: new Date(2021, 8, 15, 10, 0),
      EndTime: new Date(2021, 8, 15, 12, 30),
      ResourceId: 1
  },
  {
    Id: 2,
    Subject: 'Baba',
    StartTime: new Date(2021, 8, 17, 10, 0),
    EndTime: new Date(2021, 8, 17, 12, 30),
    ResourceId: 1
},
  {
    Id: 2,
    Subject: 'Irene',
    StartTime: new Date(2021, 8, 14, 13, 0),
    EndTime: new Date(2021, 8, 14, 14, 30),
    ResourceId: 2
  },
  {
    Id: 2,
    Subject: 'Pepe',
    StartTime: new Date(2021, 8, 15, 13, 0),
    EndTime: new Date(2021, 8, 15, 14, 30),
    ResourceId: 2
  },
  {
    Id: 2,
    Subject: 'Irene',
    StartTime: new Date(2021, 8, 16, 13, 0), //month one less
    EndTime: new Date(2021, 8, 16, 14, 30),
    ResourceId: 3
  }]; */
 //resourceID connected to field
  const resourceDataSource = [
    {Name: 'My Calendar', Id:0, Color: '#ea7a57'},
    {Name: 'John', Id:1, Color: '#ea7a57'},
    {Name: 'Stella', Id:2, Color: '#357CD2'},
    {Name: 'Juana', Id:3, Color: '#7fa900'}
  ]
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()+1
  const day = today.getDate() 
  //
const mycalendar = []
const prof1 =[{
  Id: 2,
  Subject: 'Guido',
  StartTime: new Date(2021, 8, 15, 10, 0),
  EndTime: new Date(2021, 8, 15, 12, 30),
  ResourceId: 1
},
{
Id: 2,
Subject: 'Baba',
StartTime: new Date(2021, 8, 17, 10, 0),
EndTime: new Date(2021, 8, 17, 12, 30),
ResourceId: 1
}]
const prof2 =[{
  Id: 2,
  Subject: 'Irene',
  StartTime: new Date(2021, 8, 14, 13, 0),
  EndTime: new Date(2021, 8, 14, 14, 30),
  ResourceId: 2
},
{
  Id: 2,
  Subject: 'Pepe',
  StartTime: new Date(2021, 8, 15, 13, 0),
  EndTime: new Date(2021, 8, 15, 14, 30),
  ResourceId: 2
}]
const prof3 =[  {
  Id: 2,
  Subject: 'Irene',
  StartTime: new Date(2021, 8, 16, 13, 0), //month one less
  EndTime: new Date(2021, 8, 16, 14, 30),
  ResourceId: 3
}]
  /* const eventTemplate = ({Subject}) =>{
    return(<div className="template-wrap">{Subject}</div>);
  }
 */
 function generateCalendarData() {
    let collections = [];
    let dataCollections = [mycalendar, prof1, prof2, prof3];
    for (let data of dataCollections) {
        collections = collections.concat(data);
    }
    return collections;
} 
  function onChange(args){
    const value = parseInt(args.event.target.getAttribute('value'), 10);
    const resourceData = resourceDataSource.filter((resource) => resource.Id === value);
    if (args.checked) {
        scheduleObj.addResource(resourceData[0], 'Resources', value - 1);
    }
    else {
        scheduleObj.removeResource(value, 'Resources');
    }
}
/* deleted from scheduler component, event settings:  template: eventTemplate.bind()  */
/* eventSettings={ { dataSource: data } } */
  return(<div>
    <Box>
        <tr style={{ height: '50px' }}>
            <td style={{ width: '100%' }}>
                <CheckBoxComponent value='0' id='personal' checked={true} label='My Calendar' disabled={true} change={onChange.bind()}></CheckBoxComponent>
                <CheckBoxComponent value='2' checked={false} label='Stella' change={onChange.bind()}></CheckBoxComponent>
                <CheckBoxComponent value='3' id='birthdays' checked={false} label='Juana' change={onChange.bind(this)}></CheckBoxComponent>
                <CheckBoxComponent value='1' id='holidays' checked={false} label='John' change={onChange.bind(this)}></CheckBoxComponent>
            </td>
            </tr>
    </Box>
    <StyledArticle>
      
      <ScheduleComponent  ref={schedule => scheduleObj = schedule} currentView='Month' selectedDate= {new Date(year, month, day)} eventSettings={{ dataSource: generateCalendarData() }} group={{ resources: ['Resources'] }}> 
        <ResourcesDirective>
          <ResourceDirective 
            field="ResourceId" 
            title="Resource Name"
            name="Resources" 
            textField="Name"
            idField="Id" 
            colorField="Color"
            allowMultiple={true}
            dataSource={resourceDataSource[0]}
            />
        </ResourcesDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
      </ScheduleComponent> 
    </StyledArticle> 
    </div>
  )
   
}

const StyledArticle = styled.article`
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid black;
  box-shadow: 0 0 20px rgba(0 0 0 / 15%);
  width: 80%;
  margin: 2rem auto;
`
export default Calendar;
