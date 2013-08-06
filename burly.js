// "... if someone puts in that effort, then they did it on purpose and large
// burly men with socks full of sand can hold them accountable."

function __getBlinkTextDecorations() {
  var b=[], x=document.getElementsByTagName('*');
  for (var i=0; i<x.length; i++)
    if (x[i].tagName === 'BLINK') b.push(x[i]);
    else x[i].style.textDecoration.split(' ').every(function(d) {
      if (d === 'blink') { b.push(x[i]); return 0; }
    });
  return b;
}

function __burlify() {
  __burly.every(function(i){ i.style.visibility = i.style.visibility == 'visible' ? 'hidden' : 'visible'; return 1; });
}

// half-assed attempted at version sniffing
if (/Firefox\/(\d+).\d+$/.exec(navigator.userAgent)[1] == 23) {
  var __burly=__getBlinkTextDecorations();
  setInterval(__burlify,1000); __burlify();
}
