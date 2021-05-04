import axios from 'axios';

axios.defaults.timeout = 500;
const portHost = 6660;

const listRegisterHost = [
  '0.0.0.0',
  '192.168.0.24'
];

const healthCheck = async (host) => {
  try {
    await axios.get(`http://${host}:${portHost}/health`)
    return host;
  } catch (error) {
    console.log(`host not available: ${host}`);
    return null;
  }
};

export const fetchListActiveHost = async () =>
  await Promise
    .all(listRegisterHost.map((registerHost) => healthCheck(registerHost)))
    .then((result) => result.filter(it => it !== null));