import './lib/connect.js';

class MsgService extends HTMLElement {
  static get is() {
    return 'msg-service';
  }
  constructor() {
    super();
  }

  connectedCallback() {
    const src = this.getAttribute('src');
    if(src) {
      window.addEventListener('message', this._onMessageChange, false);
      const iframe = document.createElement('iframe');
      iframe.src = src;
      iframe.setAttribute('sandbox', 'allow-scripts');
      this.attachShadow({mode: 'open'}).appendChild(iframe);
    }
  }

  _onMessageChange(e) {
    const data = e.data;
    if(data.context) {
      console.log('Parent', data);
      console.log(window.CompileNewContext(data.context));
    }
  }
}

customElements.define(MsgService.is, MsgService);

export default MsgService;
