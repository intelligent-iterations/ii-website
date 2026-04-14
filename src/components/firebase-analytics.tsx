"use client";

import { useEffect } from "react";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA93V_SgyKupykQL6x9uVjgQKtgfhbeGLQ",
  authDomain: "ii-package.firebaseapp.com",
  projectId: "ii-package",
  storageBucket: "ii-package.firebasestorage.app",
  messagingSenderId: "298496698956",
  appId: "1:298496698956:web:ad2ad5850a9438d15d62e9",
  measurementId: "G-6X6SRX4HWG",
};

let analyticsStarted = false;

export default function FirebaseAnalytics() {
  useEffect(() => {
    if (analyticsStarted) {
      return;
    }

    let active = true;

    void (async () => {
      const analyticsSupported = await isSupported();

      if (!active || !analyticsSupported) {
        return;
      }

      const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
      getAnalytics(app);
      analyticsStarted = true;
    })();

    return () => {
      active = false;
    };
  }, []);

  return null;
}
