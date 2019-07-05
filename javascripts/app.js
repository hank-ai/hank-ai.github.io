
jQuery.extend({
  randomColor: function() {
    return '#' + Math.floor(Math.random()*256*256*256).toString(16);
  }
});
jQuery.extend({
  responsiveresize: function() {
    var $ = jQuery;
    var width = document.body.clientWidth - 1;
    if (width < 350) {width = 350};
    var hgt = ((1200/2350)*width);
    var thgt = (hgt/10);
    var dhgt = ((274/2901)*width);
    var fairhgt = ((960/1920)*width);
    var wfwidth = width - 5;
    if (wfwidth > 1000) {wfwidth = 1000};
    var wfhgt = ((787/2350)*wfwidth);
    if (thgt > 50) { thgt = 50 };
    var ciwdt = 0.3437*width;
    if (ciwdt < 330) {ciwdt = 330};
    if (ciwdt > 500) {ciwdt = 500};
    $(".colint").css("max-width",(ciwdt) + "px");
    $(".divider").css("height",dhgt + "px");
    $(".divider").css("width",width + "px");
    $("#footer").css("background-size",width + "px");
    $("#fairshare").css("background-size",width + "px " + fairhgt + "px");
    $("#fairshare").css("width",width + "px");
    $("#fairshare").css("height",fairhgt + "px");
    $(".secpic").css("width",((width/2) - 10) + "px");
    $(".mytitle").css("font-size",thgt + "px");
    $(".main-title").css("font-size",thgt + "px");
    var theadhgt = thgt - 9
    if (theadhgt > 17) {theadhgt = 17}
    $(".header-text").css("font-size",theadhgt + "px");
    if (theadhgt < 12) {
      $(".pricing-text").css("font-size","12px");
    } else if (theadhgt > 15){
      $(".pricing-text").css("font-size","15px");
    } else {
      $(".pricing-text").css("font-size",theadhgt + "px");
    }
    $(".main-text").css("font-size",theadhgt + "px");
    var twfhgt = thgt
    if (twfhgt > 30) {twfhgt = 30}
    $(".wftitle").css("font-size",twfhgt + "px");
    $(".wfpic").css("width",wfwidth + "px");
    $(".wfpic").css("height",wfhgt + "px");
    //$(".mytitle").css("margin-top","-10%");
    var margadj = 50;
    if (width < 480) {
      margadj = (hgt/1.6)
      //$(".mybtn").css("max-height","12px");
      $(".header-text").css("max-width","46%");
      $(".mybtn").css("margin-top","5px");
      $(".mybtn").css("padding","5px");
      $(".mybtn").css("font-size",theadhgt + "px");
      $("#footer").css("height","510px");
      $(".memberdesc").css("min-height","225px");
      $(".membername").css("min-height","30px");
      $(".btnspacing").removeClass("spacing");
    } else if (width < 540) {
      margadj = (hgt/1.8)
      $(".header-text").css("max-width","46%");
      $(".mybtn").removeAttr("style");
      $(".btnspacing").removeClass("spacing");
      $("#footer").css("height","510px");
      $(".memberdesc").css("min-height","175px");
      $(".membername").css("min-height","0px");
    } else if (width < 630) {
      margadj = (hgt/2.1)
      $(".header-text").css("max-width","46%");
      $(".mybtn").removeAttr("style");
      $(".btnspacing").addClass("spacing");
      $("#footer").css("height","510px");
      $(".memberdesc").css("min-height","150px");
      $(".membername").css("min-height","0px");
    } else if (width < 800) {
      margadj = (hgt/2.6)
      $(".header-text").css("max-width","46%");
      $(".mybtn").removeAttr("style");
      $(".btnspacing").addClass("spacing");
      $("#footer").css("height","510px");
      $(".memberdesc").css("min-height","100px");
      $(".membername").css("min-height","0px");
    } else if (width > 1300) {
      $(".mybtn").removeAttr("style");
      $(".btnspacing").addClass("spacing");
      $("#footer").css("height","510px");
      $(".memberdesc").css("min-height","0px");
      $(".membername").css("min-height","0px");
    } else {
      $(".header-text").css("max-width","60%");
      $(".mybtn").removeAttr("style");
      $(".btnspacing").addClass("spacing");
      $("#footer").css("height","400px");
      $(".memberdesc").css("min-height","0px");
      $(".membername").css("min-height","0px");
    };
    $(".mytitle").css("margin-top",(0 - margadj) + "px");
    $(".mainseq").css("height",hgt + "px");
    $(".mainslide").css("width", width + "px");
    $(".mainslide").css("background-size", width + "px " + hgt + "px");
  }
});

