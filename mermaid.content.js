(function(){
  console.log("mermaidjs")
  document.querySelectorAll('[lang="mermaid"]').forEach(function(elem,index){
      var code = document.querySelectorAll("code",elem)[index].textContent;
      elem.insertAdjacentHTML('afterend', `<div class="mermaid">${code}</div>`)
      elem.style.display = 'none';
      console.log(elem.innerHTML)
  });
  mermaid.initialize({
      theme: 'neutral',//default, forest, dark or neutral
      // themeCSS: '.node rect { fill: red; }',
      logLevel: 3,
      flowchart: { curve: 'linear' },
      gantt: { axisFormat: '%m/%d/%Y' },
      sequence: { actorMargin: 50 },
      // sequenceDiagram: { actorMargin: 300 } // deprecated
  });
})()
console.log("mermaidjs")