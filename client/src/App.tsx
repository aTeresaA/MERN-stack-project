import React from 'react';
import { NavigationBar } from './components/navigationbar/NavigationBar';
import { Routing } from './routes/Routing';
import './shared/global/Global.css';
import { UserProvider } from './shared/global/provider/UserProvider';
import Logotype from './shared/global/images/glutenfri-192.png'


function App () {
  return (
    <UserProvider>      
    <Routing>
      <div className="iconContainer">      
      <img className="icon" src={Logotype} alt="Tyvärr syns inte logotypen" />
      <h1 className="iconText">Teresas glutenfria matsida</h1>
      </div>
      <NavigationBar />
    </Routing>    
    </UserProvider>
  );// genom att wrappa med userprovider talar man om att elementen inom får tillgång till userprovider
}

export default App;
