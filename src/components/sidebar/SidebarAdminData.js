import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faCalendar, faEdit, faCaretDown, faCaretUp, faNotesMedical} from '@fortawesome/free-solid-svg-icons'

export const SidebarAdminData = [
    {
        title: 'Patients',
        path: '/patients',
        icon: <FontAwesomeIcon icon={faNotesMedical}/>,
        iconClosed:<FontAwesomeIcon icon={faCaretDown}/>,
        iconOpened: <FontAwesomeIcon icon={faCaretUp}/>,
    
        subNav: [
            {
                title: 'New Patient',
                path: '/create',
                icon: <FontAwesomeIcon icon={faUserPlus}/>,
                cName: 'sub-nav'
            },
            {
                title: 'Edit',
                path: '/edit/:id',
                icon: <FontAwesomeIcon icon={faEdit}/>,
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