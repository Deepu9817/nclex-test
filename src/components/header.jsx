import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white border border-gray-200 shadow-sm">
      <div className="flex items-center h-24 px-8">
        {/* Logo */}
        <div className="relative w-50 h-10">
            <Image
                src="/images/nclex-logo.png"
                alt="NCLEX Logo"
                fill
                priority
                loading="eager"
                className="h-auto w-auto"/>
        </div>
      </div>

      {/* Bottom Blue Line */}
      <div className="h-1 bg-[#0A3D91]" />
    </header>
  );
}
