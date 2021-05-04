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
      return activeHostList.map((item, i) => {
        return (<div className='host' key={i}>{item} </div>);
      })
    }
    return <div className='host no-one'>NO ACTIVE HOST ARE RUNNING</div>;
  }

  return (
    <div>
      <div>Active Hosts</div>
      <div className='active-host-wrapper'>
        {printActiveHost()}
      </div>
    </div>
  );

}