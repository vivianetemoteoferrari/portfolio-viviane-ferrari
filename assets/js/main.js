$("#brasil").click((event) => {
	event.preventDefault();

	$("#translate_contact_1").text("Gostaria de ouvir de você! Se você tem um projeto em mente, precisa de uma consultoria, sinta-se à vontade para entrar em contato.");
	$("#translate_contact").text("Contato");
	$("#translate_contact_2").text("Contato");
	$("#translate_contact_3").text("Enviar E-mail");
	$("#translate_contact_4").text("Enviar no WhatsApp");
	$("#translate_about").text("Sobre Mim");
	$("#translate_about_2").text("Sobre Mim");
	$("#translate_about_3").text("Nos últimos dez anos, desenvolvi uma sólida carreira na criação e desenvolvimento de páginas da web, banners e templates de e-mail marketing, bem como uma ampla variedade de conteúdo digital e offline.");
	$("#translate_about_4").text("Minha experiência profissional inclui projetos bem-sucedidos em criação de identidade visual, campanhas de marketing e design de interface de usuário. Com experiência em ferramentas como Adobe Creative Suite, Figma, Sketch e outras plataformas de design e prototipagem, posso criar soluções visuais que são esteticamente agradáveis ​​e funcionalmente eficazes.");
	$("#translate_about_5").text("Habilidades");
	$("#download_cv_english").hide();
	$("#download_cv_portuguese").show();
	$("#translate_portfolio").text("Portfólio");
	$("#translate_portfolio_1").text("Portfólio");
	$("#translate_portfolio_2").text("Meus Últimos Projetos");
	$("#translate_portfolio_3").text("Desenvolvimento Web | DashNex");
	$("#translate_portfolio_4").text("Desenvolvimento Web | Genial Investimentos");
	$("#translate_portfolio_5").text("Estudo de Caso Spotify | Alura");
	$("#translate_portfolio_6").text("Design Gráfico | Genial Investimentos");
	$("#translate_portfolio_7").text("Desenvolvimento Web | DietBox");
	$("#translate_portfolio_8").text("Desenvolvimento Web | Genial Investimentos");
	$("#translate_portfolio_9").text("Template de E-mail Marketing | Genial Investimentos");
	$("#translate_top").text("Intro");
	$("#translate_top_1").text("Olá, eu sou Viviane"); 
	$("#translate_top_2").text("Mais de 10 anos de experiência em Design Gráfico e Desenvolvimento Web");
});

$("#usa").click((event) => {
	event.preventDefault();

	$("#translate_contact_1").text("I would like to hear from you! Whether you have a project in mind, need a consultation, feel free to reach out.");
	$("#translate_contact").text("Contact");
	$("#translate_contact_2").text("Contact");
	$("#translate_contact_3").text("Send Email");
	$("#translate_contact_4").text("Send WhatsApp Message");
	$("#translate_about").text("About Me");
	$("#translate_about_2").text("About Me");
	$("#translate_about_3").text("Over past ten years, I have developed a solid career in creating anddeveloping web pages, banners, and email marketing templates, as well as a wide range of digital and offline content.");
	$("#translate_about_4").text("My professional background includes successful projects in visual identity creation, marketingcampaigns,and user interface design.With expertise in tools such as Adobe Creative Suite, Figma,Sketch, and other design and prototyping platforms allows me to create visualsolutions that are both aesthetically pleasing and functionally effective.");
	$("#translate_about_5").text("Skills");
	$("#download_cv_portuguese").hide();
	$("#download_cv_english").show();
	$("#translate_portfolio").text("Portfolio");
	$("#translate_portfolio_1").text("Portfolio");
	$("#translate_portfolio_2").text("My Latest Projects");
	$("#translate_portfolio_3").text("Web Development | DashNex");
	$("#translate_portfolio_4").text("Web Development | Genial Investimentos");
	$("#translate_portfolio_5").text("Spotify Case Study | Alura");
	$("#translate_portfolio_6").text("Graphic Design | Genial Investimentos");
	$("#translate_portfolio_7").text("Web Development | DietBox");
	$("#translate_portfolio_8").text("Web Development | Genial Investimentos");
	$("#translate_portfolio_9").text("Email Marketing Template | Genial Investimentos");
	$("#translate_top").text("Intro");
	$("#translate_top_1").text("Hello, I'm Viviane");
	$("#translate_top_2").text("Over 10 years of experience in Graphic Design and Web Development");
});


(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1880px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav_a = $nav.find('a');

		$nav_a
			.addClass('scrolly')
			.on('click', function(e) {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Prevent default.
					e.preventDefault();

				// Deactivate all links.
					$nav_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
					if ($section.length < 1)
						return;

				// Scrollex.
					$section.scrollex({
						mode: 'middle',
						top: '-10vh',
						bottom: '-10vh',
						initialize: function() {

							// Deactivate section.
								$section.addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$section.removeClass('inactive');

							// No locked links? Deactivate all links and activate this section's one.
								if ($nav_a.filter('.active-locked').length == 0) {

									$nav_a.removeClass('active');
									$this.addClass('active');

								}

							// Otherwise, if this section's link is the one that's locked, unlock it.
								else if ($this.hasClass('active-locked'))
									$this.removeClass('active-locked');

						}
					});

			});

	// Scrolly.
		$('.scrolly').scrolly();

	// Header (narrower + mobile).

		// Toggle.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});	

				document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const typewriter = entry.target.querySelector('.typewriter');
        typewriter.classList.remove('typewriter-animation');
        // Trigger reflow to restart animation
        void typewriter.offsetWidth;
        typewriter.classList.add('typewriter-animation');
      }
    });
  }, observerOptions);

  const topSection = document.querySelector('#top');
  observer.observe(topSection);
});

document.addEventListener("DOMContentLoaded", function() {
	const observerOptions = {
	  root: null,
	  rootMargin: '0px',
	  threshold: 0.1
	};
  
	const observer = new IntersectionObserver((entries, observer) => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  const typewriter = entry.target.querySelector('.typewriter');
		  typewriter.classList.remove('typewriter-animation');
		  // Trigger reflow to restart animation
		  void typewriter.offsetWidth;
		  typewriter.classList.add('typewriter-animation');
		}
	  });
	}, observerOptions);
  
	const topSection = document.querySelector('#top');
	observer.observe(topSection);
  });

})(jQuery);


