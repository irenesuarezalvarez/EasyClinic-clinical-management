import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faEdit, faFileMedicalAlt, faCalendar, faInfo, faCaretDown, faCaretUp, faNotesMedical} from '@fortawesome/free-solid-svg-icons';

export const SidebarProtectedData = [
  {
    title: 'Patients',
    path: '/mypatients',
    icon: <FontAwesomeIcon icon={faNotesMedical}/>,
    iconClosed:<FontAwesomeIcon icon={faCaretDown}/>,
    iconOpened: <FontAwesomeIcon icon={faCaretUp}/>,

    subNav: [
      {
        title: 'New Patient',
        path: '/createpatient',
        icon: <FontAwesomeIcon icon={faUserPlus}/>,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Calendar',
    path: '/calendar',
    icon: <FontAwesomeIcon icon={faCalendar}/>
  }
];