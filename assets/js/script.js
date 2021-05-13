// $(document).ready(function () {
//   $("a").click(function (event) {
//     event.preventDefault();

//     var gato = this.hash;
//     $("html").animate(
//       {
//         scrollTop: $(gato).offset().top,
//       },
//       800
//     );
//   });
// });

$("a").on("click", function (e) {
    
    e.preventDefault();
    
    const href = $(this).attr("href");
    
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
  });