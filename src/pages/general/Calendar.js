import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import '../../Calendar.css';

import { AuthContext } from "../../utils/AuthContext";
import axiosApi from "../../utils/AxiosApi.js";
import Box from "../../components/layouts/Box";
import StyledLink from "../../components/layouts/StyledLink";

import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { Schedule, Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, ResourceDirective, ResourcesDirective } from '@syncfusion/ej2-react-schedule';
import { faSortAlphaUp } from "@fortawesome/free-solid-svg-icons";

const Calendar =() => {
  var scheduleObj = new Schedule();
  const [professionals, setProfessionals] = useState([]);
  const [app, setApp] = useState([]);
  const { role } = useContext(AuthContext)

  useEffect(() => {
    getProfessionals()  
    getApppointments()
  }, [])

//Get professionals for dropdown
  const getProfessionals = async () =>{
    try{
      const result = await axiosApi.get("/professionals"); 
      const professionals = result.data;
      setProfessionals([...professionals]); 
    }
    catch(error){
      console.log(error);
    }
}

//Get appointments
const getApppointments = async () =>{
  try{
    const result = await axiosApi.get("/professionals/app"); 
    const appoint = result.data;
    setApp([...appoint]); 
  }
  catch(error){
    console.log(error);
  }
}

 //resourceID connected to field
  const resourceDataSource = [
    {Name: 'My Calendar', Id:0, Color: '#ea7a57'},
    {Name: 'John', Id:1, Color: '#ea7a57'},
    {Name: 'Stella', Id:2, Color: '#357CD2'},
    {Name: 'Juana', Id:3, Color: '#7fa900'}
  ]

  ///
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()+1
  const day = today.getDate() 

  //Collections
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

  console.log('Prof start', prof3.StartTime)
  /* const eventTemplate = ({Subject}) =>{
    return(<div className="template-wrap">{Subject}</div>);
  }
 */

 /*  function generateCalendarData() {
    let collections = [];
    let dataCollections = [mycalendar, prof1, prof2, prof3];
    for (let data of dataCollections) {
        collections = collections.concat(data);
    }
    return collections;
  }  */
  
  
  function generateCalendarData() {
    let collections = [];
    let dataCollections = professionals.map((prof)=> {
     /*  console.log('prof-->', prof) */
      collections.push(prof.appointment)
    })

    for (let data of dataCollections) {
        /* console.log('we are in data collections', dataCollections)  */
        collections = collections.concat(data);
    }
    return collections;
  } 
 

  function onChange(args){
    
    const value = parseInt(args.event.target.getAttribute('value'), 10);
    const resourceData = professionals.filter((coll) => (professionals.indexOf(coll)+1) === value );
   
   if (args.checked) {
      console.log('Resourcedata', resourceData[0])
       scheduleObj.addResource(resourceData[0], 'Resources', value - 1); 
    }
    else {
        scheduleObj.removeResource(value, 'Resources');
    } 
   
    
}
console.log('-->', app)
const renderApp = () => {
  return app.length > 0 && app.map(({subject, StartTime}) => {
      return(
        <div>subject: {subject} y startTime: {StartTime}</div>
      )
  })
}

const renderProfessionalChekbox = () =>{
  let value = 0;
  return professionals.length > 0 && professionals.map(({ _id, username }) => {
    value++
    return (
      <div>
        <CheckBoxComponent value={value} checked={false} label={username} change={onChange.bind()}/>
      </div>
      
    )
})
}
/* deleted from scheduler component, event settings:  template: eventTemplate.bind()  */
/* eventSettings={ { dataSource: data } } */
  return(
  <div>
                    <div>
                      Render app:
                      {renderApp()}
                    </div>
      <div>
        <tr style={{ height: '50px' }}>
            <td style={{ width: '100%' }}>
              {renderProfessionalChekbox()}

              
                {/*  <CheckBoxComponent value='0' id='personal' checked={true} label='My Calendar' disabled={true} change={onChange.bind()}></CheckBoxComponent>
                <CheckBoxComponent value='2' checked={false} label='Stella' change={onChange.bind()}></CheckBoxComponent>
                <CheckBoxComponent value='3' id='birthdays' checked={false} label='Juana' change={onChange.bind()}></CheckBoxComponent>
                <CheckBoxComponent value='1' id='holidays' checked={false} label='John' change={onChange.bind()}></CheckBoxComponent> */}
            </td>
        </tr>
      </div>
      <StyledArticle>
        <ScheduleComponent  
          ref={schedule => scheduleObj = schedule} 
          currentView='Month' 
          selectedDate= {new Date(year, month, day)} 
          eventSettings={{ dataSource: generateCalendarData()}} 
          group={{ resources: ['Resources'] }}> 
          <ResourcesDirective>
            <ResourceDirective 
              field="professional" 
              title="Resource Name"
              name="Resources" 
              textField="username" //changed
              idField="_id" 
              colorField="'#ea7a57'"
              allowMultiple={true}
              dataSource={professionals[0]}
              />
          </ResourcesDirective>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
        </ScheduleComponent> 
      </StyledArticle> 
      <Box>
        { role === "prof" && 
          <StyledLink to="/mypatients">Back</StyledLink>
        }
        { role === "admin" &&
          <StyledLink to="/patients">Back</StyledLink>
        }
        { !role &&
          <StyledLink to="/">Back</StyledLink>
        }
      </Box>
    </div>
    
  )
   
}

const StyledArticle = styled.article`
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid black;
  box-shadow: 0 0 20px ${props => props.theme.color.boxshadow};;
  width: 80%;
  margin: 2rem auto;
`
export default Calendar;
