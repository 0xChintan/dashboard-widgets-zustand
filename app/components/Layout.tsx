"use client"
import { useState } from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-5 left-4 bg-gray-800 text-white p-2 rounded z-40"
      >
        Toggle Dark Mode
      </button>
      {children}
    </div>
  );
};

export default Layout;
