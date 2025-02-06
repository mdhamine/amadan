import $ from 'jquery';

export default defineNuxtPlugin((nuxtApp) => {
	if (process.client) {
		const setupSmoothScroll = () => {
			$.easing.easeInOutCubic = function (x, t, b, c, d) {
				if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
				return (c / 2) * ((t -= 2) * t * t + 2) + b;
			};

			$('a[href*="#"], a.smooth-scroll')
				.off('click')
				.on('click', function (event) {
					const href = this.getAttribute('href');
					if (href.includes('#')) {
						event.preventDefault();

						const isSamePageLink = href.startsWith('#');

						if (isSamePageLink) {
							const targetId = href.split('#')[1];
							const target = $(`#${targetId}`);
							if (target.length) {
								const targetOffset = target.offset().top;
								$('html, body').stop().animate(
									{
										scrollTop: targetOffset,
									},
									2000,
									'easeInOutCubic'
								);
							}
						} else {
							const [path, hash] = href.split('#');
							const targetId = `#${hash}`;

							nuxtApp.$router.push(path).then(() => {
								setTimeout(() => {
									const target = $(targetId);
									if (target.length) {
										const targetOffset = target.offset().top;
										$('html, body').stop().animate(
											{
												scrollTop: targetOffset,
											},
											2000,
											'easeInOutCubic'
										);
									}
								}, 500);
							});
						}
					}
				});
		};

		$(document).ready(() => {
			setupSmoothScroll();

			nuxtApp.$router.afterEach((to, from) => {
				setTimeout(() => {
					setupSmoothScroll();
				}, 500);
			});
		});
	}
});
