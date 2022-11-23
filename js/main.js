    // smooth-scroll tool
    $("a[href^='#']").on('click', function(e){
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        },
        'slow');
    })
    // smooth-scroll tool end

    // init Swiper:
  const swiper = new Swiper(".mySwiper", {
        loop: true,
      //  centeredSlides: true,
                // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
            slidesPerView: 1,
            spaceBetween: 30
            },
            // when window width is >= 560px
            560: {
            slidesPerView: 2,
            spaceBetween: 40
            },
            // when window width is >= 992px
            992: {
            slidesPerView: 3,
            spaceBetween: 50
            }
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });
    // init Swiper end

    //timer
    document.addEventListener('DOMContentLoaded', function() {
        // конечная дата, например 1 июля 2021
        const deadline = new Date(Date.now() + (30 * 60 * 1000 + 999));
        // id таймера
        let timerId = null;
        // склонение числительных
        function declensionNum(num, words) {
          return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
        }
        // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
        function countdownTimer() {
          const diff = deadline - new Date();
          if (diff <= 0) {
            clearInterval(timerId);
          }
          const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
          const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
          $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
          $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
          $minutes.dataset.title = declensionNum(minutes, ['minute', 'minutes', 'minutes']);
          $seconds.dataset.title = declensionNum(seconds, ['second', 'seconds', 'seconds']);
        }
        // получаем элементы, содержащие компоненты даты
        const $minutes = document.querySelector('.timer__minutes');
        const $seconds = document.querySelector('.timer__seconds');
        // вызываем функцию countdownTimer
        countdownTimer();
        // вызываем функцию countdownTimer каждую секунду
        timerId = setInterval(countdownTimer, 1000);
      });

      document.getElementById("tel").onkeypress = function(e) {
        let chr = String.fromCharCode(e.which);
        if ("1234567890".indexOf(chr) < 0)
            return false;
    };