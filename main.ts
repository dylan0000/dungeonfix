namespace SpriteKind {
    export const shop1 = SpriteKind.create()
}
scene.onHitTile(SpriteKind.Player, 9, function (sprite2) {
    if (level == 0) {
        level += 1
        levels()
    } else if (level == 2) {
        for (let value of scene.getTilesByType(5)) {
            enemyghost = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
            enemyghost.follow(mySprite, 30)
            scene.place(value, enemyghost)
        }
        scene.setTile(9, img`
b d d d d d d d d d d d d d d c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
c c c c c c c c c c c c c c c a 
`, false)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(25, 18))
    }
})
function sprite () {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . f 1 1 1 1 1 f . . . . 
. . . . f 1 1 1 1 1 1 1 f . . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 f 1 1 1 f 1 1 f . . 
. . . f 1 1 f 1 1 1 f 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 1 1 f 1 1 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 f 1 f 1 f 1 f 1 f . . 
. . . . f . f . f . f . f . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
}
function buttonpress () {
    if (level == 1) {
        scene.setTile(2, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b 1 1 1 1 1 1 b b b b b 
b b b b 1 1 1 1 1 1 1 1 b b b b 
b b b 1 1 1 1 1 1 1 1 1 1 b b b 
b b b 1 1 1 7 7 7 7 1 1 1 b b b 
b b b 1 1 1 7 7 7 7 1 1 1 b b b 
b b b 1 1 1 7 7 7 7 1 1 1 b b b 
b b b 1 1 1 7 7 7 7 1 1 1 b b b 
b b b 1 1 1 1 1 1 1 1 1 1 b b b 
b b b b 1 1 1 1 1 1 1 1 b b b b 
b b b b b 1 1 1 1 1 1 b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`, false)
        scene.setTile(9, img`
b d d d d d d d d d d d d d d c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
c c c c c c c c c c c c c c c a 
`, false)
    }
}
scene.onHitTile(SpriteKind.Player, 14, function (sprite2) {
    mySprite.say("i need to shoot this", 500)
})
scene.onHitTile(SpriteKind.Projectile, 14, function (sprite2) {
    scene.setTile(14, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c b c c c c b c 
c c b c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c b c c c c b c c c c 
c c c c c c c c c c c c c c c c 
c b c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c b c c c c c b c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c b c c c c c c c c c c b c c 
c c c c c c c b c c c c c c c c 
c c c c c c c c c c c c c c c c 
`, false)
})
scene.onHitTile(SpriteKind.Projectile, 4, function (sprite2) {
    scene.setTile(4, img`
b d d d d d d d d d d d d d d c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
c c c c c c c c c c c c c c c a 
`, false)
})
scene.onHitTile(SpriteKind.Projectile, 13, function (sprite2) {
    scene.setTile(13, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c b c c c c b c 
c c b c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c b c c c c b c c c c 
c c c c c c c c c c c c c c c c 
c b c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c b c c c c c b c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c b c c c c c c c c c c b c c 
c c c c c c c b c c c c c c c c 
c c c c c c c c c c c c c c c c 
`, false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (bulletvelocity == 0 && bulletdirection == 0) {
        bulletvelocity = 0
        bulletdirection = -200
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 5 . . . . 
. . . . f 1 1 1 1 1 1 1 f . . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 f 1 1 1 f 1 1 f . . 
. . . f 1 1 f 1 1 1 f 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 1 1 f 1 1 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 f 1 f 1 f 1 f 1 f . . 
. . . . f . f . f . f . f . . . 
. . . . . . . . . . . . . . . . 
`)
    } else if (bulletvelocity == 0 && bulletdirection == -200) {
        bulletvelocity = -200
        bulletdirection = 0
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . f 1 1 1 1 1 f . . . . 
. . . . f 1 1 1 1 1 1 1 f . . . 
. . . 5 5 1 1 1 1 1 1 1 1 f . . 
. . . 5 5 1 f 1 1 1 f 1 1 f . . 
. . . 5 5 1 f 1 1 1 f 1 1 f . . 
. . . 5 5 1 1 1 1 1 1 1 1 f . . 
. . . 5 5 1 1 1 1 1 1 1 1 f . . 
. . . 5 5 1 1 1 f 1 1 1 1 f . . 
. . . 5 5 1 1 1 1 1 1 1 1 f . . 
. . . 5 5 1 1 1 1 1 1 1 1 f . . 
. . . f 1 f 1 f 1 f 1 f 1 f . . 
. . . . f . f . f . f . f . . . 
. . . . . . . . . . . . . . . . 
`)
    } else if (bulletvelocity == -200 && bulletdirection == 0) {
        bulletvelocity = 0
        bulletdirection = 200
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . f 1 1 1 1 1 f . . . . 
. . . . f 1 1 1 1 1 1 1 f . . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 f 1 1 1 f 1 1 f . . 
. . . f 1 1 f 1 1 1 f 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 1 1 f 1 1 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 5 5 5 5 5 5 5 5 5 f . . 
. . . . 5 . 5 . 5 . 5 . 5 . . . 
. . . . . . . . . . . . . . . . 
`)
    } else if (bulletvelocity == 0 && bulletdirection == 200) {
        bulletvelocity = 200
        bulletdirection = 0
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . f 1 1 1 1 1 f . . . . 
. . . . f 1 1 1 1 1 1 1 f . . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 f 1 1 1 f 1 5 5 . . 
. . . f 1 1 f 1 1 1 f 1 5 5 . . 
. . . f 1 1 1 1 1 1 1 1 5 5 . . 
. . . f 1 1 1 1 1 1 1 1 5 5 . . 
. . . f 1 1 1 1 f 1 1 1 5 5 . . 
. . . f 1 1 1 1 1 1 1 1 5 5 . . 
. . . f 1 1 1 1 1 1 1 1 5 5 . . 
. . . f 1 f 1 f 1 f 1 f 1 f . . 
. . . . f . f . f . f . f . . . 
. . . . . . . . . . . . . . . . 
`)
    } else if (bulletvelocity == 200 && bulletdirection == 0) {
        bulletvelocity = 0
        bulletdirection = -200
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 5 . . . . 
. . . . f 1 1 1 1 1 1 1 f . . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 f 1 1 1 f 1 1 f . . 
. . . f 1 1 f 1 1 1 f 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 1 1 f 1 1 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 f 1 f 1 f 1 f 1 f . . 
. . . . f . f . f . f . f . . . 
. . . . . . . . . . . . . . . . 
`)
    }
})
scene.onHitTile(SpriteKind.Player, 12, function (sprite2) {
    if (level == 0) {
        level += 2
        levels()
    }
})
// ammo collection
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite2, otherSprite) {
    if (info.score() <= 20) {
        otherSprite.destroy()
        info.changeScoreBy(5)
        mySprite.say("+5 ammo", 200)
    } else {
        mySprite.say("full", 200)
    }
})
scene.onHitTile(SpriteKind.Player, 8, function (sprite2) {
    if (level == 1) {
        game.splash("you finished!", "now go play for real")
        game.splash("restart game")
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite2, otherSprite) {
    otherSprite.destroy()
    sprite2.destroy()
    scene.cameraShake(2, 200)
    mySprite.x += -3
    if (level == 2) {
        info.player2.changeScoreBy(1)
    }
})
scene.onHitTile(SpriteKind.Player, 10, function (sprite2) {
    shop.say("here take this", 500)
    pause(500)
    guntype += 1
    game.splash("you can now shoot 2 bullets for 1")
    shop.destroy()
    scene.setTile(10, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f . . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 f f 5 f . . 
. . f 5 5 5 5 5 5 5 5 f 5 f . . 
. . . f 5 5 5 5 5 5 5 5 5 f . . 
. . f 5 5 5 5 5 5 5 5 f 5 f . . 
. . . f 5 5 5 5 5 5 f f 5 f . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . . f f f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    mySprite.say("rip", 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (guntype == 1) {
        if (info.score() > 0) {
            bullet = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f 2 2 2 2 f . . . . . 
. . . . f 2 2 2 2 2 2 f . . . . 
. . . . f 2 2 2 2 2 2 f . . . . 
. . . . f 2 2 2 2 2 2 f . . . . 
. . . . f 2 2 2 2 2 2 f . . . . 
. . . . . f 2 2 2 2 f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, bulletvelocity, bulletdirection)
            info.changeScoreBy(-1)
        } else {
            mySprite.say("no ammo", 500)
        }
    } else if (guntype == 2) {
        if (info.score() > 0) {
            bullet = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f 2 2 2 2 f . . . . . 
. . . . f 2 2 2 2 2 2 f . . . . 
. . . . f 2 2 2 2 2 2 f . . . . 
. . . . f 2 2 2 2 2 2 f . . . . 
. . . . f 2 2 2 2 2 2 f . . . . 
. . . . . f 2 2 2 2 f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, bulletvelocity + 50, bulletdirection - 50)
            bullet = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f 2 2 2 2 f . . . . . 
. . . . f 2 2 2 2 2 2 f . . . . 
. . . . f 2 2 2 2 2 2 f . . . . 
. . . . f 2 2 2 2 2 2 f . . . . 
. . . . f 2 2 2 2 2 2 f . . . . 
. . . . . f 2 2 2 2 f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, bulletvelocity - 50, bulletdirection + 50)
            info.changeScoreBy(-1)
        } else {
            mySprite.say("no ammo", 500)
        }
    }
})
scene.onHitWall(SpriteKind.Projectile, function (sprite2) {
    sprite2.destroy(effects.fire, 50)
    scene.cameraShake(2, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite2, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    scene.cameraShake(2, 200)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite2, otherSprite) {
    otherSprite.x += Math.randomRange(-3, 3)
    otherSprite.y += Math.randomRange(-3, 3)
})
function levels () {
    if (level == 1) {
        game.splash("tutorial")
        sprite()
        scene.setTileMap(img`
f f f f f f 7 7 7 f f f f f f f f f f f f f f f f f f f f f 
f 1 1 1 1 1 f 7 f 1 1 1 1 1 9 5 1 1 5 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 2 1 f 7 f 1 1 1 1 1 9 1 1 5 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 f 7 f 1 1 1 1 1 9 1 5 1 1 1 1 1 1 1 1 1 1 b b f 
f 1 1 1 1 1 f 7 f 1 1 1 1 1 9 1 5 1 5 1 1 1 1 1 1 1 b b b f 
f 1 1 1 1 1 1 9 1 1 1 1 1 1 9 5 1 1 1 1 1 3 3 1 1 1 8 b b f 
f 1 1 1 1 1 1 9 1 1 1 1 1 1 9 1 1 5 1 1 1 3 3 1 1 1 8 b b f 
f 1 1 1 1 1 f 7 f 1 1 1 1 1 9 5 1 1 5 1 1 1 1 1 1 1 b b b f 
f 1 1 1 1 1 f 7 f 1 1 1 1 1 9 1 5 1 1 1 1 1 1 1 1 1 1 b b f 
f 1 1 1 1 1 f 7 f 1 1 1 1 1 9 1 1 5 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 f 7 f 1 1 1 1 1 9 5 1 1 5 1 1 1 1 1 1 1 1 1 1 f 
f f f f f f 7 7 7 f f f f f f f f f f f f f f f f f f f f f 
`)
        scene.setTile(7, img`
5 4 4 5 5 4 4 4 4 2 2 2 4 4 4 4 
4 4 4 4 4 5 5 4 2 2 2 2 4 4 4 5 
4 2 2 2 4 4 5 4 2 2 4 4 5 5 5 5 
2 2 4 2 4 4 5 4 2 2 4 5 5 5 5 4 
2 2 2 2 4 4 5 4 2 2 4 4 5 5 4 4 
4 2 2 2 4 5 5 4 4 4 4 4 4 4 4 2 
2 2 2 4 4 5 5 5 4 4 2 2 2 2 2 2 
4 2 2 4 5 5 5 5 4 2 2 4 2 2 2 4 
5 4 4 4 4 4 4 5 5 4 2 2 2 4 4 4 
4 4 4 2 2 2 4 4 5 5 4 4 4 4 5 5 
4 2 2 2 2 2 2 2 4 5 5 5 5 5 5 5 
5 4 4 2 4 2 2 4 4 5 5 5 4 4 4 5 
5 5 4 2 2 2 4 4 4 5 5 4 2 2 2 4 
4 5 4 4 4 4 5 5 5 5 4 2 4 2 2 4 
4 5 5 5 5 5 5 4 4 4 2 4 2 4 2 4 
4 5 5 5 4 4 4 4 2 2 2 2 4 2 4 4 
`, true)
        scene.setTile(15, img`
b d b b b b b b b d b b b b b b 
b d b b b b b b b d b b b b b b 
b d b b b b b b b d b b b b b b 
d d d d d d d d d d d d d d d d 
b b b b b d b b b b b b b d b b 
b b b b b d b b b b b b b d b b 
b b b b b d b b b b b b b d b b 
d d d d d d d d d d d d d d d d 
b d b b b b b b b d b b b b b b 
b d b b b b b b b d b b b b b b 
b d b b b b b b b d b b b b b b 
d d d d d d d d d d d d d d d d 
b b b b b d b b b b b b b d b b 
b b b b b d b b b b b b b d b b 
b b b b b d b b b b b b b d b b 
d d d d d d d d d d d d d d d d 
`, true)
        scene.setTile(1, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c b c c c c b c 
c c b c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c b c c c c b c c c c 
c c c c c c c c c c c c c c c c 
c b c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c b c c c c c b c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c b c c c c c c c c c c b c c 
c c c c c c c b c c c c c c c c 
c c c c c c c c c c c c c c c c 
`, false)
        scene.setTile(2, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b 1 1 1 1 1 1 b b b b b 
b b b b 1 1 1 1 1 1 1 1 b b b b 
b b b 1 1 1 1 1 1 1 1 1 1 b b b 
b b b 1 1 1 2 2 2 2 1 1 1 b b b 
b b b 1 1 1 2 2 2 2 1 1 1 b b b 
b b b 1 1 1 2 2 2 2 1 1 1 b b b 
b b b 1 1 1 2 2 2 2 1 1 1 b b b 
b b b 1 1 1 1 1 1 1 1 1 1 b b b 
b b b b 1 1 1 1 1 1 1 1 b b b b 
b b b b b 1 1 1 1 1 1 b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`, true)
        scene.setTile(9, img`
d d d d d d d d d d d d d d b c 
d d d d d d d d d d d d d d b c 
c c b c c b c c b c c b c c b c 
c b d c b d c b d c b d c b d c 
c b d c b d c b d c b d c b d c 
c b d c b d c b d c b d c b d c 
c b d c b d c b d c b d c b d c 
c b d c b d c b d c b d c b d c 
c b d c b d c b d c b d c b d c 
c b d c b d c b d c b d c b d c 
c b d c b d c b d c b d c b d c 
c b d c b d c b d c b d c b d c 
c b d c b d c b d c b d c b d c 
c c b c c b c c b c c b c c b c 
d d d d d d d d d d d d d d b c 
d d d d d d d d d d d d d d b c 
`, true)
        scene.setTile(5, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c b c c c c b c 
c c b c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c b c c c c b c c c c 
c c c c c c c c c c c c c c c c 
c b c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c b c c c c c b c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c b c c c c c c c c c c b c c 
c c c c c c c b c c c c c c c c 
c c c c c c c c c c c c c c c c 
`, false)
        scene.setTile(3, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c b c c c c b c 
c c b c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c b c c c c b c c c c 
c c c c c c c c c c c c c c c c 
c b c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c b c c c c c b c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c b c c c c c c c c c c b c c 
c c c c c c c b c c c c c c c c 
c c c c c c c c c c c c c c c c 
`, false)
        scene.setTile(8, img`
a c c c c c c c c c c c c c c c 
c d d d d b d d d d b c d d b b 
c d d d d b d d d d b c d d b b 
a b b b b c b b b b b c d d b b 
c c f f f f f f f f f c d d b b 
c c c f f f f f f f f c d d b b 
c c c f f f f f f f f c d d b b 
c f c f f f f f f f f c d d b b 
c f f f f f f f f f f c d d b b 
c c f c f f f f f f f c d d b b 
c c f c f f f f f f f c d d b b 
c c f f f f f f f f f c d d b b 
a b b b b c b b b b b c d d b b 
c d d d d b d d d d b c d d b b 
c d d d d b d d d d b c d d b b 
a c c c c c c c c c c c c c c c 
`, true)
        for (let value2 of scene.getTilesByType(5)) {
            enemyghost = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
            enemyghost.follow(mySprite, 50)
            scene.place(value2, enemyghost)
        }
        for (let value3 of scene.getTilesByType(3)) {
            ammo = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . f f f f f f f f f f . . . . . . . . 
. . . . . . f 5 5 f 5 5 f 5 5 f . . . . . . . . 
. . . . . . f 5 5 f 5 5 f 5 5 f . . . . . . . . 
. . . . . . f 5 5 f 5 5 f 5 5 f . . . . . . . . 
. . . . . . f 5 5 f 5 5 f 5 5 f . . . . . . . . 
. . . . . . f 5 5 f 5 5 f 5 5 f . . . . . . . . 
. . . . . . f 5 5 f 5 5 f 5 5 f . . . . . . . . 
. . . . . . f 5 5 f 5 5 f 5 5 f . . . . . . . . 
. . . . . . f 5 5 f 5 5 f 5 5 f . . . . . . . . 
. . . . . . f 5 5 f 5 5 f 5 5 f . . . . . . . . 
. . . . . . f 5 5 f 5 5 f 5 5 f . . . . . . . . 
. . . . . . . f f . f f . f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
            scene.place(value3, ammo)
        }
    }
    if (level == 2) {
        game.splash("begin")
        scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . 5 f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f . . . . . . . . . f f f f f . 5 . . . . 5 . . . . 5 . . f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f . . . . . . . . . f f f f f . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f . . . . . . . . . f f f f f . . . . . . . . . . . . . 3 f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f . . . . . . . . . f f f f f . . . 5 . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f . . . . . . . . . f f f f f . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f . . . . . . . . . f f f f f . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f . . . . . . 5 5 . . . 9 9 . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f . . . . . . 5 5 . . . 9 9 . . . . . . . 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f . . . . . . . . . f f f f f f f . . . 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f . . . 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f . . 5 . 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f 7 . . . 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 . . 7 7 7 . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 . . 7 7 . . . . . . . . e e . . . . f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 . . 7 . . . . . . . . . e e . . . . f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 . . . . . . . . . . . f f f f f . . f f 7 7 7 7 7 7 7 7 f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 . 5 . . . . . 5 . . . f f f f f . . . . . . . . . . . 7 f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . f f f f f . . . . . . . . . . . 7 f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e f f f f f f f f f 7 . . . . . . 7 f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e f f f f f f f f f 7 . . . . . . 7 f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . f f f f f f f f f 7 . . . . . . 7 f f f f f f f f 
f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 . 5 5 5 f f f f f f . . f f f f f f f f f 7 . . . . . . 7 f f f f f f f f 
f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 . . . . . f f f f f f . . f f f f f f f f f 7 . . . . . . 7 f f f f f f f f 
f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 . . . . . . . . d d . . . . f f f f f f f f f 7 . . . a . . 7 f f f f f f f f 
f f f f f f f f f f f f f f f f f f f 7 7 7 7 5 5 d . . . . . . . d d . . . . f f f f f f f f f 7 7 . . 3 . . 7 f f f f f f f f 
f f f f f f f f f f f f f f f f f f f 7 7 . . 5 5 d . . . . . . . d d . . . . f f f f f f f f f f 7 . . . . . 7 f f f f f f f f 
f f f f f f f f f f f f f f f f f f f 7 . . . 5 5 d 3 . . . . . f f f f f f f f f f f f f f f f f 7 . . . . . 7 f f f f f f f f 
f f f f f f f f f f f f f f f f f f f 7 . . f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 . . . . . 7 f f f f f f f f 
f f f f f f f f f f f f f f f f f f f 7 . . f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 . . 7 7 7 f f f f f f f f 
f f f f f f f f f f f f f f f f f f f 7 . . f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f 7 . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f c c c . . . . . . . . . . . f f f f f f f f f f f f f f f f f 7 7 7 7 f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f c c c b . . . b . . . b . . f f f f f f f f f f f f f f f f f f 7 7 f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f b . . . . b . . . b . . . b f f f f f f f f f . 2 . . . . . . . 3 3 f f f f f f f f f f f 
f f f f f f f f f f f f f f f . . c c . . . b . . . b . . . b . . f f f f f f f f f b . b . b . b . b 3 3 f f f f f f f f f f f 
f f f f f f f f f f f f f f f . . c c . b . . . . . . . . . . . . . 4 4 4 4 4 4 4 . . . . . . . . . . f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f . . f f f . . . . . . . . . b . b . . 4 4 4 4 4 4 4 . . b . b . b . b . f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f . . f 7 f . . . . . . . . . . . . 3 f f f f f f f f f . . . . . . . . . f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f . . f 7 f . . . . . . . . . . . . 3 f 7 7 7 7 7 7 7 f b . b . b . b . b f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f . . f 7 f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 f . . . . . . . . . f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f . . f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . b . b . b . b . f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f . . f 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f 7 7 7 f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f . . f 7 7 7 7 7 7 7 7 7 f . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f . . f f f f f f f f f f f . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f . . . . . . . . . . c c . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 c c . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 17))
        scene.setBackgroundImage(img`
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
`)
        scene.setTile(13, img`
d 1 d d d d d d d 1 d d d d d d 
d 1 d d d d d d d 1 d d d d d d 
d 1 d d d d d d d 1 d d d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d d d d 1 d d d d d d d 1 d d 
d d d d d 1 d d d d d d d 1 d d 
d d d d d 1 d d d d d d d 1 d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d 1 d d d d d d d 1 d d d d d d 
d 1 d d d d d d d 1 d d d d d d 
d 1 d d d d d d d 1 d d d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d d d d 1 d d d d d d d 1 d d 
d d d d d 1 d d d d d d d 1 d d 
d d d d d 1 d d d d d d d 1 d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
        scene.setTile(7, img`
5 4 4 5 5 4 4 4 4 2 2 2 4 4 4 4 
4 4 4 4 4 5 5 4 2 2 2 2 4 4 4 5 
4 2 2 2 4 4 5 4 2 2 4 4 5 5 5 5 
2 2 4 2 4 4 5 4 2 2 4 5 5 5 5 4 
2 2 2 2 4 4 5 4 2 2 4 4 5 5 4 4 
4 2 2 2 4 5 5 4 4 4 4 4 4 4 4 2 
2 2 2 4 4 5 5 5 4 4 2 2 2 2 2 2 
4 2 2 4 5 5 5 5 4 2 2 4 2 2 2 4 
5 4 4 4 4 4 4 5 5 4 2 2 2 4 4 4 
4 4 4 2 2 2 4 4 5 5 4 4 4 4 5 5 
4 2 2 2 2 2 2 2 4 5 5 5 5 5 5 5 
5 4 4 2 4 2 2 4 4 5 5 5 4 4 4 5 
5 5 4 2 2 2 4 4 4 5 5 4 2 2 2 4 
4 5 4 4 4 4 5 5 5 5 4 2 4 2 2 4 
4 5 5 5 5 5 5 4 4 4 2 4 2 4 2 4 
4 5 5 5 4 4 4 4 2 2 2 2 4 2 4 4 
`, true)
        scene.setTile(15, img`
b d b b b b b b b d b b b b b b 
b d b b b b b b b d b b b b b b 
b d b b b b b b b d b b b b b b 
d d d d d d d d d d d d d d d d 
b b b b b d b b b b b b b d b b 
b b b b b d b b b b b b b d b b 
b b b b b d b b b b b b b d b b 
d d d d d d d d d d d d d d d d 
b d b b b b b b b d b b b b b b 
b d b b b b b b b d b b b b b b 
b d b b b b b b b d b b b b b b 
d d d d d d d d d d d d d d d d 
b b b b b d b b b b b b b d b b 
b b b b b d b b b b b b b d b b 
b b b b b d b b b b b b b d b b 
d d d d d d d d d d d d d d d d 
`, true)
        scene.setTile(1, img`
c c c c c c c c c c c c c c c c 
b b b d d d d d d d d d d b b b 
d d c b b b b b b b b b b c d d 
d d c c c c c c c c c c c c d d 
d d b d d d d d d d d d d b d d 
d d c b b b b b b b b b b c d d 
d d c c c c c c c c c c c c d d 
d d b d d d d d d d d d d b d d 
d d c b b b b b b b b b b c d d 
d d c c c c c c c c c c c c d d 
d d b d d d d d d d d d d b d d 
d d c b b b b b b b b b b c d d 
d d c c c c c c c c c c c c d d 
d d b d d d d d d d d d d b d d 
d d c b b b b b b b b b b c d d 
d d c c c c c c c c c c c c d d 
`, true)
        scene.setTile(4, img`
c c c c c c c c c c c c c c c c 
b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b 1 1 1 1 d b b b 1 1 1 1 d b b 
b d 1 1 1 1 b b b d 1 1 1 1 b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d d d d 
b b b b b b b b b b b b b b b b 
c c c c c c c c c c c c c c c c 
`, true)
        scene.setTile(2, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b 1 1 1 1 1 1 b b b b b 
b b b b 1 1 1 1 1 1 1 1 b b b b 
b b b 1 1 1 1 1 1 1 1 1 1 b b b 
b b b 1 1 1 2 2 2 2 1 1 1 b b b 
b b b 1 1 1 2 2 2 2 1 1 1 b b b 
b b b 1 1 1 2 2 2 2 1 1 1 b b b 
b b b 1 1 1 2 2 2 2 1 1 1 b b b 
b b b 1 1 1 1 1 1 1 1 1 1 b b b 
b b b b 1 1 1 1 1 1 1 1 b b b b 
b b b b b 1 1 1 1 1 1 b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`, true)
        scene.setTile(14, img`
e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 
e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
e e e e e e e e e e e e e e e e 
e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e 
e 4 e e e e e e e e e e e e 4 e 
e 4 e 3 3 3 3 3 3 3 3 3 3 e 4 e 
e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e 
e 4 e e e e e e e e e e e e 4 e 
e 4 e 3 3 3 3 3 3 3 3 3 3 e 4 e 
e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e 
e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 
e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
e e e e e e e e e e e e e e e e 
e e c c c c c c c c c c c c e e 
e e c c c c c c c c c c c c e e 
e e e e e e e e e e e e e e e e 
`, true)
        scene.setTile(9, img`
d d d d d d d d d d d d d d b c 
d d d d d d d d d d d d d d b c 
c c b c c b c c b c c b c c b c 
c b d c b d c b d c b d c b d c 
c b d c b d c b d c b d c b d c 
c b d c b d c b d c b d c b d c 
c b d c b d c b d c b d c b d c 
c b d c b d c b d c b d c b d c 
c b d c b d c b d c b d c b d c 
c b d c b d c b d c b d c b d c 
c b d c b d c b d c b d c b d c 
c b d c b d c b d c b d c b d c 
c b d c b d c b d c b d c b d c 
c c b c c b c c b c c b c c b c 
d d d d d d d d d d d d d d b c 
d d d d d d d d d d d d d d b c 
`, true)
        scene.setTile(5, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`, false)
        scene.setTile(3, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c b c c c c b c 
c c b c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c b c c c c b c c c c 
c c c c c c c c c c c c c c c c 
c b c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c b c c c c c b c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c b c c c c c c c c c c b c c 
c c c c c c c b c c c c c c c c 
c c c c c c c c c c c c c c c c 
`, false)
        scene.setTile(8, img`
a c c a c c c c c c c c a c c a 
c d d b c c c f f c c c b d d c 
c d d b f f f f c c c f b d d c 
c d d b f c c f f f f f b d d c 
c d d b f f f f f f f f b d d c 
c b b c f f f f f f f f c b b c 
c d d b f f f f f f f f b d d c 
c d d b f f f f f f f f b d d c 
c d d b f f f f f f f f b d d c 
c d d b f f f f f f f f b d d c 
c b b b f f f f f f f f b b b c 
c c c c c c c c c c c c c c c c 
c d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d c 
c b b b b b b b b b b b b b b c 
c b b b b b b b b b b b b b b c 
`, true)
        scene.setTile(12, img`
b e e e e e e c c e e e e e e e 
e 1 1 1 1 1 c d d c 1 1 1 1 1 e 
e 1 1 1 1 c d 1 1 1 c 1 1 1 1 e 
e 1 1 1 c d 1 1 1 1 1 c 1 1 1 e 
e 1 1 c d 1 1 1 1 1 1 1 c 1 1 e 
e 1 c d 1 1 1 1 1 1 1 1 1 c 1 e 
e c d 1 1 1 1 1 1 1 1 1 1 1 c b 
c d 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c d 1 1 1 1 1 1 1 1 1 1 1 1 c d 
e c 1 1 1 1 1 1 1 1 1 1 1 c d e 
e 1 c 1 1 1 1 1 1 1 1 1 c d 1 e 
e 1 1 c 1 1 1 1 1 1 1 c d 1 1 e 
e 1 1 1 c 1 1 1 1 1 c d 1 1 1 e 
e 1 1 1 1 c 1 1 1 c d 1 1 1 1 e 
e 1 1 1 1 1 c 1 c d 1 1 1 1 1 e 
e e e e e e b c d e e e e e e a 
`, true)
        scene.setTile(11, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c b 
c b b c c c c c c c c c c b b b 
c b b b b c c c c c c b b b b b 
c b b b b b b b b b b b b b b b 
c b b b b b b 1 1 b b b b b b b 
c b b b b b d 1 1 d b b b b b b 
c b b b b b 1 1 1 1 b b b b b b 
c b b b b 1 1 1 1 1 1 b b b b b 
c b b b d 1 1 1 1 1 1 d b b b b 
c b b b 1 1 1 1 1 1 1 1 b b b b 
c b b 1 1 1 1 1 1 1 1 1 1 b b b 
c b d 1 1 1 1 1 1 1 1 1 1 d b b 
c b 1 1 1 1 1 1 1 1 1 1 1 1 b b 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
`, false)
        scene.setTile(10, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . f 5 5 5 5 5 f . . . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . f 5 5 f 5 f 5 5 f . . . 
. . . . f 5 5 f 5 f 5 5 f . . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . f 5 5 5 f 5 5 5 f . . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . f 5 f 5 f 5 f 5 f . . . 
. . . . . f . f . f . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, true)
        for (let value4 of scene.getTilesByType(3)) {
            ammo = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . f f f f f f f f f f . . . . . . . . 
. . . . . . f 5 5 f 5 5 f 5 5 f . . . . . . . . 
. . . . . . f 5 5 f 5 5 f 5 5 f . . . . . . . . 
. . . . . . f 5 5 f 5 5 f 5 5 f . . . . . . . . 
. . . . . . f 5 5 f 5 5 f 5 5 f . . . . . . . . 
. . . . . . f 5 5 f 5 5 f 5 5 f . . . . . . . . 
. . . . . . f 5 5 f 5 5 f 5 5 f . . . . . . . . 
. . . . . . f 5 5 f 5 5 f 5 5 f . . . . . . . . 
. . . . . . f 5 5 f 5 5 f 5 5 f . . . . . . . . 
. . . . . . f 5 5 f 5 5 f 5 5 f . . . . . . . . 
. . . . . . f 5 5 f 5 5 f 5 5 f . . . . . . . . 
. . . . . . . f f . f f . f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
            scene.place(value4, ammo)
        }
        for (let value of scene.getTilesByType(10)) {
            shop = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . f 5 5 5 5 5 f . . . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . f 5 5 f 5 f 5 5 f . . . 
. . . . f 5 5 f 5 f 5 5 f . . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . f 5 5 5 f 5 5 5 f . . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . f 5 f 5 f 5 f 5 f . . . 
. . . . . f . f . f . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.shop1)
            scene.place(value, shop)
        }
    }
}
scene.onHitTile(SpriteKind.Player, 7, function (sprite2) {
    if (level == 0) {
        mySprite.destroy(effects.ashes, 200)
        pause(100)
        sprite()
        lobby()
        level = 0
        info.changeLifeBy(-1)
    }
    if (level == 1) {
        info.changeLifeBy(-1)
        mySprite.destroy(effects.ashes, 200)
        pause(100)
        level = 1
        enemyghost.destroy()
        levels()
    }
    if (level == 2) {
        info.changeLifeBy(-1)
        level = 2
        enemyghost.destroy()
        sprite()
        tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 17))
    }
})
function lobby () {
    if (level == 0) {
        scene.setTileMap(img`
f 7 7 7 7 7 1 b b b b b b 1 1 f 
f 7 7 7 7 7 1 b b b b b b 1 1 f 
f 7 7 7 7 7 1 b b b b b b 1 1 f 
f 7 7 7 7 7 1 1 b c c b 1 1 1 f 
f 7 7 7 7 7 7 1 1 2 2 1 1 7 7 f 
f 7 7 7 7 7 7 1 1 2 2 1 1 7 7 f 
f 7 7 7 7 7 7 1 1 2 2 1 1 7 7 f 
f 7 7 7 7 7 7 1 1 2 2 1 1 7 7 f 
f 7 7 7 7 7 7 1 1 2 2 1 1 7 7 f 
f 7 7 7 7 7 7 1 1 2 2 1 1 7 7 f 
f 7 7 7 7 7 7 1 1 2 2 1 1 7 7 f 
f 7 7 7 7 7 7 1 1 2 2 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 2 2 1 1 b b f 
f 2 2 2 2 2 2 2 2 2 2 2 2 9 b f 
f 6 3 3 3 3 3 3 3 3 3 3 3 9 b f 
f 1 1 1 1 1 1 1 1 1 1 1 1 b b f 
`)
        scene.placeOnRandomTile(mySprite, 6)
        scene.setTile(7, img`
5 4 4 5 5 4 4 4 4 2 2 2 4 4 4 4 
4 4 4 4 4 5 5 4 2 2 2 2 4 4 4 5 
4 2 2 2 4 4 5 4 2 2 4 4 5 5 5 5 
2 2 4 2 4 4 5 4 2 2 4 5 5 5 5 4 
2 2 2 2 4 4 5 4 2 2 4 4 5 5 4 4 
4 2 2 2 4 5 5 4 4 4 4 4 4 4 4 2 
2 2 2 4 4 5 5 5 4 4 2 2 2 2 2 2 
4 2 2 4 5 5 5 5 4 2 2 4 2 2 2 4 
5 4 4 4 4 4 4 5 5 4 2 2 2 4 4 4 
4 4 4 2 2 2 4 4 5 5 4 4 4 4 5 5 
4 2 2 2 2 2 2 2 4 5 5 5 5 5 5 5 
5 4 4 2 4 2 2 4 4 5 5 5 4 4 4 5 
5 5 4 2 2 2 4 4 4 5 5 4 2 2 2 4 
4 5 4 4 4 4 5 5 5 5 4 2 4 2 2 4 
4 5 5 5 5 5 5 4 4 4 2 4 2 4 2 4 
4 5 5 5 4 4 4 4 2 2 2 2 4 2 4 4 
`, true)
        scene.setTile(6, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`, false)
        scene.setTile(3, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`, false)
        scene.setTile(15, img`
b d b b b b b b b d b b b b b b 
b d b b b b b b b d b b b b b b 
b d b b b b b b b d b b b b b b 
d d d d d d d d d d d d d d d d 
b b b b b d b b b b b b b d b b 
b b b b b d b b b b b b b d b b 
b b b b b d b b b b b b b d b b 
d d d d d d d d d d d d d d d d 
b d b b b b b b b d b b b b b b 
b d b b b b b b b d b b b b b b 
b d b b b b b b b d b b b b b b 
d d d d d d d d d d d d d d d d 
b b b b b d b b b b b b b d b b 
b b b b b d b b b b b b b d b b 
b b b b b d b b b b b b b d b b 
d d d d d d d d d d d d d d d d 
`, true)
        scene.setTile(1, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c b c c c c b c 
c c b c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c b c c c c b c c c c 
c c c c c c c c c c c c c c c c 
c b c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c b c c c c c b c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c b c c c c c c c c c c b c c 
c c c c c c c b c c c c c c c c 
c c c c c c c c c c c c c c c c 
`, false)
        scene.setTile(11, img`
b d d d d d d c b d d d d d d c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b b d b b b b b b b 
c c c c c c b a c c c c c c b a 
b d d d d d d c b d d d d d d c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b c d b b b b b b c 
d b b b b b b b d b b b b b b b 
c c c c c c b a b c c c c c c a 
`, true)
        scene.setTile(12, img`
c b b b b b b b b b b b b b b c 
c b b b b b b b b b b b b b b c 
c d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d c 
c c c c c c c c c c c c c c c c 
c b b b f f f f f f f f b b b c 
c d d b f f f f f f f f b d d c 
c d d b f f f f f f f f b d d c 
c d d b f f f f f f f f b d d c 
c d d b f f f f f f f f b d d c 
c b b c f f f f f f f f c b b c 
c d d b f f f f f f f f b d d c 
c d d b f f f f f c c f b d d c 
c d d b f c c c f f f f b d d c 
c d d b c c c f f c c c b d d c 
a c c a c c c c c c c c a c c a 
`, true)
        scene.setTile(9, img`
a c c c c c c c c c c c c c c c 
c d d d d b d d d d b c d d b b 
c d d d d b d d d d b c d d b b 
a b b b b c b b b b b c d d b b 
c c f f f f f f f f f c d d b b 
c c c f f f f f f f f c d d b b 
c c c f f f f f f f f c d d b b 
c f c f f f f f f f f c d d b b 
c f f f f f f f f f f c d d b b 
c c f c f f f f f f f c d d b b 
c c f c f f f f f f f c d d b b 
c c f f f f f f f f f c d d b b 
a b b b b c b b b b b c d d b b 
c d d d d b d d d d b c d d b b 
c d d d d b d d d d b c d d b b 
a c c c c c c c c c c c c c c c 
`, true)
    }
}
scene.onHitTile(SpriteKind.Projectile, 10, function (sprite2) {
    shop.say("dont shoot me", 500)
})
scene.onHitTile(SpriteKind.Projectile, 12, function (sprite2) {
    scene.setTile(12, img`
b d d d d d d d d d d d d d d c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
c c c c c c c c c c c c c c c a 
`, false)
    for (let value of scene.getTilesByType(11)) {
        enemyghost = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        enemyghost.follow(mySprite, 30)
        scene.place(value, enemyghost)
    }
    tiles.placeOnTile(mySprite, tiles.getTileLocation(24, 49))
})
info.player1.onLifeZero(function () {
    game.over(false)
})
scene.onHitTile(SpriteKind.Projectile, 2, function (sprite2) {
    if (level == 1) {
        buttonpress()
    }
    if (level == 2) {
        scene.setTile(1, img`
b d d d d d d d d d d d d d d c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
c c c c c c c c c c c c c c c a 
`, false)
        scene.setTile(2, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b 1 1 1 1 1 1 b b b b b 
b b b b 1 1 1 1 1 1 1 1 b b b b 
b b b 1 1 1 1 1 1 1 1 1 1 b b b 
b b b 1 1 1 7 7 7 7 1 1 1 b b b 
b b b 1 1 1 7 7 7 7 1 1 1 b b b 
b b b 1 1 1 7 7 7 7 1 1 1 b b b 
b b b 1 1 1 7 7 7 7 1 1 1 b b b 
b b b 1 1 1 1 1 1 1 1 1 1 b b b 
b b b b 1 1 1 1 1 1 1 1 b b b b 
b b b b b 1 1 1 1 1 1 b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`, false)
    }
})
let ammo: Sprite = null
let bullet: Sprite = null
let shop: Sprite = null
let bulletdirection = 0
let bulletvelocity = 0
let mySprite: Sprite = null
let enemyghost: Sprite = null
let guntype = 0
let level = 0
sprite()
lobby()
game.showLongText("tutorial right, start game up", DialogLayout.Bottom)
game.showLongText("game by dylan", DialogLayout.Bottom)
level = 0
info.setLife(10)
// ammo
info.setScore(20)
guntype = 1
