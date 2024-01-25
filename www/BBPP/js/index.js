// Game.indexBBPP = function () {

// };

// Game.indexBBPP.prototype = {

var app = {

  // Application Constructor
  initialize: function () {
    console.log("initialize app bbpp");
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  onDeviceReady: function () {
    this.receivedEvent('deviceready');
    AndroidFullScreen.immersiveMode(successFunction, errorFunction);
  },


  receivedEvent: function (id) {

    console.log("received event");
    /*var onSuccess = function(result) {
      // handle result  
      console.log(result);
      };

      var onError = function(err) {
      // handle error
      console.log(err);
      }

      var options = {
          devKey: 'LW6HqaFQY7CtGB2MKz4nWE',
          isDebug: false
      };

      console.log(window.plugins.appsFlyer);

      window.plugins.appsFlyer.initSdk(options, onSuccess, onError);

      facebookConnectPlugin.activateApp(onSuccess, onError);

      FirebasePlugin.setCrashlyticsCollectionEnabled();

      

     bbreglogin.initializeDB();

     screen.orientation.lock('portarait');

     FirebasePlugin.onMessageReceived(function(message) {
        console.log("Message type: " + message.messageType);
        if(message.messageType === "notification"){
            console.log("Notification message received");
            if(message.tap){
                console.log("Tapped in " + message.tap);
            }
        }
        console.dir(message);
    }, function(error) {
        console.error(error);
    });


  */

    // bbreglogin.initializeDB();

    var game = new Phaser.Game(540, 960, Phaser.CANVAS, 'phaser_canvas', { preload: this.preload, create: this.create }, false, true, null);
  
    game.state.add('boot', Game.boot);
    game.state.add('bootbbpp', Game.bootbbpp);
    game.state.add('langSelectScreen', Game.langSelectScreen);
    game.state.add('preloader', Game.preloader);
    game.state.add('preloaderbbpp', Game.preloaderbbpp);
    game.state.add('userprogress', Game.userprogress);
    game.state.add('userprogress2', Game.userprogress2);
    game.state.add('userprogressbbpp', Game.userprogressbbpp);
    game.state.add('userprogress2bbpp', Game.userprogress2bbpp);
    game.state.add('appLoginScreen', Game.appLoginScreen);
    game.state.add('appLoginScreenbbpp', Game.appLoginScreenbbpp);
    game.state.add('appLoginEditScreen', Game.appLoginEditScreen);
    game.state.add('appLoginEditScreenbbpp', Game.appLoginEditScreenbbpp);
    game.state.add('editLangScreen', Game.editLangScreen);
    game.state.add('editLangScreenbbpp', Game.editLangScreenbbpp);
    game.state.add('registrationLangSelectionScreen', Game.registrationLangSelectionScreen);
    game.state.add('registrationLangSelectionScreenbbpp', Game.registrationLangSelectionScreenbbpp);
    game.state.add('registrationPicSelectionScreen', Game.registrationPicSelectionScreen);
    game.state.add('registrationPicSelectionScreenbbpp', Game.registrationPicSelectionScreenbbpp);
    game.state.add('index2', Game.index2);
    game.state.add('index2bbpp', Game.index2bbpp);

  },

  preload: function (game) {
    game.load.video('demo', './demo.mp4');
    game.load.image('splash', 'BBPP/assets/splash.png');
    game.load.image('helpIcon', './helpIcon.png');
    game.load.image('closeIcon', './closeIcon.png');
    game.load.image('registrationbg_1', 'BBPP/assets/registrationbg.png');
    game.load.image('graphicBg', 'BBPP/assets/graphicBg.png');
    game.load.image('carrotIcon', 'BBPP/assets/carrotIcon.png');
    game.load.image('regBackArrow', 'BBPP/assets/regBackArrow.png');
    game.load.image('userEditBtn', 'BBPP/assets/userEditBtn.png');
    game.load.image('userProgressBtn', 'BBPP/assets/userProgressBtn.png');
    game.load.atlas('fish', 'BBPP/assets/fish.png', 'BBPP/assets/fish.json');
    game.load.atlas('butterfly', 'BBPP/assets/butterfly.png', 'BBPP/assets/butterfly.json');
    game.load.atlas('flower', 'BBPP/assets/flower.png', 'BBPP/assets/flower.json');
    game.load.atlas('parrot', 'BBPP/assets/parrot.png', 'BBPP/assets/parrot.json');
    game.load.atlas('sun', 'BBPP/assets/sun.png', 'BBPP/assets/sun.json');
    game.load.atlas('tree', 'BBPP/assets/tree.png', 'BBPP/assets/tree.json');
    game.load.atlas('regTickBtn', 'BBPP/assets/regTickBtn.png', 'BBPP/assets/regTickBtn.json');
    game.load.atlas('regandstsrtBtn', 'BBPP/assets/regandstsrtBtn.png', 'BBPP/assets/regandstsrtBtn.json');
    game.load.atlas('regloding', 'BBPP/assets/loding.png', 'BBPP/assets/loding.json');
    game.load.image('registrationbg', 'BBPP/assets/registrationbg.png');
    game.load.atlas('mainCloud', 'BBPP/assets/gradeSelectionScreenAssets/grade1Cloudnew.png', 'BBPP/assets/gradeSelectionScreenAssets/grade1Cloudnew.json');

    game.load.bitmapFont('regFont', 'regFont.png', 'regFont.xml');
  },

  create: function (game) {
    console.log("I am in index.js");

    //* Date 12-08-2023sw
    //* Generating BBplusplus app in two ways online & offline
    //* Here we are setting a variaable to indicate which apk we are going to generate 
    //* app_Mode is variable we are going to use to indicate online/offline
    this.app_Mode = "online"; //online//* Set to to offline if you want to generate offline app
    if (this.app_Mode == "offline") {
      window.languageSelected = "English"; //* Set this variable based on the language you need to generate - Offline
    }
    console.log(this.app_Mode, "App MODE ///");
    game.input.maxPointers = 1;
    window.app_Mode = this.app_Mode;
    console.log(window.app_Mode, "window MODE ///");
    game.stage.disableVisibilityChange = true;

    //setting scale and orientation for the game.
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.updateLayout(true);
    game.scale.forceOrientation(true, false);


    game.stage.backgroundColor = '#71c5cf';
    var splash = game.add.sprite(game.world.centerX, game.world.centerY, 'splash');
    splash.scale.setTo(1);
    splash.anchor.setTo(0.5);

    console.log(game);

    this.game.add.text(0, 0, "hack", { font: "1px myfont", fill: "#FFFFFF" });
    this.game.add.text(0, 0, "hack", { font: "1px gradefont", fill: "#FFFFFF" });
    this.game.add.text(0, 0, "hack", { font: "1px regfont1", fill: "#FFFFFF" });
    this.game.add.text(0, 0, "hack", { font: "1px regfont2", fill: "#FFFFFF" });
    this.game.add.text(0, 0, "hack", { font: "1px regfont3", fill: "#FFFFFF" });
    this.game.add.text(0, 0, "hack", { font: "1px regfont4", fill: "#FFFFFF" });



    game.time.events.add(300, function () {
      game.time.events.removeAll();
      /*game.width = 960;
        game.height = 540;
      console.log(game);
  
      screen.orientation.lock('landscape');*/
      // @@ // game.state.start('appLoginScreen', true, false, this.app_Mode);
      screen.orientation.lock('portrait');
      AndroidFullScreen.setSystemUiVisibility(AndroidFullScreen.SYSTEM_UI_FLAG_LOW_PROFILE, null, null);
      game.scale.setGameSize(540, 960);
      this.scale.forceOrientation(true, false);

      var backBg = this.add.sprite(this.world.centerX, this.world.centerY, 'registrationbg');
      backBg.scale.setTo(1);
      backBg.anchor.setTo(0.5);



      var titleBar_start = this.add.graphics(0, 0);
      titleBar_start.anchor.setTo(0.5);
      titleBar_start.lineStyle(2, 0x000000, 0.8);
      titleBar_start.beginFill(0x4E342E, 1);
      titleBar_start.drawRect(0, 0, 540, 80);


      var titleTxt_start = this.add.text(this.world.centerX - 40, 45, "Building Blocks");
      titleTxt_start.x = Math.round(titleTxt_start.x);
      titleTxt_start.anchor.setTo(0.5);
      titleTxt_start.align = 'center';
      titleTxt_start.font = 'regfont4';
      titleTxt_start.fontSize = '22pt';
      titleTxt_start.fontWeight = 500;
      titleTxt_start.fill = '#FFFFFF';
      titleTxt_start.wordWrap = true;
      titleTxt_start.wordWrapWidth = 500;

      var cloud1_5 = this.add.sprite(190, 210, 'mainCloud');
      // cloud1_5.anchor.setTo(0.5);
      cloud1_5.inputEnabled = true;
      cloud1_5.input.useHandCursor = true;
      cloud1_5.events.onInputDown.add(() => {
        bbreglogin.initializeDB();
        game.state.start('appLoginScreen', true, false);
      }, _this);
      var cloud1_5Txt = this.add.text(210, 198, ' \n' + 'Grade 1-5' + '\n ');
      // cloud1_5Txt.anchor.setTo(0.5);
      cloud1_5Txt.align = 'center';
      cloud1_5Txt.font = 'gradefont';
      cloud1_5Txt.fontSize = 34;
      cloud1_5Txt.fontWeight = 'normal';
      cloud1_5Txt.fill = '#563814';
      cloud1_5Txt.wordWrap = true;
      cloud1_5Txt.wordWrapWidth = 500;

      var cloud6_8 = this.add.sprite(190, 410, 'mainCloud');
      // cloud6_8.anchor.setTo(0.5);
      cloud6_8.inputEnabled = true;
      cloud6_8.input.useHandCursor = true;
      cloud6_8.events.onInputDown.add(() => {
        // bbregloginbbpp.initializeDB();
        // game.state.start('appLoginScreenbbpp', true, false, this.app_Mode);
      }, this);
      var cloud6_8Txt = this.add.text(210, 398, ' \n' + 'Grade 6-8' + '\n ');
      // cloud6_8Txt.anchor.setTo(0.5);
      cloud6_8Txt.align = 'center';
      cloud6_8Txt.font = 'gradefont';
      cloud6_8Txt.fontSize = 34;
      cloud6_8Txt.fontWeight = 'normal';
      cloud6_8Txt.fill = '#563814';
      cloud6_8Txt.wordWrap = true;
      cloud6_8Txt.wordWrapWidth = 500;


    }, this);

  },


  // };
};

function successFunction() {
  console.log('Immersive mode set successfully.');
}

function errorFunction(error) {
  console.error('Error setting immersive mode:', error);
}
app.initialize();