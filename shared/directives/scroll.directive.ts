import Vue from 'vue';

Vue.directive('vpshow', {
  inViewport (el:any) {
    let rect = el.getBoundingClientRect();
    return !(rect.bottom < 0 || rect.right < 0 ||
      rect.left > window.innerWidth ||
      rect.top > window.innerHeight);
  },

  bind(el: any, binding: any) {
    const elementId = `-${el.id}` || '';
    el.classList.add(`before-enter${elementId}`);
    el.$onScroll = function() {
      if (binding.def.inViewport(el)) {
        el.classList.add(`enter${elementId}`);
        el.classList.remove(`before-enter${elementId}`);
        binding.def.unbind(el, binding);
      }
    }
    document.addEventListener('scroll', el.$onScroll);
  },

  inserted(el: any, binding: any) {
    el.$onScroll();
  },

  unbind(el: any, binding: any) {
    document.removeEventListener('scroll', el.$onScroll);
    delete el.$onScroll;
  }
} as any)
