import React from 'react';
import { useLocation } from 'react-router-dom';
import { UserDataTypes } from '../../interfaces';
import SideBar from '../../components/SideBar';


const HomePage = () => {
  const location = useLocation();
  const UserData:UserDataTypes = location.state?.userData;
  const modulos = Object?.entries(UserData.modulos)

  console.log({ location });

  if (!UserData || !UserData.modulos) {
    return <div>No se encontraron datos de usuario.</div>;
  }

  // const renderMenu = () => (
  //   modulos.map((item, index) => (
  //     <div key={index}>
  //       <strong>{item[0]}</strong>
  //       {item[1].map((subitem, subIndex) => (
  //         <p key={subIndex}>{subitem.descripcion_formulario}</p>
  //       ))}
  //     </div>
  //   ))
  // );

  return (
    <div>
      <SideBar modulesInfo={UserData?.modulos} />
      {/* {renderMenu()} */}
    </div>
  );
};

export default HomePage;