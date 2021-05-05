import React, { useEffect, useState } from 'react';
import { fetchListActiveHost } from '../../utils/clientHost';


const HostElement = (props) => {

  const handleActiveButton = (e) => {
    e.stopPropagation();
    console.log('handle active button');
  }

  return (
    <div className='host' >
      <p>{props.item}</p>
      <button onClick={handleActiveButton}>activate</button>
    </div>
  );
}

const ActiveHost = () => {
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


  const ActiveHost = () => {
    if (activeHostList.length > 0) {
      return activeHostList.map((item, i) => {
        return (
          <HostElement item={item} key={i}></HostElement>
        );
      })
    }
    return <div className='host no-one'>NO ACTIVE HOST ARE RUNNING</div>;
  }

  return (
    <div className='active-host-wrapper'>
      <ActiveHost />
    </div>
  );

}

export default () => {
  return (
    <div>
      <div>Active Hosts</div>
      <div className='active-host-wrapper'>
        <ActiveHost />
      </div>
    </div>
  );
}