var client = function () {
  // 呈现引擎
  var engine = {
    ie: 0,
    gecko: 0,
    webkit: 0,
    khtml: 0,
    opera: 0,

    ver: null
  };

  var browser = {
    ie: 0,
    firefox: 0,
    safari: 0,
    konq: 0,
    opera: 0,
    chrome: 0,

    ver: null
  };

  var system = {
   win:false,
   mac:false,
   xll:false,

   iphone:false,
   ipod:false,
   ipad:false,
   ios:false,
   andriod:false,
   winMobile:false,

   wii:false,
   ps:false,
  };

  var ua = navigator.userAgent;
  if(window.opera){
    engine.ver = browser.ver =window.opera.version();
    engine.opera = browser.opera = parseFloat(engine.ver);
  }else if(/AppleWebKit\/(\S+)/.test(ua)){
    engine.ver = RegExp["$1"];
    engine.webkit = parseFloat(engine.ver);

    if(/Chrome\/(\S+)/.test(ua)){

    }else if(/Version\/(\S+)/.test(ua)){

    }else{

    }
  }else if(/KHTML\/(\S+)/.test(ua)||/Konqueror\/([^;]+)/.test(ua)){

  }else if(/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){

  }else if(/Firfox\/(\S+)/.test(ua)){

  }
}