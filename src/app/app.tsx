import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center p-4">
      <Outlet />
    </div>
  );
}
