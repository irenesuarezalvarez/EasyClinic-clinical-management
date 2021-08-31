import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faHome } from '@fortawesome/free-solid-svg-icons'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FontAwesomeIcon icon={faHome}/>,
    iconClosed: <FontAwesomeIcon icon={faUserPlus}/>,
    iconOpened:<FontAwesomeIcon icon={faUserPlus}/>,
  }
];