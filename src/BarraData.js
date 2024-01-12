import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { CgProfile } from "react-icons/cg";
import { MdPerson } from "react-icons/md";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";

export const BarraData = [
  
  {
    title:'Tarefas',
    path: '/',
    icon: <IoIcons.IoIosPaper />,
    cName:'nav-text'
  },
  {
    title: 'Grupos',
    path: '/Grupos',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Conta',
    path: '/Conta',
    icon: <MdPerson />,
    cName: 'nav-text'
  },
  /*
  {
    title: 'Tarefas',
    path: '/Tarefas',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },*/
  {
    title: 'Sincronizar',
    path: '/Sincronizar',
    icon: <FaArrowsRotate />,
    cName: 'nav-text'
  }/*,
  {
    title: 'Defenições',
    path: '/support',
    icon: <FaGear />,
    cName: 'nav-text'
  }*/
];