function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// function removeCookie(tabs) {
//   let removing = browser.cookies.remove({
//     url: tabs[0].url,
//     name: "favorite-color"
//   });
//   removing.then(onRemoved, onError);
// }

export { getCookie };
