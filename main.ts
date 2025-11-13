namespace StatusBarKind {
    export const load = StatusBarKind.create()
}
// guns
// 
// revolver
// 
// sniper
// 
// minigun
function createLoadingScreen () {
    anotherSprite = sprites.create(img`
        11111111111111111111111111111111111111111111
        1ffffffffffffffffffffffffffffffffffffffffff1
        1ffffffffffffffffffffffffffffffffffffffffff1
        1ffffffffffffffffffffffffffffffffffffffffff1
        1ffffffffffffffffffffffffffffffffffffffffff1
        1ffffffffffffffffffffffffffffffffffffffffff1
        1ffffffffffffffffffffffffffffffffffffffffff1
        11111111111111111111111111111111111111111111
        `, SpriteKind.Player)
    FORTNITE_START_SCREEN = sprites.create(img`
        ...................................................................................................
        ...................................................................................................
        ...................................................................................................
        ...................................................................................................
        ...................................................................................................
        ...................................................................................................
        ........................ddddd..ddddd...ddddd..dddddd.ddd..dd..dd.dddddd.ddddd......................
        ........................dbbbbdddbbbbb..dbbbbb.bbbbbbbbbbd.dbb.bb.bbbbbbbbbbbbd.....................
        ........................dbdddddbbdddbb.dbddbbdddbbdddbbbb.dbb.bb.ddbbdddbbbddd.....................
        ........................dbdd..dbd...bb.dbddbbb..bbd..bbbbddbb.bb...bbd..bbbd.......................
        ........................dbbdd.bbd...bbddbbdbb...bb...bb.bbdbb.bb...bbd..bbbbb......................
        ........................dbbbbdbbd...bbddbbbb....bb...bb.bbbbb.bb...bbd..bbbbbd.....................
        ........................dbd...bbd..dbb.dbd.bb...bb...bb..bbbb.bb...bbd..bbd........................
        ........................dbd....bbdddbb.dbd.dbd..bb...bb..dbbb.bb...bbd..bbbdd......................
        ........................dbd....bbbbbbd.dbd..bb..db...db...bbb.bb...dbd..dbbbbd.....................
        .........................b......dbbd....b...db...b....b....dd.db....b....ddddd.....................
        ...................................................................................................
        ...................................................................................................
        ...................................................................................................
        ...................................................................................................
        ...................................................................................................
        ...................................................................................................
        ......dd....ddddd....dddd...ddd...dddddd...ddddd....ddddd..ddddd...dd.dddddd.dd...ddddd...dd...dd..
        .....dbbb...bbbbbd..dbbbbd..dbb...dbbbbbd..bbbbbd...dbbbbb.dbbbbb..dbbdbbbbbbdbb.ddbbbbb..dbb..dbd.
        .....dbbb...bbbbbb.dbbbbbb.dbbbb..dbbbbbbd.bbbbbd...dbbbbb.bbbbbbb.dbb.bbbbbbdbb.dbbbbbbd.dbbb.dbd.
        .....dbbbd..bbd.bbddbb.....dbbbb..dbb..dbb.bb.......dbb....bbd..bbddbb..dbb..dbb.bbd...bb.dbbb.dbd.
        ....dbb.bb..bbddbbddbd.....dbbdbd.dbb...bb.bbddd....dbbdd..bbd..dbddbb..dbb..dbb.bb....bb.dbdbbdbd.
        ....dbbdbb..bbbbbd.bbd....dbbddbb.dbb..dbb.bbbbb....dbbbbd.bbd..dbddbb..dbb..dbb.bb...dbb.dbdbbdbd.
        ....dbbbbbd.bbddbd.dbd....dbbbbbb.dbb..dbb.bb.......dbb....bbd.dbbddbb..dbb..dbb.bb...dbb.dbddbbbd.
        ...dbbbbbbb.bb..bb..bbdddddbbbbbbddbbddbbb.bbddd....dbbdd..bbdddbb.dbb..dbb..dbb.dbbdddbb.dbd.bbbd.
        ...dbb...bbdbb..dbd.bbbbbbbbd...bb.bbbbbb..bbbbbd...dbbbbb.dbbbbbd.dbb..dbb..dbb..bbbbbbd.dbd..bbd.
        ...db....dbddb...bb..dbbb.bb....bb.bbbbd...dbbbbd....bbbbb.dbbbd....bb...bb...bb...dbbb....bd..dbd.
        ...................................................................................................
        `, SpriteKind.Player)
    FORTNITE_START_SCREEN.setPosition(80, 50)
    statusbar = statusbars.create(40, 4, StatusBarKind.load)
    statusbar.setColor(1, 15)
    statusbar.value = 0
    statusbar.max = 501
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    textSprite = textsprite.create("Loading", 15, 1)
    statusbar.setPosition(80, 85)
    anotherSprite.setPosition(80, 85)
    textSprite.setPosition(80, 74)
    while (statusbar.value < 500) {
        statusbar.value += randint(5, 35)
        pause(randint(100, 300))
    }
}
function destroyLoadingScreen () {
    sprites.destroy(FORTNITE_START_SCREEN, effects.none, 100)
    sprites.destroy(textSprite, effects.none, 100)
    sprites.destroy(statusbar, effects.none, 100)
    sprites.destroy(anotherSprite, effects.none, 100)
}
function createStartMenu () {
    scene2 = sprites.create(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddddd3333bb43bacccccacfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddd3333bbb4bbaaccccacfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbdbccbdddd33333ebbb4ebaccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbddd3bddddd3333444be2ebaccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddd333dddd3b3333ebbcee4bccaccccccffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbdddd344ebd3bb333bbbbbceeeaaccac4efccffce3acfffffffffffffffffffffffffffffffffffffffffffffffffffffff
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc43ddd444ecbbbabbbbbbbaceeeaaccac2ecfcffc33accffffcfffffffffffffffffffffffffffffffffffffffffffffffff
        ccccccccccccccceeeeeeccccceeeeecccccccccccccccccccccccccccce43ddd444ecceccebbebbaccccccccccceaacccc333aacffcbbcffffffffffffffffffffffffffffffffffffffffffffffff
        cccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccc444444444eeccccaabe4eccccccccacccccccccd33aaaacce3ba6fffffffffffffffffffffffffffffffffffffffffffffff
        cccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccc4444444e44e44cccecccc4eccccaaccccccccccbe333bacccc4bbbacffffffffffffffffffffffffffffffffffffffffffffff
        ccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccce454445ebcee44cceecccc2accccaacccccccccb33333eecccccccaacffffffffffffffffffffffffffffffffffffffffffffff
        ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccce55445444ecee4e6cecccceacccccaccccccccc33333aeeeccceeeaaccfffffffffffffffffffffffffffffffffffffffffffff
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccece4454444444cce4ecccccccccacccccacccacbce3434beeeecccceeacccfffffffffffffffffffffffffffffffffffffffffffff
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeece4454444444cce44eccceccccccaacc6ccccebe3444422eeebbccceecccfffffffffffffffffffffffffffffffffffffffffffff
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecee44544444eeece4eeeccc66cccaaaa868cccbeb343442222b3bacceeccbcffffffffffffffffffffffffffffffffffffffffffff
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44444444eece4eeeeecccc6ccccca6666cccb34433444222d3b6ccecccc6cfffffffffffffffffffffffffffffffffffffffffff
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebeeeeeeeeeeebbeeee44444444444cceceeeee6cc8cccb68668668ab3444343333b3b66cccccccccfffffffffffffffffffffffffffffffffffffffffff
        eeeeeeeeeeeeeeebbbbbbbbbbbbeeeeeeeeebeeeeeeeeee44bbeee455444444e4ecccceeeeccccccc688666668cb34433434334bcc6cccccccccfffffffffffffffffffffffffffffffffffffffffff
        eeeeeeeeebbbbbbbbbbbbbbbbbbbbbbeeeeebeeeeeeeeeb44bbbee45444444e44ecccceeeec6ccccc688666666cb44443433344ccc8cccccccccfffffffffffffffffffffffffffffffffffffffffff
        eeeeeeee44444444444444444444bbbbbbeebeeeeeeeeee444beee444444444eeeceecccecc6cccccc666666a8b33444333334bccc8cccccccccfffffffffffffffffffffffffffffffffffffffffff
        eeeee4444444444444444444444444bbbb44bbbbebbebee443bbb4544e44444eeee4eccccccc6ccccc6666666ab434443333bbcccc86cccccccccffffffffffffffffffffffffffffffffffffffffff
        ee4444444444444444444444444444444444b4bb433bbebeebeee455444444eeeeeeeeecccccccccccc666666ab443433334bccccc86ccccccc8ccfffffffffffffffffffffffffffffffffffffffff
        444444444444444444444444444444444444b4bb344bbebbbbbee455444444eecceeeecccccccccccccc6a666ab443333334ecccccc66cccccc8cf68fffffffffffffffffffffffffffffffffffffff
        4444444444444444444444444444444444444444344bbbbbbbbbb4444ee4eeeccceeccccccccccccccccd3b66a3333333334cc6ccccc68cccc88ccccfffffffffffffffffffffffffffffffffffffff
        44444444444444444444444444444444444444444443b4444bbbb444becee44ecce4eccccccccccccccb33aa8b43433333becccccccc86ccc888c6cffffffffffffffffffffffffffffffffffffffff
        44444444444444444444444444444444444444434344444444444444eece22eece4eccfccccccccccccd3babab33333333bcccccccccc8686688c8ccfffffffffffffffffffffffffffffffffffffff
        444444444444444444444444444444444444444444d44444444444444ee2244eee4eecccccffccccccb33bbab3333d333bccccccccccc888866688cc6cfffffffffffffffffffffffffffffffffffff
        44444444444444444444444444444444444444444443344444444444444eee44eeeeccccccccccecccd33babb3b33333bccc8cccccccc8c8866686c6ccfffffffffffffffffffffffffffffffffffff
        44444444444444344444444444444444444444444444433444442442444eee4eeeeeeceeeecfed3bbb33b3aabab33343bccc8cccccccc888886668666ccffffffffffffffffffffffffffffffffffff
        4444444444444444444444444443333444444444444443444444244e444eee2eeeeeebbecccfb33babbb3baaaa33344bcc8c8ffccceccc88c86666866cccfffffffffffffffffffffffffffffffffff
        44444444444444444444444444444443344444444444444444ee4444444eee2eeeee44bcccccd3bbbabb3aaaabbbb4bbcc888ffffcbbcc8ccc8888866ccccffffffffffffffffffffffffffffffffff
        4444444444444444444444444444444333333333344344444ecc444444244eeeccce44ebffcb33bbabbaaabaabbebeccc8c88ffffcebbc888ccccc888ccccccffffffffffffffffffffffffffffffff
        4444444444444444444444444444444444444334333443444ecce22444244eeeeeecd4bccccd33eaabbbbbbbcbbecccc88fcffffffcbbc8888c88cc8ccccccccfffffffffffffffffffffffffffffff
        44444444444444444444444444444444443443433333444444e4424424244eeeeeeeeecccce332eeebbbbeccccccccc88ffffffffccbbc888cc8c88cc8ccccccccfffffffffffffffffffffffffffff
        44444444444444444444444444444444444444443343445444444444e4444eeeeeeeccceecb34bae4bcccccccccccccccffffffffccbbc888cc8c88888ccccccccccfffffffffffffffffffffffffff
        4444444444444444444444444444444444444444444344544244444beeeeeeeecceeccceee333344ecccccccccccccccfffffffffccbbcccccc8c88888ccccccccccfffffffffffffffffffffffffff
        4444444444dddddddddddddddddd44444444444444344554444444eecccccccecccccccfce33b44ecccccccccccccccfffffffffffcebec6cc888888c8cccccccccccffffffffffffffffffffffffff
        444444444dddddddddddddddddddddddddd3333433d4444444eeeeeecccccccccccccceccb44becccccc88c8cccfccfffffffffffccccbcccc88888888ccccccccccccccfffffffffffffffffffffff
        4444444dddddddddddddddddddddddddddddd4ddd4d444444eeeeeeeeccccccccccccccce444bcccccccfffffcffffffffffffffcccccbcccccc68c8888ccccccccccccccffffffffffffffffffffff
        44444ddddddddddddddddddddddddddddddddd3333344444eeeeeeeeeeecccccffcceeeee44ecccccccfffffffffffffffffffffccccebbcccccccc88888ccccccccccccccccfffffffffffffffffff
        4444ddddddddddddddddddddddddddddddddd44be44ee4eeee2eeeeeeeecccccccccccce44ecccccccffffffffffff88ffffffffccccebbbccccccccccc8cccccccccccccccccccffffffffffffffff
        44ddddddddddddddddddddddddddddddddd344e4444eeeeeee22eeeeeecccccfcceceeeeecccccccccfffffffffffffffffffffffccceebbbcccc8fcccccccccccccccccccccccccfffffffffffffff
        dddddddddddddddddddddddddddddddddd4eebe4eeeeeeeee2ee2eeeeeccffccfceeeecccccccccccc8ff88f88f888cffffffffffccccbbbec8f88fffc8cc88ccccccccccccccccccccffffffffffff
        dddddddddddddddddddddbddddddddd44444ee4eeeeeeeeeee2e22eeeecccffccfce4eccccccc8fff88ffff88888888fffffffffffcccccccfffffffffff8888cccccccccccccccccccccccffffffff
        ddddddddddddddddddddde5ddddddd44e4444e4eeeeeeeeeee2e44ebeccccccfcfce4ccccccccffffc8fffffff888888ffffffffffcccccc8fffffffffffc8888cccccccccccccccccccccccfffffff
        dddddddddddddddddddddeddddddd44ee222444eeeeeeeee22224eeccccccccccceeecccccc8fffcfffffffff8c88888f8fffffffcccccc88fffffffffffff888ccccccccccccccccccccccccccffff
        ddddddddddddddddddddddd5dbdd4444e224242eeeeeeeee22244eebecccccceeeeeecccccc8ffffff88f88c8888888888cc8fff88ccccc88ffffffffffffffc8cccccccccccccccccccccccccccccf
        dddddddddddddddddddddbd5deb44444444444eeeeeeeeee2244ebeccceeeceeeeccccccc88ffffff88f888888888888c8ccc88888888c8ffffffffffffffff888ccccccccccccccccccccccccccccf
        ddddddddddddddd5ddd5dc7dde44444224444eee4e24eeee224bccceee4eeeeccccccccc888fc88888f88c888868888888ccc888c8fec8ffffffffffffffffff888ccccccccccccccccccccccc88ccc
        ddddddddddddddddd5ddbcbdddd44444444444eeeeeeee244eeccceeeeecccccccccccccc8f8888888888888888888888888ccc888c4c888888888ffffffffff888cccccccccccccccccccccccccccc
        ddddddddddddddddd5ddecbddd5444444444444eee2eeee4bcceeeeeeecccccccccccccccff8ccfff8888888888888888888ccc888cbc88888888888888888ff888cccccccccccccccccccccccccccc
        ddddddddddddddddddddecebb554444444444e4442eeceeeeeeeeeeeccccccccccffcccc8f88f8fff88888886666666688888888c8ccc8888888888888888888888cccccccccccccccccccebbcccccc
        ddddddddddddddddddddecccbd54444444444e244eeeceeeeeeeeccccccccccccffffffffccf88fff88888866666666666668888c88888888888888888888888886ccccccccccccccccccc44eeccccc
        ddddddddddddddddddddccc8cdd4444ee44444444eeeeeeeeeeccccccccccccccffffffcffffcc88c88888666666666666666688888888888888888888888888886cccccccccccccccccce44eec6ccc
        dddddddddddddddddddbcccccb4444eecce444444eeeeeeeeeecccccccccfccccfffff8cfffff88c88888666666c666666666666888888888888888888888888866ccccccccccccccccc8b44eeebccc
        dddddddddddd111d1ddecceccce444bcce44beeeeceeeeeeeecccccccfcfffcc8ffffc8fff88888888886666666c66666666666666688888888888888888888866ccccfccccccccccccccc44eebcccc
        ddddddddd111111d1d3cccccc8ce4eeeccbeeeceeeeeeeeecccccccccffffffffffffcffffff888888886666b66c66666666666666666688888888888888888666ccceccfccc6cccccccccc444c8ccc
        dddddddd11111111ddeefcffccccccbbceeccccccceeeccccccccccffffffffffffffff8fff88888c8866666c66c66666666666666666666888888888866666666cceeccfccc6666ccccccccc888cc8
        dddd111d1111111dbeeecfccccc6bcbeccccceecceeecccccccccccffffffffffffffffcffff888886666b66ccbc6666666666666666666666888666866666c6666ceeccffc666666c88cccccccccc8
        ddddd11ddbbbbddbbeecccccccccbeccbcceeeeeecccccccccccf88ffffcccfffffff8cff88f8c8886666c6ccccc866666666666666666666666666666c666c666ceeecccff666666666ccccccccc88
        dddd1dd3ebecceeeececfccccc6cccccccbbcccccccccccfffffffffffccccfffffff8cf8888c8888666becccffcf66666666666666666666666666666c666c66cceeecffff86666666666888888888
        dd1111deeeeeeeeecccccccccccccccccc6ccccccccccc88fffffffffffffffffffff8f8888c8888886bcefccffff886666666666666666666666666666c6cc66ceeeecfffffc666666666688888888
        d1111d4eeeeccceecccccccffcfccccffcccccccccccccc888ff8ffffffffffffffff88888c88888888eeccccfffffc6666666666bccccccc666666c66cc66c6beeeeccfffff8666cc6666666888888
        111dbeebeecccbeccccfcccccccccccccffffcccccccccccccffffffffffffffffff8c888888888886cebcffcffcfcc6666666666ceecccccc66666c666c66cceeeeeecfffffffcccff866666668888
        d113eeeecccccccfcccccfcecccccccccc8ccfcccccc66cccc8ffffffffffffffffff88c888c8888ccbeccffcffffffc669666666beeccc66666666cc66c66cbeeeeeeffcffffffffffc66666666888
        1ddeeecffccccefccccccccccccccccccccccccccc8ccc6cccccfffffffffffffffff8888888888cccccccfffffffffff696666666beec6666666666c66c6ceeeeeecfeeecffffffffff86666666688
        1ddbeffccccccfceecccffffcccccfffffcccccccccccccccccccffffffffffffcfffc88888888ceececfcffcccffffff86699666666666666666666c66ccbe2eeeeffeeeccccffffffcccc86666666
        dbeeffccffffcccccfffffcccccccffffcfffffffccc8cccfffcccffffffffcff8888f8c88888ccbeeeececccccfffcfcccc699666666666666666666ccceeeeeeeeeceeceecfffffccccfff8666666
        beecfccfffffccffffffffcccccccffffffffffffccccfcccffccccfffffff8888888888888ccbceeeeeeeecccfffcccfccc6999996996666666666666ceeee4eeeeeecfeeecfffffcfffffff866666
        eeeffcffffccfffffffffffccccffffccccffffcccccccccccccccccccffffc8888ccc88888bceeeeeeeeeeeccfcfcccccccc699999999969666666666e44e44e4eeeccfeeccfffffffffffff866666
        ceeffeffffcfffffffcffffcccfffffffffffffcfccccccccccccccccccfffc88cccccc886ccceeeeccceececccccccccccccc9999999999996666666b444e4e44eeeeccfccffffffffffffff866666
        cceffefffcfffffcccfffffccfffffffffffffffcccccccccccccccccccccc88ceecccc666beeeeeeeeeeeeeccccccccccccccc6999999699996666ece44e44e4eeeecfffffffcccfffffffff866666
        cfcffcffcffffccffffffffffffffffffffffcfffccccccccccccccccccccccccecccc666bee444ee244eeeeccccccccccccccc6999669666669dbcbeb4444e4eeecccfffffffcffffffffffff66666
        cffffcffcfffccfffffffffccfffffffffffffcffcccccccccccccccccccccc866cc666964444eee44444eeeccccccccccccccccc69b66999666beeccbee44ecccffffffffffffffffffffffff86666
        cffffeffcfffcffccffffffffffffffcccccccccccccccccccccccccccc86666666696997544eee444444eeeceecccccccccccccc666666999b44eececcceeccccfffffcccfffffffffffffffff6666
        ffffcffcfffffffcffffffffffffffccccccccccccccccccccccccccccc66666666666744544444444444eeeeeeeeeeeccccccccccc66cc66b44eeeeeecccffccccccffffffffffffffffffffff8666
        ffffcffcffffffcffffffffffffffcfffccc8ccccc66cccccccccccc66666666bcccc444444444444444e4eeeeeeeecccccccccccc66ccc6b444eeeeeccfffffcccfffffffffffffffffffffffff866
        fffffffffffffcffffffffffffffffffcccc6c8cccc66cc66ccccccccc66ccbbbbe4444444444444444444eeeeeeeeeeccccccccc666666ce444eeeeeccfffffccfffffffffffffffffffffffffff86
        fffffffffffffffffffffffffcccccffccccccffcccccccccccccccceeebbbbbb4444444444444444b44bbeeeeeccccccccccc666666b4eeb4eeeeeeecffffffccffffffffffffffffffffffffffff6
        fffffffffffffffffffffffcccffffffccfffffffccccccccccccccbbbbbbbbb444444444bbbb77bbbbbbbbeeeeeeeeccccccccc6666b4eeeeccceeecffcccfcfffffffffffffffffffffffffffffff
        ffffffffffffffffffffffcffffffffffffffffffccccccccccccbbbbebbbeeeeeebbbbbbbbbbbbbbbbbbbbeeeeeeeeecebccffcc6644eeecccfeeecfcccfffffffffffffffffffffffffffffffffff
        fffffffcffffffffffffffffffffffffffffffffcccc886666bbbbbeccccccceeeebbb766667bbbbbbbbbbbbeeeeeecccbeccfeeeceeeeeecfffceccfcfffffffffffffffffffffffffffffffffffff
        fffffffcfffffffffffffffffffffffffffffffcccc68666beeeeebecccccccbbbb66666666666b7bbbbbbccccccccc66beccfeeeeebeeecfffffcccfffffffffffffffffffffffffffffffffffffff
        fffffffcffffffffffffffffffffffffffffffcccccc66ccccccccccc66666666666bc66666666666bbbbccccccc66666beccceecceeeccffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffcccffffccccccccc666666666666666cccc666666666666666666666666beeeeecccfffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffcffffffffffffffffcccccccfffccccc8666666666666666666666666666666666666666666666beeeeecfffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffccffffffcffffccc86666696696666666666666666666666666666666666666beeeccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffccfffffffffffffcc66cecc6666666666666666666666666666666666666666cbeecffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffcfffffffffffffffffffcffffffffffffcccffcecccccc6cc6666666666666666666666666666bcc66cceecfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.Player)
    scaling.scaleByPercent(scene2, 40, ScaleDirection.Vertically, ScaleAnchor.Middle)
}
let scene2: Sprite = null
let textSprite: TextSprite = null
let statusbar: StatusBarSprite = null
let FORTNITE_START_SCREEN: Sprite = null
let anotherSprite: Sprite = null
destroyLoadingScreen()
createLoadingScreen()
color.startFade(color.Black, color.originalPalette, 1000)
createStartMenu()
