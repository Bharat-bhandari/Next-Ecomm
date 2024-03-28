import "@/assets/styles/globals.css";

import AuthProvider from "@/components/RestComponents/AuthProvider";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className="text-white font-playfair "
          // suppressHydrationWarning={true}
        >
          <main>{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
