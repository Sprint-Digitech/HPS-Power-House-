import ClientWrapper from './ClientWrapper';

export const metadata = {
  title: "Earthing",
};

const headContent = `
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<link href="https://gmpg.org/xfn/11" rel="profile"/>

<meta content="max-image-preview:large" name="robots"/>
<link href="//fonts.googleapis.com" rel="dns-prefetch"/>
<link href="/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fhpspower.in%2F" rel="alternate" title="oEmbed (JSON)" type="application/json+oembed"/>
<link href="/wp-json/oembed/1.0/embed-1?url=https%3A%2F%2Fhpspower.in%2F&amp;format=xml" rel="alternate" title="oEmbed (XML)" type="text/xml+oembed"/>
<style id="wp-img-auto-sizes-contain-inline-css">
img:is([sizes=auto i],[sizes^="auto," i]){contain-intrinsic-size:3000px 1500px}
/*# sourceURL=wp-img-auto-sizes-contain-inline-css */
</style>
<link href="wp-content/plugins/elementor/assets/lib/font-awesome/css/all.min.css?ver=3.35.5" id="font-awesome-5-all-css" media="all" rel="stylesheet"/>
<link href="wp-content/plugins/elementor/assets/lib/font-awesome/css/v4-shims.min.css?ver=3.35.5" id="font-awesome-4-shim-css" media="all" rel="stylesheet"/>
<style id="wp-emoji-styles-inline-css">

	img.wp-smiley, img.emoji {
		display: inline !important;
		border: none !important;
		box-shadow: none !important;
		height: 1em !important;
		width: 1em !important;
		margin: 0 0.07em !important;
		vertical-align: -0.1em !important;
		background: none !important;
		padding: 0 !important;
	}
/*# sourceURL=wp-emoji-styles-inline-css */
</style>
<style id="classic-theme-styles-inline-css">
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
/*# sourceURL=/wp-includes/css/classic-themes.min.css */
</style>
<style id="global-styles-inline-css">
:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);--wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-term-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-term-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
:root :where(.wp-block-pullquote){font-size: 1.5em;line-height: 1.6;}
/*# sourceURL=global-styles-inline-css */
</style>
<link href="wp-content/plugins/woocommerce/assets/css/woocommerce-layout.css?ver=10.5.3" id="woocommerce-layout-css" media="all" rel="stylesheet"/>
<link href="wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreen.css?ver=10.5.3" id="woocommerce-smallscreen-css" media="only screen and (max-width: 768px)" rel="stylesheet"/>
<link href="wp-content/plugins/woocommerce/assets/css/woocommerce.css?ver=10.5.3" id="woocommerce-general-css" media="all" rel="stylesheet"/>
<style id="woocommerce-inline-inline-css">
.woocommerce form .form-row .required { visibility: visible; }
/*# sourceURL=woocommerce-inline-inline-css */
</style>
<link href="wp-content/plugins/wpforms-lite/assets/css/frontend/modern/wpforms-full.min.css?ver=1.9.9.2" id="wpforms-modern-full-css" media="all" rel="stylesheet"/>
<style id="wpforms-modern-full-inline-css">
:root {
				--wpforms-field-border-radius: 3px;
--wpforms-field-border-style: solid;
--wpforms-field-border-size: 1px;
--wpforms-field-background-color: #ffffff;
--wpforms-field-border-color: rgba( 0, 0, 0, 0.25 );
--wpforms-field-border-color-spare: rgba( 0, 0, 0, 0.25 );
--wpforms-field-text-color: rgba( 0, 0, 0, 0.7 );
--wpforms-field-menu-color: #ffffff;
--wpforms-label-color: rgba( 0, 0, 0, 0.85 );
--wpforms-label-sublabel-color: rgba( 0, 0, 0, 0.55 );
--wpforms-label-error-color: #d63637;
--wpforms-button-border-radius: 3px;
--wpforms-button-border-style: none;
--wpforms-button-border-size: 1px;
--wpforms-button-background-color: #066aab;
--wpforms-button-border-color: #066aab;
--wpforms-button-text-color: #ffffff;
--wpforms-page-break-color: #066aab;
--wpforms-background-image: none;
--wpforms-background-position: center center;
--wpforms-background-repeat: no-repeat;
--wpforms-background-size: cover;
--wpforms-background-width: 100px;
--wpforms-background-height: 100px;
--wpforms-background-color: rgba( 0, 0, 0, 0 );
--wpforms-background-url: none;
--wpforms-container-padding: 0px;
--wpforms-container-border-style: none;
--wpforms-container-border-width: 1px;
--wpforms-container-border-color: #000000;
--wpforms-container-border-radius: 3px;
--wpforms-field-size-input-height: 43px;
--wpforms-field-size-input-spacing: 15px;
--wpforms-field-size-font-size: 16px;
--wpforms-field-size-line-height: 19px;
--wpforms-field-size-padding-h: 14px;
--wpforms-field-size-checkbox-size: 16px;
--wpforms-field-size-sublabel-spacing: 5px;
--wpforms-field-size-icon-size: 1;
--wpforms-label-size-font-size: 16px;
--wpforms-label-size-line-height: 19px;
--wpforms-label-size-sublabel-font-size: 14px;
--wpforms-label-size-sublabel-line-height: 17px;
--wpforms-button-size-font-size: 17px;
--wpforms-button-size-height: 41px;
--wpforms-button-size-padding-h: 15px;
--wpforms-button-size-margin-top: 10px;
--wpforms-container-shadow-size-box-shadow: none;
			}
/*# sourceURL=wpforms-modern-full-inline-css */
</style>
<link href="wp-content/plugins/metform/public/assets/lib/cute-alert/style.css?ver=4.1.2" id="cute-alert-css" media="all" rel="stylesheet"/>
<link href="wp-content/plugins/metform/public/assets/css/text-editor.css?ver=4.1.2" id="text-editor-style-css" media="all" rel="stylesheet"/>
<link href="css?family=Inter%3A300i%2C300%2C400i%2C400%2C500%2C600%2C700%7CPoppins%3A400i%2C400%2C500i%2C500%2C600%2C700&amp;subset=latin" id="limestone-fonts-css" media="all" rel="stylesheet"/>
<link href="wp-content/themes/limestone/assets/vendor/fontawesome/all.min.css?ver=5.14" id="fontawesome-css" media="all" rel="stylesheet"/>
<link href="wp-content/themes/limestone/assets/css/theme.min.css?ver=1.0.2" id="limestone-theme-css" media="all" rel="stylesheet"/>
<style id="limestone-theme-inline-css">

        :root {
            --limestone-container-width: 1320px; --limestone-boxed-width: 1530px; --limestone-primary-font: Inter; --limestone-secondary-font: Poppins; --limestone-primary-color:#0578db; --limestone-secondary-color:#f77600; --limestone-body-color:#ffffff; --limestone-headline-color:#000000; --limestone-footer-color:#b5b5ba; --limestone-border-color:#eaeaec; --limestone-light-neutral:#f5f5f5; --limestone-white-neutral:#ffffff; --limestone-dark-neutral:#2a2c38; --limestone-custom-color-1:#e65a11; --e-global-color-limestone_primary:#0578db; --e-global-color-limestone_secondary:#f77600; --e-global-color-limestone_body:#ffffff; --e-global-color-limestone_headline:#000000; --e-global-color-footer_text_color:#b5b5ba; --e-global-color-limestone_border:#eaeaec; --e-global-color-light_neutral:#f5f5f5; --e-global-color-white_neutral:#ffffff; --e-global-color-dark_neutral:#2a2c38; --e-global-color-limestone_custom_color_1:#e65a11
        }
        
/*# sourceURL=limestone-theme-inline-css */
</style>
<link href="wp-content/themes/limestone/style.css?ver=1.0.2" id="limestone-style-css" media="all" rel="stylesheet"/>
<link href="wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.47.0" id="elementor-icons-css" media="all" rel="stylesheet"/>
<link href="wp-content/uploads/elementor/css/custom-frontend.min.css?ver=1773258517" id="elementor-frontend-css" media="all" rel="stylesheet"/>
<link href="wp-content/uploads/elementor/css/post-2533.css?ver=1773258517" id="elementor-post-2533-css" media="all" rel="stylesheet"/>
<link href="wp-content/themes/limestone/assets/vendor/slick/slick.min.css?ver=1.8.1" id="slick-css" media="all" rel="stylesheet"/>
<link href="wp-content/plugins/elementor/assets/css/widget-image.min.css?ver=3.35.5" id="widget-image-css" media="all" rel="stylesheet"/>
<link href="wp-content/plugins/elementor/assets/lib/animations/styles/fadeInLeft.min.css?ver=3.35.5" id="e-animation-fadeInLeft-css" media="all" rel="stylesheet"/>
<link href="wp-content/plugins/elementor/assets/lib/animations/styles/fadeInRight.min.css?ver=3.35.5" id="e-animation-fadeInRight-css" media="all" rel="stylesheet"/>
<link href="wp-content/plugins/elementor/assets/lib/animations/styles/fadeInUp.min.css?ver=3.35.5" id="e-animation-fadeInUp-css" media="all" rel="stylesheet"/>
<link href="wp-content/plugins/elementor/assets/css/widget-heading.min.css?ver=3.35.5" id="widget-heading-css" media="all" rel="stylesheet"/>
<link href="wp-content/uploads/elementor/css/post-73.css?ver=1773261211" id="elementor-post-73-css" media="all" rel="stylesheet"/>
<link href="css-1?family=Roboto:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&amp;display=swap" id="elementor-gf-roboto-css" media="all" rel="stylesheet"/>
<link href="css-2?family=Roboto+Slab:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&amp;display=swap" id="elementor-gf-robotoslab-css" media="all" rel="stylesheet"/>
<link href="css-3?family=Poppins:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&amp;display=swap" id="elementor-gf-poppins-css" media="all" rel="stylesheet"/>
<link href="css-4?family=Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&amp;display=swap" id="elementor-gf-montserrat-css" media="all" rel="stylesheet"/>
<link href="wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3" id="elementor-icons-shared-0-css" media="all" rel="stylesheet"/>
<link href="wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css?ver=5.15.3" id="elementor-icons-fa-solid-css" media="all" rel="stylesheet"/>
<link href="wp-content/themes/limestone/assets/vendor/flaticon/style.min.css?ver=1.0" id="elementor-icons-limestone-flaticon-css" media="all" rel="stylesheet"/>
<link href="wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css?ver=5.15.3" id="elementor-icons-fa-brands-css" media="all" rel="stylesheet"/>
<script id="jquery-core-js" src="wp-includes/js/jquery/jquery.min.js?ver=3.7.1"></script>
<script id="jquery-migrate-js" src="wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1"></script>
<script async="" id="burst-timeme-js" src="/wp-content/plugins/burst-statistics/assets/js/timeme/timeme.min.js?ver=1771395993"></script>
<script async="" id="burst-js" src="/wp-content/uploads/burst/js/burst.min-1.js?ver=1784091954"></script>
<script id="font-awesome-4-shim-js" src="/wp-content/plugins/elementor/assets/lib/font-awesome/js/v4-shims.min.js?ver=3.35.5"></script>
<script data-wp-strategy="defer" defer="" id="wc-jquery-blockui-js" src="/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.7.0-wc.10.5.3"></script>
<script id="wc-add-to-cart-js-extra">
var wc_add_to_cart_params = {"ajax_url":"/wp-admin/admin-ajax.php","wc_ajax_url":"/?wc-ajax=%%endpoint%%","i18n_view_cart":"View cart","cart_url":"/cart/","is_cart":"","cart_redirect_after_add":"no"};
//# sourceURL=wc-add-to-cart-js-extra
</script>
<script data-wp-strategy="defer" defer="" id="wc-add-to-cart-js" src="/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=10.5.3"></script>
<script data-wp-strategy="defer" defer="" id="wc-js-cookie-js" src="/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4-wc.10.5.3"></script>
<script id="woocommerce-js-extra">
var woocommerce_params = {"ajax_url":"/wp-admin/admin-ajax.php","wc_ajax_url":"/?wc-ajax=%%endpoint%%","i18n_password_show":"Show password","i18n_password_hide":"Hide password"};
//# sourceURL=woocommerce-js-extra
</script>
<script data-wp-strategy="defer" defer="" id="woocommerce-js" src="/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=10.5.3"></script>
<link href="/wp-json/" rel="https://api.w.org/"/><link href="/wp-json/wp/v2/pages/73" rel="alternate" title="JSON" type="application/json"/><link href="/xmlrpc.php?rsd" rel="EditURI" title="RSD" type="application/rsd+xml"/>
<link href="/" rel="canonical"/>
<link href="index.htm" rel="shortlink"/>
<noscript><style>.woocommerce-product-gallery{ opacity: 1 !important; }</style></noscript>
<meta content="Elementor 3.35.5; features: additional_custom_breakpoints; settings: css_print_method-external, google_font-enabled, font_display-swap" name="generator"/>
<style>
				.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload),
				.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload) * {
					background-image: none !important;
				}
				@media screen and (max-height: 1024px) {
					.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload),
					.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload) * {
						background-image: none !important;
					}
				}
				@media screen and (max-height: 640px) {
					.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload),
					.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload) * {
						background-image: none !important;
					}
				}
			</style>
<style type="text/css">.limestone-site-border .limestone-body-content{border-color:#eeee;}.page-title-wrapper{background-image:url(wp-content/uploads/2024/05/images.jpeg);}.page-title-wrapper::before{background-color:rgba(42,44,56,0.85);}</style><link href="/wp-content/uploads/2024/05/cropped-HPS-Logo-Final-32x32.png" rel="icon"/>
<link href="/wp-content/uploads/2024/05/cropped-HPS-Logo-Final-192x192.png" rel="icon"/>
<link href="/wp-content/uploads/2024/05/cropped-HPS-Logo-Final-180x180.png" rel="apple-touch-icon"/>
<meta content="/wp-content/uploads/2024/05/cropped-HPS-Logo-Final-270x270.png" name="msapplication-TileImage"/>
<style id="wp-custom-css">
			.elementor-441 .elementor-element.elementor-element-d2ee595 .limestone-custom-shape {
   
    background-color: #0575d9!important;
}
.fab, .far {
    font-weight: 400;
    color: #fff;
}
@import url('css2');
body ,p,a ,q, h1 , h2 , h3 , h4 ,h5 ,h6
{
	font-family: "Poppins", Sans-serif; !important;
	}
.eart {
  
    width: 270px;
}
.ese {
    text-align: left;
    width: 265px;
}
.hot{
    text-align: left;
    width: 268px;
}
.solar {
    text-align: left;
    width: 273px;
}
.limestone-site-logo a img {
    max-width: 127px;
}.fab, .far {
    font-weight: 400;
    color: #093a70;
}
.fab, .far {
    font-weight: 400;
    color: #093a70;
}
.back-to-top {
  background-color: #FF5722;
	color:#fff;
}
.limestone-button .button-text {
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    color: #fff0f0;
}		</style>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"/>
`;
const bodyContent = `
<div class="limestone-body-content" id="limestone-page">
<header class="site-header">
<style>.elementor-441 .elementor-element.elementor-element-bc54862{--display:flex;--flex-direction:row;--container-widget-width:initial;--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--flex-wrap-mobile:wrap;--gap:0px 0px;--row-gap:0px;--column-gap:0px;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-441 .elementor-element.elementor-element-bc54862:not(.elementor-motion-effects-element-type-background), .elementor-441 .elementor-element.elementor-element-bc54862 > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:#0575D9;}.elementor-441 .elementor-element.elementor-element-ed17cb9{--display:flex;--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--flex-wrap-mobile:wrap;--justify-content:center;--margin-top:0px;--margin-bottom:0px;--margin-left:0px;--margin-right:0px;--padding-top:15px;--padding-bottom:15px;--padding-left:15px;--padding-right:15px;}.elementor-441 .elementor-element.elementor-element-206afae{z-index:2;font-family:"Montserrat", Sans-serif;font-weight:600;line-height:1.6em;color:#FFFFFF;}.elementor-441 .elementor-element.elementor-element-545646d{--display:flex;--position:absolute;--min-height:100%;--overflow:hidden;top:0px;}.elementor-441 .elementor-element.elementor-element-545646d:not(.elementor-motion-effects-element-type-background), .elementor-441 .elementor-element.elementor-element-545646d > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:#FF5722EB;}body:not(.rtl) .elementor-441 .elementor-element.elementor-element-545646d{right:0px;}body.rtl .elementor-441 .elementor-element.elementor-element-545646d{left:0px;}.elementor-441 .elementor-element.elementor-element-d2ee595 .limestone-custom-shape{background-color:var( --e-global-color-dark_neutral );width:25px;height:60px;}.elementor-441 .elementor-element.elementor-element-d2ee595{width:auto;max-width:auto;top:0px;z-index:2;}.elementor-441 .elementor-element.elementor-element-d2ee595 > .elementor-widget-container{--e-transform-flipX:-1;--e-transform-flipY:-1;}body:not(.rtl) .elementor-441 .elementor-element.elementor-element-d2ee595{right:0px;}body.rtl .elementor-441 .elementor-element.elementor-element-d2ee595{left:0px;}.elementor-441 .elementor-element.elementor-element-1da694e{--display:flex;--flex-direction:row;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--flex-wrap-mobile:wrap;--justify-content:flex-end;--align-items:center;--padding-top:15px;--padding-bottom:15px;--padding-left:15px;--padding-right:15px;}.elementor-441 .elementor-element.elementor-element-a0c393e .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child){padding-block-end:calc(100px/2);}.elementor-441 .elementor-element.elementor-element-a0c393e .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child){margin-block-start:calc(100px/2);}.elementor-441 .elementor-element.elementor-element-a0c393e .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item{margin-inline:calc(100px/2);}.elementor-441 .elementor-element.elementor-element-a0c393e .elementor-icon-list-items.elementor-inline-items{margin-inline:calc(-100px/2);}.elementor-441 .elementor-element.elementor-element-a0c393e .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{inset-inline-end:calc(-100px/2);}.elementor-441 .elementor-element.elementor-element-a0c393e .elementor-icon-list-item:not(:last-child):after{content:"";height:100%;border-color:#FFFFFF33;}.elementor-441 .elementor-element.elementor-element-a0c393e .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child):after{border-block-start-style:solid;border-block-start-width:2px;}.elementor-441 .elementor-element.elementor-element-a0c393e .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:not(:last-child):after{border-inline-start-style:solid;}.elementor-441 .elementor-element.elementor-element-a0c393e .elementor-inline-items .elementor-icon-list-item:not(:last-child):after{border-inline-start-width:2px;}.elementor-441 .elementor-element.elementor-element-a0c393e .elementor-icon-list-icon i{color:#FFFFFF;transition:color 0.3s;}.elementor-441 .elementor-element.elementor-element-a0c393e .elementor-icon-list-icon svg{fill:#FFFFFF;transition:fill 0.3s;}.elementor-441 .elementor-element.elementor-element-a0c393e{--e-icon-list-icon-size:16px;--e-icon-list-icon-align:left;--e-icon-list-icon-margin:0 calc(var(--e-icon-list-icon-size, 1em) * 0.25) 0 0;--icon-vertical-offset:0px;}.elementor-441 .elementor-element.elementor-element-a0c393e .elementor-icon-list-icon{padding-inline-end:5px;}.elementor-441 .elementor-element.elementor-element-a0c393e .elementor-icon-list-item > .elementor-icon-list-text, .elementor-441 .elementor-element.elementor-element-a0c393e .elementor-icon-list-item > a{font-family:"Montserrat", Sans-serif;font-weight:400;line-height:1.6em;}.elementor-441 .elementor-element.elementor-element-a0c393e .elementor-icon-list-text{color:#FFFFFF;transition:color 0.3s;}.elementor-441 .elementor-element.elementor-element-a0c393e .elementor-icon-list-item:hover .elementor-icon-list-text{color:var( --e-global-color-white_neutral );}.elementor-441 .elementor-element.elementor-element-ceb5bae{--grid-template-columns:repeat(0, auto);--icon-size:16px;--grid-column-gap:25px;--grid-row-gap:0px;}.elementor-441 .elementor-element.elementor-element-ceb5bae .elementor-widget-container{text-align:right;}.elementor-441 .elementor-element.elementor-element-ceb5bae > .elementor-widget-container{margin:0px 0px 0px 50px;padding:0px 0px 0px 50px;border-style:solid;border-width:0px 0px 0px 2px;border-color:#FFFFFF33;}.elementor-441 .elementor-element.elementor-element-ceb5bae .elementor-social-icon{background-color:#FFFFFF00;--icon-padding:0em;}.elementor-441 .elementor-element.elementor-element-ceb5bae .elementor-social-icon i{color:#FFFFFF;}.elementor-441 .elementor-element.elementor-element-ceb5bae .elementor-social-icon svg{fill:#FFFFFF;}.elementor-441 .elementor-element.elementor-element-ceb5bae .elementor-social-icon:hover i{color:var( --e-global-color-white_neutral );}.elementor-441 .elementor-element.elementor-element-ceb5bae .elementor-social-icon:hover svg{fill:var( --e-global-color-white_neutral );}.elementor-441 .elementor-element.elementor-element-5644021{--display:flex;--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--flex-wrap-mobile:wrap;--align-items:center;--gap:0px 0px;--row-gap:0px;--column-gap:0px;}.elementor-441 .elementor-element.elementor-element-5644021.limestone-sticky.limestone-sticky-active{background-color:var( --e-global-color-white_neutral );box-shadow:0px 5px 20px 0px rgba(0, 0, 0, 0.05);}.elementor-441 .elementor-element.elementor-element-a3575d0{--display:flex;--flex-direction:row;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--flex-wrap-mobile:wrap;--align-items:center;--gap:0px 20px;--row-gap:0px;--column-gap:20px;--padding-top:0px;--padding-bottom:0px;--padding-left:15px;--padding-right:15px;}.elementor-441 .elementor-element.elementor-element-b26b8a8.elementor-element{--flex-grow:0;--flex-shrink:0;}.elementor-441 .elementor-element.elementor-element-b26b8a8 .limestone-site-logo{text-align:left;}.elementor-441 .elementor-element.elementor-element-b26b8a8 .limestone-site-logo img{width:62%;}.elementor-441 .elementor-element.elementor-element-b26b8a8 .limestone-site-logo a{max-width:171px;}.elementor-441 .elementor-element.elementor-element-f01bfea{--display:flex;--flex-direction:row;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--flex-wrap-mobile:wrap;--justify-content:center;--align-items:center;--gap:5px 5px;--row-gap:5px;--column-gap:5px;--margin-top:0;--margin-bottom:0;--margin-left:auto;--margin-right:0;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-441 .elementor-element.elementor-element-eecac35 .limestone-nav-menu .nav-menu-wrapper ul.primary-menu > li{height:100px;}.elementor-441 .elementor-element.elementor-element-eecac35 .limestone-nav-menu{min-height:100px;justify-content:center;}.elementor-441 .elementor-element.elementor-element-eecac35 .limestone-nav-menu .nav-menu-wrapper li a{font-family:"Poppins", Sans-serif;}.elementor-441 .elementor-element.elementor-element-a0b8ca2{--display:flex;--flex-direction:row;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--flex-wrap-mobile:wrap;--justify-content:flex-end;--align-items:center;--gap:0px 30px;--row-gap:0px;--column-gap:30px;--margin-top:0;--margin-bottom:0;--margin-left:auto;--margin-right:0;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;}.elementor-441 .elementor-element.elementor-element-d9df1b1 .limestone-button-wrapper{text-align:left;}.elementor-441 .elementor-element.elementor-element-d9df1b1 .limestone-button, .elementor-441 .elementor-element.elementor-element-d9df1b1 .limestone-button .button-text, .elementor-441 .elementor-element.elementor-element-d9df1b1 .limestone-button .button-icon{color:#FFFFFF;}@media(min-width:768px){.elementor-441 .elementor-element.elementor-element-bc54862{--content-width:1750px;}.elementor-441 .elementor-element.elementor-element-ed17cb9{--width:38%;}.elementor-441 .elementor-element.elementor-element-545646d{--width:50vw;}.elementor-441 .elementor-element.elementor-element-1da694e{--width:62%;}.elementor-441 .elementor-element.elementor-element-5644021{--content-width:1750px;}.elementor-441 .elementor-element.elementor-element-f01bfea{--width:auto;}.elementor-441 .elementor-element.elementor-element-a0b8ca2{--width:auto;}}@media(max-width:1200px) and (min-width:768px){.elementor-441 .elementor-element.elementor-element-ed17cb9{--width:100%;}.elementor-441 .elementor-element.elementor-element-545646d{--width:100%;}.elementor-441 .elementor-element.elementor-element-1da694e{--width:100%;}}@media(max-width:1366px){.elementor-441 .elementor-element.elementor-element-a0c393e .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child){padding-block-end:calc(60px/2);}.elementor-441 .elementor-element.elementor-element-a0c393e .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child){margin-block-start:calc(60px/2);}.elementor-441 .elementor-element.elementor-element-a0c393e .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item{margin-inline:calc(60px/2);}.elementor-441 .elementor-element.elementor-element-a0c393e .elementor-icon-list-items.elementor-inline-items{margin-inline:calc(-60px/2);}.elementor-441 .elementor-element.elementor-element-a0c393e .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{inset-inline-end:calc(-60px/2);}.elementor-441 .elementor-element.elementor-element-ceb5bae > .elementor-widget-container{margin:0px 0px 0px 30px;padding:0px 0px 0px 30px;}}@media(max-width:1200px){.elementor-441 .elementor-element.elementor-element-bc54862{--flex-direction:column;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--flex-wrap-mobile:wrap;--align-items:center;}.elementor-441 .elementor-element.elementor-element-ed17cb9{--padding-top:15px;--padding-bottom:0px;--padding-left:15px;--padding-right:15px;}.elementor-441 .elementor-element.elementor-element-206afae{text-align:start;}.elementor-441 .elementor-element.elementor-element-1da694e{--justify-content:center;}.elementor-441 .elementor-element.elementor-element-b26b8a8{width:var( --container-widget-width, 138px );max-width:138px;--container-widget-width:138px;--container-widget-flex-grow:0;}.elementor-441 .elementor-element.elementor-element-a0b8ca2{--margin-top:0;--margin-bottom:0;--margin-left:0;--margin-right:0;}}@media(max-width:767px){.elementor-441 .elementor-element.elementor-element-a3575d0{--flex-wrap:nowrap;}.elementor-441 .elementor-element.elementor-element-f01bfea{--width:auto;}}</style> <div class="elementor elementor-441" data-elementor-id="441" data-elementor-type="wp-post">
<div class="elementor-element elementor-element-bc54862 elementor-hidden-mobile e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="bc54862" data-settings='{"background_background":"classic"}'>
<div class="e-con-inner">
<div class="elementor-element elementor-element-ed17cb9 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="ed17cb9" data-settings='{"background_background":"classic"}'>
<div class="elementor-element elementor-element-206afae elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="206afae" data-widget_type="text-editor.default">
<div class="elementor-widget-container">
									Welcome to HPS Power &amp;
Earthing Solutions
								</div>
</div>
<div class="elementor-element elementor-element-545646d e-con-full elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="545646d" data-settings='{"background_background":"classic","position":"absolute"}'>
<div class="elementor-element elementor-element-d2ee595 elementor-widget__width-auto elementor-absolute e-transform e-transform elementor-widget elementor-widget-limestone-custom-shape" data-e-type="widget" data-element_type="widget" data-id="d2ee595" data-settings='{"_position":"absolute","_transform_flipX_effect":"transform","_transform_flipY_effect":"transform"}' data-widget_type="limestone-custom-shape.default">
<div class="elementor-widget-container">
<div class="limestone-custom-shape shape-triangle"></div>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-1da694e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1da694e" data-settings='{"background_background":"classic"}'>
<div class="elementor-element elementor-element-a0c393e elementor-icon-list--layout-inline regular-font-icon elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-e-type="widget" data-element_type="widget" data-id="a0c393e" data-widget_type="icon-list.default">
<div class="elementor-widget-container">
<ul class="elementor-icon-list-items elementor-inline-items">
<li class="elementor-icon-list-item elementor-inline-item">
<a href="mailto:sales.hpspower@gmail.com">
<span class="elementor-icon-list-icon">
<i aria-hidden="true" class="far fa-envelope"></i> </span>
<span class="elementor-icon-list-text">sales.hpspower@gmail.com </span>
</a>
</li>
<li class="elementor-icon-list-item elementor-inline-item">
<a href="mailto:sales.hpspower@gmail.com">
<span class="elementor-icon-list-icon">
<i aria-hidden="true" class="fas fa-phone"></i> </span>
<span class="elementor-icon-list-text">+91-9136407707</span>
</a>
</li>
</ul>
</div>
</div>
<div class="elementor-element elementor-element-ceb5bae e-grid-align-right elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons" data-e-type="widget" data-element_type="widget" data-id="ceb5bae" data-widget_type="social-icons.default">
<div class="elementor-widget-container">
<div class="elementor-social-icons-wrapper elementor-grid" role="list">
<span class="elementor-grid-item" role="listitem">
<a class="elementor-icon elementor-social-icon elementor-social-icon-facebook-f elementor-repeater-item-7363656" href="javascript:void(0);" target="_blank">
<span class="elementor-screen-only">Facebook-f</span>
<i aria-hidden="true" class="fab fa-facebook-f"></i> </a>
</span>
<span class="elementor-grid-item" role="listitem">
<a class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-e6d97f1" href="javascript:void(0);" target="_blank">
<span class="elementor-screen-only">Twitter</span>
<i aria-hidden="true" class="fab fa-twitter"></i> </a>
</span>
<span class="elementor-grid-item" role="listitem">
<a class="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-4213411" href="javascript:void(0);" target="_blank">
<span class="elementor-screen-only">Linkedin</span>
<i aria-hidden="true" class="fab fa-linkedin"></i> </a>
</span>
<span class="elementor-grid-item" role="listitem">
<a class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-5252b86" href="javascript:void(0);" target="_blank">
<span class="elementor-screen-only">Instagram</span>
<i aria-hidden="true" class="fab fa-instagram"></i> </a>
</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="limestone-sticky elementor-element elementor-element-5644021 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="5644021">
<div class="e-con-inner">
<div class="elementor-element elementor-element-a3575d0 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="a3575d0">
<div class="elementor-element elementor-element-b26b8a8 elementor-widget-tablet_extra__width-initial elementor-widget elementor-widget-limestone-site-logo" data-e-type="widget" data-element_type="widget" data-id="b26b8a8" data-widget_type="limestone-site-logo.default">
<div class="elementor-widget-container">
<div class="limestone-site-logo">
<a href="/">
<img alt="Earthing" src="/wp-content/uploads/2024/06/HPS-Logo.png"/>
</a>
</div>
</div>
</div>
<div class="elementor-element elementor-element-f01bfea e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f01bfea">
<div class="elementor-element elementor-element-eecac35 elementor-widget elementor-widget-limestone-nav-menu" data-e-type="widget" data-element_type="widget" data-id="eecac35" data-widget_type="limestone-nav-menu.default">
<div class="elementor-widget-container">
<nav class="limestone-nav-menu mobile-expand-xl">
<div class="nav-menu-wrapper nav-center"><ul class="primary-menu" id="menu-primary-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-73 current_page_item menu-item-2876" id="menu-item-2876"><a aria-current="page" href="/"><span class="link-text">Home</span></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2877" id="menu-item-2877"><a href="/about-us/"><span class="link-text">About us</span></a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2880" id="menu-item-2880"><a href="tel:+919136407707"><span class="link-text">Our Products</span><span class="submenu-toggler"><i class="far fa-angle-down"></i></span></a>
<ul class="sub-menu">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2879" id="menu-item-2879"><a href="/earthing/"><span class="link-text">Earthing</span></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-limestone_portfolio menu-item-2883" id="menu-item-2883"><a href="/portfolio/solar-system/"><span class="link-text">Solar System</span></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-limestone_portfolio menu-item-2882" id="menu-item-2882"><a href="/portfolio/hot-dip-galvanized/"><span class="link-text">Hot Dip Galvanized</span></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-limestone_portfolio menu-item-2881" id="menu-item-2881"><a href="/portfolio/ese-lightning-arrestor/"><span class="link-text">Ese Lightning Arrestor</span></a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2878" id="menu-item-2878"><a href="/contact-us/"><span class="link-text">Contact Us</span></a></li>
</ul></div> <div class="navbar-toggler">
<span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
</span>
</div>
<div class="slide-panel-wrapper">
<div class="slide-panel-overly"></div>
<div class="slide-panel-content">
<div class="slide-panel-close">
<i class="fal fa-times"></i>
</div>
<div class="slide-panel-logo">
<img alt="Earthing" src="/wp-content/uploads/2024/05/HPS-Logo-for-website.png"/>
</div>
<div class="slide-panel-menu"><ul class="primary-menu" id="menu-primary-menu-1"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-73 current_page_item menu-item-2876"><a aria-current="page" href="/"><span class="link-text">Home</span></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2877"><a href="/about-us/"><span class="link-text">About us</span></a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2880"><a href="mailto:sales.hpspower@gmail.com"><span class="link-text">Our Products</span><span class="submenu-toggler"><i class="far fa-angle-down"></i></span></a>
<ul class="sub-menu">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2879"><a href="/earthing/"><span class="link-text">Earthing</span></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-limestone_portfolio menu-item-2883"><a href="/portfolio/solar-system/"><span class="link-text">Solar System</span></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-limestone_portfolio menu-item-2882"><a href="/portfolio/hot-dip-galvanized/"><span class="link-text">Hot Dip Galvanized</span></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-limestone_portfolio menu-item-2881"><a href="/portfolio/ese-lightning-arrestor/"><span class="link-text">Ese Lightning Arrestor</span></a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2878"><a href="/contact-us/"><span class="link-text">Contact Us</span></a></li>
</ul></div> <div class="limestone-button-wrapper">
<a class="limestone-button icon-right hover-left-right" href="javascript:void(0);">
<span class="button-text">
					Get A Quote        		</span>
<span class="button-icon">
<i class="fas fa-arrow-right"></i> </span>
</a>
</div>
</div>
</div>
</nav>
</div>
</div>
</div>
<div class="elementor-element elementor-element-a0b8ca2 e-con-full elementor-hidden-mobile e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="a0b8ca2">
<div class="elementor-element elementor-element-d9df1b1 elementor-widget elementor-widget-limestone-button" data-e-type="widget" data-element_type="widget" data-id="d9df1b1" data-widget_type="limestone-button.default">
<div class="elementor-widget-container">
<div class="limestone-button-wrapper">
<a class="limestone-button icon-right hover-left-right" href="/contact-us/">
<span class="button-text">
					Get A Quote        		</span>
<span class="button-icon">
<i class="fas fa-angle-double-right"></i> </span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>
<main class="limestone-content-area" id="limestone-content">
<div class="container container-elementor">
<div class="content-area">
<div class="page-inner clearfix post-73 page type-page status-publish hentry" id="post-73">
<div class="elementor elementor-73" data-elementor-id="73" data-elementor-type="wp-page">
<div class="elementor-element elementor-element-863ebda e-con-full e-flex e-con e-parent" data-e-type="container" data-element_type="container" data-id="863ebda">
<div class="elementor-element elementor-element-c57e794 elementor-widget elementor-widget-limestone-advanced-carousel" data-e-type="widget" data-element_type="widget" data-id="c57e794" data-settings='{"speed":600,"show_dots":"yes","autoplay":"yes","autoplay_speed":6000,"carousel_direction":"horizontal","slides_per_view":1,"slides_per_view_laptop":1,"slides_per_view_tablet_extra":1,"slides_per_view_tablet":1,"slides_per_view_mobile":1,"slides_to_scroll":1,"slides_to_scroll_laptop":1,"slides_to_scroll_tablet_extra":1,"slides_to_scroll_tablet":1,"slides_to_scroll_mobile":1,"loop":"yes"}' data-widget_type="limestone-advanced-carousel.default">
<div class="elementor-widget-container">
<div class="limestone-carousel-wrapper limestone-advanced-carousel">
<div class="limestone-carousel-active has-animation-events">
<div class="limestone-carousel-item elementor-repeater-item-e1a3c37">
<div class="slider-content-wrapper">
<div class="slider-item-bg"></div>
<div class="slider-container">
<div class="slider-content">
<span class="slider-subtitle">HPS Power &amp; Earthing Solutions</span><h1 class="slider-title">Solar System Power </h1><p class="slider-desc">Good for the environment. One of the biggest benefits of installing solar panels is that they are good for the environment. </p> <a class="slider-button limestone-button icon-right hover-left-right" href="/contact-us/">
<span class="button-text">Connect With Us </span>
<span class="button-icon">
<i class="fas fa-angle-double-right"></i> </span>
</a>
</div>
</div>
</div>
</div>
<div class="limestone-carousel-item elementor-repeater-item-b9e507f">
<div class="slider-content-wrapper">
<div class="slider-item-bg"></div>
<div class="slider-container">
<div class="slider-content">
<span class="slider-subtitle slider-subtitle">HPS Power &amp; Earthing Solutions</span><h1 class="slider-title slider-title">Hot Dip Galvanized</h1><p class="slider-desc slider-desc">Hot-dip galvanizing (HDG) is the process of coating fabricated steel by immersing it in a bath of molten zinc.</p> <a class="slider-button limestone-button icon-right hover-left-right slider-button limestone-button icon-right hover-left-right" href="/contact-us/">
<span class="button-text">Connect With Us </span>
<span class="button-icon">
<i class="fas fa-angle-double-right"></i> </span>
</a>
</div>
</div>
</div>
</div>
</div>
<div class="limestone-carousel-dots sync-vertical"></div>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-10da99a e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="10da99a">
<div class="e-con-inner">
<div class="elementor-element elementor-element-e2494df e-con-full e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="e2494df" data-settings='{"animation":"fadeInLeft"}'>
<div class="elementor-element elementor-element-b38881e elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="b38881e" data-widget_type="image.default">
<div class="elementor-widget-container">
<img alt="" class="attachment-large size-large wp-image-3058" decoding="async" fetchpriority="high" height="570" src="/wp-content/uploads/2024/05/about-img-1-1.png" width="545"/> </div>
</div>
<div class="elementor-element elementor-element-dfe881e elementor-widget__width-auto elementor-widget elementor-widget-limestone-progress-bar" data-e-type="widget" data-element_type="widget" data-id="dfe881e" data-widget_type="limestone-progress-bar.default">
<div class="elementor-widget-container">
<div class="limestone-progress-bar bar-circle title-top">
<div class="progress-header">
<span class="title">
					Project <br/>Success Rate				</span>
</div>
<div class="circle-progress" data-base-color="#f5f5f5" data-line-color="#0160C7" data-percent="89" style="background: #f5f5f5;">
<span class="elementor-counter-number" data-duration="2000" data-to-value="89">
					0				</span>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-cd814c7 elementor-absolute elementor-widget elementor-widget-limestone-custom-shape" data-e-type="widget" data-element_type="widget" data-id="cd814c7" data-settings='{"_position":"absolute"}' data-widget_type="limestone-custom-shape.default">
<div class="elementor-widget-container">
<div class="limestone-custom-shape shape-circle"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-55f4507 e-con-full e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="55f4507" data-settings='{"animation":"fadeInRight"}'>
<div class="elementor-element elementor-element-151d7d3 elementor-widget elementor-widget-limestone-section-title" data-e-type="widget" data-element_type="widget" data-id="151d7d3" data-widget_type="limestone-section-title.default">
<div class="elementor-widget-container">
<div class="limestone-section-title">
<div class="subtitle">
<span class="icon"><i class="fas fa-angle-double-right"></i></span>
<span class="subtitle-text">
					About Us				</span>
</div>
<h3 class="title">
<span class="main-text">
					HPS  Power &amp; Earthing Solution				</span>
</h3>
</div>
</div>
</div>
<div class="elementor-element elementor-element-f60047b elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="f60047b" data-widget_type="text-editor.default">
<div class="elementor-widget-container">
<p>Established in 2014,“HPS Power And Earthing Solutions”. is a pioneer in the manufacturer, supplier, importer, exporter, trader of a wide gamut of excellent quality Earthing Products. Our offered products are Lightning Arrester, Protection Device, and Earthing Electrode.These products have wide application in the construction of new building for official, commercial or residential purposes.All our products are exclusively engineered by highly qualified and skilled professionals using modern equipment and sophisticated technology to ensure their higher functionality.</p> </div>
</div>
<div class="elementor-element elementor-element-65911bd elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-child" data-e-type="container" data-element_type="container" data-id="65911bd">
<div class="e-con-inner">
<div class="elementor-element elementor-element-efe9c0f elementor-widget__width-initial elementor-widget elementor-widget-limestone-iconic-info-box" data-e-type="widget" data-element_type="widget" data-id="efe9c0f" data-widget_type="limestone-iconic-info-box.default">
<div class="elementor-widget-container">
<div class="limestone-iconic-info-box text-left icon-top">
<div class="box-icon">
<i class="flaticon flaticon-brick-wall"></i> </div>
<div class="box-content">
<h5 class="box-title">
<span class="title-text">Awards Winning  Construction Agency</span> </h5>
<p class="description">Ut enim ad minima veniam nostrum ollam laboriosam.</p> </div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-04f13d1 elementor-widget__width-initial elementor-widget elementor-widget-limestone-iconic-info-box" data-e-type="widget" data-element_type="widget" data-id="04f13d1" data-widget_type="limestone-iconic-info-box.default">
<div class="elementor-widget-container">
<div class="limestone-iconic-info-box text-left icon-top">
<div class="box-icon">
<i class="flaticon flaticon-helmet"></i> </div>
<div class="box-content">
<h5 class="box-title">
<span class="title-text">Modern Technology &amp; Expert Engineering</span> </h5>
<p class="description">To take trivial example which of us undertakes laborious</p> </div>
</div>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-2037439 e-flex e-con-boxed e-con e-child" data-e-type="container" data-element_type="container" data-id="2037439">
<div class="e-con-inner">
<div class="elementor-element elementor-element-051f544 elementor-widget elementor-widget-limestone-button" data-e-type="widget" data-element_type="widget" data-id="051f544" data-widget_type="limestone-button.default">
<div class="elementor-widget-container">
<div class="limestone-button-wrapper">
<a class="limestone-button icon-right hover-left-right" href="/about-us/">
<span class="button-text">
					Learn More        		</span>
<span class="button-icon">
<i class="fas fa-angle-double-right"></i> </span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-fa89768 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="fa89768">
<div class="e-con-inner">
<div class="elementor-element elementor-element-d4bce95 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="d4bce95">
<div class="elementor-element elementor-element-8d34854 elementor-widget__width-initial elementor-invisible elementor-widget elementor-widget-limestone-section-title" data-e-type="widget" data-element_type="widget" data-id="8d34854" data-settings='{"_animation":"fadeInUp","_animation_delay":200}' data-widget_type="limestone-section-title.default">
<div class="elementor-widget-container">
<div class="limestone-section-title">
<div class="subtitle">
<span class="icon"><i class="fas fa-angle-double-right"></i></span>
<span class="subtitle-text">
					We HSP Earthing Deals in All Earthing Products.				</span>
</div>
<h3 class="title">
<span class="main-text">
					We Provide Best Quality Services				</span>
</h3>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-049e645 e-con-full e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="049e645" data-settings='{"animation":"fadeInUp","animation_delay":500}'>
<div class="elementor-element elementor-element-49bfd7b elementor-widget elementor-widget-limestone-iconic-info-box" data-e-type="widget" data-element_type="widget" data-id="49bfd7b" data-widget_type="limestone-iconic-info-box.default">
<div class="elementor-widget-container">
<div class="limestone-iconic-info-box text-left icon-top">
<div class="box-icon">
<i class="fab fa-hive"></i> </div>
<div class="box-content">
<h4 class="box-title">
<span class="title-text">RCC Pit Cover</span> </h4>
<p class="description">In General ,RCC Building Are Stronger Than Conventional Concrete Structures</p> <a class="read-more-btn icon-right" href="/product/rcc-pit-cover/">
<span class="btn-text">
								Read More							</span>
<span class="btn-icon">
<i class="fas fa-angle-double-right"></i> </span>
</a>
</div>
<span class="top-bordered"></span> </div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-b60385f e-con-full e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="b60385f" data-settings='{"animation":"fadeInUp","animation_delay":600}'>
<div class="elementor-element elementor-element-b185c49 elementor-widget elementor-widget-limestone-iconic-info-box" data-e-type="widget" data-element_type="widget" data-id="b185c49" data-widget_type="limestone-iconic-info-box.default">
<div class="elementor-widget-container">
<div class="limestone-iconic-info-box text-left icon-top">
<div class="box-icon">
<i class="flaticon flaticon-architecture"></i> </div>
<div class="box-content">
<h4 class="box-title">
<span class="title-text">MS Pit Cover</span> </h4>
<p class="description">They Are Used In Order To Secure Protection For All Earthing Terminations</p> <a class="read-more-btn icon-right" href="/product/ms-pit-cover/">
<span class="btn-text">
								Read More							</span>
<span class="btn-icon">
<i class="fas fa-angle-double-right"></i> </span>
</a>
</div>
<span class="top-bordered"></span> </div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-a50eec4 e-con-full e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="a50eec4" data-settings='{"animation":"fadeInUp","animation_delay":500}'>
<div class="elementor-element elementor-element-e720330 elementor-widget elementor-widget-limestone-iconic-info-box" data-e-type="widget" data-element_type="widget" data-id="e720330" data-widget_type="limestone-iconic-info-box.default">
<div class="elementor-widget-container">
<div class="limestone-iconic-info-box text-left icon-top">
<div class="box-icon">
<i class="flaticon flaticon-quote"></i> </div>
<div class="box-content">
<h4 class="box-title">
<span class="title-text">Copper Earthing Electrode</span> </h4>
<p class="description">Designed For Fast Fault Current Dissipation Low Maintenance On Site</p> <a class="read-more-btn icon-right" href="/product/copper-earthing-electrode/">
<span class="btn-text">
								Read More							</span>
<span class="btn-icon">
<i class="fas fa-angle-double-right"></i> </span>
</a>
</div>
<span class="top-bordered"></span> </div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-7e5de2f e-con-full e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="7e5de2f" data-settings='{"animation":"fadeInUp","animation_delay":700}'>
<div class="elementor-element elementor-element-08bad38 elementor-widget elementor-widget-limestone-iconic-info-box" data-e-type="widget" data-element_type="widget" data-id="08bad38" data-widget_type="limestone-iconic-info-box.default">
<div class="elementor-widget-container">
<div class="limestone-iconic-info-box text-left icon-top">
<div class="box-icon">
<i class="flaticon flaticon-engineer-2"></i> </div>
<div class="box-content">
<h4 class="box-title">
<span class="title-text">Copper Bonded Earthing</span> </h4>
<p class="description">100% Copper Used For Long Life</p> <a class="read-more-btn icon-right" href="/product/copper-bonded-earthing/">
<span class="btn-text">
								Read More							</span>
<span class="btn-icon">
<i class="fas fa-angle-double-right"></i> </span>
</a>
</div>
<span class="top-bordered"></span> </div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-e166212 e-con-full e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="e166212" data-settings='{"animation":"fadeInUp","animation_delay":800}'>
<div class="elementor-element elementor-element-a3cca69 elementor-widget elementor-widget-limestone-iconic-info-box" data-e-type="widget" data-element_type="widget" data-id="a3cca69" data-widget_type="limestone-iconic-info-box.default">
<div class="elementor-widget-container">
<div class="limestone-iconic-info-box text-left icon-top">
<div class="box-icon">
<i class="flaticon flaticon-roof"></i> </div>
<div class="box-content">
<h4 class="box-title">
<span class="title-text">GI Earthing Electrode</span> </h4>
<p class="description">100% Galvanised Iron,for Long Life</p> <a class="read-more-btn icon-right" href="/product/gi-earthing-electrode/">
<span class="btn-text">
								Read More							</span>
<span class="btn-icon">
<i class="fas fa-angle-double-right"></i> </span>
</a>
</div>
<span class="top-bordered"></span> </div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-ee197c3 e-con-full e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="ee197c3" data-settings='{"animation":"fadeInUp","animation_delay":800}'>
<div class="elementor-element elementor-element-7c88faa elementor-widget elementor-widget-limestone-iconic-info-box" data-e-type="widget" data-element_type="widget" data-id="7c88faa" data-widget_type="limestone-iconic-info-box.default">
<div class="elementor-widget-container">
<div class="limestone-iconic-info-box text-left icon-top">
<div class="box-icon">
<i class="fas fa-window-restore"></i> </div>
<div class="box-content">
<h4 class="box-title">
<span class="title-text"> Earthing Testing System</span> </h4>
<p class="description">100% Result Is Satisfactory</p> <a class="read-more-btn icon-right" href="/product/earthing-testing-system/">
<span class="btn-text">
								Read More							</span>
<span class="btn-icon">
<i class="fas fa-angle-double-right"></i> </span>
</a>
</div>
<span class="top-bordered"></span> </div>
</div>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-a080096 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="a080096" data-settings='{"background_background":"classic"}'>
<div class="e-con-inner">
<div class="elementor-element elementor-element-8b06d72 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="8b06d72">
<div class="elementor-element elementor-element-6fd81af elementor-widget__width-initial elementor-invisible elementor-widget elementor-widget-limestone-section-title" data-e-type="widget" data-element_type="widget" data-id="6fd81af" data-settings='{"_animation":"fadeInLeft"}' data-widget_type="limestone-section-title.default">
<div class="elementor-widget-container">
<div class="limestone-section-title">
<div class="subtitle">
<span class="icon"><i class="fas fa-angle-double-right"></i></span>
<span class="subtitle-text">
					Get Consultation				</span>
</div>
<h3 class="title">
<span class="main-text">
					Call us for any Installtion. We are with you to service.				</span>
</h3>
</div>
</div>
</div>
<div class="elementor-element elementor-element-a3620a3 elementor-invisible elementor-widget elementor-widget-limestone-button" data-e-type="widget" data-element_type="widget" data-id="a3620a3" data-settings='{"_animation":"fadeInRight"}' data-widget_type="limestone-button.default">
<div class="elementor-widget-container">
<div class="limestone-button-wrapper">
<a class="limestone-button icon-right hover-left-right" href="/contact-us/">
<span class="button-text">
					Get Consultations        		</span>
<span class="button-icon">
<i class="fas fa-angle-double-right"></i> </span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-d1e9db7 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="d1e9db7">
<div class="e-con-inner">
<div class="elementor-element elementor-element-3132aa6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="3132aa6" data-settings='{"background_background":"classic"}'>
<div class="elementor-element elementor-element-bb15d61 elementor-widget-tablet__width-initial elementor-invisible elementor-widget elementor-widget-limestone-counter" data-e-type="widget" data-element_type="widget" data-id="bb15d61" data-settings='{"_animation":"fadeInUp","_animation_delay":300}' data-widget_type="limestone-counter.default">
<div class="elementor-widget-container">
<div class="limestone-counter-box text-left icon-top">
<div class="counter-icon">
<i class="flaticon flaticon-levels-1"></i> </div>
<div class="counter-inner">
<div class="counter-wrap">
<span class="elementor-counter-number" data-delimiter="," data-duration="3000" data-from-value="1" data-to-value="1035">1</span><span class="counter-suffix">+</span> </div>
<h6 class="counter-title">Project Complete</h6> </div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-d0c6a65 elementor-widget-tablet__width-initial elementor-invisible elementor-widget elementor-widget-limestone-counter" data-e-type="widget" data-element_type="widget" data-id="d0c6a65" data-settings='{"_animation":"fadeInUp","_animation_delay":400}' data-widget_type="limestone-counter.default">
<div class="elementor-widget-container">
<div class="limestone-counter-box text-left icon-top">
<div class="counter-icon">
<i class="flaticon flaticon-levels-1"></i> </div>
<div class="counter-inner">
<div class="counter-wrap">
<span class="elementor-counter-number" data-delimiter="," data-duration="3000" data-from-value="1" data-to-value="1124">1</span><span class="counter-suffix">+</span> </div>
<h6 class="counter-title">Cup Coffee</h6> </div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-0db6aa8 elementor-widget-tablet__width-initial elementor-invisible elementor-widget elementor-widget-limestone-counter" data-e-type="widget" data-element_type="widget" data-id="0db6aa8" data-settings='{"_animation":"fadeInUp","_animation_delay":500}' data-widget_type="limestone-counter.default">
<div class="elementor-widget-container">
<div class="limestone-counter-box text-left icon-top">
<div class="counter-icon">
<i class="flaticon flaticon-levels-1"></i> </div>
<div class="counter-inner">
<div class="counter-wrap">
<span class="elementor-counter-number" data-delimiter="," data-duration="3000" data-from-value="1" data-to-value="867">1</span><span class="counter-suffix">+</span> </div>
<h6 class="counter-title">Happy Client</h6> </div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-160fb62 elementor-widget-tablet__width-initial elementor-invisible elementor-widget elementor-widget-limestone-counter" data-e-type="widget" data-element_type="widget" data-id="160fb62" data-settings='{"_animation":"fadeInUp","_animation_delay":600}' data-widget_type="limestone-counter.default">
<div class="elementor-widget-container">
<div class="limestone-counter-box text-left icon-top">
<div class="counter-icon">
<i class="flaticon flaticon-levels-1"></i> </div>
<div class="counter-inner">
<div class="counter-wrap">
<span class="elementor-counter-number" data-delimiter="," data-duration="3000" data-from-value="1" data-to-value="538">1</span><span class="counter-suffix">+</span> </div>
<h6 class="counter-title">Developer Hand</h6> </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-9bf38db e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="9bf38db">
<div class="e-con-inner">
<div class="elementor-element elementor-element-9b1f6fd e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="9b1f6fd">
<div class="elementor-element elementor-element-f72d995 elementor-widget__width-initial elementor-widget elementor-widget-limestone-section-title" data-e-type="widget" data-element_type="widget" data-id="f72d995" data-widget_type="limestone-section-title.default">
<div class="elementor-widget-container">
<div class="limestone-section-title">
<h3 class="title">
<span class="main-text">
					Our Products 				</span>
</h3>
</div>
</div>
</div>
<div class="elementor-element elementor-element-713a16b elementor-invisible elementor-widget elementor-widget-limestone-portfolio" data-e-type="widget" data-element_type="widget" data-id="713a16b" data-settings='{"slides_per_view":"2","show_dots":"yes","slides_per_view_laptop":"2","slides_per_view_tablet_extra":"2","_animation":"fadeInUp","autoplay":"yes","carousel_direction":"horizontal","slides_per_view_tablet":2,"slides_per_view_mobile":1,"slides_to_scroll":1,"slides_to_scroll_laptop":1,"slides_to_scroll_tablet_extra":1,"slides_to_scroll_tablet":1,"slides_to_scroll_mobile":1,"loop":"yes","speed":500,"autoplay_speed":5000}' data-widget_type="limestone-portfolio.default">
<div class="elementor-widget-container">
<div class="limestone-portfolio-items limestone-carousel-wrapper design-three">
<div class="limestone-carousel-active">
<div class="limestone-carousel-item">
<div class="portfolio-item">
<div class="portfolio-thumbnail">
<img alt="" class="attachment-large size-large wp-post-image" decoding="async" height="497" src="/wp-content/uploads/2023/09/Hot-Dip-Galvanized.jpg" width="750"/> </div>
<div class="portfolio-content">
<div class="categories">
<a href="/portfolio-category/products/" rel="tag">Products</a> </div>
<h5 class="title">
<a href="/portfolio/hot-dip-galvanized/">
                        Hot Dip Galvanized                    </a>
</h5>
<a class="read-more" href="/portfolio/hot-dip-galvanized/">
					Read More<i class="fas fa-angle-double-right"></i> </a>
</div>
</div>
</div>
<div class="limestone-carousel-item">
<div class="portfolio-item">
<div class="portfolio-thumbnail">
<img alt="" class="attachment-large size-large wp-post-image" decoding="async" height="497" src="/wp-content/uploads/2023/09/solar-system.jpg" width="750"/> </div>
<div class="portfolio-content">
<div class="categories">
<a href="/portfolio-category/products/" rel="tag">Products</a> </div>
<h5 class="title">
<a href="/portfolio/solar-system/">
                        Solar System                    </a>
</h5>
<a class="read-more" href="/portfolio/solar-system/">
					Read More<i class="fas fa-angle-double-right"></i> </a>
</div>
</div>
</div>
<div class="limestone-carousel-item">
<div class="portfolio-item">
<div class="portfolio-thumbnail">
<img alt="" class="attachment-large size-large wp-post-image" decoding="async" height="497" loading="lazy" src="/wp-content/uploads/2023/09/ESE-Lightning-Arrestor.jpg" width="750"/> </div>
<div class="portfolio-content">
<div class="categories">
<a href="/portfolio-category/products/" rel="tag">Products</a> </div>
<h5 class="title">
<a href="/portfolio/ese-lightning-arrestor/">
                        Ese Lightning Arrestor                    </a>
</h5>
<a class="read-more" href="/portfolio/ese-lightning-arrestor/">
					Read More<i class="fas fa-angle-double-right"></i> </a>
</div>
</div>
</div>
</div>
<div class="limestone-carousel-dots sync-horizontal"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-966cfee e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="966cfee" data-settings='{"background_background":"classic"}'>
<div class="e-con-inner">
<div class="elementor-element elementor-element-90f074a e-con-full e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="90f074a" data-settings='{"animation":"fadeInLeft"}'>
<div class="elementor-element elementor-element-0cdf0e8 elementor-widget__width-initial elementor-widget elementor-widget-limestone-section-title" data-e-type="widget" data-element_type="widget" data-id="0cdf0e8" data-widget_type="limestone-section-title.default">
<div class="elementor-widget-container">
<div class="limestone-section-title">
<div class="subtitle">
<span class="icon"><i class="fas fa-angle-double-right"></i></span>
<span class="subtitle-text">
					Get In Touch				</span>
</div>
<h3 class="title">
<span class="main-text">
					General Enquiry				</span>
</h3>
</div>
</div>
</div>
<div class="elementor-element elementor-element-2f38267 elementor-widget elementor-widget-shortcode" data-e-type="widget" data-element_type="widget" data-id="2f38267" data-widget_type="shortcode.default">
<div class="elementor-widget-container">
<div class="elementor-shortcode"><style id="wpforms-css-vars-3278">
				#wpforms-3278 {
				
			}
			</style><div class="wpforms-container wpforms-container-full wpforms-render-modern" id="wpforms-3278"><form action="/" class="wpforms-validate wpforms-form wpforms-ajax-form" data-formid="3278" data-token="00cf5758765e608be0376f6d3a97f2a4" data-token-time="1784091963" enctype="multipart/form-data" id="wpforms-form-3278" method="post"><noscript class="wpforms-error-noscript">Please enable JavaScript in your browser to complete this form.</noscript><div id="wpforms-error-noscript" style="display: none;">Please enable JavaScript in your browser to complete this form.</div><div class="wpforms-field-container"><div class="wpforms-field wpforms-field-name" data-field-id="0" id="wpforms-3278-field_0-container"><label aria-hidden="false" class="wpforms-field-label wpforms-label-hide" for="wpforms-3278-field_0">Name <span aria-hidden="true" class="wpforms-required-label">*</span></label><input aria-errormessage="wpforms-3278-field_0-error" class="wpforms-field-large wpforms-field-required" id="wpforms-3278-field_0" name="wpforms[fields][0]" placeholder="Name" required="" type="text"/></div><div class="wpforms-field wpforms-field-email wpforms-one-half wpforms-first" data-field-id="1" id="wpforms-3278-field_1-container"><label aria-hidden="false" class="wpforms-field-label wpforms-label-hide" for="wpforms-3278-field_1">Email <span aria-hidden="true" class="wpforms-required-label">*</span></label><input aria-errormessage="wpforms-3278-field_1-error" class="wpforms-field-large wpforms-field-required" id="wpforms-3278-field_1" name="wpforms[fields][1]" placeholder="Email" required="" spellcheck="false" type="email"/></div><div class="wpforms-field wpforms-field-text wpforms-one-half" data-field-id="3" id="wpforms-3278-field_3-container"><label aria-hidden="false" class="wpforms-field-label wpforms-label-hide" for="wpforms-3278-field_3">Phone No</label><input aria-errormessage="wpforms-3278-field_3-error" class="wpforms-field-large" id="wpforms-3278-field_3" name="wpforms[fields][3]" placeholder="Phone No" type="text"/></div><div class="wpforms-field wpforms-field-textarea" data-field-id="2" id="wpforms-3278-field_2-container"><label aria-hidden="false" class="wpforms-field-label wpforms-label-hide" for="wpforms-3278-field_2">Comment or Message</label><textarea aria-errormessage="wpforms-3278-field_2-error" class="wpforms-field-large" id="wpforms-3278-field_2" name="wpforms[fields][2]" placeholder="Comment or Message"></textarea></div></div><!-- .wpforms-field-container --><div class="wpforms-submit-container"><input name="wpforms[id]" type="hidden" value="3278"/><input name="page_title" type="hidden" value="Home One"/><input name="page_url" type="hidden" value="/"/><input name="url_referer" type="hidden" value=""/><input name="page_id" type="hidden" value="73"/><input name="wpforms[post_id]" type="hidden" value="73"/><button aria-live="assertive" class="wpforms-submit" data-alt-text="Sending..." data-submit-text="Submit" id="wpforms-submit-3278" name="wpforms[submit]" type="submit" value="wpforms-submit">Submit</button><img alt="Loading" class="wpforms-submit-spinner" decoding="async" height="26" loading="lazy" src="/wp-content/plugins/wpforms-lite/assets/images/submit-spin.svg" style="display: none;" width="26"/></div></form></div> <!-- .wpforms-container --> </div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-48d94a9 e-con-full e-flex elementor-invisible e-con e-child" data-e-type="container" data-element_type="container" data-id="48d94a9" data-settings='{"animation":"fadeInRight"}'>
<div class="elementor-element elementor-element-8d41a8d e-transform elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="8d41a8d" data-settings='{"_transform_flipX_effect":"transform"}' data-widget_type="image.default">
<div class="elementor-widget-container">
<img alt="" class="attachment-full size-full wp-image-586" decoding="async" height="534" loading="lazy" src="/wp-content/uploads/2023/09/faq-img.jpg" width="500"/> </div>
</div>
<div class="elementor-element elementor-element-8d02400 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="8d02400" data-settings='{"background_background":"classic","position":"absolute"}'>
<div class="elementor-element elementor-element-71204bf elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="71204bf" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h4 class="elementor-heading-title elementor-size-default">HPS Power &amp; Earthing Solutions</h4> </div>
</div>
<div class="elementor-element elementor-element-9f6ce2c elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="9f6ce2c" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h4 class="elementor-heading-title elementor-size-default">We Have 10 Years
Of Experience</h4> </div>
</div>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-0f1d97b e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="0f1d97b">
<div class="e-con-inner">
<div class="elementor-element elementor-element-f1e9f4c e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="f1e9f4c">
<div class="elementor-element elementor-element-63fd6b3 elementor-widget__width-initial elementor-invisible elementor-widget elementor-widget-limestone-section-title" data-e-type="widget" data-element_type="widget" data-id="63fd6b3" data-settings='{"_animation":"fadeInUp"}' data-widget_type="limestone-section-title.default">
<div class="elementor-widget-container">
<div class="limestone-section-title">
<div class="subtitle">
<span class="icon"><i class="fas fa-angle-double-right"></i></span>
<span class="subtitle-text">
					Testimonials				</span>
</div>
<h3 class="title">
<span class="main-text">
					What People Say About Us				</span>
</h3>
</div>
</div>
</div>
<div class="elementor-element elementor-element-a490a06 elementor-widget__width-inherit elementor-invisible elementor-widget elementor-widget-limestone-testimonial-carousel" data-e-type="widget" data-element_type="widget" data-id="a490a06" data-settings='{"slides_per_view":"2","slides_per_view_laptop":"3","slides_per_view_tablet_extra":"2","slides_per_view_tablet":"2","show_dots":"yes","autoplay":"yes","_animation":"fadeInUp","carousel_direction":"horizontal","slides_per_view_mobile":1,"slides_to_scroll":1,"slides_to_scroll_laptop":1,"slides_to_scroll_tablet_extra":1,"slides_to_scroll_tablet":1,"slides_to_scroll_mobile":1,"loop":"yes","speed":500,"autoplay_speed":5000}' data-widget_type="limestone-testimonial-carousel.default">
<div class="elementor-widget-container">
<div class="limestone-testimonial-carousel limestone-carousel-wrapper design-three">
<div class="limestone-carousel-active">
<div class="limestone-carousel-item">
<div class="testimonial-item">
<div class="testimonial-header">
<div class="reviewer-image">
<img alt="Mukesh" decoding="async" src="/wp-content/uploads/2023/09/user-thumb-8.jpg"/>
</div>
<div class="tagline-rating">
<h5 class="tagline">Quality Services</h5><div class="star-rating"><i class="star-full"></i><i class="star-full"></i><i class="star-full"></i><i class="star-full"></i><i class="star-full"></i></div> </div>
</div>
<div class="testimonial-content">
<p class="description">This Company staff are so behaved and nature of work in very professional .  I recommending to all for the reason of Time Consuming work and System of this organization. Best of luck for future.</p> <div class="reviewer-info">
<h5 class="reviewer-name">Mukesh</h5> </div>
</div>
</div>
</div>
<div class="limestone-carousel-item">
<div class="testimonial-item">
<div class="testimonial-header">
<div class="reviewer-image">
<img alt="Suresh" decoding="async" src="/wp-content/uploads/2023/09/user-thumb-9.jpg"/>
</div>
<div class="tagline-rating">
<h5 class="tagline">Quality Services</h5><div class="star-rating"><i class="star-full"></i><i class="star-full"></i><i class="star-full"></i><i class="star-full"></i><i class="star-5"></i></div> </div>
</div>
<div class="testimonial-content">
<p class="description">Hi, i used the product/services of this company and i found delivery on time . Really very enthusiastic people and honest also. I recommending to all for the same company .</p> <div class="reviewer-info">
<h5 class="reviewer-name">Suresh</h5> </div>
</div>
</div>
</div>
</div>
<div class="limestone-carousel-dots sync-horizontal"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div> </div>
</div>
</main>
<a class="back-to-top show-on-mobile" href="tel:+919136407707" id="backToTop">
<i class="far fa-angle-double-up"></i>
</a>
<footer class="site-footer">
<style>.elementor-371 .elementor-element.elementor-element-784e20f{--display:flex;--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--flex-wrap-mobile:wrap;--gap:80px 0px;--row-gap:80px;--column-gap:0px;--overlay-opacity:0.96;--padding-top:80px;--padding-bottom:80px;--padding-left:0px;--padding-right:0px;}.elementor-371 .elementor-element.elementor-element-784e20f:not(.elementor-motion-effects-element-type-background), .elementor-371 .elementor-element.elementor-element-784e20f > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-image:url("wp-content/uploads/2023/08/01.jpg");background-position:center center;}.elementor-371 .elementor-element.elementor-element-784e20f::before, .elementor-371 .elementor-element.elementor-element-784e20f > .elementor-background-video-container::before, .elementor-371 .elementor-element.elementor-element-784e20f > .e-con-inner > .elementor-background-video-container::before, .elementor-371 .elementor-element.elementor-element-784e20f > .elementor-background-slideshow::before, .elementor-371 .elementor-element.elementor-element-784e20f > .e-con-inner > .elementor-background-slideshow::before, .elementor-371 .elementor-element.elementor-element-784e20f > .elementor-motion-effects-container > .elementor-motion-effects-layer::before{background-color:#0578DB;--background-overlay:'';}.elementor-371 .elementor-element.elementor-element-eb526f9{--display:flex;--flex-direction:row;--container-widget-width:initial;--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--flex-wrap-mobile:wrap;--gap:0px 0px;--row-gap:0px;--column-gap:0px;--flex-wrap:wrap;}.elementor-371 .elementor-element.elementor-element-8e32e07{--display:flex;--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--flex-wrap-mobile:wrap;--padding-top:0px;--padding-bottom:0px;--padding-left:15px;--padding-right:15px;}.elementor-371 .elementor-element.elementor-element-d80ba4d{text-align:start;}.elementor-371 .elementor-element.elementor-element-d80ba4d img{max-width:205px;}.elementor-371 .elementor-element.elementor-element-2799f19{--display:flex;--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--flex-wrap-mobile:wrap;--padding-top:0px;--padding-bottom:0px;--padding-left:65px;--padding-right:45px;}.elementor-371 .elementor-element.elementor-element-da82208 > .elementor-widget-container{margin:0px 0px 35px 0px;}.elementor-371 .elementor-element.elementor-element-da82208 .elementor-heading-title{font-family:"Poppins", Sans-serif;font-size:22px;font-weight:600;letter-spacing:1px;color:var( --e-global-color-white_neutral );}.elementor-371 .elementor-element.elementor-element-36b8bda .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child){padding-block-end:calc(12px/2);}.elementor-371 .elementor-element.elementor-element-36b8bda .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child){margin-block-start:calc(12px/2);}.elementor-371 .elementor-element.elementor-element-36b8bda .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item{margin-inline:calc(12px/2);}.elementor-371 .elementor-element.elementor-element-36b8bda .elementor-icon-list-items.elementor-inline-items{margin-inline:calc(-12px/2);}.elementor-371 .elementor-element.elementor-element-36b8bda .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{inset-inline-end:calc(-12px/2);}.elementor-371 .elementor-element.elementor-element-36b8bda .elementor-icon-list-icon i{color:var( --e-global-color-white_neutral );transition:color 0.3s;}.elementor-371 .elementor-element.elementor-element-36b8bda .elementor-icon-list-icon svg{fill:var( --e-global-color-white_neutral );transition:fill 0.3s;}.elementor-371 .elementor-element.elementor-element-36b8bda{--e-icon-list-icon-size:14px;--icon-vertical-offset:0px;}.elementor-371 .elementor-element.elementor-element-36b8bda .elementor-icon-list-item > .elementor-icon-list-text, .elementor-371 .elementor-element.elementor-element-36b8bda .elementor-icon-list-item > a{font-family:"Poppins", Sans-serif;}.elementor-371 .elementor-element.elementor-element-36b8bda .elementor-icon-list-text{color:#FFFFFF;transition:color 0.3s;}.elementor-371 .elementor-element.elementor-element-36b8bda .elementor-icon-list-item:hover .elementor-icon-list-text{color:var( --e-global-color-white_neutral );}.elementor-371 .elementor-element.elementor-element-58151ba{--display:flex;--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--flex-wrap-mobile:wrap;--padding-top:0px;--padding-bottom:0px;--padding-left:30px;--padding-right:20px;}.elementor-371 .elementor-element.elementor-element-5d346e9 > .elementor-widget-container{margin:0px 0px 35px 0px;}.elementor-371 .elementor-element.elementor-element-5d346e9 .elementor-heading-title{font-family:"Poppins", Sans-serif;font-size:22px;font-weight:600;letter-spacing:1px;color:var( --e-global-color-white_neutral );}.elementor-371 .elementor-element.elementor-element-1644167 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child){padding-block-end:calc(12px/2);}.elementor-371 .elementor-element.elementor-element-1644167 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child){margin-block-start:calc(12px/2);}.elementor-371 .elementor-element.elementor-element-1644167 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item{margin-inline:calc(12px/2);}.elementor-371 .elementor-element.elementor-element-1644167 .elementor-icon-list-items.elementor-inline-items{margin-inline:calc(-12px/2);}.elementor-371 .elementor-element.elementor-element-1644167 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{inset-inline-end:calc(-12px/2);}.elementor-371 .elementor-element.elementor-element-1644167 .elementor-icon-list-icon i{color:var( --e-global-color-white_neutral );transition:color 0.3s;}.elementor-371 .elementor-element.elementor-element-1644167 .elementor-icon-list-icon svg{fill:var( --e-global-color-white_neutral );transition:fill 0.3s;}.elementor-371 .elementor-element.elementor-element-1644167{--e-icon-list-icon-size:14px;--icon-vertical-offset:0px;}.elementor-371 .elementor-element.elementor-element-1644167 .elementor-icon-list-item > .elementor-icon-list-text, .elementor-371 .elementor-element.elementor-element-1644167 .elementor-icon-list-item > a{font-family:"Poppins", Sans-serif;}.elementor-371 .elementor-element.elementor-element-1644167 .elementor-icon-list-text{color:#FFFFFF;transition:color 0.3s;}.elementor-371 .elementor-element.elementor-element-1644167 .elementor-icon-list-item:hover .elementor-icon-list-text{color:var( --e-global-color-white_neutral );}.elementor-371 .elementor-element.elementor-element-4d927bf{--display:flex;--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--flex-wrap-mobile:wrap;--padding-top:0px;--padding-bottom:0px;--padding-left:45px;--padding-right:15px;}.elementor-371 .elementor-element.elementor-element-7153c08 > .elementor-widget-container{margin:0px 0px 35px 0px;}.elementor-371 .elementor-element.elementor-element-7153c08 .elementor-heading-title{font-family:"Poppins", Sans-serif;font-size:22px;font-weight:600;letter-spacing:1px;color:var( --e-global-color-white_neutral );}.elementor-371 .elementor-element.elementor-element-fc9114e > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-371 .elementor-element.elementor-element-fc9114e .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child){padding-block-end:calc(15px/2);}.elementor-371 .elementor-element.elementor-element-fc9114e .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child){margin-block-start:calc(15px/2);}.elementor-371 .elementor-element.elementor-element-fc9114e .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item{margin-inline:calc(15px/2);}.elementor-371 .elementor-element.elementor-element-fc9114e .elementor-icon-list-items.elementor-inline-items{margin-inline:calc(-15px/2);}.elementor-371 .elementor-element.elementor-element-fc9114e .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{inset-inline-end:calc(-15px/2);}.elementor-371 .elementor-element.elementor-element-fc9114e .elementor-icon-list-icon i{color:#FDFEFF;transition:color 0.3s;}.elementor-371 .elementor-element.elementor-element-fc9114e .elementor-icon-list-icon svg{fill:#FDFEFF;transition:fill 0.3s;}.elementor-371 .elementor-element.elementor-element-fc9114e{--e-icon-list-icon-size:20px;--icon-vertical-offset:0px;}.elementor-371 .elementor-element.elementor-element-fc9114e .elementor-icon-list-icon{padding-inline-end:5px;}.elementor-371 .elementor-element.elementor-element-fc9114e .elementor-icon-list-item > .elementor-icon-list-text, .elementor-371 .elementor-element.elementor-element-fc9114e .elementor-icon-list-item > a{font-family:"Poppins", Sans-serif;font-size:16px;font-weight:400;}.elementor-371 .elementor-element.elementor-element-fc9114e .elementor-icon-list-text{color:#FFFFFF;transition:color 0.3s;}.elementor-371 .elementor-element.elementor-element-37544f2{--display:flex;--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--flex-wrap-mobile:wrap;border-style:solid;--border-style:solid;border-width:1px 0px 0px 0px;--border-top-width:1px;--border-right-width:0px;--border-bottom-width:0px;--border-left-width:0px;border-color:#EEEEEE;--border-color:#EEEEEE;--padding-top:10px;--padding-bottom:10px;--padding-left:0px;--padding-right:0px;}.elementor-371 .elementor-element.elementor-element-37544f2:not(.elementor-motion-effects-element-type-background), .elementor-371 .elementor-element.elementor-element-37544f2 > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:#0575D9;}.elementor-371 .elementor-element.elementor-element-8f368e2{--display:flex;--flex-direction:row;--container-widget-width:initial;--container-widget-height:100%;--container-widget-flex-grow:1;--container-widget-align-self:stretch;--flex-wrap-mobile:wrap;--justify-content:space-between;--gap:15px 30px;--row-gap:15px;--column-gap:30px;--padding-top:0px;--padding-bottom:0px;--padding-left:15px;--padding-right:15px;}.elementor-371 .elementor-element.elementor-element-8f368e2.e-con{--flex-grow:0;--flex-shrink:0;}.elementor-371 .elementor-element.elementor-element-634119b{font-family:"Poppins", Sans-serif;color:#FFFFFF;}.elementor-371 .elementor-element.elementor-element-1b5911d{--grid-template-columns:repeat(0, auto);--icon-size:16px;--grid-column-gap:25px;--grid-row-gap:0px;}.elementor-371 .elementor-element.elementor-element-1b5911d .elementor-widget-container{text-align:right;}.elementor-371 .elementor-element.elementor-element-1b5911d > .elementor-widget-container{margin:0px 0px 0px 50px;padding:0px 0px 0px 50px;border-style:solid;border-width:0px 0px 0px 2px;border-color:#FFFFFF33;}.elementor-371 .elementor-element.elementor-element-1b5911d .elementor-social-icon{background-color:#FFFFFF00;--icon-padding:0em;}.elementor-371 .elementor-element.elementor-element-1b5911d .elementor-social-icon i{color:#FFFFFF;}.elementor-371 .elementor-element.elementor-element-1b5911d .elementor-social-icon svg{fill:#FFFFFF;}.elementor-371 .elementor-element.elementor-element-1b5911d .elementor-social-icon:hover i{color:var( --e-global-color-white_neutral );}.elementor-371 .elementor-element.elementor-element-1b5911d .elementor-social-icon:hover svg{fill:var( --e-global-color-white_neutral );}@media(min-width:768px){.elementor-371 .elementor-element.elementor-element-8e32e07{--width:26%;}.elementor-371 .elementor-element.elementor-element-2799f19{--width:22%;}.elementor-371 .elementor-element.elementor-element-58151ba{--width:27%;}.elementor-371 .elementor-element.elementor-element-4d927bf{--width:25%;}.elementor-371 .elementor-element.elementor-element-8f368e2{--width:95%;}}@media(max-width:1200px) and (min-width:768px){.elementor-371 .elementor-element.elementor-element-8f368e2{--width:973.838px;}}@media(max-width:1024px) and (min-width:768px){.elementor-371 .elementor-element.elementor-element-8e32e07{--width:45%;}.elementor-371 .elementor-element.elementor-element-2799f19{--width:45%;}.elementor-371 .elementor-element.elementor-element-58151ba{--width:45%;}.elementor-371 .elementor-element.elementor-element-4d927bf{--width:45%;}}@media(max-width:1366px){.elementor-371 .elementor-element.elementor-element-d80ba4d img{max-width:205px;}.elementor-371 .elementor-element.elementor-element-4d927bf{--padding-top:0px;--padding-bottom:0px;--padding-left:15px;--padding-right:15px;}.elementor-371 .elementor-element.elementor-element-1b5911d > .elementor-widget-container{margin:0px 0px 0px 30px;padding:0px 0px 0px 30px;}}@media(max-width:1200px){.elementor-371 .elementor-element.elementor-element-2799f19{--padding-top:0px;--padding-bottom:0px;--padding-left:30px;--padding-right:15px;}}@media(max-width:1024px){.elementor-371 .elementor-element.elementor-element-eb526f9{--justify-content:center;}.elementor-371 .elementor-element.elementor-element-d80ba4d{text-align:center;}.elementor-371 .elementor-element.elementor-element-2799f19{--padding-top:0px;--padding-bottom:0px;--padding-left:15px;--padding-right:15px;}.elementor-371 .elementor-element.elementor-element-58151ba{--padding-top:50px;--padding-bottom:0px;--padding-left:15px;--padding-right:15px;}.elementor-371 .elementor-element.elementor-element-4d927bf{--padding-top:50px;--padding-bottom:0px;--padding-left:15px;--padding-right:15px;}.elementor-371 .elementor-element.elementor-element-37544f2{--flex-direction:column;--container-widget-width:100%;--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--flex-wrap-mobile:wrap;--gap:0px 0px;--row-gap:0px;--column-gap:0px;}.elementor-371 .elementor-element.elementor-element-8f368e2{--flex-direction:column-reverse;--container-widget-width:calc( ( 1 - var( --container-widget-flex-grow ) ) * 100% );--container-widget-height:initial;--container-widget-flex-grow:0;--container-widget-align-self:initial;--flex-wrap-mobile:wrap;--align-items:center;}.elementor-371 .elementor-element.elementor-element-634119b{text-align:center;}}@media(max-width:767px){.elementor-371 .elementor-element.elementor-element-2799f19{--padding-top:50px;--padding-bottom:0px;--padding-left:15px;--padding-right:15px;}.elementor-371 .elementor-element.elementor-element-fc9114e .elementor-icon-list-item > .elementor-icon-list-text, .elementor-371 .elementor-element.elementor-element-fc9114e .elementor-icon-list-item > a{font-size:16px;}}</style> <div class="elementor elementor-371" data-elementor-id="371" data-elementor-type="wp-post">
<div class="elementor-element elementor-element-784e20f e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="784e20f" data-settings='{"background_background":"classic"}'>
<div class="e-con-inner">
<div class="elementor-element elementor-element-eb526f9 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="eb526f9">
<div class="elementor-element elementor-element-8e32e07 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="8e32e07">
<div class="elementor-element elementor-element-d80ba4d elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="d80ba4d" data-widget_type="image.default">
<div class="elementor-widget-container">
<img alt="" class="attachment-medium size-medium wp-image-3257" height="200" src="/wp-content/uploads/2023/08/HPS-White-logo.png" width="200"/> </div>
</div>
</div>
<div class="elementor-element elementor-element-2799f19 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="2799f19">
<div class="elementor-element elementor-element-da82208 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="da82208" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h4 class="elementor-heading-title elementor-size-default">Quick Link</h4> </div>
</div>
<div class="elementor-element elementor-element-36b8bda regular-font-icon elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-e-type="widget" data-element_type="widget" data-id="36b8bda" data-widget_type="icon-list.default">
<div class="elementor-widget-container">
<ul class="elementor-icon-list-items">
<li class="elementor-icon-list-item">
<a href="/">
<span class="elementor-icon-list-icon">
<i aria-hidden="true" class="fas fa-angle-double-right"></i> </span>
<span class="elementor-icon-list-text">Home</span>
</a>
</li>
<li class="elementor-icon-list-item">
<a href="/about-us/">
<span class="elementor-icon-list-icon">
<i aria-hidden="true" class="fas fa-angle-double-right"></i> </span>
<span class="elementor-icon-list-text">About Us</span>
</a>
</li>
<li class="elementor-icon-list-item">
<a href="/contact-us/">
<span class="elementor-icon-list-icon">
<i aria-hidden="true" class="fas fa-angle-double-right"></i> </span>
<span class="elementor-icon-list-text">Contact Us</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="elementor-element elementor-element-58151ba e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="58151ba">
<div class="elementor-element elementor-element-5d346e9 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="5d346e9" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h4 class="elementor-heading-title elementor-size-default">Our Products </h4> </div>
</div>
<div class="elementor-element elementor-element-1644167 regular-font-icon elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-e-type="widget" data-element_type="widget" data-id="1644167" data-widget_type="icon-list.default">
<div class="elementor-widget-container">
<ul class="elementor-icon-list-items">
<li class="elementor-icon-list-item">
<a href="/earthing/">
<span class="elementor-icon-list-icon">
<i aria-hidden="true" class="fas fa-angle-double-right"></i> </span>
<span class="elementor-icon-list-text">Earthing</span>
</a>
</li>
<li class="elementor-icon-list-item">
<a href="/portfolio/solar-system/">
<span class="elementor-icon-list-icon">
<i aria-hidden="true" class="fas fa-angle-double-right"></i> </span>
<span class="elementor-icon-list-text">Solar System</span>
</a>
</li>
<li class="elementor-icon-list-item">
<a href="/portfolio/hot-dip-galvanized/">
<span class="elementor-icon-list-icon">
<i aria-hidden="true" class="fas fa-angle-double-right"></i> </span>
<span class="elementor-icon-list-text">Hot Dip Galvanized</span>
</a>
</li>
<li class="elementor-icon-list-item">
<a href="/portfolio/ese-lightning-arrestor/">
<span class="elementor-icon-list-icon">
<i aria-hidden="true" class="fas fa-angle-double-right"></i> </span>
<span class="elementor-icon-list-text">Ese Lightning Arrestor</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="elementor-element elementor-element-4d927bf e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="4d927bf">
<div class="elementor-element elementor-element-7153c08 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="7153c08" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h4 class="elementor-heading-title elementor-size-default">Contact Info </h4> </div>
</div>
<div class="elementor-element elementor-element-fc9114e regular-font-icon elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-e-type="widget" data-element_type="widget" data-id="fc9114e" data-widget_type="icon-list.default">
<div class="elementor-widget-container">
<ul class="elementor-icon-list-items">
<li class="elementor-icon-list-item">
<a href="#"> <span class="elementor-icon-list-icon"> <i aria-hidden="true" class="fas fa-map-marker-alt"></i> </span>
<span class="elementor-icon-list-text">C-270, Sector 63, Noida (u.p) India</span>
</a>
</li>
<li class="elementor-icon-list-item">
<a href="mailto:sales.hpspower@gmail.com">
<span class="elementor-icon-list-icon">
<i aria-hidden="true" class="fas fa-envelope-open"></i> </span>
<span class="elementor-icon-list-text">sales.hpspower@gmail.com</span>
</a>
</li>
<li class="elementor-icon-list-item">
<a href="tel:+000%20(123)%20456%2088">
<span class="elementor-icon-list-icon">
<i aria-hidden="true" class="fas fa-phone"></i> </span>
<span class="elementor-icon-list-text">+91-9136407707</span>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-37544f2 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="37544f2" data-settings='{"background_background":"classic"}'>
<div class="e-con-inner">
<div class="elementor-element elementor-element-8f368e2 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="8f368e2">
<div class="elementor-element elementor-element-634119b elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="634119b" data-widget_type="text-editor.default">
<div class="elementor-widget-container">
									© 2024 HPS Power &amp; Earthing Solutions. All Rights Reserved. Designed By <a href="https://sprintdigitech.com/" rel="noopener" style="color:#fff;" target="_blank">Sprint Digitech.</a> </div>
</div>
<div class="elementor-element elementor-element-1b5911d e-grid-align-right elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons" data-e-type="widget" data-element_type="widget" data-id="1b5911d" data-widget_type="social-icons.default">
<div class="elementor-widget-container">
<div class="elementor-social-icons-wrapper elementor-grid" role="list">
<span class="elementor-grid-item" role="listitem">
<a class="elementor-icon elementor-social-icon elementor-social-icon-facebook-f elementor-repeater-item-7363656" href="javascript:void(0);" target="_blank">
<span class="elementor-screen-only">Facebook-f</span>
<i aria-hidden="true" class="fab fa-facebook-f"></i> </a>
</span>
<span class="elementor-grid-item" role="listitem">
<a class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-e6d97f1" href="javascript:void(0);" target="_blank">
<span class="elementor-screen-only">Twitter</span>
<i aria-hidden="true" class="fab fa-twitter"></i> </a>
</span>
<span class="elementor-grid-item" role="listitem">
<a class="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-4213411" href="javascript:void(0);" target="_blank">
<span class="elementor-screen-only">Linkedin</span>
<i aria-hidden="true" class="fab fa-linkedin"></i> </a>
</span>
<span class="elementor-grid-item" role="listitem">
<a class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-5252b86" href="javascript:void(0);" target="_blank">
<span class="elementor-screen-only">Instagram</span>
<i aria-hidden="true" class="fab fa-instagram"></i> </a>
</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</footer>
</div>
<script type="speculationrules">
{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":["/wp-*.php","/wp-admin/*","/wp-content/uploads/*","/wp-content/*","/wp-content/plugins/*","/wp-content/themes/limestone/*","/*\\\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\\"nofollow\\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}
</script>
<style>
			:root {
				-webkit-user-select: none;
				-webkit-touch-callout: none;
				-ms-user-select: none;
				-moz-user-select: none;
				user-select: none;
			}
		</style>
<script type="text/javascript">
			/*<![CDATA[*/
			document.oncontextmenu = function(event) {
				if (event.target.tagName != 'INPUT' && event.target.tagName != 'TEXTAREA') {
					event.preventDefault();
				}
			};
			document.ondragstart = function() {
				if (event.target.tagName != 'INPUT' && event.target.tagName != 'TEXTAREA') {
					event.preventDefault();
				}
			};
			/*]]>*/
		</script>
<script>
				const lazyloadRunObserver = () => {
					const lazyloadBackgrounds = document.querySelectorAll( \`.e-con.e-parent:not(.e-lazyloaded)\` );
					const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
						entries.forEach( ( entry ) => {
							if ( entry.isIntersecting ) {
								let lazyloadBackground = entry.target;
								if( lazyloadBackground ) {
									lazyloadBackground.classList.add( 'e-lazyloaded' );
								}
								lazyloadBackgroundObserver.unobserve( entry.target );
							}
						});
					}, { rootMargin: '200px 0px 200px 0px' } );
					lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
						lazyloadBackgroundObserver.observe( lazyloadBackground );
					} );
				};
				const events = [
					'DOMContentLoaded',
					'elementor/lazyload/observe',
				];
				events.forEach( ( event ) => {
					document.addEventListener( event, lazyloadRunObserver );
				} );
			</script>
<script>
		(function () {
			var c = document.body.className;
			c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
			document.body.className = c;
		})();
	</script>
<link href="wp-content/plugins/woocommerce/assets/client/blocks/wc-blocks.css?ver=wc-10.5.3" id="wc-blocks-style-css" media="all" rel="stylesheet"/>
<link href="wp-content/uploads/elementor/css/post-441.css?ver=1773261211" id="elementor-post-441-css" media="all" rel="stylesheet"/>
<link href="wp-content/plugins/elementor/assets/lib/font-awesome/css/regular.min.css?ver=5.15.3" id="elementor-icons-fa-regular-css" media="all" rel="stylesheet"/>
<link href="wp-content/uploads/elementor/css/custom-widget-icon-list.min.css?ver=1773258517" id="widget-icon-list-css" media="all" rel="stylesheet"/>
<link href="wp-content/plugins/elementor/assets/css/widget-social-icons.min.css?ver=3.35.5" id="widget-social-icons-css" media="all" rel="stylesheet"/>
<link href="wp-content/uploads/elementor/css/custom-apple-webkit.min.css?ver=1773258517" id="e-apple-webkit-css" media="all" rel="stylesheet"/>
<link href="wp-content/uploads/elementor/css/post-371.css?ver=1773258517" id="elementor-post-371-css" media="all" rel="stylesheet"/>
<script id="remove-weak-pw-js" src="/wp-content/plugins/all-in-one-wp-security-and-firewall/js/remove-weak-pw.js?ver=5.4.6"></script>
<script id="cute-alert-js" src="/wp-content/plugins/metform/public/assets/lib/cute-alert/cute-alert.js?ver=4.1.2"></script>
<script id="limestone-theme-js-extra">
var limestoneLocalize = {"ajax_url":"/wp-admin/admin-ajax.php"};
//# sourceURL=limestone-theme-js-extra
</script>
<script id="limestone-theme-js" src="/wp-content/themes/limestone/assets/js/theme.min.js?ver=1.0.2"></script>
<script id="sourcebuster-js-js" src="/wp-content/plugins/woocommerce/assets/js/sourcebuster/sourcebuster.min.js?ver=10.5.3"></script>
<script id="wc-order-attribution-js-extra">
var wc_order_attribution = {"params":{"lifetime":1.0e-5,"session":30,"base64":false,"ajaxurl":"/wp-admin/admin-ajax.php","prefix":"wc_order_attribution_","allowTracking":true},"fields":{"source_type":"current.typ","referrer":"current_add.rf","utm_campaign":"current.cmp","utm_source":"current.src","utm_medium":"current.mdm","utm_content":"current.cnt","utm_id":"current.id","utm_term":"current.trm","utm_source_platform":"current.plt","utm_creative_format":"current.fmt","utm_marketing_tactic":"current.tct","session_entry":"current_add.ep","session_start_time":"current_add.fd","session_pages":"session.pgs","session_count":"udata.vst","user_agent":"udata.uag"}};
//# sourceURL=wc-order-attribution-js-extra
</script>
<script id="wc-order-attribution-js" src="/wp-content/plugins/woocommerce/assets/js/frontend/order-attribution.min.js?ver=10.5.3"></script>
<script id="slick-js" src="/wp-content/themes/limestone/assets/vendor/slick/slick.min.js?ver=1.8.1"></script>
<script id="elementor-webpack-runtime-js" src="/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.35.5"></script>
<script id="elementor-frontend-modules-js" src="/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.35.5"></script>
<script id="jquery-ui-core-js" src="wp-includes/js/jquery/ui/core.min.js?ver=1.13.3"></script>
<script id="elementor-frontend-js-before">
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":true},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":true},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":true},"version":"3.35.5","is_static":false,"experimentalFeatures":{"additional_custom_breakpoints":true,"container":true,"nested-elements":true,"home_screen":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"cloud-library":true,"e_opt_in_v4_page":true,"e_components":true,"e_interactions":true,"e_editor_one":true,"import-export-customization":true},"urls":{"assets":"https:\\/\\/hpspower.in\\/wp-content\\/plugins\\/elementor\\/assets\\/","ajaxurl":"https:\\/\\/hpspower.in\\/wp-admin\\/admin-ajax.php","uploadUrl":"https:\\/\\/hpspower.in\\/wp-content\\/uploads"},"nonces":{"floatingButtonsClickTracking":"a164c870a7"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet","viewport_tablet_extra","viewport_laptop"],"lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":73,"title":"Earthing","excerpt":"","featuredImage":false}};
//# sourceURL=elementor-frontend-js-before
</script>
<script id="elementor-frontend-js" src="/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.35.5"></script>
<script id="jquery-numerator-js" src="/wp-content/plugins/elementor/assets/lib/jquery-numerator/jquery-numerator.min.js?ver=0.2.1"></script>
<script id="wpforms-validation-js" src="/wp-content/plugins/wpforms-lite/assets/lib/jquery.validate.min.js?ver=1.21.0"></script>
<script id="wpforms-mailcheck-js" src="/wp-content/plugins/wpforms-lite/assets/lib/mailcheck.min.js?ver=1.1.2"></script>
<script id="wpforms-punycode-js" src="/wp-content/plugins/wpforms-lite/assets/lib/punycode.min.js?ver=1.0.0"></script>
<script id="wpforms-generic-utils-js" src="/wp-content/plugins/wpforms-lite/assets/js/share/utils.min.js?ver=1.9.9.2"></script>
<script id="wpforms-js" src="/wp-content/plugins/wpforms-lite/assets/js/frontend/wpforms.min.js?ver=1.9.9.2"></script>
<script id="wpforms-modern-js" src="/wp-content/plugins/wpforms-lite/assets/js/frontend/wpforms-modern.min.js?ver=1.9.9.2"></script>
<script id="wpforms-address-field-js" src="/wp-content/plugins/wpforms-lite/assets/js/frontend/fields/address.min.js?ver=1.9.9.2"></script>
<script id="wp-emoji-settings" type="application/json">
{"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"/wp-includes/js/wp-emoji-release.min.js?ver=ed42811ec089b5df346bd084fe67e77f"}}
</script>
<script type="module">
/*! This file is auto-generated */
const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window._wpemojiSettings=a,"wpEmojiSettingsSupports"),s=["flag","emoji"];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a[t])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data[e])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\\ud83c\\udff3\\ufe0f\\u200d\\u26a7\\ufe0f","\\ud83c\\udff3\\ufe0f\\u200b\\u26a7\\ufe0f")?!1:!n(e,"\\ud83c\\udde8\\ud83c\\uddf6","\\ud83c\\udde8\\u200b\\ud83c\\uddf6")&&!n(e,"\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40\\udc65\\udb40\\udc6e\\udb40\\udc67\\udb40\\udc7f","\\ud83c\\udff4\\u200b\\udb40\\udc67\\u200b\\udb40\\udc62\\u200b\\udb40\\udc65\\u200b\\udb40\\udc6e\\u200b\\udb40\\udc67\\u200b\\udb40\\udc7f");case"emoji":return!a(e,"\\ud83e\\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s[e]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),c.toString(),p.toString()].join(",")+"));",a=new Blob([e],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports[n]=e[n],a.supports.everything=a.supports.everything&&a.supports[n],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports[n]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))});
//# sourceURL=/wp-includes/js/wp-emoji-loader.min.js
</script>
<script type="text/javascript">
/* <![CDATA[ */
var wpforms_settings = {"val_required":"This field is required.","val_email":"Please enter a valid email address.","val_email_suggestion":"Did you mean {suggestion}?","val_email_suggestion_title":"Click to accept this suggestion.","val_email_restricted":"This email address is not allowed.","val_number":"Please enter a valid number.","val_number_positive":"Please enter a valid positive number.","val_minimum_price":"Amount entered is less than the required minimum.","val_confirm":"Field values do not match.","val_checklimit":"You have exceeded the number of allowed selections: {#}.","val_limit_characters":"{count} of {limit} max characters.","val_limit_words":"{count} of {limit} max words.","val_min":"Please enter a value greater than or equal to {0}.","val_max":"Please enter a value less than or equal to {0}.","val_recaptcha_fail_msg":"Google reCAPTCHA verification failed, please try again later.","val_turnstile_fail_msg":"Cloudflare Turnstile verification failed, please try again later.","val_inputmask_incomplete":"Please fill out the field in required format.","uuid_cookie":"","locale":"en","country":"","country_list_label":"Country list","wpforms_plugin_url":"https:\\/\\/hpspower.in\\/wp-content\\/plugins\\/wpforms-lite\\/","gdpr":"","ajaxurl":"https:\\/\\/hpspower.in\\/wp-admin\\/admin-ajax.php","mailcheck_enabled":"1","mailcheck_domains":[],"mailcheck_toplevel_domains":["dev"],"is_ssl":"1","currency_code":"USD","currency_thousands":",","currency_decimals":"2","currency_decimal":".","currency_symbol":"$","currency_symbol_pos":"left","val_requiredpayment":"Payment is required.","val_creditcard":"Please enter a valid credit card number.","css_vars":["field-border-radius","field-border-style","field-border-size","field-background-color","field-border-color","field-text-color","field-menu-color","label-color","label-sublabel-color","label-error-color","button-border-radius","button-border-style","button-border-size","button-background-color","button-border-color","button-text-color","page-break-color","background-image","background-position","background-repeat","background-size","background-width","background-height","background-color","background-url","container-padding","container-border-style","container-border-width","container-border-color","container-border-radius","field-size-input-height","field-size-input-spacing","field-size-font-size","field-size-line-height","field-size-padding-h","field-size-checkbox-size","field-size-sublabel-spacing","field-size-icon-size","label-size-font-size","label-size-line-height","label-size-sublabel-font-size","label-size-sublabel-line-height","button-size-font-size","button-size-height","button-size-padding-h","button-size-margin-top","container-shadow-size-box-shadow"],"isModernMarkupEnabled":"1","formErrorMessagePrefix":"Form error message","errorMessagePrefix":"Error message","submitBtnDisabled":"Submit button is disabled during form submission.","readOnlyDisallowedFields":["captcha","content","divider","hidden","html","entry-preview","pagebreak","payment-total"],"error_updating_token":"Error updating token. Please try again or contact support if the issue persists.","network_error":"Network error or server is unreachable. Check your connection or try again later.","token_cache_lifetime":"86400","hn_data":[],"address_field":{"list_countries_without_states":["GB","DE","CH","NL"]}}
/* ]]> */
</script>
`;
const bodyClass = "home wp-singular page-template-default page page-id-73 wp-theme-limestone theme-limestone woocommerce-no-js woocommerce-active elementor-default elementor-kit-2533 elementor-page elementor-page-73";

export default function Page() {
  return <ClientWrapper bodyClass={bodyClass} headContent={headContent} bodyContent={bodyContent} />;
}