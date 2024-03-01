import React from 'react'
import "./index.scss"
import { ModuleSubItemData } from '../../interfaces';

interface NavGroupWrapperProps{
    title:string;
    icon?:React.ReactNode;
    items: ModuleSubItemData[];
    goBack?:()=>void;
}


const NavGroupWrapper = ({title,icon,goBack}:NavGroupWrapperProps) => {
  return (
    <></>
  )
}

export default NavGroupWrapper