(function () {

  /* 
   * This function splits the screen into two rows by setting each
   * list item to be half of the total screen size. 
   */
  var initDisplay = function () {
    var windowHeight = $(window).height();
    $('.row > ul > li').css('height', windowHeight / 2);
  };

  initDisplay();


  /* 
   * This function either changes the plus sign, for expanding the nav 
   * panel, to a minus sign, or vice versa.
  */
  var toggleShrinkButton = function ($this) {
    if ($this.html() === '+') {
      $this.html('&#45;');
    } else {
      $this.html('&#43;');
    }
  }
 

  /*
   * Click handler for the plus sign button. 
   * This function changes the plus/minus sign, shinks the language 
   * image, and expands the navigation panel in its place.
  */
  $('.expand').click(function() {
    var $this = $(this);
    toggleShrinkButton($this);
    $this.next().toggleClass('shrunk');
    $this.next().next().toggleClass('expanded');
  });

// attach 'fancybox' handler
$('.links').fancybox({
width		: '90%',
height		: '95%',
autoSize	: true,
closeClick	: false,
scrolling   : 'no',
openEffect	: 'none',
closeEffect	: 'none'
});


}());