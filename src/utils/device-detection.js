// Taken from: https://stackoverflow.com/questions/8348139/detect-ios-version-less-than-5-with-javascript
export function getIosMajorVersion() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
    const v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    return parseInt(v[1], 10);
  }
  
  return 10;
}
