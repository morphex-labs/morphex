export const mock = (success: boolean, timeout = 1000): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve('');
      } else {
        reject(new Error('Request failed!'));
      }
    }, timeout);
  });
};
