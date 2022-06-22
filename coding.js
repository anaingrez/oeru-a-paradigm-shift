var section = $('li');

function toggleAccordion() {
    section.removeClass('active');
    section.addClass('hidden');

    $(this).removeClass('hidden');
    $(this).addClass('active');
}

section.on('click', toggleAccordion);

const root = document.documentElement
// Mouse goes to ball, ball getts bigger
root.addEventListener("mousemove", e => {
    const relativeMousePosition = e.clientY / window.innerHeight * 100;
    const enlargeFactor = 15;
    const defaultTopValue = 15;
    const defaultBottomValue = 15;
    root.style.setProperty('--top-circle-inner', defaultTopValue - ((relativeMousePosition-50)/enlargeFactor) + '%');
    root.style.setProperty('--bottom-circle-inner', defaultBottomValue + ((relativeMousePosition-50)/enlargeFactor) + '%');
});

// /*Size is  set in pixels... supports being written as: '250px' */
// var magnifierSize = 200;

// /*How many times magnification of image on page.*/
// var magnification = 3;

// function magnifier() {

//   this.magnifyImg = function(ptr, magnification, magnifierSize) {
//     var $pointer;
//     if (typeof ptr == "string") {
//       $pointer = $(ptr);
//     } else if (typeof ptr == "object") {
//       $pointer = ptr;
//     }
    
//     if(!($pointer.is('img'))){
//       alert('Object must be image.');
//       return false;
//     }

//     magnification = +(magnification);

//     $pointer.hover(function() {
//       $(this).css('cursor', 'none');
//       $('.magnify').show();
//       //Setting some variables for later use
//       var width = $(this).width();
//       var height = $(this).height();
//       var src = $(this).attr('src');
//       var imagePos = $(this).offset();
//       var image = $(this);

//       if (magnifierSize == undefined) {
//         magnifierSize = '150px';
//       }

//       $('.magnify').css({
//         'background-size': width * magnification + 'px ' + height * magnification + "px",
//         'background-image': 'url("' + src + '")',
//         'width': magnifierSize,
//         'height': magnifierSize
//       });

//       //Setting a few more...
//       var magnifyOffset = +($('.magnify').width() / 2);
//       var rightSide = +(imagePos.left + $(this).width());
//       var bottomSide = +(imagePos.top + $(this).height());

//       $(document).mousemove(function(e) {
//         if (e.pageX < +(imagePos.left - magnifyOffset / 6) || e.pageX > +(rightSide + magnifyOffset / 6) || e.pageY < +(imagePos.top - magnifyOffset / 6) || e.pageY > +(bottomSide + magnifyOffset / 6)) {
//           $('.magnify').hide();
//           $(document).unbind('mousemove');
//         }
//         var backgroundPos = "" - ((e.pageX - imagePos.left) * magnification - magnifyOffset) + "px " + -((e.pageY - imagePos.top) * magnification - magnifyOffset) + "px";
//         $('.magnify').css({
//           'left': e.pageX - magnifyOffset,
//           'top': e.pageY - magnifyOffset,
//           'background-position': backgroundPos
//         });
//       });
//     }, function() {

//     });
//   };

//   this.init = function() {
//     $('body').prepend('<div class="magnify"></div>');
//   }

//   return this.init();
// }

// var magnify = new magnifier();
// magnify.magnifyImg('img', magnification, magnifierSize);
