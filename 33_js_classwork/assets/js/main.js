let div = document.createElement('div');
let h1 = document.createElement('h1');
h1.innerText = 'Hello! I am tag from JS';
let flag = true;

// h1.style.cssText = `color:red;background-color:yellow`;

function setStyle(el, styles){
    for(prop in styles){
        el.style[prop] = styles[prop];
    }
}
setStyle(h1, {
    fontSize:'50px',
    color: 'red',
    position: 'fixed',
    left: '200px',
    top:'100px',
    backgroundColor:'yellow'
});

setStyle(div, {
    padding: '50px',
    backgroundColor:'gray',
    with:'400px',
    height:'200px'
});

// h1.setAttribute('style', `
// color:red;
// background-color:yellow`);

// h1.style.fontSize = '60px';
// h1.style.color = 'red';

// for(prop in ha_css){
//     h1.style[prop] = h1_css[prop];
// }
h1.onclick = function() {
    if(flag){
        chTitle('Other text');
    }else{
        chTitle('Hello! I am tag from JS');
    }
    flag = !flag;
}

let p = document.createElement('p');
p.innerText = 'Lorem ipsum dolor';

div.appendChild(p);
div.appendChild(h1);
div.classList.add('foo');
document.body.appendChild(div);

function chTitle(t){
    h1.innerText = t;
}