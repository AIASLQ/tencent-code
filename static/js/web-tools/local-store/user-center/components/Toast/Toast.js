import './Toast.less';

const rootId = 'root-toast2';
let rootEl = document.getElementById(rootId);
if (!rootEl) {
    rootEl = document.createElement('div');
    rootEl.id = rootId;
    document.body.appendChild(rootEl);
}

let timeCtrl = null;

function run(show, txt) {
    console.log('>>> Toast2:', show);
    const toast2El = rootEl.querySelector('.toast2');
    if (!toast2El) {
        rootEl.innerHTML = `<div class="toast2">
        <span class="toast2-wrap">
          <span class="txt">${txt}</span>
        </span>
      </div>`;
        return true;
    }
    const txtEl = rootEl.querySelector('.toast2 .toast2-wrap .txt');
    txtEl.innerHTML = txt;
    if (show) {
        toast2El.style.display = 'block';
    } else {
        toast2El.style.display = 'none';
    }
}

export default (txt, waitTime = 2000) => {
    clearTimeout(timeCtrl);
    run(true, txt);
    timeCtrl = setTimeout(() => {
        run(false);
    }, waitTime);
};