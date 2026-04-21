"use client";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Logo Icon as seen in image */}
        
        
        <p className="text-gray-500 text-sm font-medium">
          © {new Date().getFullYear()} Weboin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
