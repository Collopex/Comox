import { Provider } from "react-redux";
import { store } from "./store";
import { LogBox } from "react-native";
import { useLayoutEffect, useState } from "react";
import AuthNavigation from "./AuthNavigation";
import LoadingAnimation from "./components/LoadingAnimation";
export default function App() {
  LogBox.ignoreAllLogs();

  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <Provider store={store}>
      {loading ? <LoadingAnimation /> : <AuthNavigation />}
    </Provider>
  );
}
