import React from 'react';
import { Button } from 'semantic-ui-react'
function Header() {
  return (
    <div className="App">
               <div>
    <Button content='Primary' primary />
    <Button content='Secondary' secondary />
  </div>
 
    </div>
  );
}

export default Header;
