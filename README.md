# DS Fan Companion App

Simple fanmade companion application for Dungeon Saga board game. Powered by cordova and Onsen Ui 2.

![Screen 1](https://github.com/ddomurad/dsfancompanionapp/blob/master/screens/screen1.png)
![Screen 2](https://github.com/ddomurad/dsfancompanionapp/blob/master/screens/screen2.png)
![Screen 3](https://github.com/ddomurad/dsfancompanionapp/blob/master/screens/screen3.png)
![Screen 4](https://github.com/ddomurad/dsfancompanionapp/blob/master/screens/screen4.png)

Andorid release build:

```
> cordova prepare
> cordova build --release
> jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore <KEY_STORE_PATH> ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk DS-Fan-Companion
> zipalign -v 4 ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk ./DS-Fan-Companion.apk
```

