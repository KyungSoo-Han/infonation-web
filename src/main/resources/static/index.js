const isLocalhost = window.location.hostname === 'localhost';
const serverUrl = isLocalhost ? 'http://localhost:81' : 'http://api.infonation.kr';

sessionStorage.setItem("bizId", '1');
sessionStorage.setItem("serverUrl", serverUrl);
