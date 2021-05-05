import React, { useEffect, useState } from 'react';
import { PageHeader } from 'antd';
import { fetchListActiveHost } from '../../utils/clientHost';


const HostElement = (props) => {

  const handleActiveButton = (e) => {
    e.stopPropagation();
    console.log('handle active button');
  }

  return (
    <div className='host' >
      <p className='arrow-item'>{props.item}</p>
      <button className='arrow-item' onClick={handleActiveButton}>activate</button>
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


  const hostList = () => {
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
    <div className='host-list'>
      { hostList()}
    </div>
  );

}

export default () => {
  return (
    <div className='active-host-wrapper'>
      <PageHeader className='wrapper-title' title="Active" />
      <ActiveHost />
    </div>
  );
}