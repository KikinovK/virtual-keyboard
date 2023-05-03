import Layer from './component/layer/Layer';

document.addEventListener('DOMContentLoaded', () => {
  const layer = new Layer();
  window.layer = layer;
});
