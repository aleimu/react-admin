import { service } from './request';

function urlencoded(data) {
  return Object.keys(data)
    .filter((key) => data[key] !== undefined && data[key] !== null)
    .map((key) => `${key}=${encodeURIComponent(data[key])}`)
    .join('&');
}
const ClawConfig = {
  headers: {
    clientId: 'dragon-claw',
    secretKey:
      '4e216841188c38f855173e10079f42be9226ae60bc0f80c9181a9948b2cfc645',
    'x-clientId': 'dragon-ball',
    'x-secretKey':
      'b31fe76e56556443622fae8cb9e4680d0b76500405bdf70d11916c21ef5a2d78',
  },
};

export const getAppList = (data) =>
  service.get(`/dragonball/api/v1/applications/?` + urlencoded(data));

export const getNameSpaceList = (data) =>
  service.get(`/dragonclaw/api/v1/namespace?` + urlencoded(data), ClawConfig);
