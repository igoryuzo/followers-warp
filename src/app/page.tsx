"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "@/hooks/use-window-size";
import { sdk } from "@farcaster/frame-sdk";

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [followerCount, setFollowerCount] = useState(0);
  const { width, height } = useWindowSize();

  useEffect(() => {
    // Initialize the app and hide splash screen
    const initApp = async () => {
      try {
        await sdk.actions.ready();
        console.log("App is ready!");
      } catch (error) {
        console.error("Error initializing app:", error);
      }
    };

    initApp();

    // Start the celebration animation sequence
    setShowConfetti(true);

    // Hide confetti after 5 seconds
    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    // Animate follower count
    const countInterval = setInterval(() => {
      setFollowerCount((prev) => {
        if (prev < 200) {
          return prev + 1;
        }
        clearInterval(countInterval);
        return 200;
      });
    }, 15);

    return () => {
      clearTimeout(confettiTimer);
      clearInterval(countInterval);
    };
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#472b91] p-6 overflow-hidden">
      {/* Confetti animation */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={300}
          gravity={0.2}
          colors={["#472b91", "#6b46c1", "#9f7aea", "#e9d8fd", "#ffffff"]}
        />
      )}

      {/* Main content with simpler layout */}
      <div className="w-full max-w-[390px] mx-auto text-center flex flex-col items-center justify-center">
        {/* Follower count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <h1 style={{ color: "#FFFFFF", fontSize: "140px", fontWeight: 800 }}>{followerCount}</h1>
          <h2 style={{ color: "#FFFFFF", fontSize: "42px", fontWeight: 700 }}>Followers!</h2>
        </motion.div>

        {/* Thank you message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10"
        >
          <p style={{ color: "#FFFFFF", fontSize: "24px" }}>
            Thank you to all my followers.
            <br />
            Much love ❤️!
          </p>
        </motion.div>
      </div>
    </main>
  );
}
