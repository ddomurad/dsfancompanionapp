# dsfancompanionapp
Simple fanmade companion application for Dungeon Saga board game. Powered by cordova and Onsen Ui 2.

Release build:

```
> cordova prepare
> cordova build --release
> jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore <KEY_STORE_PATH> ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk DS-Fan-Companion
> zipalign -v 4 ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk ./DS-Fan-Companion.apk
```

