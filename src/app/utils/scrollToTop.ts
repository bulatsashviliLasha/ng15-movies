function scrollToTop() {
  setTimeout(() => {
    window.scroll({
      top: 0,
      left: 0
    });
  }, 500)
}

export default scrollToTop;
