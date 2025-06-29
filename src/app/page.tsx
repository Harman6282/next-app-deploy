import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f5e9da] via-[#e4c9a1] to-[#bfa980] p-6 font-serif">
      <div className="max-w-2xl w-full flex flex-col items-center text-center gap-8 bg-[#fff8f0]/80 rounded-xl shadow-lg p-10 border border-[#e4c9a1]">
        <Image
          src="/next.svg"
          alt="Vintage Logo"
          width={80}
          height={80}
          className="mb-4 sepia contrast-125 drop-shadow-md"
          priority
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-[#5e4636] mb-2 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
          Full Stack Developer
        </h1>
        <p className="text-lg sm:text-xl text-[#7c6240] mb-6 max-w-xl" style={{ fontFamily: 'Georgia, serif' }}>
          Crafting seamless web experiences from pixel-perfect frontends to robust backends. Vintage style, modern skills.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#a67c52] hover:bg-[#7c6240] text-white font-semibold rounded-full px-8 py-3 shadow-md transition-colors duration-200 border border-[#5e4636] tracking-wider text-base"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
