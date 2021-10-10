import React, { useState, useEffect } from 'react';

const AppTitle = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/recipes")
      .then((res) => res.json())
      .then((data) => setData(data.recipes));
  }, []);

  return (
    <>
      {!data ? "Loading..." : data.map((d: any) => <p>{d.name}</p>)}
    </>
  )
}

export default AppTitle;