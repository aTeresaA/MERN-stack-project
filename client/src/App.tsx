import React from 'react';
import { NavigationBar } from './components/navigationbar/NavigationBar';
import { Routing } from './routes/Routing';
import './shared/global/Global.css';
import { UserProvider } from './shared/global/provider/UserProvider';

function App () {
  return (
    <UserProvider>
    <Routing>
      <h1>Teresas glutenfria matsida</h1>
      <NavigationBar />
    </Routing>
    </UserProvider>
  );// genom att wrappa med userprovider talar man om att elementen inom får tillgång till userprovider
}

export default App;
