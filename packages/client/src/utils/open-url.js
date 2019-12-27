export default (url, target) => {
  if (target === 'new') {
    const myWindow = window.open(url, target);
    myWindow.focus();
  }

  if (target === 'id') {
    document.getElementById(url).scrollIntoView();
  }
}
