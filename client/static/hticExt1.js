
function savePage() {
   var anchor = document.getElementById("save");
   var h = document.documentElement.outerHTML;
   anchor.setAttribute('download', 'save.html');
   anchor.setAttribute('href', 'data:text/html;charset=UTF-8,' + encodeURIComponent(h));
   }
function randomItem(items) { 
   return items[Math.floor((items.length * Math.random()))];
   }
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}   

function myF(e){
   alert("myF " + e.target.innerHTML);
}

function replaceInnerHtmlIfHasGivenValueAttr(name,repl,node){
  var n = node;
  //console.log('node: ', n.outerHTML);
  if(node.getAttribute("value")==name){
    n.innerHTML = repl;
    //alert("replacing " + name);
  }
  
  return n;

}
  

function setOverrideNextToThisBranch(e){
  setOverrideNextToThisBranch_(e,"overrideNxt1");
}
function setOverrideNextToThisBranch1(e){
  setOverrideNextToThisBranch_(e,"overrideNxt1");
}

function setOverrideNextToThisBranchString(branchName,v){
  ([].slice.call(document.getElementById("cache").children)).map(function(n){
    return replaceInnerHtmlIfHasGivenValueAttr(v
      ,"<param value=\"" + branchName + "\">"
      ,n
      );
    }
    );
}

function setOverrideNextToThisBranch2(e){
  setOverrideNextToThisBranch_(e,"overrideNxt2");
}

function setOverrideNextToThisBranch_(e,v){

  var branchName = e.target.parentNode.getAttribute("value").split("option_")[1];

  ([].slice.call(document.getElementById("cache").children)).map(function(n){
    return replaceInnerHtmlIfHasGivenValueAttr(v
      ,"<param value=\"" + branchName + "\">"
      ,n
      );
    }
    );

}




function clearOverrideNext(e){
  clearOverrideNext_(e,"overrideNxt1");
  clearOverrideNext_(e,"overrideNxt2");
}
function clearOverrideNext1(e){
  clearOverrideNext_(e,"overrideNxt1");
}
function clearOverrideNext2(e){
  clearOverrideNext_(e,"overrideNxt2");
}

function clearOverrideNext_(e,v){
  //alert("myF " + e.target.innerHTML);
  //alert("ThisBranch " + );
  //document.getElementById("cache").children = 
  ([].slice.call(document.getElementById("cache").children)).map(function(n){
    return replaceInnerHtmlIfHasGivenValueAttr(v,"",n);
    }
    );

}







function set_float_main_nailed_stuff_width(e){
  const ruler = document.getElementById("floatMenuRuler");
  const ruler1em = document.getElementById("ruler1em");
  const ruler100psnt = document.getElementById("ruler100psnt");
  const floatThis = document.getElementById("float_main_nailed_stuff");
  
  if (ruler.offsetWidth === ruler100psnt.offsetWidth) {
      floatThis.style.float = "none";
    } else {
      floatThis.style.width = ruler.offsetWidth;
      floatThis.style.paddingLeft = ruler1em.offsetWidth*4;
      floatThis.style.paddingBottom = ruler1em.offsetWidth*4;
      //floatThis.style.marginLeft = ruler1em.offsetWidth*4;
      floatThis.style.marginBottom = ruler1em.offsetWidth*4;
      //floatThis.style.borderLeft = "medium solid lightgrey";
      //floatThis.style.borderBottom = "medium solid lightgrey";
      floatThis.style.border = "medium solid";
      floatThis.style.borderImage = "linear-gradient(to top, rgba(0, 0, 0, 0), lightgray, rgba(0, 0, 0, 0)) 1 100%";
      floatThis.style.borderRight = 0;
    }
}


function set_main_nailed_stuff_1shot(n){
  const display = document.getElementById("display");
  const display1shot = document.getElementById("display1shot");
  display1shot.innerHTML = display.innerHTML;
  /*display.childNodes.forEach(function(x){
      x.style.display = "none";
    }
    );
    display.style.display = "block";
  */
  try {
    display.childNodes.forEach(function(x){
      x.style.display = "none";
    }
    );
    display.style.display = "block";
  } catch(e) {
    if (n == null) {n=1;};
    if (n < 10000) {
      setTimeout(set_main_nailed_stuff_1shot,1,n+1);
    }
  }
  
  
}



function runCode(c){
  var a=new Function(c);
  a.apply(null);
} 



