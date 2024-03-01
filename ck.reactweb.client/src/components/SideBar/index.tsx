import React,{useState} from "react";
import "./index.scss";
import { ModuleItemData } from "../../interfaces";
import { MdKeyboardArrowRight } from "react-icons/md";

interface SideBarProps {
  modulesInfo: ModuleItemData;
}

const SideBar = ({ modulesInfo }: SideBarProps) => {
  console.log({ modulesInfo });
  const [showMenu,setShowMenu] = useState<boolean>(false)
  return (
    <aside className="sidebar--main--container">
      <div className="sidebar--header--container">
        <strong className="sidebar--title--company"> Chaos Knight </strong>
      </div>
      <ul className="sidebar--primary--modules--container">
        {Object.entries(modulesInfo).map((item, index) => (
          <li  onClick={()=>setShowMenu(!showMenu)} className="primary--module--item" key={index}>
            <div className="primary--module--item--header">
              <strong>{item[0]}</strong>
              {item[1].length > 0 && <MdKeyboardArrowRight />}
            </div>
            {item[1].length > 0 && (
              <ul className={showMenu?"primary--module--subitems open":"primary--module--subitems"}>
                {item[1].map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <p>{subItem.descripcion_formulario}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
