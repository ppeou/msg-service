class MsgService extends HTMLElement {
  connectedCallback() {
    const iframe = document.createElement('iframe');
    iframe.src= 'http://localhost:8080/lib/connect.html';
    const efe = this.getAttribute('abc');
    iframe.innerText = `ABC : ${efe}`;
    this.attachShadow({ mode: 'open' }).appendChild(iframe);
  }
}

customElements.define('msg-service', MsgService);
