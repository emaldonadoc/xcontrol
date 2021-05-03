import axios from 'axios';

const portHost = 6660;

const listRegisterHost = [
  '0.0.0.0'
];

const healthCheck = async (host) => {
  try {
    await axios.get(`http://${host}:${portHost}/health`)
    return true;
  } catch (error) {
    console.log(`host not available: ${host}`);
    return false;
  }
};

export const fetchListActiveHost = async () => {
  return listRegisterHost.reduce(async (active, registerHost) => {
    if (await healthCheck(registerHost)) {
      console.log('host active', registerHost);
      active.push(registerHost)
    }
    return active;
  }, []);
};