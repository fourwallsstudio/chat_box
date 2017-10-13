export const setJsonWebToken = (res) => {
  if (res.headers['authorization']) {
    const token = res.headers['authorization'].split(' ')[1];
    window.localStorage.setItem('jwt', token);
  }
}

export const getJsonWebToken = () => {
  if (localStorage['jwt']) {
    const token = localStorage.getItem('jwt');
    return `bearer ${token}`;
  }
}

export const removeJsonWebToken = () => {
  if (localStorage['jwt']) delete localStorage['jwt'];
}
