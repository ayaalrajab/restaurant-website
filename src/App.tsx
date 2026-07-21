import { useState, useEffect, useRef, memo, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ChevronLeft,
  X,
  Instagram,
  Facebook,
  Menu as MenuIcon,
  Sparkles,
  Flame,
  Award,
  Calendar,
  Send,
  CheckCircle,
  Play,
  Utensils,
  Heart,
} from "lucide-react";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// ===== SMOKE PARTICLE COMPONENT =====
const SmokeParticle = ({
  delay = 0,
  size = 40,
}: {
  delay?: number;
  size?: number;
}) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    initial={{ opacity: 0, scale: 0.3, y: 0 }}
    animate={{
      opacity: [0, 0.4, 0.2, 0],
      scale: [0.3, 1, 1.5, 2],
      y: [0, -80, -160],
      x: [0, (Math.random() - 0.5) * 40],
    }}
    transition={{
      duration: 3 + Math.random() * 2,
      delay: delay + Math.random(),
      repeat: Infinity,
      ease: "easeOut",
    }}
    style={{
      width: size,
      height: size,
      background:
        "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
      filter: "blur(8px)",
    }}
  />
);

// ===== FIRE GLOW COMPONENT =====
const FireGlow = () => (
  <motion.div
    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32"
    animate={{
      opacity: [0.6, 0.9, 0.6],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    style={{
      background:
        "radial-gradient(ellipse at bottom, rgba(255,150,50,0.8) 0%, rgba(255,100,30,0.4) 30%, transparent 70%)",
      filter: "blur(20px)",
    }}
  />
);

// ===== FLOATING SPICE COMPONENT =====
const FloatingSpice = ({ color, delay }: { color: string; delay: number }) => (
  <motion.div
    className="absolute w-2 h-2 rounded-full"
    style={{
      backgroundColor: color,
      boxShadow: `0 0 8px ${color}`,
    }}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 360],
      opacity: [0.6, 1, 0.6],
    }}
    transition={{
      duration: 4 + Math.random() * 2,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// ===== CINEMATIC OPENING ANIMATION =====
const CinematicOpening = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500), // Shawarma appears
      setTimeout(() => setPhase(2), 2000), // Fire glows
      setTimeout(() => setPhase(3), 3000), // Steam rises
      setTimeout(() => setPhase(4), 4000), // Camera zooms
      setTimeout(() => setPhase(5), 5500), // Knife enters
      setTimeout(() => setPhase(6), 6500), // Slice happens
      setTimeout(() => setPhase(7), 7500), // Meat falls
      setTimeout(() => setPhase(8), 8500), // Morph to homepage
      setTimeout(() => onComplete(), 10000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black overflow-hidden flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background darkness with subtle ambient */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-900/20 via-black to-black" />

      {/* Shawarma Spit */}
      {phase >= 1 && (
        <motion.div
          className="absolute z-10 w-32 h-64"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          {/* Shawarma Stack */}
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              background:
                "linear-gradient(180deg, #8B4513 0%, #A0522D 20%, #CD853F 40%, #D2691E 60%, #8B4513 80%, #A0522D 100%)",
              boxShadow:
                "inset -20px 0 30px rgba(0,0,0,0.4), inset 20px 0 20px rgba(255,200,100,0.1)",
              borderRadius: "20%",
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-full"
                style={{
                  top: `${i * 8}%`,
                  height: "8%",
                  background: `linear-gradient(90deg, transparent 0%, rgba(139,69,19,${0.3 + (i % 2) * 0.2}) 50%, transparent 100%)`,
                }}
              />
            ))}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent 40%, rgba(255,200,150,0.2) 50%, transparent 60%)",
              }}
            />
          </div>
          {/* Dripping juices */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-20"
            animate={{ y: [0, 80], opacity: [0.8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(255,150,80,0.6) 0%, transparent 100%)",
              filter: "blur(5px)",
            }}
          />
        </motion.div>
      )}

      {/* Spit Metal Rod */}
      {phase >= 1 && (
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3 -mt-10 h-[28rem] z-[5]"
          style={{
            background: "linear-gradient(90deg, #333 0%, #666 50%, #333 100%)",
            boxShadow: "2px 0 4px rgba(0,0,0,0.5)",
          }}
        />
      )}

      {/* Fire Glow underneath */}
      {phase >= 2 && <FireGlow />}

      {/* Steam and Smoke */}
      {phase >= 3 && (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 pointer-events-none z-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <SmokeParticle key={i} delay={i * 0.4} size={30 + i * 5} />
          ))}
        </div>
      )}

      {/* Camera Zoom Effect */}
      {phase >= 4 && (
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.3 }}
          transition={{ duration: 1.5 }}
        >
          {/* Vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle, transparent 30%, rgba(0,0,0,0.8) 100%)",
            }}
          />
        </motion.div>
      )}

      {/* Chef's Knife */}
      {phase >= 5 && (
        <motion.div
          className="absolute z-30"
          initial={{ x: "-100vw", rotate: -15 }}
          animate={{ x: 0, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ top: "45%" }}
        >
          <div className="relative">
            {/* Knife Blade */}
            <motion.div
              className="w-48 h-6"
              style={{
                background:
                  "linear-gradient(180deg, #e0e0e0 0%, #c0c0c0 50%, #a0a0a0 100%)",
                boxShadow:
                  "0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.8)",
                clipPath: "polygon(0% 50%, 100% 0%, 100% 100%)",
              }}
            />
            {/* Knife Handle */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-8 -ml-20"
              style={{
                background:
                  "linear-gradient(180deg, #4a3728 0%, #2d1f15 50%, #4a3728 100%)",
                boxShadow: "inset 0 2px 4px rgba(255,255,255,0.1)",
                borderRadius: "4px",
              }}
            />
            {/* Cutting motion */}
            {phase >= 6 && (
              <motion.div
                animate={{
                  y: [0, 30, 0],
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              />
            )}
          </div>
        </motion.div>
      )}

      {/* Falling Meat Slice */}
      {phase >= 7 && (
        <motion.div
          className="absolute z-40"
          initial={{ top: "45%", y: 0, scale: 0.8, rotateX: 0, rotateY: 0 }}
          animate={{
            top: "100%",
            y: 200,
            scale: 15,
            rotateX: 90,
            rotateY: 180,
          }}
          transition={{
            duration: 2,
            ease: "easeIn",
          }}
        >
          <div
            className="w-24 h-16 rounded-lg"
            style={{
              background:
                "linear-gradient(135deg, #CD853F 0%, #D2691E 50%, #A0522D 100%)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            }}
          />
        </motion.div>
      )}

      {/* Morph Transition */}
      {phase >= 8 && (
        <motion.div
          className="absolute inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            background:
              "radial-gradient(circle at center, rgba(212,175,55,0.3) 0%, rgba(0,0,0,0.95) 50%, black 100%)",
          }}
        />
      )}

      {/* Restaurant Brand */}
      {phase >= 8 && (
        <motion.div
          className="absolute z-[60] text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <motion.div
            className="text-7xl md:text-9xl font-display font-bold gold-gradient mb-4"
            animate={{
              textShadow: [
                "0 0 20px rgba(212,175,55,0.5)",
                "0 0 40px rgba(212,175,55,0.8)",
                "0 0 20px rgba(212,175,55,0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SHAWARMA
          </motion.div>
          <motion.div
            className="text-3xl md:text-4xl text-amber-400 tracking-[0.5em] font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            ROYALE
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

// ===== NAVIGATION =====
const Navigation = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#menu", label: "Menu" },
    { href: "#specials", label: "Specials" },
    { href: "#gallery", label: "Gallery" },
    { href: "#reservations", label: "Reserve" },
    { href: "#about", label: "About" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-black/80 backdrop-blur-xl border-b border-amber-500/10"
          : "py-6 bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 10, duration: 0.8 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-display font-bold gold-gradient"
        >
          SHAWARMA ROYALE
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-amber-400 transition-colors font-medium relative group"
              whileHover={{ y: -2 }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          <motion.a
            href="#reservations"
            className="gold-button px-6 py-3 rounded-full font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve Table
          </motion.a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white"
        >
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl py-6 border-t border-amber-500/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="container mx-auto px-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-amber-400 py-2 text-lg"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
});

Navigation.displayName = "Navigation";

// ===== HERO SECTION =====
const HeroSection = memo(() => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, rgba(212,175,55,0.1) 0%, transparent 60%)",
          }}
        />
      </motion.div>

      {/* Floating smoke */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <SmokeParticle key={i} delay={i * 0.5} size={50} />
        ))}
      </div>

      {/* Floating Spices */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {["#8B4513", "#D4AF37", "#CD853F", "#DAA520"].map((color, i) => (
          <FloatingSpice key={i} color={color} delay={i * 0.5} />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 text-center px-6 max-w-5xl"
        style={{ opacity }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 10, duration: 1 }}
      >
        <motion.div
          className="flex items-center justify-center gap-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 10.5 }}
        >
          <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
          <span className="text-amber-400 text-lg tracking-[0.3em] uppercase font-light">
            Premium Lebanese Cuisine
          </span>
          <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 10.7 }}
        >
          Authentic <span className="gold-gradient">Lebanese</span> Shawarma
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 11 }}
        >
          Welcome to the Ultimate Shawarma Experience. Handcrafted with passion,
          served with pride.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 11.3 }}
        >
          <motion.a
            href="https://wa.me/1234567890?text=Hi,%20I'd%20like%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-button px-8 py-4 rounded-full flex items-center gap-3 text-lg font-semibold"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 30px rgba(212,175,55,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Send size={22} /> Order on WhatsApp
          </motion.a>
          <motion.a
            href="#menu"
            className="glass-button px-8 py-4 rounded-full flex items-center gap-3 text-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play size={22} /> View Menu
          </motion.a>
          <motion.a
            href="#reservations"
            className="border-button px-8 py-4 rounded-full flex items-center gap-3 text-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar size={22} /> Book a Table
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronLeft className="w-8 h-8 text-amber-400 rotate-[-90deg]" />
      </motion.div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

// ===== BEST SELLERS SECTION =====
const BestSellersSection = memo(() => {
  const bestSellers = [
    {
      id: 1,
      name: "Classic Shawarma",
      description:
        "Tender sliced beef with garlic sauce, pickles, and fresh herbs",
      price: "12.99",
      image:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400",
      orders: "2500+",
    },
    {
      id: 2,
      name: "Chicken Shawarma",
      description:
        "Juicy chicken breast with tahini, tomatoes, and special sauce",
      price: "11.99",
      image:
        "https://images.pexels.com/photos/37322775/pexels-photo-37322775.jpeg",
      orders: "2300+",
    },
    {
      id: 3,
      name: "Mixed Shawarma",
      description: "The best of both worlds - beef and chicken together",
      price: "14.99",
      image:
        "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=400",
      orders: "1800+",
    },
  ];

  return (
    <section
      id="bestsellers"
      className="py-24 bg-gradient-to-b from-black to-amber-950/10 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1200)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="w-8 h-8 text-amber-400" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="gold-gradient">Best Sellers</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our most loved dishes, crafted to perfection
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {bestSellers.map((item, i) => (
            <motion.div
              key={item.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {/* Popular badge */}
              <div className="absolute -top-3 -right-3 z-20 bg-amber-500 text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                <span className="flex items-center gap-1">
                  <Heart className="w-3 h-3" /> {item.orders} ordered
                </span>
              </div>

              <div className="glass-card rounded-3xl overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">
                      {item.name}
                    </h3>
                    <span className="text-amber-400 font-bold text-2xl">
                      ${item.price}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <motion.a
                    href={`https://wa.me/1234567890?text=I'd%20like%20to%20order:%20${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full gold-button py-3 rounded-xl text-center font-semibold flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={18} /> Order Now
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

BestSellersSection.displayName = "BestSellersSection";

// ===== MENU SECTION =====
const MenuSection = memo(() => {
  const [activeCategory, setActiveCategory] = useState("shawarma");

  const categories = [
    { id: "shawarma", label: "Shawarma", icon: Flame },
    { id: "burgers", label: "Burgers", icon: Utensils },
    { id: "pizza", label: "Pizza", icon: Utensils },
    { id: "drinks", label: "Drinks", icon: Sparkles },
    { id: "desserts", label: "Desserts", icon: Star },
  ];

  const menuItems: Record<
    string,
    Array<{
      id: number;
      name: string;
      description: string;
      price: string;
      image: string;
      badge?: string;
    }>
  > = {
    shawarma: [
      {
        id: 1,
        name: "Classic Shawarma",
        description:
          "Tender sliced beef with garlic sauce, pickles, and fresh herbs",
        price: "12.99",
        image:
          "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400",
        badge: "Best Seller",
      },
      {
        id: 2,
        name: "Chicken Shawarma",
        description:
          "Juicy chicken breast with tahini, tomatoes, and special sauce",
        price: "11.99",
        image:
          "https://images.pexels.com/photos/18177339/pexels-photo-18177339.jpeg",
      },
      {
        id: 3,
        name: "Mixed Shawarma",
        description: "The best of both worlds - beef and chicken together",
        price: "14.99",
        image:
          "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=400",
        badge: "Popular",
      },
      {
        id: 4,
        name: "Falafel Wrap",
        description:
          "Crispy falafel with hummus, pickles, and fresh vegetables",
        price: "10.99",
        image:
          "https://images.pexels.com/photos/27556250/pexels-photo-27556250.jpeg",
        badge: "Vegetarian",
      },
    ],
    burgers: [
      {
        id: 5,
        name: "Royale Burger",
        description: "Premium angus beef with secret shawarma sauce",
        price: "15.99",
        image:
          "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=400",
        badge: "Chef Choice",
      },
      {
        id: 6,
        name: "Lahmajun Burger",
        description: "Turkish spiced beef with fresh mint and yogurt",
        price: "14.99",
        image:
          "https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
    ],
    pizza: [
      {
        id: 7,
        name: "Manakish Pizza",
        description: "Traditional Lebanese flatbread with za'atar olive oil",
        price: "9.99",
        image:
          "https://images.pexels.com/photos/4109110/pexels-photo-4109110.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        id: 8,
        name: "Meat Feast",
        description: "Spiced ground beef with pine nuts and pomegranate",
        price: "13.99",
        image:
          "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
    ],
    drinks: [
      {
        id: 9,
        name: "Fresh Mint Lemonade",
        description: "Hand-squeezed lemons with fresh mint leaves",
        price: "4.99",
        image:
          "https://images.pexels.com/photos/964823/pexels-photo-964823.jpeg?auto=compress&cs=tinysrgb&w=400",
        badge: "Refreshing",
      },
      {
        id: 10,
        name: "Turkish Coffee",
        description: "Authentic Turkish coffee with cardamom",
        price: "3.99",
        image:
          "https://images.pexels.com/photos/773958/pexels-photo-773958.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
    ],
    desserts: [
      {
        id: 11,
        name: "Baklava",
        description: "Layers of flaky pastry with honey and pistachios",
        price: "6.99",
        image:
          "https://images.pexels.com/photos/4651178/pexels-photo-4651178.jpeg?auto=compress&cs=tinysrgb&w=400",
        badge: "Sweet",
      },
      {
        id: 12,
        name: "Kunafa",
        description: "Cheese-filled pastry soaked in sweet syrup",
        price: "7.99",
        image:
          "https://images.pexels.com/photos/4651170/pexels-photo-4651170.jpeg?auto=compress&cs=tinysrgb&w=400",
        badge: "Popular",
      },
    ],
  };

  const items = menuItems[activeCategory] || [];

  return (
    <section id="menu" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="gold-gradient">Our Menu</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our handcrafted selection of authentic Middle Eastern
            delicacies
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                activeCategory === cat.id ? "gold-button" : "glass-button"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <cat.icon size={18} />
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="glass-card rounded-2xl overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    {item.badge && (
                      <span className="absolute top-3 right-3 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-white">
                        {item.name}
                      </h3>
                      <span className="text-amber-400 font-bold text-lg">
                        ${item.price}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      {item.description}
                    </p>
                    <motion.a
                      href={`https://wa.me/1234567890?text=I'd%20like%20to%20order:%20${encodeURIComponent(item.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full glass-button py-3 rounded-lg text-center font-semibold flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send size={16} /> Order Now
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
});

MenuSection.displayName = "MenuSection";

// ===== CHEF RECOMMENDATIONS =====
const ChefRecommendationsSection = memo(() => {
  const recommendations = [
    {
      name: "Royal Platter",
      description:
        "A luxurious selection of our finest shawarmas, grilled meats, and signature dips served on a golden platter",
      price: "29.99",
      image:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.9,
    },
    {
      name: "Sultan's Mixed Grill",
      description:
        "Premium lamb chops, kefta, and chicken skewers with saffron rice and grilled vegetables",
      price: "34.99",
      image:
        "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
    },
    {
      name: "Mezze Supreme",
      description:
        "Traditional hummus, baba ghanoush, tabbouleh, falafel, and warm pita bread",
      price: "19.99",
      image:
        "https://images.pexels.com/photos/28241705/pexels-photo-28241705.jpeg",
      rating: 4.7,
    },
  ];

  return (
    <section
      id="specials"
      className="py-24 bg-gradient-to-b from-amber-950/10 to-black"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-8 h-8 text-amber-400" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="gold-gradient">Chef's Recommendations</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Exclusive creations from our master chef
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {recommendations.map((item, i) => (
            <motion.div
              key={item.name}
              className="perspective-1000"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <motion.div
                className="glass-card rounded-3xl overflow-hidden group"
                whileHover={{ rotateY: 5, rotateX: 5, rotateZ: -2 }}
                transition={{ duration: 0.3 }}
              >
                {/* Rating badge */}
                <div className="absolute top-4 right-4 z-20 glass-card px-3 py-2 rounded-full flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-white font-bold">{item.rating}</span>
                </div>

                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">
                      {item.name}
                    </h3>
                    <span className="text-amber-400 font-bold text-xl">
                      ${item.price}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <motion.a
                    href={`https://wa.me/1234567890?text=I'd%20like%20to%20order:%20${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full gold-button py-3 rounded-lg text-center font-semibold flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Sparkles size={18} /> Reserve This
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

ChefRecommendationsSection.displayName = "ChefRecommendationsSection";

// ===== GALLERY SECTION =====
const GallerySection = memo(() => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Shawarma",
      span: "col-span-2 row-span-2",
    },
    {
      src: "https://images.pexels.com/photos/27359340/pexels-photo-27359340.jpeg",
      alt: "Chicken",
    },
    {
      src: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Grilled",
    },
    {
      src: "https://images.pexels.com/photos/4113669/pexels-photo-4113669.jpeg",
      alt: "Pizza",
      span: "row-span-2",
    },
    {
      src: "https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Burger",
    },
    {
      src: "https://images.pexels.com/photos/773958/pexels-photo-773958.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Coffee",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="gold-gradient">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A visual journey through our culinary creations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, i) => (
            <motion.div
              key={image.src}
              className={`relative overflow-hidden rounded-2xl cursor-pointer ${image.span || ""}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(image.src)}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play className="w-12 h-12 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage.replace("w=600", "w=1200")}
              alt="Gallery"
              className="max-w-full max-h-[90vh] rounded-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />
            <button
              className="absolute top-8 right-8 text-white hover:text-amber-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

GallerySection.displayName = "GallerySection";

// ===== RESERVATION SECTION =====
const ReservationSection = memo(() => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "2",
    date: "",
    time: "19:00",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        if (!supabase) {
          throw new Error("Supabase not configured");
        }
        const { error } = await supabase.from("reservations").insert([
          {
            name: formData.name,
            phone: formData.phone,
            guests: parseInt(formData.guests, 10),
            date: formData.date,
            time: formData.time,
          },
        ]);
        if (error) throw error;

        setIsSuccess(true);
        setFormData({
          name: "",
          phone: "",
          guests: "2",
          date: "",
          time: "19:00",
        });
        setTimeout(() => setIsSuccess(false), 5000);
      } catch {
        console.error("Reservation error");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData],
  );

  return (
    <section
      id="reservations"
      className="py-24 bg-gradient-to-b from-black to-amber-950/20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1920)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="gold-gradient">Reserve Your Table</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Book your dining experience for an unforgettable evening
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                className="glass-card rounded-3xl p-12 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-20 h-20 mx-auto mb-6 text-green-500" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Reservation Confirmed!
                </h3>
                <p className="text-gray-400">
                  We'll send you a confirmation message shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="glass-card rounded-3xl p-8 md:p-12 space-y-6"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-amber-400 text-sm font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="premium-input w-full px-4 py-4 rounded-xl"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-amber-400 text-sm font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="premium-input w-full px-4 py-4 rounded-xl"
                      placeholder="+1 234 567 8900"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-amber-400 text-sm font-semibold mb-2">
                      Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: e.target.value })
                      }
                      className="premium-input w-full px-4 py-4 rounded-xl"
                      required
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-amber-400 text-sm font-semibold mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="premium-input w-full px-4 py-4 rounded-xl"
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-amber-400 text-sm font-semibold mb-2">
                      Time
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="premium-input w-full px-4 py-4 rounded-xl"
                      required
                    >
                      {[
                        "12:00",
                        "13:00",
                        "17:00",
                        "18:00",
                        "19:00",
                        "20:00",
                        "21:00",
                        "22:00",
                      ].map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full gold-button py-4 rounded-xl flex items-center justify-center gap-3 text-lg font-semibold"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="loading-spinner" />
                  ) : (
                    <>
                      <Calendar size={20} /> Confirm Reservation
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
});

ReservationSection.displayName = "ReservationSection";

// ===== MAP SECTION =====
const MapSection = memo(() => (
  <section className="py-12 bg-black">
    <div className="container mx-auto px-6">
      <motion.div
        className="rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178510338628!2d55.2644!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTUnNTIuMCJF!5e0!3m2!1sen!2sae!4v1635000000000!5m2!1sen!2sae"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location"
          className="w-full"
        />
      </motion.div>
    </div>
  </section>
));

MapSection.displayName = "MapSection";

// ===== REVIEWS SECTION =====
const ReviewsSection = memo(() => {
  const [current, setCurrent] = useState(0);

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Food Blogger",
      content:
        "The best shawarma I've ever had outside of Beirut. The meat is perfectly spiced, and the garlic sauce is absolutely divine.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      name: "Michael Chen",
      role: "Chef & Restaurateur",
      content:
        "As a chef, I appreciate the attention to detail and the authentic techniques. The flavors transport you straight to Lebanon.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      name: "Emma Williams",
      role: "Restaurant Critic",
      content:
        "An extraordinary dining experience. The ambiance, the service, and most importantly the food - everything is impeccable.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
  ];

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % reviews.length),
      5000,
    );
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section
      id="reviews"
      className="py-24 bg-gradient-to-b from-amber-950/10 to-black"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="gold-gradient">Guest Reviews</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="glass-card rounded-3xl p-8 md:p-12 text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: reviews[current].rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 italic leading-relaxed">
                "{reviews[current].content}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={reviews[current].avatar}
                  alt={reviews[current].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-400"
                  loading="lazy"
                />
                <div className="text-left">
                  <p className="text-lg font-bold text-white">
                    {reviews[current].name}
                  </p>
                  <p className="text-gray-400">{reviews[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "w-8 bg-amber-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ReviewsSection.displayName = "ReviewsSection";

// ===== ABOUT SECTION =====
const AboutSection = memo(() => {
  const stats = [
    { value: 15, suffix: "+", label: "Years of Excellence" },
    { value: 50, suffix: "K+", label: "Happy Customers" },
    { value: 25, suffix: "+", label: "Menu Items" },
    { value: 5, suffix: "", label: "Expert Chefs" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="gold-gradient">Our Story</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Born from a passion for authentic Middle Eastern cuisine, Shawarma
              Royale brings the vibrant flavors of Lebanon to your table. Our
              journey began in the bustling streets of Beirut.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Every shawarma we serve is crafted with the finest ingredients,
              marinated in our signature spice blend, and slow-cooked to
              perfection. We don't just serve food - we serve memories.
            </p>

            <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="text-3xl md:text-4xl font-bold gold-gradient mb-1">
                    {isInView && (
                      <Counter value={stat.value} suffix={stat.suffix} />
                    )}
                  </p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Restaurant"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <motion.div
              className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center gap-3">
                <Award className="w-10 h-10 text-amber-400" />
                <div>
                  <p className="text-lg font-bold text-white">Award Winning</p>
                  <p className="text-gray-400 text-sm">Best Shawarma 2024</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

// ===== COUNTER COMPONENT =====
const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

// ===== CONTACT SECTION =====
const ContactSection = memo(() => (
  <section
    id="contact"
    className="py-24 bg-gradient-to-b from-black to-amber-950/10"
  >
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
          <span className="gold-gradient">Contact Us</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <motion.div
          className="glass-card rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <MapPin className="w-10 h-10 mx-auto mb-4 text-amber-400" />
          <h3 className="text-lg font-bold text-white mb-2">Location</h3>
          <p className="text-gray-400">123 Arabian Street</p>
          <p className="text-gray-400">Dubai, UAE</p>
        </motion.div>

        <motion.div
          className="glass-card rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Phone className="w-10 h-10 mx-auto mb-4 text-amber-400" />
          <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
          <a
            href="tel:+1234567890"
            className="text-amber-400 hover:text-amber-300 transition-colors"
          >
            +1 234 567 890
          </a>
        </motion.div>

        <motion.div
          className="glass-card rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Mail className="w-10 h-10 mx-auto mb-4 text-amber-400" />
          <h3 className="text-lg font-bold text-white mb-2">Email</h3>
          <a
            href="mailto:info@shawarmaroyale.com"
            className="text-amber-400 hover:text-amber-300 transition-colors"
          >
            info@shawarmaroyale.com
          </a>
        </motion.div>
      </div>
    </div>
  </section>
));

ContactSection.displayName = "ContactSection";

// ===== FOOTER =====
const Footer = memo(() => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-black py-16 border-t border-amber-500/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-display font-bold gold-gradient mb-4">
              SHAWARMA ROYALE
            </h3>
            <p className="text-gray-400 mb-6">
              Experience the authentic taste of Lebanese cuisine.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="p-3 glass-card rounded-full hover:bg-amber-500/20"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="w-5 h-5 text-amber-400" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-400" /> Hours
            </h4>
            <div className="text-gray-400 space-y-2">
              <p>Sun - Thu: 12PM - 11PM</p>
              <p>Fri - Sat: 12PM - 12AM</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="#menu"
                className="block text-gray-400 hover:text-amber-400"
              >
                Menu
              </a>
              <a
                href="#reservations"
                className="block text-gray-400 hover:text-amber-400"
              >
                Reservations
              </a>
              <a
                href="#about"
                className="block text-gray-400 hover:text-amber-400"
              >
                About Us
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Get exclusive offers and updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="premium-input flex-1 px-4 py-3 rounded-xl"
              />
              <motion.button
                className="gold-button px-4 py-3 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Shawarma Royale. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

// ===== WHATSAPP BUTTON =====
const WhatsAppButton = memo(() => (
  <motion.a
    href="https://wa.me/1234567890?text=Hi,%20I'd%20like%20to%20place%20an%20order"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 11, type: "spring", stiffness: 200 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.396Z" />
    </svg>
    <motion.div
      className="absolute inset-0 rounded-full bg-green-500"
      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.a>
));

WhatsAppButton.displayName = "WhatsAppButton";

// ===== MAIN APP =====
function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <AnimatePresence>
        {isLoading && (
          <CinematicOpening onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <Navigation />
      <main>
        <HeroSection />
        <BestSellersSection />
        <MenuSection />
        <ChefRecommendationsSection />
        <GallerySection />
        <ReservationSection />
        <MapSection />
        <ReviewsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
