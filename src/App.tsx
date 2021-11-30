import React from "react";
import styles from "./App.module.css";
import { AppHeader, AppFooter } from "./components";

function App() {
  return (
    <div className={styles.App}>
      <AppHeader />
      <AppFooter />
    </div>
  );
}

export default App;
