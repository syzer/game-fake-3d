# [fake-3d](https://example.com/my-game/)

>   It&#39;s a fake 3d so I can exchange this code (barter) for doge animation...

![moving tree shadow](https://raw.githubusercontent.com/syzer/game-fake-3d/master/moving-trees.gif)

---

Congrats! To manage your project and start developing your new game right away,
the following npm scripts are available:

>   TIP: You can also use Gulp to manage development tasks.

The following npm scripts are also available:

```sh
npm start         # Or `gulp`: launches the project development environment.
npm run dist      # Or `gulp dist`: Prepares the game for distribution.
npm run lint      # Or `gulp lint`: Checks scripts for linting issues.
npm run clean     # Or `gulp clean`: Deletes build files.
npm run test-dist # Build and run your project
```

Should you consider distributing your game as an open source project, please
choose and [include a LICENSE file](http://choosealicense.com/) for your project.


## TODO 

- [ ] groups for shadow
```js
// Groups for drawing layers
var back_layer = game.add.group();
var mid_layer = game.add.group();
var front_layer = game.add.group();
// It doesn't matter what order you add things to these groups, the draw order will be back, mid, front (unless you change it...)
back_layer.create(0, 0, "bg");
front_layer.create(0, 0, "front");
mid_layer.create(300, 200, "object1");
mid_layer.create(500, 400, "object2");
```

- [isometric](http://rotates.org/phaser/iso/examples/interaction.htm)
