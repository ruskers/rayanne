window.addEventListener('scroll', function() {
    var header = document.querySelector('.cabecalho');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 95) { /* Quando o usuário rolar mais de 100 pixels */
      header.style.backgroundColor = '#ffb9b9'; /* Altere a cor de fundo para a cor desejada */
    } else {
      header.style.backgroundColor = 'transparent'; /* Volte à cor de fundo original */
    }
  });

  window.addEventListener('scroll', function() {
    var logo = document.querySelector('.logo');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 95) { /* Quando o usuário rolar mais de 100 pixels */
      logo.style.width = '10%'; /* Altere a cor de fundo para a cor desejada */
    } else {
      logo.style.width = '15%'; /* Volte à cor de fundo original */
    }
  });

  window.addEventListener('scroll', function() {
    var logo = document.querySelector('.logo');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 80) {
      // Se o usuário rolar mais de 100 pixels
      if (window.innerWidth > 768) {
        logo.style.width = '150px'; // Tamanho menor para telas maiores
      } else {
        logo.style.width = '130px'; // Tamanho menor para telas menores
      }
    } else {
      logo.style.width = '150px'; // Tamanho padrão
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    function scrollToSection(sectionId) {
        var targetSection = document.querySelector(sectionId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        }
    }

    var saibaLink = document.querySelector('a[href="#saiba"]');
    var verMaisLink = document.querySelector('a[href="#verMais"]');
    
    var sobreMimLink = document.querySelector('a[href="#sobreMim"]');
    var procedimentosLink = document.querySelector('a[href="#procedimentos"]');
    var resultadosLink = document.querySelector('a[href="#resultados"]');
    var contatoLink = document.querySelector('a[href="#contato"]');

    if (saibaLink) {
        saibaLink.addEventListener("click", function (e) {
            e.preventDefault();
            scrollToSection("#perfil"); 
        });
    }

    if (sobreMimLink) {
        sobreMimLink.addEventListener("click", function (e) {
            e.preventDefault();
            scrollToSection("#perfil"); 
        });
    }

    if (procedimentosLink) {
        procedimentosLink.addEventListener("click", function (e) {
            e.preventDefault();
            scrollToSection("#trata"); 
        });
    }

    if (resultadosLink) {
        resultadosLink.addEventListener("click", function (e) {
            e.preventDefault();
            scrollToSection("#resultados"); 
        });
    }

    if (contatoLink) {
        contatoLink.addEventListener("click", function (e) {
            e.preventDefault();
            scrollToSection("#contato"); 
        });
    }

    if (verMaisLink) {
        verMaisLink.addEventListener("click", function (e) {
            e.preventDefault();
            scrollToSection("#trata");
        });
    }

});

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000); // Defina a duração da animação aqui (por exemplo, 800 milissegundos)
    });
});

window.sr = ScrollReveal({ reset: true });

sr.reveal('h1', {
duration: 4000});




sr.reveal('h2,h3', { 
    rotate:{x:80, y:0, z:0},
    duration: 2400 });

sr.reveal('p',{
    rotate:{x:0, y:80, z:10},
    duration: 2400
});


let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Muda a imagem a cada 2 segundos (2000 milissegundos)
}



// Função para avançar ou retroceder nas imagens
function changeSlide(n) {
    showSlide(slideIndex += n);
}

// Função para exibir a imagem atual
function showSlide(n) {
    let slides = document.getElementsByClassName("mySlides");

    // Volte para a primeira imagem se estiver na última
    if (n > slides.length) {
        slideIndex = 1;
    }
    // Avance para a última imagem se estiver na primeira
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Oculte todas as imagens
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Exiba a imagem atual
    slides[slideIndex - 1].style.display = "block";
}

// Adicione event listeners aos ícones da esquerda e da direita
document.getElementById("leftIcon").addEventListener("click", function () {
    changeSlide(-1); // Retroceder para a imagem anterior
});

document.getElementById("rightIcon").addEventListener("click", function () {
    changeSlide(1); // Avançar para a próxima imagem
});

// Exiba a primeira imagem quando a página carregar
showSlide(slideIndex);
