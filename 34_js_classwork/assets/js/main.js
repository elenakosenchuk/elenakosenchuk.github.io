const setStyle=(el,styles)=>{
    for(let prop in styles){
        el.style[prop] = styles[prop];
    }
}

function modal(text='', title='message', btnText='OK'){
let overlay = document.createElement('div');
setStyle(overlay, {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: '9999'
});

let modal = document.createElement('div');
setStyle(modal, {
    width: '400px',
    backgroundColor: '#fff',
    borderRadius: '5px',    
});

let modalTop = document.createElement('div');
setStyle(modalTop, {
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontSize: '22px',
    position: 'relative'
});

modalTop.innerText = title;

let btnClose = document.createElement('button');
btnClose.setAttribute('type', 'button');
btnClose.onclick = () => {
    overlay.remove();
};
let btn = btnClose.cloneNode();
btn.onclick = () => {
    document.body.remove(overlay);
};
setStyle(btnClose, {
    position: 'absolute',
    right: '10px',
    top: '10px',
    width: '26px',
    height: '26px',
    border: 'none',
    cursor: 'pointer',
    background: 'none',
    color: 'red',
    fontSize: '20px',
    fontWeight: '700'
});
btnClose.innerHTML = '&times;';

let modalBody = document.createElement('div');
modalBody.style.padding = '10px';

let modalText = document.createElement('p');
modalText.innerText = text;

let modalBottom = document.createElement('div');
setStyle(modalBottom, {
    padding: '10px',
    cursor: 'pointer',
    textAlign: 'center'
});
// let btn= document.createElement('button');
// btn.setAttribute('type', 'button');
btn.innerText = btnText;

modalTop.append(btnClose);
modal.append(modalTop);
modalBody.append(modalText);
modal.append(modalBody);
overlay.append(modal);
modalBottom.append(btn);
modal.append(modalBottom);
document.body.append(overlay);
}
modal('kjgklhfjkgdfhgdhgd');
