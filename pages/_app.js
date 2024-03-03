import { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import Loader from "./Loading/Loading";

const poppins = Poppins({
  weight: ["200", "300", "400", "700"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const visitedBefore = localStorage.getItem("visitedBefore");
    if (visitedBefore) {
      // User has visited before
      setLoading(false);
    } else {
      // First visit
      localStorage.setItem("visitedBefore", "true");
      const timeoutId = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  return (
    <main className={`${poppins.className} ${loading ? "opacity-0" : "fade-in"}`}>
      {loading && <div />}
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
