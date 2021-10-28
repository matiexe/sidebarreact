import { MenuIcon } from '@heroicons/react/solid';
import React from 'react';
import './index.css';
import { SideBarMenu } from './components/SideBarMenu';
import { SideBarMenuCard, SideBarMenuItem } from './types/types.d';

function App() {
  const items: SideBarMenuItem[] =[
    {
      id: "1",
      label:"hola",
      icon: "MenuIcon",
      url:"/"
    }

  ];
  const card: SideBarMenuCard = {
      id:"card01",
      displayName:"test",
      photoUrl: "test",
      title: "test",
      url:"/"
    }



  return (
    <div >
      <SideBarMenu items={items} card={card}/>
    </div>
  );
}

export default App;
