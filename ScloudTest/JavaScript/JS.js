    var Leaders = document.getElementById('Leaders');
    var Accountants = document.getElementById('Accountants');
    var Employee = document.getElementById('Employee');
    var HR = document.getElementById('HR');
    function Lead(){
        if(Leaders.style.display == "none"){
            Leaders.style.display = "flex";
            Accountants.style.display = "none";
            Employee.style.display = "none";
            HR.style.display = "none";
        }
    }
    function Accountant(){
        if(Accountants.style.display == "none"){
            Accountants.style.display = "flex";
            Leaders.style.display = "none";
            Employee.style.display = "none";
            HR.style.display = "none";
        }
    }
    function Employe(){
        if(Employee.style.display == "none"){
            Employee.style.display = "flex";
            Accountants.style.display = "none";
            Leaders.style.display = "none";
            HR.style.display = "none";
        }
    }
    function H(){
        if(HR.style.display == "none"){
            HR.style.display = "flex";
            Accountants.style.display = "none";
            Employee.style.display = "none";
            Leaders.style.display = "none";
        }
    }
    const jok = new Swiper('.swiper',{

        navigation:{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        pagination: {
         el: '.swiper-pagination',
         clickable:true
        }   
    })