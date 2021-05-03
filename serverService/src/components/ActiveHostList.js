import React, { useEffect, useState } from 'react';
import { fetchListActiveHost } from '..//utils/clientHost';


export default () => {


  const [activeHostList, setActiveHostList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchListActiveHost()
      .then((list) => {
        setActiveHostList(list)
      });
    return () => {
      setLoading(false)
    };
  }, [isLoading]);


  const printActiveHost = () => {
    if (activeHostList.length > 0) {
      return activeHostList.map((item, i) => <li key={i}>{item}</li>)
    }
    return <li>NO ACTIVE HOST ARE RUNNING</li>;
  }


  return (
    <div>
      <div>Active Hosts</div>
      <ul>
        {printActiveHost()}
      </ul>
    </div>
  );

}