(function(removeClass) {
  jQuery.fn.removeClass = function(value) {
    if(value && typeof value.test === 'function') {
      for(var i = 0; i < this.length; i++) {
        var elem = this[i];
        if( elem.nodeType === 1 && elem.className ) {
          var classNames = elem.className.split(/\s+/);
          for(var n = 0; n < classNames.length; n++) {
            if(value.test(classNames[n])) {
              classNames.splice(n, 1);
            }
          }
          elem.className = jQuery.trim(classNames.join(" "));
        }
      }
    } else {
      removeClass.call(this, value);
    }

    return this
  }
})(jQuery.fn.removeClass);

jQuery(document).ready(function() {
  jQuery('html').removeClass('no-js');
  jQuery.responsiveresize();
  jQuery('.loading').hide();
});

jQuery(document).foundation();

(function($) {
  "use strict";
  $(document).ready(function() {

    $('video').each(function() {
      this.muted = true;
    });
    var srcform = '#myModal'
    var srcemail = '#signupemail'
    $('.signupbtn').click(function() {
      $('#myModal').css("display","block")
      srcform = '#myModal'
      srcemail = '#downloademail'
    });

    $('#signuppaid').click(function() {
      $('#signModal').css("display","block")
      srcform = '#signModal'
      srcemail = '#signupemail'
    });

    $('.codedispbtn').click(function(e) {
      $('#codepop').css("top",(e.pageY - $(document).scrollTop()) + "px")
      $('#codepop').css("left",(e.pageX - 100) + "px")
      $('#phipop').css("display","none")
      $('#codepop').css("display","block")
    });

    $('.phidispbtn').click(function(e) {
      $('#phipop').css("top",(e.pageY - $(document).scrollTop()) + "px")
      $('#phipop').css("left",(e.pageX - 100) + "px")
      $('#codepop').css("display","none")
      $('#phipop').css("display","block")
    });

    $('.closebtn').click(function() {
      $('.modal').css("display","none")
      $('.popbox').css("display","none")
    });

    $('.againbtn').click(function() {
      $(srcform).css("display","block")
      $('#errModal').css("display","none")
      $('#thanksModal').css("display","none")
      $('#badModal').css("display","none")
    });

    $('.close').click(function() {
      $('.modal').css("display","none")
      $('.popbox').css("display","none")
    });

    var myTimeout;
    var waitingForTimeout = false;
    $('.submitbtn').click(function() {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($(srcemail).val())) {
        dataLayer.push({'event' : 'logemail' , 'userEmail' : $(srcemail).val(), 'signupType' : srcemail})
        var data = {
          "auth": {
            "server": 'smtp.mailgun.org',
            "username": "signup@we.are.hank.ai",
            "password": "password111",
            "port": "25",
            'tls': true
          },
          "message": {
              "from": "GTM SIGNUP <signup@we.are.hank.ai>",
              "to": "NEW USER - HANK.AI <newuser@hank.ai>, Sam Hartzog <sam.hartzog@hank.ai>",
              "body": "SignupType=" + srcemail +
                    "<br>Email=" + $(srcemail).val() +
                    "<br>Page URL=" + $(location).attr('href'),
              "subject": "[NEW USER="+$(srcemail).val()+"] Hank.ai"
          },
            "async":true
        };
        $('.loading').show();
        waitingForTimeout = true;
        myTimeout = setTimeout(function () {
          $('.loading').hide()
          $('#errModal').css("display","block")
          $('#downloademail').val('')
          $('#signupemail').val('')
          waitingForTimeout = false;
        },15000)
        jQuery.ajax({
          type: "GET",
          url: "https://www.jackmd.com/apis/mail.php",
          jsonp: "callback",
          dataType: "jsonp",
          data: data,
          error: function(d) {
            console.log('ERROR: ', d);
            clearTimeout(myTimeout);
            $('.loading').hide();
            if (waitingForTimeout) {$('#errModal').css("display","block")}
            $('#downloademail').val('')
            $('#signupemail').val('')
            waitingForTimeout = false;
          },
          success: function(d){
            //console.log('AJAX Query Complete. Response: ', d);
            var getUrl = window.location;
            var data = {
              "auth": {
                "server": 'smtp.mailgun.org',
                "username": "signup@we.are.hank.ai",
                "password": "password111",
                "port": "25",
                'tls': true
              },
              "message": {
                  "from": "Hank <signup@we.are.hank.ai>",
                  "to": $(srcemail).val(),
                  "body": "<div style='text-align: center; width: 100%;'><a href='https://hank.ai'><img src='https://" + getUrl.host + "/images/hank.png' style='width:60px;height:60px;margin:auto;'/></a>" +
                        "<br>Welcome to the team!  I'll be in contact with details on how to get started...<br><br>Cheers!<br>Hank" +
                        "<br><br><br>P.S. - If you have a minute, please take my <a href='https://form.responster.com/wVWg9e?email=" + $(srcemail).val() + "'>survey</a> to allow me get to know you better.</div>",
                  "subject": "Welcome from Hank!"
              },
                "async":true
            };
            jQuery.ajax({
              type: "GET",
              url: "https://www.jackmd.com/apis/mail.php",
              jsonp: "callback",
              dataType: "jsonp",
              data: data,
              error: function(d) {
                console.log('ERROR: ', d);
                clearTimeout(myTimeout);
                $('.loading').hide();
                if (waitingForTimeout) {$('#errModal').css("display","block")}
                $('#downloademail').val('')
                $('#signupemail').val('')
                waitingForTimeout = false;
              },
              success: function(d){
                //console.log('AJAX Query Complete. Response: ', d);
                clearTimeout(myTimeout);
                $('.loading').hide();
                $('#thanksemailtxt').text('Thanks for signing up!  A welcome email has been sent to ' + $(srcemail).val() + '.  We will be in touch with details on how to get started.')
                if (waitingForTimeout) {$('#thanksModal').css("display","block")}
                waitingForTimeout = false;
                $('#downloademail').val('')
                $('#signupemail').val('')
              }
            })
          },
        })

        $('#badModal').css("display","none")
      } else {
        $('#errModal').css("display","none")
        $('#thanksModal').css("display","none")
        $('#badModal').css("display","block")
      }
      $('#myModal').css("display","none")
      $('#signModal').css("display","none")
    });


    $('.fadeinleft, .fadeinright, .fadein, .popin').appear(function() {
      var delay = $(this).data('delay');
      var that = this;

      setTimeout(function() {
        $(that).addClass('appear');
      }, delay)

    });

    // $('.popin').each(function() {
    //   $(this).addClass('appear');
    // });

    $(window).scroll(function() {
      $('.popbox').css("display","none")

      var scroll = $(window).scrollTop();

      if ( scroll >= 40 ) {
        $('body').addClass('shrink');
        $('#titbarhank').addClass('titbarshrink')
      } else {
        $('body').removeClass('shrink');
        $('#titbarhank').removeClass('titbarshrink')
      }

    });


    $(window).resize(function() {
      jQuery.responsiveresize();
    });




    $('form#contact_form').validate({
      messages: { },
      submitHandler: function(form) {
        $.ajax({
          type: 'POST',
          url: 'send.php',
          data: $(form).serialize(),
          success: function(data) {
            if(data.match(/success/)) {
              $(form).trigger('reset');
              $('#thanks').show().fadeOut(5000);
            }
          }
        });
        return false;
      }
    });

    if($('.masonry-container').length > 0) {

      $('.masonry-container').each(function() {
        var that = $(this);

        // initialize Masonry after all images have loaded
        $(that).imagesLoaded(function() {

          setTimeout(function() {
            window.msnry = new Masonry($(that)[0], {
              itemSelector: '.mod',
              // columnWidth: '.mod',
              gutter: 30
            });

            // window.msnry.layout();

          }, 10);

        });

      });
    }


    // onepage nav scroll
    if ( $("nav.top-bar.onepage").length > 0 ) {
      $('.top-bar-section a[href=#top]').closest('li').addClass('active');

      var ctx = $("nav.top-bar.onepage");

      // var headerHeight = ctx.height();
      // $(window).scroll(function() {
      //   headerHeight = ctx.height();
      //   console.log(headerHeight);
      // });
      var headerHeight = 59;

      // use to mark whether the scrolling is caused by clicking
      var clickScrolling = false;
      // cache for current anchor id
      var currentAnchorId;

      $('.top-bar-section a', ctx).click(function(event) {
        $('.top-bar-section a', ctx).closest('li').removeClass('active');
        $(this).closest('li').addClass('active');
        clickScrolling = true;
        // console.log($(this).attr('href').offset());
        try {
          if ( $(this).attr('href') == '#top' ) {
            var distance = 0
          } else {
            var distance = $($(this).attr('href')).offset().top - headerHeight + 'px';
          }

          // console.log(distance);

          $('html, body').stop().animate({
            scrollTop: distance
          }, { duration: 1200, easing: "easeInOutExpo", complete: function() { clickScrolling = false; } });
          event.preventDefault();
        } catch(e) {}
      });


      // hightlight nav when scrolling
      var anchors = $('.top-bar-section a', ctx).map(function() {
        var href = $(this).attr('href');
        if ( href.match(/^#/) ) {
          var anchor = $($(this).attr('href'));
          if(anchor.length) { return anchor; }
        }
      });

      $(window).scroll(function() {
        if(clickScrolling) return false;

        var fromTop = $(this).scrollTop();
        var passedAnchors = anchors.map(function() {
          // add 1 to make the current nav change 1px before it should when scrolling top to bottom
          if(fromTop + headerHeight + 1 >= $(this).offset().top)
            return this;
        });
        // get the last anchor in the passedAnchors as the current one
        var currentAnchor = passedAnchors[passedAnchors.length - 1];
        if(currentAnchor) {
          if(currentAnchorId !== currentAnchor.attr('id')) {
            currentAnchorId = currentAnchor.attr('id');
            $('.top-bar-section a', ctx).closest('li').removeClass('active');
            $('.top-bar-section a[href=#'+currentAnchorId+']', ctx).closest('li').addClass('active');
          }
        }

      });


    }


  });
})(jQuery);
(function($) {
  Tc.Module.BarGraph = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('jquery.ui.core.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;


      $(".bars", $ctx).each(function() {
        $('> li > .highlighted', $(this)).each(function() {
          $(this).appear(function() {
            var percent = $(this).attr("data-percent");
            // $bar.html('<p class="highlighted"><span class="tip">'+percent+'%</span></p>');
            // http://stackoverflow.com/questions/3363035/jquery-animate-forces-style-overflowhidden
            $(this).animate({
              'width': percent + '%'
            }, 1700, function() { $(this).css('overflow', 'visible'); });
          });
        });
      });

    }
  })
})(Tc.$);
(function($) {
  Tc.Module.BoxedSlider = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('slick.min.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;

      $('.slides', $ctx).slick({
        autoplay: true,
        pauseOnHover: false,
        dots: true,
        speed: 1500,
        arrows: false
      });

    }
  })
})(Tc.$);
(function($) {
  Tc.Module.BoxedTextSlider = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('slick.min.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;


      $('.boxes', $ctx).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 568,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    }
  })
})(Tc.$);
(function($) {
  Tc.Module.CallToAction = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('jquery.ui.core.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;
    }
  })
})(Tc.$);
(function($) {
  Tc.Module.Clients = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('slick.min.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;

      var slides_to_show = $ctx.data('slides_to_show');

      $('.clients', $ctx).slick({
        slidesToShow: slides_to_show,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });

    }
  })
})(Tc.$);
(function($) {
  Tc.Module.DefaultSlider = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('jquery.sequence-min.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;
      var options = {
        nextButton: true,
        prevButton: true,
        autoPlay: true,
        autoPlayDelay: 3000,
        pauseButton: true,
        cycle: true,
        // preloader: true,
        animateStartingFrameIn: true,
        reverseAnimationsWhenNavigatingBackwards: true,
        preventDelayWhenReversingAnimations: true,
        fadeFrameWhenSkipped: false,
        swipeEvents: {
          left: "next",
          right: "prev"
        },
        pauseOnHover: false
      }

      var autostop = $('.sequence', $ctx).data('autostop') == 'on' ? true : false;
      var timeout = $('.sequence', $ctx).data('timeout');

      if ( timeout == '0' ) {
        options.autoPlay = false;
      } else {
        options.autoPlay = true;
        options.autoPlayDelay = parseInt(timeout);
      }

      if ( autostop ) {
        options.autoStop = true;
      } else {
        options.autoStop = false;
      }



      // console.log(options);

      var sequence = $(".sequence", $ctx).sequence(options).data("sequence");
      sequence.beforeCurrentFrameAnimatesOut = function() {
        var sequence = this;
        var removeStatic = function() {
          jQuery(".frame.static").removeClass('static');
          if ( !window.sequenceAutoStarted && sequence.settings.autoPlay ) {
            sequence.startAutoPlay(sequence.settings.autoPlayDelay);
            window.sequenceAutoStarted = true;
          }
        }
        setTimeout(removeStatic, 1000);

        // when the next frame is the last one
        if ( sequence.nextFrameID == sequence.frames.length && options.autoStop ) {
          // console.log(sequence.nextFrameID);
          sequence.stopAutoPlay();
        }

      }


    }
  })
})(Tc.$);
(function($) {
  Tc.Module.IconText = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('jquery.ui.core.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;
    }
  })
})(Tc.$);
(function($) {
  Tc.Module.Milestone = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('jquery.appear.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;

      $ctx.appear(function() {
        $('strong', $ctx).countTo({
          speed: 1400
        });
      });

    }
  })
})(Tc.$);
(function($) {
  Tc.Module.SectionHeader = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
    },
    onBinding: function() {
      var $ctx = this.$ctx;
    }
  })
})(Tc.$);
(function($) {
  Tc.Module.TeamMember = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('jquery.ui.core.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;
    }
  })
})(Tc.$);
(function($) {
  Tc.Module.Testimonials = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('slick.min.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;

      var show_dots = true;

      if ($ctx.hasClass('simple')) {
        show_dots = false;
      }

      $('.items', $ctx).slick({
        autoplay: true,
        pauseOnHover: false,
        dots: show_dots,
        speed: 1500,
        arrows: false
      });

    }
  })
})(Tc.$);
