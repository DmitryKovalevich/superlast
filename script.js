const sliderImages = document.querySelectorAll(".slider-image");
    const sliderButton = document.getElementById("slider-button");
    
    // Устанавливаем начальное состояние слайдера
    let currentIndex = 0;
    sliderImages[currentIndex].classList.add("active");
    
    sliderButton.addEventListener("click", () => {
      // Скрываем текущее изображение
      sliderImages[currentIndex].classList.remove("active");
      // Изменяем индекс текущего изображения
      currentIndex = (currentIndex + 1) % 2;
      // Показываем следующее изображение
      sliderImages[currentIndex].classList.add("active");
    });
    var widgetOptions432680 = { bg_color: "transparent" }; (function() { var a = document.createElement("script"), h = "head"; a.async = true; a.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//ucalc.pro/api/widget.js?id=432680&t="+Math.floor(new Date()/18e5); document.getElementsByTagName(h)[0].appendChild(a) })();
    function milkshakes(){
        document.getElementById('1').src = "./public/image 1.jpg"
        document.getElementById('2').src = './public/image 2.jpg'
  
    }
    
    function icecream(){
        document.getElementById('1').src = './public/image 4.jpg'
        document.getElementById('2').src = './public/image 5.jpg'
  
    }
    
    function icecofee(){
        document.getElementById('1').src = './public/image 6.jpg'
        document.getElementById('2').src = './public/image 2.jpg'
  
    }