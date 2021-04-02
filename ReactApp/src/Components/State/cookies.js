export default {
  cookies: {
    create: ({key, value}) => document.cookie = `${key}=${value}` ,
    readToken: () => {
      const c_name = 'token'  
      var i,
        x,
        y,
        ARRcookies = document.cookie.split(";");
      for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
          return unescape(y);
        }
      }
    },
    clear: () => {
      var cookies = document.cookie.split(";");
  
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf("=");
          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
  }
  },
};
