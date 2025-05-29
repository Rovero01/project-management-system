import { Navigation } from "@/components/custom/navigation";

export default function Home() {
  return (
    <div>
      
      <div className="px-5 py-2 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Navigation />
      </div>
      {/*  MAVIGATION TOP BAR */}

      <main className="flex flex-col min-h-screen w-screen border">
          <div className="flex flex-col justify-center items-center h-[500px] font-semibold">
            <span className="text-5xl mb-5">Project Management System</span>
             <span className="text-center w-1/2 opacity-50">A powerful project management platform that helps you plan workflows, assign and monitor tasks, 
              collaborate with your team, and stay on top of deadlines all through an organized and interactive interface.</span>
          </div>
      </main>

       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Project Management System. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
