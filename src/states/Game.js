/*
 * Game state
 * ==========
 *
 * A sample Game state, displaying the Phaser logo.
 */

import Logo from '../objects/Logo'

export default class Game extends Phaser.State {

  create() {
    this.game.stage.backgroundColor = '#fff'

    const { centerX: x, centerY: y } = this.world
    this.add.existing(new Logo(this.game, x - 200, y - 100))
    this.add.existing(new Logo(this.game, x + 80, y - 100))
    this.add.existing(new Logo(this.game, x - 100, y))
    this.add.existing(new Logo(this.game, x + 200, y))
    this.add.existing(new Logo(this.game, x, y))

    this.game.debug.text('Moving trees', 20, 20)
  }

}
