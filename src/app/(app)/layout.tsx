"use client";

import { AppHeader } from "~/components/headers/AppHeader";
import { Toaster } from "~/components/ui/toaster";
import { WithPrivateRoute } from "~/utils/withPrivateRoute";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto flex flex-col items-center justify-between space-x-0">
      <AppHeader />
      {children}
    </div>
  );
}

export default layout;
