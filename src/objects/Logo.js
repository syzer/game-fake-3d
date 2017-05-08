/*
 * Logo
 * ====
 *
 * A sample prefab (extended game object class), displaying a spinning Phaser
 * logo.
 */

export default class Logo extends Phaser.Sprite {

  constructor(game, x, y) {
    super(game, x, y + 252, 'progress-bar')
    this.tint = 0x000000
    this.alpha = 0.1
    this.anchor.set(0.5, 0)
    this.angle = -220.8
    this.scale.setMagnitude(1.5, 1)


    this.image = this.game.add.sprite(x, y + 50, 'progress-bar')
    this.image.anchor.set(0.5)
    this.image.alpha = 1
    // this.image.scale.setMagnitude(0.5)

    this.game.add.existing(this.image)
    this.rotationStep = 0.3
  }

  update() {
    console.log(this.angle)
    this.angle += this.rotationStep
    if (this.angle === -150) {
      this.rotationStep = -2.8
    //   console.log(this.rotationStep)
    } else if (this.angle === 150 ) {
      this.rotationStep = 2.8
    }

    // this.image.angle = 0
    this.game.add.existing(this.image)

  }

}
