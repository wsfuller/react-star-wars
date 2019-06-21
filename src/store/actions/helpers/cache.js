export const checkCache = (appCacheName, cacheCategory) => {
  const cacheObj = JSON.parse(localStorage.getItem(appCacheName));
  const timeNow = new Date().getTime();

  if (cacheObj && cacheObj[cacheCategory] && timeNow <= cacheObj[cacheCategory].expires) {
    return true;
  }
  return false;
};

export const setCache = (appCacheName, appCacheObj, cacheCategory, results, expiry) => {
  const obj = {
    ...appCacheObj,
    [cacheCategory]: {
      results,
      expires: expiry,
    },
  };

  return localStorage.setItem(appCacheName, JSON.stringify(obj));
};
