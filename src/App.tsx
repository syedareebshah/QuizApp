import { useState } from 'react';
import Card from './comp/card';
import { sqrt } from './services/demo'
import { supp } from './types/demoTypes';

function App() {

  sqrt()
 let a = 'syed'
 let b = 'areeb'
  

  return (
    <div>
      <div>
        {
        sqrt().map((obj:supp, ind:number) => {
          return (
            <div key={ind}>
              <h1>{obj.murabba}</h1>
              <h1>{obj.name}</h1>
            </div>
          )
        })
      }

      </div>
      
      <h1>hy</h1>
      <Card />
    </div>
  );
}

export default App;