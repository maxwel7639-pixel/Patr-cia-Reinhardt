/* =====================================================================
   Patrícia Reinhardt · Massoterapeuta
   Sem dependências externas.
   ===================================================================== */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --------------------- revelar ao rolar a página --------------------- */

  function initReveal() {
    var pending = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
    if (!pending.length || prefersReducedMotion) return;

    pending.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(26px)';
      el.style.transition =
        'opacity .8s cubic-bezier(.16,.84,.44,1), transform .8s cubic-bezier(.16,.84,.44,1)';
    });

    // O atraso escalonado usa a posição do elemento entre os irmãos que também
    // são revelados, para as grades entrarem em cascata.
    function show(el) {
      var parent = el.parentElement;
      var siblings = parent
        ? Array.prototype.filter.call(parent.children, function (n) {
            return n.hasAttribute && n.hasAttribute('data-reveal');
          })
        : [];
      var delay = Math.min(Math.max(siblings.indexOf(el), 0), 5) * 90;

      setTimeout(function () {
        el.style.opacity = '1';
        el.style.transform = 'none';
      }, delay);
    }

    var ticking = false;

    function sweep() {
      ticking = false;
      var limit = window.innerHeight * 0.92;

      // Varre de trás para frente para poder remover da lista com segurança.
      // Quem já passou do topo da tela (rolagem rápida, âncora, F5 no meio da
      // página) entra aqui pelo mesmo teste e nunca fica invisível.
      for (var i = pending.length - 1; i >= 0; i--) {
        if (pending[i].getBoundingClientRect().top < limit) {
          show(pending[i]);
          pending.splice(i, 1);
        }
      }

      if (!pending.length) {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      }
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(sweep);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // Fontes e imagens mudam a altura da página depois do DOMContentLoaded.
    window.addEventListener('load', onScroll);
    sweep();
  }

  /* ----------------- inclinação 3D nos cards de serviço ----------------- */

  function initTilt() {
    if (prefersReducedMotion || !window.matchMedia('(hover: hover)').matches) return;

    document.querySelectorAll('[data-tilt]').forEach(function (card) {
      card.style.transformStyle = 'preserve-3d';
      card.style.willChange = 'transform';

      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transition = 'transform .12s ease-out, box-shadow .3s ease';
        card.style.transform =
          'perspective(900px) rotateY(' + (px * 7).toFixed(2) + 'deg) rotateX(' +
          (-py * 7).toFixed(2) + 'deg) translateY(-4px)';
        card.style.boxShadow = '0 22px 46px rgba(0,0,0,.38)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transition =
          'transform .5s cubic-bezier(.16,.84,.44,1), box-shadow .4s ease';
        card.style.transform = 'none';
        card.style.boxShadow = 'none';
      });
    });
  }

  /* ---------------------------- FAQ acordeão ---------------------------- */

  function initFaq() {
    var faq = document.querySelector('[data-faq]');
    if (!faq) return;

    function closeAll() {
      faq.querySelectorAll('.faq__item').forEach(function (item) {
        item.classList.remove('is-open');
        var panel = item.querySelector('[data-faq-a]');
        var btn = item.querySelector('[data-faq-q]');
        if (panel) panel.style.maxHeight = '0px';
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }

    function openItem(item) {
      var panel = item.querySelector('[data-faq-a]');
      var btn = item.querySelector('[data-faq-q]');
      item.classList.add('is-open');
      if (panel) panel.style.maxHeight = panel.scrollHeight + 40 + 'px';
      if (btn) btn.setAttribute('aria-expanded', 'true');
    }

    faq.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('[data-faq-q]') : null;
      if (!btn) return;

      var item = btn.closest('.faq__item');
      var wasOpen = item.classList.contains('is-open');

      closeAll();
      if (!wasOpen) openItem(item);
    });

    // Mantém a altura correta quando a largura da tela muda.
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        var open = faq.querySelector('.faq__item.is-open [data-faq-a]');
        if (open) open.style.maxHeight = open.scrollHeight + 40 + 'px';
      }, 120);
    });
  }

  /* ------------------------------ rodapé ------------------------------ */

  function initYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  function init() {
    initReveal();
    initTilt();
    initFaq();
    initYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
