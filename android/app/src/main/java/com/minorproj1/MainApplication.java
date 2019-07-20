package com.minorproj1;

import android.app.Application;

import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;                       import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactApplication;
import pro.equinoxstudio.react_native_alarm_clock.RNAlarmClockPackage;
//import io.invertase.firebase.RNFirebaseAdMobPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new RNAlarmClockPackage(),
          //new RNFirebaseAdMobPackage(),
          new VectorIconsPackage(),
          new MainReactPackage(),
          new RNFirebasePackage(),
          new RNFirebaseMessagingPackage(),
          new RNFirebaseNotificationsPackage(),
          new RNGestureHandlerPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}

// public class MainApplication extends Application implements ReactApplication {

  /**
 * Called if InstanceID token is updated. This may occur if the security of
 * the previous token had been compromised. Note that this is called when the InstanceID token
 * is initially generated so this is where you would retrieve the token.
 */
// @Override
// public void onNewToken(String token) {
//     Log.d(TAG, "Refreshed token: " + token);

//     // If you want to send messages to this application instance or
//     // manage this apps subscriptions on the server side, send the
//     // Instance ID token to your app server.
//     sendRegistrationToServer(token);

//   @Override
//   public ReactNativeHost getReactNativeHost() {
//     return mReactNativeHost;
//   }

//   @Override
//   public void onClick (View v) {
//     // Get token
//     // [START retrieve_current_token]
//     FirebaseInstanceId.getInstance().getInstanceId()
//       .addOnCompleteListener(new OnCompleteListener<InstanceIdResult>() {
//         @Override
//           public void onComplete(@NonNull Task<InstanceIdResult> task) {
//             if (!task.isSuccessful()) {
//               Log.w(TAG, "getInstanceId failed", task.getException());
//               return;
//             }

//           // Get new Instance ID token
//             String token = task.getResult().getToken();

//             // Log and toast
//             String msg = getString(R.string.msg_token_fmt, token);
//             Log.d(TAG, msg);
//             Toast.makeText(MainActivity.this, msg, Toast.LENGTH_SHORT).show();
//       }
//     });

// }
// }
