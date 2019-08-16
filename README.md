# block-twitcher
> This library allows to do twitching animation for blocks. It move block in direction of mouse and inner element in oposite way by mouse.
## Table of contents
* [Use](#use)
* [Requirements](#requirements)
* [Features](#features)
* [Main](#main)
* [Getting started](#getting-started)
* [Methods](#methods)
* [Browser support](#browser-support)
* [Support](#support)
* [License](#license)
## Use
This library use plain javascript and css.
## Requirements
This script requires HTML5
## Main
``
	blocks-twitcher.css
	blocks-twitcher.js
``
## Getting started
Four quick start options are available:
* [Download the latest release](https://github.com/Ajjya/block-twitcher.git)
* Clone the repository: git clone (https://github.com/Ajjya/block-twitcher.git)
### Installation
Include files:
```html
	<link rel="stylesheet" href="/path/to/blocks-twitcher.css">
	<script src="/path/to/blocks-twitcher.js"></script>
```
### Usage
#### Basic usage
Use script for each block needed.
```js
	var blocks = document.getElementsByClassName('block');

	for(var i = 0; i < blocks.length; i++){
		var block_el = blocks[i];
		var instance = new BlockTwitcher(blocks_el);
		instance.init();
	}
```
* **block_el:** - element which twitch a bit in direction of mouse
#### Advanced usage
Use script for each block needed.
```js
	var blocks = document.getElementsByClassName('block');

	for(var i = 0; i < blocks.length; i++){
		var block_el = blocks[i];
		var inside_el = document.getElementsByClassName('block')[i].getElementsByClassName("inside_el")[0];
		var instance = new BlockTwitcher(
			block_el,
			inside_el, 
			{
				speed: '300ms',
				offsetXMoveEl: 0,
				offsetYMoveEl: -50
			}
		);
		instance.init();
	}
```
* **block_el:** - element which twitch a bit in direction of mouse
* **inside_el:** - element which move in opposite direction of mouse when mouse over block
##### Library settings - object
* **speed:** - speen of animation inner block
* **offsetXMoveEl** - offset X of inner block in relation of parent block
* **offsetYMoveEl** - offset Y of inner block in relation of parent block
## Methods
### refresh()
```js
	instance.refresh();
```
## Browser support
* Chrome (latest)
* Firefox (latest)
* Safari (latest)
* Opera (latest)
* Edge (latest)
* Internet Explorer 9+
## Support
If you found a bug or have a feature suggestion, please submit it in the [Issues tracker](https://github.com/Ajjya/block-twitcher/issues).
## License
The plugin is available under the [MIT licens](http://opensource.org/licenses/MIT).
