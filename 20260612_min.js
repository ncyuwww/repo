(function(){
  if(!window.chatbase || window.chatbase("getState") !== "initialized"){
    window.chatbase = (...args) => {
      if(!window.chatbase.q){ window.chatbase.q = []; }
      window.chatbase.q.push(args);
    };
    window.chatbase = new Proxy(window.chatbase, {
      get(target, prop){
        if(prop === "q"){ return target.q; }
        return (...args) => target(prop, ...args);
      }
    });
  }

  function onLoad(){
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "HZEcHRRku9anODJVTuJ_s";
    script.domain = "www.chatbase.co";
    document.body.appendChild(script);
  }

  document.addEventListener("click", function(e){
    if(e.target && e.target.id === "open-ai-chat"){
      if(window.chatbase){
        window.chatbase("open");
      }else{
        alert("AI客服尚未載入完成，請稍後再試");
      }
    }
  });

  if(document.readyState === "complete"){
    onLoad();
  }else{
    window.addEventListener("load", onLoad);
  }
})();