console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

$(function () {
  $('.js-production-menu').each(function () {
    var $list = $(this);
    var $images = $list.find('.js-production-menu-images');
    $list.find('[data-image-ref]').on('mouseenter', function () {
      var imageRef = $(this).data('image-ref');
      $images.find(`[data-image-item="${imageRef}"]`).addClass('active').siblings('.active').removeClass(
        'active');
    });
  });

  $('[data-scroll-to]').on('click', function (e) {
    e.preventDefault();
    scrollToElement('#' + $(this).data('scroll-to'));
  });
});













/* window.onload = function () {
    document.getElementById('lenta').onmouseover=function() {
        document.getElementById('products-images').style.cssText='background: url("../images/Gibion2.png")';
    }
    document.getElementById('lenta').onmouseout=function() {
        document.getElementById('products-images').style.cssText='background: url("../images/Gibion.png")';
    }

    document.getElementById('geomembrana').onmouseover=function() {
        document.getElementById('products-images').style.cssText='background: url("../images/Gibion3.png")';
    }
    document.getElementById('geomembrana').onmouseout=function() {
        document.getElementById('products-images').style.cssText='background: url("../images/Gibion.png")';
    }

    document.getElementById('georeshetka').onmouseover=function() {
        document.getElementById('products-images').style.cssText='background: url("../images/Gibion4.png")';
    }
    document.getElementById('georeshetka').onmouseout=function() {
        document.getElementById('products-images').style.cssText='background: url("../images/Gibion.png")';
    }

    document.getElementById('reotekstil').onmouseover=function() {
        document.getElementById('products-images').style.cssText='background: url("../images/Gibion5.png")';
    }
    document.getElementById('reotekstil').onmouseout=function() {
        document.getElementById('products-images').style.cssText='background: url("../images/Gibion.png")';
    }
} */
