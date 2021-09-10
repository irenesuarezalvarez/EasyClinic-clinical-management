import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faNotesMedical} from '@fortawesome/free-solid-svg-icons';

export const SidebarLogout = [
    {
        title: 'Log out',
        path: '/logout',
        icon: <FontAwesomeIcon icon={faNotesMedical}/>,
        iconClosed:<FontAwesomeIcon icon={faCaretDown}/>,
        iconOpened: <FontAwesomeIcon icon={faCaretUp}/>,
    }
];