# Header scroll
[![Software License][ico-license]](LICENSE)
[![Bower][ico-bower]][link-bower]
[![Issue][ico-issue]][link-issue]

# How to use
## With bower
If you don't have installed bower, first of all you need [install bower](http://bower.io/#install-bower)
After, you need to initializing bower project

    bower init
Next, will need add this dependency
		
    bower install header-scroll
Add this dependency in your html document

    <script src="bower_components/header-scroll/dist/js/header-scroll.min.js</script>
Enable plugin

    $(yourHeaderSelection).headerScroll();
## Without bower

 1. [Download](https://github.com/peachananr/onepage-scroll/archive/master.zip) zip project.
 2. Unzip project.
 3. Copy header-scroll.min.js from dist/js folder to your assets folder 
 4. Include plugin in your html document with script tag.
 5. Enable plugin
	 
     `$(yourHeaderSelection).headerScroll();`

    
# Examples
Examples is available in the example folder. Demo page available by [this link](http://teinnsei.github.io/header-scroll/)


[link-issue]: https://github.com/Teinnsei/header-scroll/issues
[ico-issue]: https://img.shields.io/github/issues/Teinnsei/header-scroll.svg?style=flat-square

[ico-license]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square

[ico-bower]: https://img.shields.io/bower/v/header-scroll.svg?style=flat-square
[link-bower]: https://github.com/Teinnsei/header-scroll
