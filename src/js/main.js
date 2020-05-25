// @ts-nocheck

$(function () {
	// Custom JS
	$(document).ready(function () {

		// Showing Cookies
		$(`body`).ihavecookies()

		//add simple support for background images:
		document.addEventListener('lazybeforeunveil', function (e) {
			var bg = e.target.getAttribute('data-bg');
			if (bg) {
				e.target.style.backgroundImage = 'url(' + bg + ')';
			}
		});

		// Enable input Masks
		$(function () {
			$(`.input_tel`).mask(`+7(000) 000-00-00`)
		})

		// JQ menu for Desktop
		$(`.menu li ul, .local-menu ul li`).hide(), $(`li`).hover(function () {
				$(`ul:first`, this).fadeIn()
			},
			function () {
				$(`ul:first`, this).fadeOut()
			})

		// Mobile menu: hide on clicks
		$(`.nav-item`).on(`click`, function () {
			document.getElementById(`toggle`).checked = false
		})

		// Jentle Scroll
		$(`.menu, .menu-mobile, .logo-mobile, .logo-place`).on(`click`, `a[href^="#"]`, function (event) {
			event.preventDefault()
			const id = $(this).attr(`href`)
			const top = $(id).offset().top
			$(`body,html`).animate({
				scrollTop: top - 65
			}, 1200)
		})

		// Tabs
		let tab = function () {
			let tabNav = document.querySelectorAll('.tabs-nav__item'),
				tabContent = document.querySelectorAll('.tab'),
				tabName;

			tabNav.forEach(item => {
				item.addEventListener('click', selectTabNav)
			});

			function selectTabNav() {
				tabNav.forEach(item => {
					item.classList.remove('is-active');
				});
				this.classList.add('is-active');
				tabName = this.getAttribute('data-tab-name');
				selectTabContent(tabName);
			}

			function selectTabContent(tabName) {
				tabContent.forEach(item => {
					item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
				})
			}

		};


		tab();

		// modal windows
		$(`.modal-btn`).click(function () {
			$(`.modal`).addClass(`show`)
			$(`body`).addClass(`modal-opened`)
		})
		$(`.modal .modal-window .close`).click(function () {
			$(`.modal`).removeClass(`show`)
			$(`body`).removeClass(`modal-opened`)
		})
		$(`.modal`).click(function (e) {
			if ($(e.target).closest(`.modal-window`).length != 1) {
				$(`.modal`).removeClass(`show`)
				$(`body`).removeClass(`modal-opened`)
			}
		})

		// axaj form
		$(`form`).submit(function () {
			const th = $(this)
			$.ajax({
				type: `POST`,
				url: `../php/rest.php`,
				data: th.serialize()
			}).done(function () {
				$(th).find(`.success`).addClass(`active`).css(`display`, `grid`).hide().fadeIn()
				setTimeout(function () {
					$(th).find(`.success`).removeClass(`active`).fadeOut()
					th.trigger(`reset`)
				}, 3500)
				console.log('sended to Bitrix1')
			})
			$.ajax({
				type: `POST`,
				url: `../php/mail.php`,
				data: th.serialize()
			}).done(function () {
				$(th).find(`.success`).addClass(`active`).css(`display`, `grid`).hide().fadeIn()
				setTimeout(function () {
					$(th).find(`.success`).removeClass(`active`).fadeOut()
					th.trigger(`reset`)
				}, 3500)
				console.log('sended to mail1')
			})
			return false
		})

		// Get ClienId Metrika
		window.onload = function () {
			ym(25151147, 'getClientID', function (clientID) {
				document.getElementsByClassName(`clienID`).value = clientID;
			});
		}
		// SourceBuster
		// sbjs.init({

		//   // Set custom expiration period for cookies in months
		//   // 6 months is default
		//   lifetime: 6,

		//   // Set custom session length in minutes
		//   // 30 minutes is default
		//   session_length: 30,

		//   // Set domain name in cookies
		//   domain: {
		//     host: 'standartcleaning.ru'
		//   },

		//   // Set `utm_source` & `utm_medium` values for `typein` traffic
		//   // Defaults are `(direct)` & `(none)`
		//   typein_attributes: {
		//     source: '(direct)',
		//     medium: '(none)'
		//   },
		// });

		// 60 seconds Goal
		// $('body').activity({'achieveTime':60,'testPeriod':10, useMultiMode: 1, callBack: function (e) { ga('send', 'event', 'Activity', '60_sec'); yaCounter25151147.reachGoal('60_sec'); }});

		// sliders
		// $('.lazy').slick({
		// 	lazyLoad: 'ondemand',
		// 	slidesToScroll: 1
		//   });

		// alternative slider ////////////////////////////////////////////////////////////////////////////////////
		'use strict';
		var multiItemSlider = (function () {
			function _isElementVisible(element) {
				var rect = element.getBoundingClientRect(),
					vWidth = window.innerWidth || doc.documentElement.clientWidth,
					vHeight = window.innerHeight || doc.documentElement.clientHeight,
					elemFromPoint = function (x, y) {
						return document.elementFromPoint(x, y)
					};

				// Return false if it's not in the viewport
				if (rect.right < 0 || rect.bottom < 0 ||
					rect.left > vWidth || rect.top > vHeight)
					return false;

				// Return true if any of its four corners are visible
				return (
					element.contains(elemFromPoint(rect.left, rect.top)) ||
					element.contains(elemFromPoint(rect.right, rect.top)) ||
					element.contains(elemFromPoint(rect.right, rect.bottom)) ||
					element.contains(elemFromPoint(rect.left, rect.bottom))
				);
			}
			return function (selector, config) {
				var
					_mainElement = document.querySelector(selector), // основный элемент блока
					_sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
					_sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
					_sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
					_sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
					_sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
					_wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
					_itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента
					_positionLeftItem = 0, // позиция левого активного элемента
					_transform = 0, // значение транфсофрмации .slider_wrapper
					_step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
					_items = [], // массив элементов
					_interval = 0,
					_config = {
						isCycling: false, // автоматическая смена слайдов
						direction: 'right', // направление смены слайдов
						interval: 4500, // интервал между автоматической сменой слайдов
						pause: true // устанавливать ли паузу при поднесении курсора к слайдеру
					};

				for (var key in config) {
					if (key in _config) {
						_config[key] = config[key];
					}
				}

				// наполнение массива _items
				_sliderItems.forEach(function (item, index) {
					_items.push({
						item: item,
						position: index,
						transform: 0
					});
				});

				var position = {
					getItemMin: function () {
						var indexItem = 0;
						_items.forEach(function (item, index) {
							if (item.position < _items[indexItem].position) {
								indexItem = index;
							}
						});
						return indexItem;
					},
					getItemMax: function () {
						var indexItem = 0;
						_items.forEach(function (item, index) {
							if (item.position > _items[indexItem].position) {
								indexItem = index;
							}
						});
						return indexItem;
					},
					getMin: function () {
						return _items[position.getItemMin()].position;
					},
					getMax: function () {
						return _items[position.getItemMax()].position;
					}
				}

				var _transformItem = function (direction) {
					var nextItem;

					if (!_isElementVisible(_mainElement)) {
						return;
					}

					if (direction === 'right') {
						_positionLeftItem++;
						if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
							nextItem = position.getItemMin();
							_items[nextItem].position = position.getMax() + 1;
							_items[nextItem].transform += _items.length * 100;
							_items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
						}
						_transform -= _step;
					}
					if (direction === 'left') {
						_positionLeftItem--;
						if (_positionLeftItem < position.getMin()) {
							nextItem = position.getItemMax();
							_items[nextItem].position = position.getMin() - 1;
							_items[nextItem].transform -= _items.length * 100;
							_items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
						}
						_transform += _step;
					}
					_sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
				}

				var _cycle = function (direction) {
					if (!_config.isCycling) {
						return;
					}
					_interval = setInterval(function () {
						_transformItem(direction);
					}, _config.interval);
				}

				// обработчик события click для кнопок "назад" и "вперед"
				var _controlClick = function (e) {
					if (this.classList.contains('slider__control')) {
						var direction = this.classList.contains('slider__control_right') ? 'right' : 'left';
						e.preventDefault();
						_transformItem(direction);
						clearInterval(_interval);
						_cycle(_config.direction);
					}
				};

				// обработка события изменения видимости страницы
				var _handleVisibilityChange = function () {
					if (document.visibilityState === "hidden") {
						clearInterval(_interval);
					} else {
						clearInterval(_interval);
						_cycle(_config.direction);
					}
				}

				var _isTouchDevice = function () {
					return !!('ontouchstart' in window || navigator.maxTouchPoints);
				};

				var _setUpListeners = function () {
					// добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
					_sliderControls.forEach(function (item) {
						item.addEventListener('click', _controlClick);
					});
					if (_config.pause && _config.isCycling) {
						_mainElement.addEventListener('mouseenter', function () {
							clearInterval(_interval);
						});
						_mainElement.addEventListener('mouseleave', function () {
							clearInterval(_interval);
							_cycle(_config.direction);
						});
					}
					document.addEventListener('visibilitychange', _handleVisibilityChange, false);
				}
				if (_isTouchDevice()) {
					_mainElement.addEventListener('touchstart', function (e) {
						_startX = e.changedTouches[0].clientX;
					});
					_mainElement.addEventListener('touchend', function (e) {
						var
							_endX = e.changedTouches[0].clientX,
							_deltaX = _endX - _startX;
						if (_deltaX > 50) {
							_transformItem('left');
						} else if (_deltaX < -50) {
							_transformItem('right');
						}
					});
				} else {
					_mainElement.addEventListener('mousedown', function (e) {
						_startX = e.clientX;
					});
					_mainElement.addEventListener('mouseup', function (e) {
						var
							_endX = e.clientX,
							_deltaX = _endX - _startX;
						if (_deltaX > 50) {
							_transformItem('left');
						} else if (_deltaX < -50) {
							_transformItem('right');
						}
					});
				}


				// инициализация
				_setUpListeners();
				if (document.visibilityState === "visible") {
					_cycle(_config.direction);
				}

				return {
					right: function () { // метод right
						_transformItem('right');
					},
					left: function () { // метод left
						_transformItem('left');
					},
					stop: function () { // метод stop
						_config.isCycling = false;
						clearInterval(_interval);
					},
					cycle: function () { // метод cycle
						_config.isCycling = true;
						clearInterval(_interval);
						_cycle();
					}
				}

			}
		}());

		if (document.querySelectorAll('.slider').length) {
			multiItemSlider('.slider', {
				isCycling: true
			});
		}
		if (document.querySelectorAll('#slider__komm').length) {
			multiItemSlider('#slider__komm', {
				isCycling: true
			});
		}


		//  Accoreon //////////////////////////////////////////////////////////////////////
		var accordion = (function (element) {

			var _getItem = function (elements, className) { // функция для получения элемента с указанным классом
				var element = undefined;
				elements.forEach(function (item) {
					if (item.classList.contains(className)) {
						element = item;
					}
				});
				return element;
			};

			return function () {
				var _mainElement = {}, // .accordion
					_items = {}, // .accordion-item
					_contents = {}; // .accordion-item-content


				var _actionClick = function (e) {
						if (!e.target.classList.contains('accordion-item-header')) { // прекращаем выполнение функции если кликнули не по заголовку
							return;
						}
						e.preventDefault(); // Отменям стандартное действие
						// получаем необходимые данные
						var header = e.target,
							item = header.parentElement,
							itemActive = _getItem(_items, 'show');

						if (itemActive === undefined) { // добавляем класс show к элементу (в зависимости от выбранного заголовка)
							item.classList.add('show');
						} else {
							// удаляем класс show у ткущего элемента
							itemActive.classList.remove('show');
							// если следующая вкладка не равна активной
							if (itemActive !== item) {
								// добавляем класс show к элементу (в зависимости от выбранного заголовка)
								item.classList.add('show');
							}
						}
					},
					_setupListeners = function () {
						// добавим к элементу аккордиона обработчик события click
						_mainElement.addEventListener('click', _actionClick);
					};

				return {
					init: function (element) {
						_mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
						_items = _mainElement.querySelectorAll('.accordion-item');
						_setupListeners();
					}
				}

			}
		})();

		if (document.querySelectorAll('.accordion').length) {
			var accordion1 = accordion();
			accordion1.init('.accordion');
		}


		// SlickSlider /////////////////////////////////////////////////////////////////////////////////////////////////////
		function initSlickSlider(slider) {
			slider.each(function () {
				// @ts-ignore
				$(this).slick({
					lazyLoad: 'ondemand',
					infinite: true,
					arrows: true,
					// dots: true,
					autoplay: +$(this).attr(`data-play`),
					autoplaySpeed: +$(this).attr(`data-speed`),
					slidesToShow: +$(this).attr(`data-items-xl`),
					slidesToScroll: 1,
					draggable: true,
					swipeToSlide: true,
					prevArrow: `<button class="slick-prev slick-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>`,
					nextArrow: `<button class="slick-next slick-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>`,
					responsive: [{
							breakpoint: 1280,
							settings: {
								slidesToShow: +$(this).attr(`data-items-lg`),
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: +$(this).attr(`data-items-md`),
								slidesToScroll: 1
							}
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: +$(this).attr(`data-items-sm`),
								slidesToScroll: 1
							}
						}
					]
				})
			})
		}
		initSlickSlider($(`.carousel`));
		initSlickSlider($(`.slider-portfolio`));
		
	})
})

$(window).on(`load`, function () {
	$(`.preloader`).delay(0).fadeOut(`fast`)
})
