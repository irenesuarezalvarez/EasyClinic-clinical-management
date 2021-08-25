import  React from "react";
import styled from "styled-components";
import '../../Calendar.css';

import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';



function Calendar (){
  const data = [{
      Id: 2,
      Subject: 'Paris',
      StartTime: new Date(2021, 8, 15, 10, 0),
      EndTime: new Date(2021, 8, 15, 12, 30),
  }];
 

  return(
    <StyledArticle>
      <ScheduleComponent currentView='Week' eventSettings={ { dataSource: data } }>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
      </ScheduleComponent> 
    </StyledArticle> 
  )
   
}

const StyledArticle = styled.article`
  padding: 1rem 1rem;
  border-radius: 4px;
  border: 1px solid black;
  box-shadow: 0 0 20px rgb(0 0 0 / 15%);
  width: 80%;
  margin: 2rem auto;
`
export default Calendar;
