export const setJsonWebToken = (res) => {
  if (res.headers['authorization']) {
    const token = res.headers['authorization'].split(' ')[1];
    window.localStorage.setItem('jwt', token);
  }
}

export const getJsonWebToken = () => {
  if (window.localStorage['jwt']) {
    const token = window.localStorage.getItem('jwt');
    return `bearer ${token}`;
  }
}
