namespace SpriteKind {
    export const block = SpriteKind.create()
    export const b1 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
})
function getPos (sprite: Sprite, otherSprite: Sprite) {
    if (sprite.x < otherSprite.x - 8 || sprite.x > otherSprite.x + 8) {
        direction = 1
    } else {
        direction = 0
    }
}
info.onCountdownEnd(function () {
	
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.b1, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    getPos(sprite, otherSprite)
    if (direction == 1) {
        sprite.setVelocity(-1 * sprite.vx, sprite.vy)
    } else {
        sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    }
    otherSprite.destroy(effects.fire, 500)
})
info.onLifeZero(function () {
    game.over(false, effects.dissolve)
})
let direction = 0
let b1: Sprite = null
let b2 = 0
let y = 0
info.startCountdown(120)
info.setLife(3)
let player1 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ......1111111111111111111.......
    .....111111111111111111111......
    ....11111111111111111111111.....
    ...1111111111111111111111111....
    ..111111111111111111111111111...
    .11111111111111111111111111111..
    `, SpriteKind.Player)
player1.setPosition(78, 100)
player1.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(player1, 100, 0)
let projectile = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 9 9 9 . . . . . . . 
    . . . . . 9 6 7 6 9 . . . . . . 
    . . . . 9 6 7 6 7 6 9 . . . . . 
    . . . . 1 7 1 7 1 7 1 . . . . . 
    . . . . 8 6 7 6 7 6 8 . . . . . 
    . . . . . 8 6 7 6 8 . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, player1, 25, -55)
projectile.setFlag(SpriteFlag.DestroyOnWall, false)
projectile.setFlag(SpriteFlag.BounceOnWall, true)
for (let index = 0; index <= 9; index++) {
    for (let index2 = 0; index2 <= 2; index2++) {
        y = index * 18
        if (index2 % 2 == 1) {
            y = index * 18 + 8
        }
        b2 = randint(0, 1)
        if (b2 == 0) {
            b1 = sprites.create(img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `, SpriteKind.b1)
        } else if (b2 == 1) {
            b1 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . 4 4 4 5 5 4 4 4 . . . . 
                . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                . . . . 4 4 2 2 2 2 4 4 . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.b1)
        } else {
            b1 = sprites.create(img`
                2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 2 2 2 2 2 2 2 1 1 1 4 4 4 4 4 
                1 1 2 2 2 2 2 4 4 4 4 4 4 4 4 4 
                4 4 4 2 2 5 5 5 5 5 5 4 4 4 4 4 
                4 4 4 4 2 2 2 2 2 5 5 5 5 5 4 4 
                4 4 b b b b b b b 5 5 5 5 5 5 5 
                b b b b b b b 5 5 5 5 5 2 2 2 2 
                b b b b 5 5 5 5 5 5 5 5 5 5 2 2 
                b b b 2 2 2 2 2 2 2 2 2 1 1 1 1 
                1 1 1 1 1 1 2 2 2 1 1 1 1 1 1 1 
                1 1 4 4 2 2 2 2 2 2 2 1 1 1 1 1 
                4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 4 
                4 4 4 5 5 5 5 5 5 5 5 5 4 4 4 4 
                5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 
                b b b b b 5 5 5 5 5 5 5 5 4 4 4 
                . b b b b b b b b b b b 4 4 4 4 
                `, SpriteKind.b1)
        }
        b1.setPosition(y, index2 * 18 + 20)
    }
    scene.setBackgroundImage(img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        `)
}
info.setScore(0)
scene.setBackgroundColor(9)
direction = 1
forever(function () {
    if (projectile.bottom > 119) {
        info.changeLifeBy(-1)
        pause(100)
    }
    if (info.score() == 25) {
        game.over(true, effects.bubbles)
    }
})
