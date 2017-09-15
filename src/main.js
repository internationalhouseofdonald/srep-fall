import './styles.css';
// import './reset.css';
import './styles.scss';
import './scrollovers.scss';
// import './components/srep/fonts/0.ttf';

$(document).ready(function() {
  animate_bricks();
  $(document).on("scroll", function() {
    animate_bricks();
  });
  $(window).resize(function() {
    animate_bricks();
  });
  $('#slider').slider({
    min: 100000,
    max: 1000000,
    step: 25000,
    range: true,
    values: [250000, 350000],
    disabled: true
  });
});

function animate_bricks() {
  var width_of_page, scroll_position, bricks;
  width_of_page = window.innerWidth;
  scroll_position = window.scrollY;
  bricks = document.getElementsByClassName('brick');
  Object.keys(bricks).forEach(function(element, index, array) {
    var rect = bricks[index].getBoundingClientRect();
    // console.log(index, rect.top, rect.right, rect.bottom, rect.left);
    if (rect.top < window.innerHeight) {
      $('.brick:eq(' + index + ')').animate({
        opacity: 1,
        top: 0,
        display: 'block'
      }, 500);
    }
  }, this);
}