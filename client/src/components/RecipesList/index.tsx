import React, { useState, useEffect } from 'react';

const AppTitle = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/recipes")
      .then((res) => res.json())
      .then((data) => setData(data.recipes));
  }, []);

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {!data ? "Loading..." : data.map((d: any) => <div style={{display: 'flex'}}><img src={d.image} alt={d.name} style={{width: 80, height: 80}} /><p>{d.name}</p></div>)}
    </div>
  )
}

export default AppTitle;