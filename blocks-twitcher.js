jQuery(document).ready(function($) {

	function BlockTwitcher(el, move_el, speed, offsetXMoveEl, offsetYMoveEl){
		this.el = el;
		this.move_el = move_el;
		// this.move_el_top = 0;
		// this.move_el_left = 0;
		this.directionX = "";
		this.directionY = "";
		this.oldx = 0;
		this.oldy = 0;
		this.base_class_name = 'block_twitched';
		this.offset = 0;
		this.offsetXMoveEl = 0;
		this.offsetYMoveEl = 0;

		this.init = function(){
			var obj = this;

			this.refresh();

			this.el.onmouseenter = function(e) {
				obj.onMouseEnterHandler(e);
			}

			this.el.onmouseleave = function(e){
				obj.onMouseLeaveHandler(e);
			}
		}

		this.refresh = function(){
			this.offset = this.getCoords(this.el);
			this.move_el.style.position = "relative";
			this.move_el.style.top = '0px';
			this.move_el.style.left = '0px';
			this.move_el.style.transition = 'top ' + speed + ' ease, left ' + speed + ' ease';
		}
	} 

	BlockTwitcher.prototype.onMouseMoveHandler = function (e, obj) {
		var x = e.pageX - this.offset.left;
		var y = e.pageY - this.offset.top;

		this.move_el.style.top = -y/10 + 'px';
		this.move_el.style.left = (-x + this.offsetXMoveEl)/10 + 'px';
	}

	BlockTwitcher.prototype.onMouseEnterHandler = function (e) {
		var obj = this;
        if (e.pageX < this.oldx) {
            this.directionX = "left"
        } else if (e.pageX > this.oldx) {
            this.directionX = "right"
        }

        if (e.pageY < this.oldy) {
            this.directionY = "top"
        } else if (e.pageY > this.oldy) {
            this.directionY = "bottom"
        }

        this.oldx = e.pageX;
        this.oldy = e.pageY;

        this.addClass(this.base_class_name + '_' + this.directionX);
        this.addClass(this.base_class_name + '_' + this.directionY);

        this.el.addEventListener( "mousemove", (e) => { obj.onMouseMoveHandler(e, obj) });
	}

	BlockTwitcher.prototype.onMouseLeaveHandler = function (e) {
		var obj = this;
		this.removeClasses();
		this.el.removeEventListener( "mousemove", (e) => { obj.onMouseMoveHandler(e, obj) });	
		this.move_el.style.top = 0;
		this.move_el.style.left = 0;
	}

	BlockTwitcher.prototype.addClass = function (name) {
		var arr = this.el.className.split(" ");
		if (arr.indexOf(name) == -1) {
			this.el.className += " " + name;
		}
	}

	BlockTwitcher.prototype.getCoords = function(elem) {
		var box = elem.getBoundingClientRect();

		return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset
		};

	}

	BlockTwitcher.prototype.removeClasses = function () {
		var name = this.base_class_name + '_top';
		var arr = this.el.className.split(" ");
		if (arr.indexOf(name) != -1) {
			arr.splice(arr.indexOf(name), 1);
		}

		this.el.className = arr.join(" ");

		name = this.base_class_name + '_bottom';
		arr = this.el.className.split(" ");
		if (arr.indexOf(name) != -1) {
			arr.splice(arr.indexOf(name), 1);
		}

		this.el.className = arr.join(" ");

		name = this.base_class_name + '_left';
		arr = this.el.className.split(" ");
		if (arr.indexOf(name) != -1) {
			arr.splice(arr.indexOf(name), 1);
		}

		this.el.className = arr.join(" ");

		name = this.base_class_name + '_right';
		if (arr.indexOf(name) != -1) {
			arr.splice(arr.indexOf(name), 1);
		}

		this.el.className = arr.join(" ");
	}

	window.BlockTwitcher = BlockTwitcher;

});