
    // Калькулятор
    let Calculator = {
        Type: {
            land: {
                Cost: 500,
                Day: 0.5
            },
            lot: {
                Cost: 2000,
                Day: 2
            }
        },
        Design: {
            norm: {
                Cost: 1000,
                Day: 3
            },
            xren: {
                Cost: 100,
                Day: 0.5
            }
        },
        Adaptability: {
            adapt: {
                Cost: 1000,
                Day: 3
            },
            static: {
                Cost: 100,
                Day: 1
            }
        }
    }
     $('#raschet').click(() =>{
        let typeSite = $('#TypeSite').val();
        let Design = String($('#Design').val())
        let Adaptability = String($('#Adaptability').val())
        
        let costType
        let dayType
        let costDesign
        let dayDesign
        let costAdapt
        let dayAdapt
         if(typeSite == "land"){
             costType = Calculator.Type.land.Cost
             dayType = Calculator.Type.land.Day
         }else if(typeSite == "lot"){
            costType = Calculator.Type.lot.Cost
            dayType = Calculator.Type.lot.Day
         }else if (typeSite == ""){
             alert("Выберите пункт")
         }
         if(Design == "norm"){
            costDesign = Calculator.Design.norm.Cost
            dayDesign = Calculator.Design.norm.Day
        }else if(Design == "xren"){
           costDesign = Calculator.Design.xren.Cost
           dayDesign = Calculator.Design.xren.Day
        }else if (Design == ""){
            alert("Выберите пункт")
        }
        if(Adaptability == "adapt"){
            costAdapt = Calculator.Adaptability.adapt.Cost
            dayAdapt = Calculator.Adaptability.adapt.Day
        }else if(Adaptability == "static"){
           costAdapt = Calculator.Adaptability.static.Cost
           dayAdapt = Calculator.Adaptability.static.Day
        }else if (Adaptability == ""){
            alert("Выберите пункт")
        }
        let allDay = dayType + dayDesign + dayAdapt
        let allCost = costType + costDesign + costAdapt
        $('#Days').text(` ${allDay} дней`)
        $('#Costs').text(` ${allCost} рублей`)
     })

     //Анимация циферок
    let options = {threshold: 1.0};
    let observer = new IntersectionObserver(callback, options);
    let target = document.querySelector('.content__Statistics');
    observer.observe(target);
    let i = 0
    let o = 0
    let p = 0
    let u = 0
        function callback(entry) {
            entry.forEach(element => {
                if(element.isIntersecting){
                    if(i < 250){
                        let inter = setInterval(() => {
                            i++
                            $('.anim').text(i)
                            if( i >= 250){
                            
                            clearInterval(inter)
                        }
                        }, 10); 
                    }
                    if(o < 1500){
                        let inter1 = setInterval(() => {
                            o++
                            o++
                            $('.anim2').text(o)
                            if( o >= 1500){
                            clearInterval(inter1)
                        }
                        }, ); 
                    }
                    if(p < 340){
                        let inter2 = setInterval(() => {
                            p++
                            $('.anim3').text(p)
                            if( p >= 340){
                            clearInterval(inter2)
                        }
                        }, 10); 
                    }
                    if(u < 23){
                        let inter3 = setInterval(() => {
                            u++
                            $('.anim4').text(u)
                            if( u >= 23){

                            clearInterval(inter3)
                        }
                        }, 100); 
                    }
                }
            });
        };

    // Гипер ссылки
    $(window).scroll(() =>{
        let scrollDistance = $(window).scrollTop();  

        $('section').each((i, element) => {
            if($(element).offset().top <= scrollDistance){
                $('nav a').each((i, elem) =>{
                    if ($(elem).hasClass("active")){
                        $(elem).removeClass("active")
                    }
                })
             $('nav li:eq('+ i +')').find('a').addClass('active');
             
            }
        })
    })


    // Фото
    let options2 = {threshold: 1};
    let observer2 = new IntersectionObserver(Photo, options2);
    let target2 = document.querySelector('.content__AboutMe-image');
    observer2.observe(target2);
        function Photo(entry) {
            entry.forEach(element => {
                if(element.isIntersecting){
                    $('.content__AboutMe-image').attr('src','Img/photoround.png')
                }
            });
        };
    // Слайдеры 1 - сайты и 2 -отзывы
    const swiper = new Swiper('.swiper', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

      });
    //Попап
    setTimeout(() => {
        $('.trigger').css('animation-name','scaless')
        $('.trigger').css('display','flex')
    }, 15000);
    $('.trigger').click(() => {
        $('.popap-mask').css('display', 'flex')
        $('.trigger').css('display','none')
    })
    // Забрать подарок
    $('.button-popap').click(() => {
        $('.popap-mask').css('display', 'none')
    })