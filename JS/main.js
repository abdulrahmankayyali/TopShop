$('.categories-slider').slick({
    speed:500,
    arrows:false,
    rows:2,
    slidesToShow: 4,
    slidesToScroll:4 ,
    infinite:false,
    dots:true,
    responsive: [
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows:2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:false,
            arrows:true,
          }
        },
        {
            breakpoint: 390,
            settings: {
                 rows:2,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:false,
              arrows:true,
            }
          }
      
      ]
    });

    $('.banner-area').slick({
      speed:800,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll:1 ,
      infinite:false,
      dots:true,
      fade:true
      });

      $(document).ready(function(){
        $(".sidebar-btn").click(function(){
          $(".wrapper").toggleClass("sidebar-collapse");
          $(".menuicon").toggleClass("fa-bars");
          $(".menuicon").toggleClass("fa-times");;

        });
      });

   
// Add the following code if you want the name of the file appear on select


function readURL(input) {
  File_Name=input.value.replace(/^.*[\\\/]/, '');
  $(".custom-file-label").addClass("selected").html(File_Name);
  if (input.files && input.files[0]) {
      var reader = new FileReader();
   
      reader.onload = function (e) {
          $('.editimage')
              .attr('src', e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
  }
}


$('.order-slider').slick({
  autoplay:false,
  arrows:true,
  rows:2,
  slidesToShow: 3,
  slidesToScroll:3 ,
  infinite:false,
  dots:false,
  responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows:2,
          arrows:false,
          dots:true,
        }
      }
    ]
  });