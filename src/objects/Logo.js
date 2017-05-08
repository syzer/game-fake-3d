/*
 * Logo
 * ====
 *
 * A sample prefab (extended game object class), displaying a spinning Phaser
 * logo.
 */

export default class Logo extends Phaser.Sprite {

  constructor(game, x, y) {
    super(game, x, y, 'tree')
    this.anchor.set(0.5)
    this.blendMode = this.blendMode.NORMAL

    this.shadow = this.game.add.sprite(x - 14, y + 86, 'tree')
    this.shadow.anchor.set(0.5)
    this.shadow.tint = 0x000000
    this.shadow.alpha = 0.1
    this.shadow.anchor.set(0.445, 1)

    this.game.add.existing(this.shadow)
    this.rotationStep = -1.13
  }

  update() {
    this.shadow.angle += this.rotationStep
    if (this.shadow.angle <= -40) {
      this.rotationStep = 1.13
    } else if (this.shadow.angle >= 45 ) {
      this.rotationStep = -1.13
    }

  }

}
