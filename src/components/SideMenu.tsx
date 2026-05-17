import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    title: "Home",
    href: "/",
    children: ["Start here", "Featured work", "Latest updates"],
  },
  {
    title: "About Us",
    href: "/about",
    children: ["AI Product Builds", "SaaS Development", "Automation", "Consulting"],
  },
  {
    title: "Products",
    href: "/products",
    children: ["Case Studies", "Products", "Client Results", "Experiments"],
  },
  {
    title: "Quality Assurance",
    href: "/quality",
    children: ["Articles", "Guides", "AI Notes", "Engineering"],
  },
  {
    title: "Why Choose Us",
    href: "/why-us",
    children: ["Profile", "Experience", "Awards", "Community"],
  },
  {
    title: "Contact",
    href: "/contact",
    children: ["Book Consultation", "Start a Project", "General Enquiry"],
  },
];

export default function RollsRoyceSideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
  document.body.style.overflow = isOpen ? "hidden" : "";

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape" && isOpen) {
      setIsClosing(true);

      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 850);
    }
  };

  window.addEventListener("keydown", handleEscape);

  return () => {
    document.body.style.overflow = "";
    window.removeEventListener("keydown", handleEscape);
  };
}, [isOpen]);

const handleMenuOpen = () => {
  setIsClosing(false);
  setIsOpen(true);
};

const handleMenuClose = () => {
  setIsClosing(true);

  setTimeout(() => {
    setIsOpen(false);
    setIsClosing(false);
  }, 900);
};

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[70] bg-white md:hidden">
  <div className="flex h-[70px] items-center justify-between px-6">
    <a href="/" aria-label="Amice home">
      <img
  src="/logo.jpg"
  alt="Amice"
  className="h-14 w-auto object-contain"
/>
    </a>

    <button
      type="button"
      onClick={handleMenuOpen}
      aria-label="Open menu"
      className="grid h-11 w-11 place-items-center text-black"
    >
      <Menu size={24} strokeWidth={2} />
    </button>
  </div>
</header>

      <div
        className={`fixed inset-0 z-[80] bg-[#0a0e15]/85 text-white backdrop-blur-lg transition-[clip-path,opacity] duration-700 ease-[cubic-bezier(.77,0,.175,1)] md:hidden ${
          isOpen || isClosing
            ?"pointer-events-auto opacity-100 [clip-path:inset(0_0_0_0)]"
            : "pointer-events-none opacity-0 [clip-path:inset(0_0_0_100%)]"
        }`}
      >
        <div className="min-h-screen">
          <div className="relative min-h-screen px-7 py-7">
            <button
  type="button"
  onClick={handleMenuClose}
  aria-label="Close menu"
  className="absolute right-5 top-5 grid h-11 w-11 place-items-center text-white"
>
  <X size={24} strokeWidth={1.5} />
</button>

            <div>
              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className="mb-16 block text-sm uppercase tracking-[0.45em] text-white/80"
              >
                <img
                  src="/favicon_logo.png"
                  alt="Amice"
                  className="h-12 w-auto rounded-sm bg-white object-contain px-2 py-1"
                />
              </a>

              <nav key={isOpen ? "menu-open" : "menu-closed"}>
  {navItems.map((item, index) => (
    <a
  key={item.title}
  href={item.href}
  onClick={handleMenuClose}
  className={`group flex items-center justify-between border-b border-white/10 py-4 text-xl uppercase tracking-[0.16em] text-white/85 transition-colors duration-300 hover:text-white ${
  isClosing ? "rr-menu-exit" : "rr-menu-reveal"
}`}
  style={{
  animationDelay: isClosing
    ? `${(navItems.length - 1 - index) * 70}ms`
    : `${220 + index * 110}ms`,
}}
>
  <span>{item.title}</span>
</a>
  ))}
</nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}