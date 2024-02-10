The old Building Blocks 1-5 and 6-8 app is renewed as Building Blocks 1-8. The goal of this combined project was to having both BB and BB++ app in a single package. Earlier we had two different app one for 1-5 and another one for 6-8 both had more than 400+ interactive games. In Building Blocks 1-8 we decided to combine both the app as well as to make the app completely online. The last version of BB app was 8.1.6(with the version code 66) and BB++ was 1.1.3(with version code 14) and the current version of this combined app is 8.1.9(with version code 68). 
3.3 Design Flow
Initially we wanted a main screen to divide BB and BB++ inside Building Blocks 1-8, we decided to have both the app go in a separate way as it was working as earlier. We created a new screen called MainScreen which will have two clouds representing grade 1-5 and 6-8 where the player can decide the grade they want to continue. As mentioned above both the app will work differently, they will have a separate database, assets set, server script, grade JS scripts, user statistic (or user progress).
3.3.1	Converting BB app fully online 
The BB app was not completely online, the app was working in offline as well. In order to make the app fully online we decided to have a separate asset structure in the server. We created a new asset structure in the server under /home/ubuntu/abbmath/BuildingBlocksAssets/ folder.

3.4 Procedures used for combining
	Create a main screen file called mainScreen.js add two options (clouds) BB 1-5 & BB 6-8. Add this page in common script folder. 
	Create two folders inside the www named BB and BBPP add the respective scripts and folder inside that 
	Change the path appropriately in index.html, index.js also in preloader.js 
	In index.js call the mainScreen.js file
	In mainScreen based on the option the user chooses (BB 1-5 / BB 6-8) it will redirect the user to respective section
	To make BB 1-5 online change the window.baseUrl as follow
window.baseUrl = "https://abbmath.klp.org.in/BuildingBlocksAssets/";
	Rename database related scripts if it same for BB and BBPP
	Rename the telemetryInitializer JS for BBPP since we can’t have same JS for both BB and BBPP. Once you rename it, you need to change the telemetryInitializer calls in each game level.
	Regarding the assets of BB, created a separate folder for BB inside the server and the folder structure looks like this

	Since our cordova android version was 12 the default cordova splash screen cannot be removed so we replaced it with our app icon, the procedure as follows
•	Create a folder at root level – res/screen/android/splash.png
•	Add below code lines in your config.xml page
 <preference name="AndroidWindowSplashScreenAnimatedIcon" value="res/screen/android/ic_launcher_monochrome.png"/>
<preference name="AndroidWindowSplashScreenBackground" value="#85C1E9" />

	Follow these commands once you done with all the changes
•	Cordova clean android
•	Cordova build android

