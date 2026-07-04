import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  Factory,
  FileText,
  Globe,
  HeartHandshake,
  Leaf,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  Recycle,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Sprout,
  Truck,
  Users,
  Wheat,
  X,
} from "lucide-react";
import { type FormEvent, type ReactNode, createContext, useContext, useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const COMPANY_NAME = "Riziki Semuna Investment Company Limited";
const COMPANY_HQ = "Industrial Area, Kasulu Road, Kigoma, Tanzania";
const COMPANY_PHONE = "+255 (0) 28 280 4400";
const COMPANY_EMAIL = "info@rizikisemuna.com";
const SALES_EMAIL = "sales@rizikisemuna.com";

function LogoImage({ className = "h-14 w-20" }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      <img
        src="/rise-logo.svg"
        alt="RISE Investment Company logo"
        className={`${className} object-contain transition-transform hover:scale-105`}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <svg viewBox="0 0 400 300" className={className} aria-label="RISE Investment Company logo">
      <defs>
        <linearGradient id="lg1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#3cff23"/><stop offset="0.5" stopColor="#07a80f"/><stop offset="1" stopColor="#016b0b"/>
        </linearGradient>
        <linearGradient id="lg2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#fff65a"/><stop offset="0.5" stopColor="#ffd200"/><stop offset="1" stopColor="#f0a800"/>
        </linearGradient>
      </defs>
      <circle cx="95" cy="85" r="18" fill="url(#lg2)"/>
      <path d="M20 130c30-25 60-30 85-18c20 10 30 25 48 32c-18 3-40 2-60-12c-20-14-30-25-52-22c-8 1-15 4-21 8Z" fill="url(#lg1)"/>
      <path d="M125 220c-35-55-33-110-5-152c16-24 40-19 68-34c44-24 95-17 133 12c-52-12-102 2-141 38c-41 38-48 97-12 144c-16 0-30-3-43-8Z" fill="url(#lg1)"/>
      <path d="M210 210c-45-27-55-76-25-114c32-40 95-30 155 22c-45-38-97-37-132-3c-35 33-34 78 2 95Z" fill="url(#lg2)"/>
      <text x="220" y="155" fill="#06a90f" fontFamily="Georgia, serif" fontSize="55" fontWeight="900" letterSpacing="3" stroke="#005e08" strokeWidth="1">RISE</text>
      <rect x="223" y="165" width="170" height="4" rx="2" fill="#0daf18"/>
      <text x="225" y="190" fill="#09aa14" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="700">Investment Company</text>
    </svg>
  );
}

const images = {
  optionAHero: "/option-a-hero.jpg",
  truckDispatch: "/option-a-truck-dispatch.jpg",
  motorbikeDelivery: "/option-a-motorbike-delivery.jpg",
  packagedBags: "/option-a-packaged-bags.jpg",
  stackedBags: "/option-a-stacked-bags.jpg",
  palletBags: "/option-a-pallet-bags.jpg",
  bag2kg: "/semuna-2kg.jpg",
  bag10kg: "/semuna-10kg.jpg",
  bag25kg: "/semuna-25kg.jpg",
  bag50kg: "/semuna-50kg.jpg",
  teamSemuna: {
    local: "/semuna.jpg",
    fallback: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1700",
  },
  teamRiziki: {
    local: "/riziki.jpg",
    fallback: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1700",
  },
  teamElembwe: {
    local: "/elembwe.jpg",
    fallback: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1700",
  },
  harvest:
    "https://images.pexels.com/photos/34076810/pexels-photo-34076810.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800",
  corncob:
    "https://images.pexels.com/photos/33981246/pexels-photo-33981246.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1700",
  flourSieving:
    "https://images.pexels.com/photos/15148672/pexels-photo-15148672.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1700",
  mealPreparation:
    "https://images.pexels.com/photos/15148531/pexels-photo-15148531.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1700",
  cornmealBowl:
    "https://images.pexels.com/photos/12878725/pexels-photo-12878725.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1700",
  warehouseWorkers:
    "https://images.pexels.com/photos/5262430/pexels-photo-5262430.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1700",
  dryCorn:
    "https://images.pexels.com/photos/10111854/pexels-photo-10111854.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1700",
};

const shopProducts = [
  {
    id: "semuna-2kg",
    name: "Semuna Maize Flour - 2kg",
    description: "Small pack for trial or single households. Easy to carry and store.",
    price: 3000,
    image: images.bag2kg,
    category: "Corn Flour",
  },
  {
    id: "semuna-10kg",
    name: "Semuna Maize Flour - 10kg",
    description: "Medium-sized pack for small households. Same premium quality, convenient size.",
    price: 12000,
    image: images.bag10kg,
    category: "Corn Flour",
  },
  {
    id: "semuna-25kg",
    name: "Semuna Maize Flour - 25kg",
    description: "Premium quality corn flour for families and businesses. Perfect for ugali, porridge, and baking.",
    price: 28000,
    image: images.bag25kg,
    category: "Corn Flour",
  },
  {
    id: "semuna-50kg",
    name: "Semuna Maize Flour - 50kg",
    description: "Large bulk sack for restaurants, retailers, and wholesalers. Best value for high-volume needs.",
    price: 52000,
    image: images.bag50kg,
    category: "Corn Flour",
  },
];

interface CartItem {
  product: typeof shopProducts[0];
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: typeof shopProducts[0]) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("rise-cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("rise-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: typeof shopProducts[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Shop", path: "/shop", highlight: true },
  { label: "Our Products", path: "/products" },
  { label: "Farmers & Impact", path: "/farmers" },
  { label: "Contact & Distribution", path: "/contact" },
];

const pageMotion = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const },
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CartProvider>
        <SiteLayout />
      </CartProvider>
    </BrowserRouter>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function SiteLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#fcfcf9] font-sans text-slate-800 antialiased selection:bg-yellow-400 selection:text-emerald-950">
      <TopBar />
      <Header />
      <main className="relative z-10 pt-28 sm:pt-32">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/farmers" element={<FarmersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function CartButton() {
  const { cartCount } = useCart();

  return (
    <Link
      to="/cart"
      className="relative inline-flex items-center gap-2 rounded-xl border border-emerald-900/20 bg-white px-4 py-2.5 text-sm font-bold text-emerald-900 transition hover:bg-emerald-50 hover:border-emerald-900/30"
    >
      <ShoppingBag size={18} className="text-emerald-700" />
      <span>Cart</span>
      {cartCount > 0 && (
        <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-[10px] font-black text-emerald-950 shadow-md">
          {cartCount > 9 ? "9+" : cartCount}
        </span>
      )}
    </Link>
  );
}

function TopBar() {
  return (
    <div className="hidden border-b border-emerald-900/10 bg-emerald-950 text-xs font-medium text-emerald-200 sm:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-white">
            <MapPin size={14} className="text-yellow-400" />
            Kigoma, Tanzania • Serving East Africa
          </span>
          <span className="flex items-center gap-2">
            <Phone size={14} className="text-yellow-400" />
            {COMPANY_PHONE}
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14} className="text-yellow-400" />
            {COMPANY_EMAIL}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-900/80 px-3 py-0.5 text-[11px] font-semibold text-yellow-300 border border-yellow-400/20">
            <ShieldCheck size={12} /> TBS & Halal Food Certified
          </span>
          <span className="text-emerald-700">|</span>
          <span className="flex items-center gap-2 text-emerald-100">
            <span>Markets:</span>
            <span title="Tanzania">🇹🇿</span>
            <span title="DR Congo">🇨🇩</span>
            <span title="Burundi">🇧🇮</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-emerald-900/15 bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-white/85 backdrop-blur-sm py-4 sm:py-5 border-b border-emerald-900/5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-3.5">
          <LogoImage className="h-14 w-20" />
          <div>
            <span className="block text-lg font-black tracking-tight text-emerald-950 group-hover:text-emerald-700 transition-colors">
              RISE <span className="font-extrabold text-slate-500 text-sm">Investment Co.</span>
            </span>
            <span className="block text-[10px] font-bold tracking-wider text-emerald-800/70 uppercase">
              Riziki Semuna Limited
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative text-sm font-semibold transition-colors hover:text-emerald-700 ${
                  isActive ? "text-emerald-800" : "text-slate-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute -bottom-2 left-0 h-0.5 w-full bg-yellow-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <CartButton />
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-800 to-emerald-900 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-900/20 transition-all hover:shadow-emerald-900/30 hover:scale-[1.02]"
          >
            <ShoppingBag size={16} className="text-yellow-400" />
            Wholesale Inquiry
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-slate-800 lg:hidden hover:bg-slate-200"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-slate-200 bg-white px-6 py-6 shadow-xl lg:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-bold transition-colors ${
                      isActive ? "text-emerald-800 bg-emerald-50 px-3 py-2 rounded-lg" : "text-slate-700 px-3 py-2"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
                <Link
                  to="/cart"
                  onClick={() => setIsOpen(false)}
                  className="relative inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-900/20 bg-white py-3 text-center text-sm font-bold text-emerald-900"
                >
                  <ShoppingBag size={16} className="text-emerald-700" />
                  View Cart
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-[10px] font-black text-emerald-950">
                      {cartCount}
                    </span>
                  )}
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-800 py-3 text-center text-sm font-bold text-white shadow-md"
                >
                  <ShoppingBag size={16} className="text-yellow-400" />
                  Order Wholesale Corn Flour
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HomePage() {
  const reduceMotion = useReducedMotion();

  const productHighlights = [
    {
      title: "Premium Corn Flour (Unga Wa Mahindi)",
      tag: "Flagship Food Product",
      desc: "Finely milled, super-sifted white maize flour engineered for smooth ugali, porridge, and commercial baking. Produced under hygienic food standards in Kigoma.",
      specs: ["1kg, 2kg, 5kg, 10kg, 25kg & 50kg bags", "100% Non-GMO Local Maize", "TBS Quality Certified"],
      image: images.packagedBags,
      fallback: images.flourSieving,
    },
    {
      title: "Nutritional & Fortified Flour Blends",
      tag: "Health & Food Security",
      desc: "Enriched maize flour blends infused with essential vitamins and minerals to support child growth, maternal health, and regional food security initiatives.",
      specs: ["Fortified with Iron & Zinc", "Ideal for School Feeding Programs", "High Energy Retention"],
      image: images.palletBags,
      fallback: images.mealPreparation,
    },
    {
      title: "Corn Bran Animal Feed (Pumba Za Mahindi)",
      tag: "Livestock & Poultry Feed",
      desc: "Nutrient-dense milling byproduct packed with digestible fiber and natural energy. The premier choice for poultry farmers, dairy herds, and aquaculture.",
      specs: ["Rich in Crude Fiber & Protein", "Bulk 50kg & 70kg Sacks", "Zero Waste Milling Value"],
      image: images.stackedBags,
      fallback: images.warehouseWorkers,
    },
  ];

  const optionAGallery = [
    {
      title: "Factory Dispatch",
      text: "Bulk bags prepared for regional delivery from Kigoma.",
      image: images.truckDispatch,
      fallback: images.harvest,
    },
    {
      title: "Retail Movement",
      text: "Packaged 25kg bags moving into local markets.",
      image: images.motorbikeDelivery,
      fallback: images.cornmealBowl,
    },
    {
      title: "Packaged Product",
      text: "RISE maize flour bags ready for households and businesses.",
      image: images.packagedBags,
      fallback: images.flourSieving,
    },
    {
      title: "Warehouse Stock",
      text: "Stacked inventory for wholesale and institutional orders.",
      image: images.stackedBags,
      fallback: images.warehouseWorkers,
    },
  ];

  return (
    <motion.div {...pageMotion}>
      {/* OPTION A HERO SECTION */}
      <section className="relative flex min-h-[86vh] items-center justify-center overflow-hidden bg-emerald-950 px-6 py-20 text-center text-white">
        <SmartImage
          src={images.optionAHero}
          fallback={images.harvest}
          alt="RISE Investment Company premises and maize products"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-950/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-transparent to-emerald-950/45" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5 text-xs font-bold text-yellow-300 backdrop-blur-md"
          >
            <Sprout size={15} /> Premium maize products from Kigoma
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mx-auto mt-7 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          >
            Premium Maize Products for Homes, Businesses, and Markets Across Tanzania.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-8 max-w-4xl space-y-4 text-base font-medium leading-8 text-emerald-50 sm:text-lg"
          >
            <p>
              Riziki Semuna Investment Company Limited is a food processing and agricultural company based in <strong>Kigoma, Tanzania</strong>, specializing in the production of <strong>high-quality corn flour</strong> sourced directly from local smallholder farmers.
            </p>
            <p>
              Our goal is simple: produce healthy, nutritious food while improving the livelihoods of farmers and strengthening food security across East Africa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-9"
          >
            <h2 className="text-2xl font-black text-yellow-300 sm:text-3xl">Our Markets:</h2>
            <p className="mt-3 text-sm font-bold text-white sm:text-base">
              Tanzania | Congo | Burundi | East Africa | International Markets
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full border-4 border-white bg-yellow-400 px-7 py-3 text-sm font-black text-emerald-950 shadow-xl transition hover:bg-yellow-300"
            >
              Shop Products
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border-4 border-white bg-yellow-400 px-7 py-3 text-sm font-black text-emerald-950 shadow-xl transition hover:bg-yellow-300"
            >
              Contact Us
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full border-4 border-white bg-yellow-400 px-7 py-3 text-sm font-black text-emerald-950 shadow-xl transition hover:bg-yellow-300"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-800/20 bg-emerald-50 px-4 py-1 text-xs font-extrabold text-emerald-800">
              Product Line
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
              RISE maize products ready for retail, wholesale, and institutional supply.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {productHighlights.map((product) => (
              <div key={product.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
                <div className="h-64 overflow-hidden">
                  <SmartImage
                    src={product.image}
                    fallback={product.fallback}
                    alt={product.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <p className="text-xs font-black uppercase tracking-wider text-emerald-700">{product.tag}</p>
                  <h3 className="mt-2 text-xl font-black text-slate-900">{product.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{product.desc}</p>
                  <div className="mt-5 space-y-2 border-t border-slate-200 pt-5">
                    {product.specs.map((spec) => (
                      <p key={spec} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <CheckCircle2 size={14} className="text-emerald-700" />
                        {spec}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-24 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-800/20 bg-white px-4 py-1 text-xs font-extrabold text-emerald-800">
                Product & Distribution Images
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Real product, dispatch, and market movement visuals.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                A closer look at dispatch, retail movement, packaged maize flour, and warehouse stock handled by the RISE team.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {optionAGallery.map((item) => (
                <div key={item.title} className="overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-200">
                  <div className="h-56 overflow-hidden">
                    <SmartImage
                      src={item.image}
                      fallback={item.fallback}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-black text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-xs leading-6 text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE STRATEGIC OBJECTIVES */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-800/20 bg-emerald-50 px-4 py-1 text-xs font-extrabold text-emerald-800 mb-3">
              Strategic Blueprint
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
              Our 4 Pillars of Operational Objectives
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              We combine modern food engineering in Kigoma with strong social impact across East Africa’s agricultural sector.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Factory,
                title: "1. Production Excellence",
                desc: "Develop and scale a modern corn flour processing facility in Kigoma to ensure consistent, super-sifted, and hygienic output.",
              },
              {
                icon: Globe,
                title: "2. Market Growth",
                desc: "Expand reliable supply networks across Tanzania, DR Congo, Burundi, and neighboring East African communities.",
              },
              {
                icon: HeartHandshake,
                title: "3. Farmer Empowerment",
                desc: "Build lasting partnerships with rural smallholder farmers through prompt fair trade purchasing and agricultural agronomy support.",
              },
              {
                icon: Recycle,
                title: "4. Sustainability",
                desc: "Implement eco-friendly zero-waste processing by converting 100% of maize bran into high-nutrition animal feed.",
              },
            ].map((obj, i) => {
              const Icon = obj.icon;
              return (
                <motion.div
                  key={obj.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative rounded-3xl border border-slate-200 bg-slate-50/70 p-8 transition-all hover:border-emerald-600 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-emerald-800 text-yellow-400 group-hover:scale-110 transition-transform shadow-md shadow-emerald-900/10">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {obj.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{obj.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHOLESALE ORDER CALCULATOR WIDGET */}
      <WholesaleCalculatorSection />

      {/* THE VALUE CHAIN HIGHLIGHT */}
      <section className="py-24 bg-emerald-950 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-3xl border border-emerald-800">
              <img
                src={images.corncob}
                alt="Ripe corn on cob ready for milling"
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-emerald-800 bg-emerald-900/95 p-6 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-extrabold text-yellow-400 uppercase tracking-wider">Mission Statement</span>
                    <p className="text-lg font-bold text-white mt-1">Strengthening East Africa's Food Security</p>
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-yellow-400 text-emerald-950 flex items-center justify-center font-black text-xl">
                    🌾
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-xs font-extrabold text-yellow-300 mb-4">
                From Farm to Family Table
              </span>
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl leading-tight">
                Why Kigoma is Our Strategic Milling Hub
              </h2>
              <p className="mt-6 text-base leading-relaxed text-emerald-100">
                Situated in Western Tanzania, Kigoma is surrounded by fertile maize-growing highlands and shares direct trade corridors with DR Congo and Burundi via Lake Tanganyika and inland road networks.
              </p>

              <div className="mt-8 grid gap-5 border-t border-emerald-800/80 pt-8">
                {[
                  {
                    title: "Direct Smallholder Farm Gate Sourcing",
                    text: "Eliminating predatory middlemen so farmers earn higher incomes while we guarantee pristine grain quality.",
                  },
                  {
                    title: "Automated Super-Sifting Technology",
                    text: "Removing impurities to yield silky white corn flour that cooks fast and retains natural sweetness.",
                  },
                  {
                    title: "Cross-Border Logistics Support",
                    text: "Ready customs export packaging tailored for traders operating across the Great Lakes region.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3.5">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-emerald-950 shrink-0 font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-emerald-200 mt-1 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-extrabold text-emerald-950 transition hover:bg-yellow-300"
                >
                  Our Company Story <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-700 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-900"
                >
                  Contact Kigoma Office
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 py-16 text-emerald-950">
        <div className="mx-auto max-w-7xl px-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="text-xs font-black uppercase tracking-widest bg-emerald-950 text-yellow-300 px-3 py-1 rounded-md">
              Order Dispatch Open
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Partner with Riziki Semuna Investment Co. Ltd
            </h2>
            <p className="mt-2 text-base font-bold text-emerald-950/80 max-w-2xl">
              Whether you are a supermarket distributor, school feeding program, or livestock feed retailer, we guarantee consistent quality and bulk pricing.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-950 px-8 py-4 text-sm font-extrabold text-white shadow-xl transition hover:bg-emerald-900 shrink-0 hover:scale-[1.02]"
          >
            Request Wholesale Quotation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}

function WholesaleCalculatorSection() {
  const [productType, setProductType] = useState<"flour" | "fortified" | "bran">("flour");
  const [bagSize, setBagSize] = useState<number>(25);
  const [quantity, setQuantity] = useState<number>(100);

  const priceMap = {
    flour: { 5: 8500, 10: 16500, 25: 39500, 50: 76000 },
    fortified: { 5: 10500, 10: 20000, 25: 48000, 50: 92000 },
    bran: { 25: 14000, 50: 26000, 70: 34000 },
  };

  const availableSizes = Object.keys(priceMap[productType]).map(Number);

  useEffect(() => {
    if (!availableSizes.includes(bagSize)) {
      setBagSize(availableSizes[0]);
    }
  }, [productType]);

  const unitPrice = (priceMap[productType] as Record<number, number>)[bagSize] || 39500;
  const estimatedTotal = unitPrice * quantity;

  return (
    <section className="py-24 bg-slate-100 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-800/20 bg-emerald-100 px-4 py-1 text-xs font-extrabold text-emerald-900 mb-3">
              Quick Bulk Estimator
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Wholesale Order Estimator
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Use our interactive estimator to calculate approximate bulk pricing in Tanzanian Shillings (TZS) for commercial distributions, supermarkets, or livestock farms.
            </p>

            <div className="mt-6 rounded-2xl bg-white p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <Truck className="text-emerald-800 shrink-0" size={22} />
                <p className="text-xs font-semibold text-slate-700">
                  Direct transport can be arranged to Dar es Salaam, Mwanza, Kigoma border posts, and Burundi/DR Congo crossings.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Scale className="text-emerald-800 shrink-0" size={22} />
                <p className="text-xs font-semibold text-slate-700">
                  Every batch undergoes rigorous moisture and aflatoxin screening before bagging.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-8 border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center justify-between">
                <span>Select Product & Volume</span>
                <span className="text-xs font-normal text-slate-500">Estimates in TZS</span>
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">1. Product Line</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "flour", label: "Super Corn Flour" },
                      { id: "fortified", label: "Fortified Flour" },
                      { id: "bran", label: "Animal Feed Bran" },
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        type="button"
                        onClick={() => setProductType(btn.id as any)}
                        className={`py-3 px-3 rounded-xl text-xs font-bold transition-all border ${
                          productType === btn.id
                            ? "bg-emerald-800 text-white border-emerald-800 shadow-md"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">2. Bag Size (Kilograms)</label>
                  <div className="flex flex-wrap gap-2">
                    {availableSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setBagSize(size)}
                        className={`py-2 px-5 rounded-lg text-xs font-bold transition-all border ${
                          bagSize === size
                            ? "bg-yellow-400 text-emerald-950 border-yellow-500 shadow-sm"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {size} kg Bag
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-slate-700 uppercase">3. Number of Bags</label>
                    <span className="text-sm font-extrabold text-emerald-800">{quantity} Bags ({((quantity * bagSize) / 1000).toFixed(1)} Metric Tons)</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full accent-emerald-800 h-2 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-medium mt-1">
                    <span>Min: 10 Bags</span>
                    <span>500 Bags</span>
                    <span>Max: 1,000 Bags</span>
                  </div>
                </div>

                <div className="rounded-2xl bg-emerald-950 text-white p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-emerald-300 font-medium uppercase tracking-wider">Estimated Wholesale Total</p>
                    <p className="text-3xl font-black text-yellow-400 mt-1">
                      TZS {estimatedTotal.toLocaleString()}
                    </p>
                    <p className="text-[11px] text-emerald-200 mt-1">
                      Approx. TZS {unitPrice.toLocaleString()} per {bagSize}kg bag • Ex-factory Kigoma
                    </p>
                  </div>
                  <Link
                    to={`/contact?product=${productType}&size=${bagSize}&qty=${quantity}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-xs font-extrabold text-emerald-950 transition hover:bg-yellow-300 shadow-lg shrink-0"
                  >
                    Lock Bulk Quote <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <PageFrame>
      <PageHeader
        badge="About Riziki Semuna Investment Co. Ltd"
        title="Food Processing & Agricultural Empowerment in Kigoma"
        description="We are a dedicated Tanzanian agribusiness specializing in maize processing, food security, and rural farmer livelihoods."
        image={images.flourSieving}
      />

      {/* MISSION & VISION */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-900/10 bg-emerald-900 text-white p-10 relative overflow-hidden shadow-xl">
              <div className="mb-6 inline-flex p-3.5 rounded-2xl bg-yellow-400 text-emerald-950 font-bold">
                <Wheat size={28} />
              </div>
              <h3 className="text-2xl font-black">Our Mission Statement</h3>
              <p className="mt-4 text-emerald-100 text-base leading-relaxed">
                To produce high-quality and healthy food products while empowering smallholder farmers economically and building a sustainable agricultural value chain across Western Tanzania and East Africa.
              </p>
              <div className="mt-6 pt-6 border-t border-emerald-800 flex items-center gap-2 text-xs text-yellow-300 font-bold">
                <CheckCircle2 size={16} /> Putting Farmer Livelihoods First
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 relative overflow-hidden shadow-sm">
              <div className="mb-6 inline-flex p-3.5 rounded-2xl bg-emerald-800 text-yellow-400 font-bold">
                <Award size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Our Vision for East Africa</h3>
              <p className="mt-4 text-slate-600 text-base leading-relaxed">
                To become a trusted and leading brand for corn flour and nutritional food products in East Africa, contributing to regional food security and permanently elevating the socio-economic status of rural farmers.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-200 flex items-center gap-2 text-xs text-emerald-800 font-bold">
                <CheckCircle2 size={16} /> Expanding Across Tanzania, Congo & Burundi
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY STORY IN KIGOMA */}
      <section className="py-24 bg-slate-100 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-800/20 bg-emerald-50 px-4 py-1 text-xs font-extrabold text-emerald-800 mb-3">
                Our Roots in Kigoma
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Modern Milling Meeting Rural Agricultural Abundance
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Founded in Kigoma, Tanzania, Riziki Semuna Investment Company Limited recognized two vital regional needs: rural maize farmers lacked reliable, fair-paying buyers, and urban households needed clean, unadulterated corn flour that cooked perfectly every time.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                By investing in commercial milling machinery right at the source in Kigoma, we shortened the supply chain. Today, our facility processes thousands of metric tons of local maize, supplying supermarkets, schools, food aid organizations, and cross-border traders.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-slate-200">
                <div>
                  <p className="text-2xl font-black text-emerald-800">High Quality</p>
                  <p className="text-xs text-slate-500 mt-1">Strict cleaning & destoning before grinding</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-emerald-800">100% Traceable</p>
                  <p className="text-xs text-slate-500 mt-1">Directly from verified Kigoma cooperative farms</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <img
                src={images.harvest}
                alt="Maize harvest in field"
                className="rounded-3xl h-64 w-full object-cover shadow-lg"
              />
              <img
                src={images.dryCorn}
                alt="Yellow maize kernels"
                className="rounded-3xl h-64 w-full object-cover shadow-lg translate-y-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CORE OBJECTIVES IN DETAIL */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-800/20 bg-emerald-50 px-4 py-1 text-xs font-extrabold text-emerald-800 mb-3">
              Strategic Roadmap
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Our 4 Strategic Objectives
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "1. Production Excellence",
                subtitle: "Modern Corn Flour Processing Facility",
                desc: "We continuously invest in state-of-the-art grading, hulling, and sifting machinery at our Kigoma plant. This guarantees uniform particle size, removes husk bitterness, and preserves natural corn aroma.",
                icon: Factory,
              },
              {
                title: "2. Market Growth across East Africa",
                subtitle: "Regional Trade & Cross-Border Expansion",
                desc: "From Kigoma, our distribution corridors stretch across Tanzania (Dar es Salaam, Mwanza, Dodoma) and directly into Burundi and Eastern DR Congo, ensuring food security across border towns.",
                icon: Globe,
              },
              {
                title: "3. Smallholder Farmer Empowerment",
                subtitle: "Fair Trade & Agronomy Partnerships",
                desc: "We provide upfront seed advisory, transparent weighing scales, and guaranteed off-take agreements so farmers never lose crops to post-harvest pests or price gouging.",
                icon: Users,
              },
              {
                title: "4. Zero-Waste Environmental Sustainability",
                subtitle: "Full Grain Utilization & Eco Practices",
                desc: "No part of the maize kernel goes to waste. Nutrient-rich outer bran (pumba) is processed into premium livestock feed, supporting circular agricultural economies.",
                icon: Leaf,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50/80 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3.5 rounded-2xl bg-emerald-800 text-yellow-400">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                        <p className="text-xs font-bold text-emerald-700">{item.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mt-4">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOUNDER'S STORY */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-yellow-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-200 to-yellow-200 rounded-[2.5rem] blur-2xl opacity-60"></div>
              <SmartImage
                src={images.teamSemuna}
                alt="Tajiri Asiyejulikana, Founder of RISE Investment Company"
                className="relative rounded-[2rem] w-full h-[520px] object-cover shadow-2xl border-4 border-white"
              />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-800/20 bg-emerald-100 px-4 py-1.5 text-xs font-extrabold text-emerald-800 mb-4">
                Founder's Story
              </span>
              <h2 className="text-4xl font-black text-slate-900 sm:text-5xl">
                From Congo to Australia,<br />
                <span className="text-emerald-800">Building Bridges Through Agriculture</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-700">
                Tajiri Asiyejulikana, affectionately known as "Tajiri," is a Congolese entrepreneur who now calls Australia home. Despite living thousands of kilometers away, his heart remains deeply connected to East Africa's agricultural potential.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                Growing up in the Democratic Republic of Congo, Tajiri witnessed firsthand the challenges smallholder farmers face — from post-harvest losses to limited market access. After relocating to Australia for opportunities abroad, he never forgot the agricultural richness of his homeland.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                RISE Investment Company was born from a simple yet powerful vision: <strong className="text-emerald-800">bridge the gap between East African farmers and regional markets</strong>, while delivering nutritious, affordable food products to families across Tanzania, DRC, Burundi, and beyond.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 shadow-md border border-emerald-900/10">
                  <p className="text-3xl font-black text-emerald-800">DRC → Australia</p>
                  <p className="text-sm font-bold text-slate-600 mt-1">Global Perspective, Local Impact</p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-md border border-emerald-900/10">
                  <p className="text-3xl font-black text-emerald-800">Kigoma, TZ</p>
                  <p className="text-sm font-bold text-slate-600 mt-1">Production Hub &amp; Operations</p>
                </div>
              </div>
              <blockquote className="mt-8 border-l-4 border-yellow-400 pl-6 py-2 bg-white/60 rounded-r-xl">
                <p className="text-lg font-bold text-slate-800 italic">
                  "Distance doesn't limit impact. Through RISE, we're proving that you can build a world-class agribusiness from anywhere — as long as your mission serves the people."
                </p>
                <p className="mt-3 text-sm font-bold text-emerald-700">— Tajiri Asiyejulikana</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* OUR TEAM SECTION */}
      <section className="py-24 bg-emerald-900 border-t border-emerald-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-white sm:text-5xl">
              Our Team
            </h2>
            <p className="mt-4 text-xl font-bold text-yellow-400">
              Meet the People Behind Riziki Semuna
            </p>
            <p className="mt-4 text-base text-emerald-100 leading-relaxed">
              Riziki Semuna Investment Company Limited is driven by a team committed to improving food quality, supporting farmers, and building a sustainable agricultural future. We combine experience in agriculture, business, and community development to deliver value across the entire supply chain.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Semuna Asonge",
                role: "Founder & Managing Director",
                desc: "A Congolese entrepreneur based in Australia, Tajiri founded RISE Investment Company with a vision to bridge East African agriculture with global markets. Despite the distance, he remains deeply connected to the mission of empowering farmers and delivering quality food products across Tanzania, DRC, and the region.",
                image: images.teamSemuna,
              },
              {
                name: "Riziki Semuna",
                role: "Operations Manager",
                desc: "Responsible for overseeing production, supply chain, and logistics. Ensures that maize sourcing, processing, and distribution run efficiently while maintaining high-quality standards.",
                image: images.teamRiziki,
              },
              {
                name: "Dr Elembwe Asunge",
                role: "General Manager",
                desc: "Leads brand growth, customer engagement, and market expansion across Tanzania and regional markets, including online sales.",
                image: images.teamElembwe,
              },
            ].map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center p-6">
                <div className="h-56 w-56 rounded-[3.5rem] border-[6px] border-red-600 bg-emerald-950 flex items-center justify-center mb-6 shadow-2xl overflow-hidden relative">
                  <img
                    src={typeof member.image === "string" ? member.image : member.image.local}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (typeof member.image === "object" && member.image.fallback && target.src !== member.image.fallback) {
                        target.src = member.image.fallback;
                      } else {
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=064e3b&color=facc15&size=256&bold=true`;
                      }
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-emerald-50">{member.name}</h3>
                <p className="text-sm font-extrabold text-white mt-1 mb-4 italic">{member.role}</p>
                <p className="text-sm text-emerald-100/90 leading-relaxed max-w-sm">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

function ProductsPage() {
  const [filter, setFilter] = useState<"all" | "flour" | "feed">("all");

  const products = [
    {
      category: "flour",
      name: "Unga Wa Mahindi Super Sifiwa (Premium Corn Flour)",
      subtitle: "Finely Sifted White Maize Flour",
      desc: "Our flagship product. Milled from sun-dried, carefully sorted local white maize kernels. Engineered for smooth, lump-free ugali with natural aroma and high digestibility.",
      packaging: ["1kg Household Bag", "2kg Household Bag", "5kg & 10kg Family Bags", "25kg & 50kg Commercial/Institutional Sacks"],
      features: ["100% Free of Aflatoxins", "Super-Sifted Silky Texture", "Ideal for Ugali & Baking"],
      image: images.packagedBags,
      fallback: images.flourSieving,
    },
    {
      category: "flour",
      name: "Fortified Nutritional Corn Flour Blend",
      subtitle: "Enriched with Essential Micronutrients",
      desc: "Fortified with Iron, Zinc, Folic Acid, and Vitamin B12. Designed specifically for schools, hospitals, maternal health programs, and families seeking maximum nutritional benefit.",
      packaging: ["2kg Enriched Pack", "10kg School Feeding Sack", "25kg Bulk Relief Bag"],
      features: ["Combats Iron Deficiency", "High Caloric Value", "TBS Fortification Compliant"],
      image: images.palletBags,
      fallback: images.mealPreparation,
    },
    {
      category: "feed",
      name: "Corn Bran Animal Feed (Pumba Za Mahindi)",
      subtitle: "High-Energy Livestock & Poultry Feed",
      desc: "Obtained during the precision hulling of our maize. Rich in natural fiber, crude protein, and starch residue. Highly recommended for dairy cattle milk yields and poultry fattening.",
      packaging: ["50kg Standard Feed Sack", "70kg Bulk Farm Bag"],
      features: ["Rich in Digestible Fiber", "Boosts Dairy & Poultry Growth", "Cost-Effective Farm Feed"],
      image: images.stackedBags,
      fallback: images.warehouseWorkers,
    },
  ];

  const displayedProducts = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <PageFrame>
      <PageHeader
        badge="Our Products"
        title="High-Quality Corn Flour & Nutritional Products"
        description="Produced under rigorous food safety protocols at our Kigoma facility. Available in household retail bags and bulk institutional sacks."
        image={images.cornmealBowl}
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          {/* FILTER BUTTONS */}
          <div className="flex justify-center gap-3 mb-16">
            {[
              { id: "all", label: "All Products" },
              { id: "flour", label: "Corn Flour & Nutritional Blends" },
              { id: "feed", label: "Corn Bran Animal Feed" },
            ].map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setFilter(btn.id as any)}
                className={`px-6 py-3 rounded-xl text-xs font-bold transition-all ${
                  filter === btn.id
                    ? "bg-emerald-800 text-yellow-400 shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {displayedProducts.map((prod) => (
              <div
                key={prod.name}
                className="rounded-3xl border border-slate-200 bg-white shadow-md hover:shadow-2xl transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 w-full relative">
                    <SmartImage
                      src={prod.image}
                      fallback={prod.fallback}
                      alt={prod.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-3 left-3 rounded-md bg-emerald-900 text-yellow-400 text-[10px] font-extrabold px-3 py-1 uppercase shadow-md">
                      {prod.category === "flour" ? "Human Food Grade" : "Livestock Feed Grade"}
                    </div>
                  </div>

                  <div className="p-7">
                    <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">{prod.subtitle}</p>
                    <h3 className="text-xl font-extrabold text-slate-900 mt-1">{prod.name}</h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{prod.desc}</p>

                    <div className="mt-6 pt-5 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-800 uppercase mb-2">Available Packaging:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {prod.packaging.map((pkg) => (
                          <span key={pkg} className="rounded-lg bg-emerald-50 text-emerald-900 text-[11px] font-bold px-2.5 py-1 border border-emerald-900/10">
                            {pkg}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 space-y-1.5">
                      {prod.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <Check size={14} className="text-emerald-700 shrink-0 font-bold" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    to={`/contact?product=${encodeURIComponent(prod.name)}`}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-800 py-3.5 text-xs font-extrabold text-white hover:bg-emerald-900 transition shadow-md"
                  >
                    Request Wholesale Price List <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY ASSURANCE SECTION */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-xs font-extrabold text-yellow-300 mb-4">
                Strict Quality Standards
              </span>
              <h2 className="text-3xl font-black sm:text-4xl">
                Uncompromising Hygiene & Milling Precision
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed text-base">
                At Riziki Semuna Investment Company Limited, quality control begins right in the Kigoma farmland and continues until the final sack is sealed.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { title: "Moisture & Aflatoxin Screening", desc: "All incoming raw maize kernels are tested using digital moisture meters to prevent fungal contamination." },
                  { title: "Multi-Stage Magnetic Separation", desc: "High-intensity magnets remove any trace field metals or dust prior to milling." },
                  { title: "Automated Packaging Lines", desc: "Hygienic automatic weighing and stitching ensures exact net weights and tamper-proof bags." },
                ].map((q) => (
                  <div key={q.title} className="rounded-2xl bg-slate-800/80 p-5 border border-slate-700">
                    <h4 className="text-sm font-bold text-yellow-400 flex items-center gap-2">
                      <PackageCheck size={18} /> {q.title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">{q.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Nutritional Composition Summary</h3>
              <p className="text-xs text-slate-400 mb-6">Per 100g serving of Riziki Semuna Super Sifted Corn Flour</p>

              <div className="space-y-3.5 text-sm">
                {[
                  ["Energy", "365 kcal"],
                  ["Carbohydrates", "76.8 g"],
                  ["Protein", "8.5 g"],
                  ["Dietary Fiber", "3.2 g"],
                  ["Fat", "1.8 g"],
                  ["Fortified Micronutrients", "Iron, Zinc, Folic Acid"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-slate-700 pb-2.5">
                    <span className="text-slate-300">{k}</span>
                    <span className="font-bold text-yellow-400">{v}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 py-3.5 text-xs font-extrabold text-emerald-950 hover:bg-yellow-300 transition"
                >
                  Download Full Technical Spec Sheet <FileText size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

function FarmersPage() {
  return (
    <PageFrame>
      <PageHeader
        badge="Smallholder Farmer Empowerment"
        title="Supporting Rural Communities in Kigoma"
        description="Our mission is directly tied to the economic empowerment of smallholder maize farmers across Western Tanzania."
        image={images.harvest}
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-800/20 bg-emerald-50 px-4 py-1 text-xs font-extrabold text-emerald-800 mb-3">
                Shared Growth Model
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Why Smallholder Farmers Partner with Us
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                In Kigoma region, smallholder farming is the primary source of household income. Historically, farmers suffered from fluctuating harvest prices and delayed payments. Riziki Semuna Investment Company Limited transforms this dynamic through reliable outgrower partnerships.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "Guaranteed Harvest Off-Take",
                    desc: "We sign seasonal purchasing commitments with farmer groups so they plant with total confidence knowing their crop is sold.",
                  },
                  {
                    title: "Fair & Prompt Digital Payments",
                    desc: "We weigh produce on certified digital scales and disburse payments directly via mobile money (M-Pesa, Tigo Pesa, Airtel Money) within 24 hours.",
                  },
                  {
                    title: "Post-Harvest Loss Reduction",
                    desc: "By collecting maize promptly and storing it in our aerated silos, we save up to 30% of grain that would otherwise be lost to moisture or storage pests.",
                  },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="h-10 w-10 rounded-xl bg-emerald-800 text-yellow-400 flex items-center justify-center font-bold text-sm shrink-0">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-emerald-950 text-white p-8 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest">Community Impact</span>
                <Users size={24} className="text-yellow-400" />
              </div>

              <h3 className="text-2xl font-black">Join Our Farmer Outgrower Network</h3>
              <p className="mt-3 text-sm text-emerald-200 leading-relaxed">
                Are you a maize farmer or agricultural cooperative leader in Kasulu, Kibondo, Buhigwe, or Kigoma Rural? Partner with Riziki Semuna today.
              </p>

              <div className="mt-8 pt-6 border-t border-emerald-800 space-y-3 text-xs text-emerald-100">
                <p className="flex items-center gap-2">✓ Free seasonal moisture testing at our buying posts</p>
                <p className="flex items-center gap-2">✓ Access to quality hermetic storage sacks</p>
                <p className="flex items-center gap-2">✓ Transparent market pricing linked to national indices</p>
              </div>

              <Link
                to="/contact?topic=farmer_registration"
                className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 py-4 text-xs font-extrabold text-emerald-950 hover:bg-yellow-300 transition shadow-lg"
              >
                Register Your Farming Group <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultProduct = queryParams.get("product") || "";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageFrame>
      <PageHeader
        badge="Contact & Ordering"
        title="Connect with Our Kigoma Processing Office"
        description="Request wholesale quotations, inquire about export transport to Congo or Burundi, or partner with us as a supplier."
        image={images.warehouseWorkers}
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* CONTACT INFO */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-800/20 bg-emerald-50 px-4 py-1 text-xs font-extrabold text-emerald-800 mb-3">
                  Direct Factory Desk
                </span>
                <h2 className="text-3xl font-black text-slate-900">Get in Touch</h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  We welcome inquiries from commercial distributors, supermarkets, livestock farms, schools, and NGOs across East Africa.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-800 text-yellow-400 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Kigoma Processing Plant</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{COMPANY_HQ}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-800 text-yellow-400 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Telephone / WhatsApp Desk</h4>
                    <p className="text-xs text-slate-600 mt-1">{COMPANY_PHONE}</p>
                    <p className="text-[11px] text-emerald-700 font-medium mt-0.5">Mon - Sat: 7:30 AM - 6:00 PM EAT</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-800 text-yellow-400 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Official Email Addresses</h4>
                    <p className="text-xs text-slate-600 mt-1">{COMPANY_EMAIL}</p>
                    <p className="text-xs text-slate-600">{SALES_EMAIL}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-emerald-900 text-white p-6 shadow-md">
                <h4 className="text-sm font-bold text-yellow-400">Export & Cross-Border Logistics</h4>
                <p className="text-xs text-emerald-100 mt-2 leading-relaxed">
                  We assist border traders with required clearing documentation for transport across the Manyovu/Mugina border post (Burundi) and Lake Tanganyika barge shipping to Kalemie/Uvira (DR Congo).
                </p>
              </div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
                <h3 className="text-xl font-extrabold text-slate-900">Wholesale & Partnership Inquiry Form</h3>
                <p className="text-xs text-slate-500 mt-1">Fill out the details below and our sales director will contact you directly.</p>

                {submitted ? (
                  <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center">
                    <CheckCircle2 size={50} className="mx-auto text-emerald-700 mb-4" />
                    <h4 className="text-xl font-bold text-slate-900">Inquiry Received Successfully</h4>
                    <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Riziki Semuna Investment Company Limited. Your order quotation request has been assigned to our Kigoma sales dispatch team.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-3 rounded-xl bg-emerald-800 text-xs font-bold text-white hover:bg-emerald-900 transition"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Salum Nyerere"
                          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-700 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Company / Organization *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Kigoma Traders / School / Farm"
                          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-700 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-700 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone / WhatsApp Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+255 700 000 000"
                          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-700 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Inquiry Type *</label>
                        <select className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-700 focus:bg-white">
                          <option>Wholesale Corn Flour Order</option>
                          <option>Corn Bran Animal Feed Order</option>
                          <option>Cross-Border Export (DR Congo / Burundi)</option>
                          <option>Farmer Cooperative Registration</option>
                          <option>General Business Inquiry</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Product Interest</label>
                        <input
                          type="text"
                          defaultValue={defaultProduct}
                          placeholder="e.g. 25kg Corn Flour / 50kg Animal Feed"
                          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-700 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Message / Order Quantity & Destination *</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Please tell us required bag sizes, estimated quantities, delivery city/region, or any specific questions..."
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-700 focus:bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-gradient-to-r from-emerald-800 to-emerald-900 py-4 text-sm font-extrabold text-white shadow-lg hover:shadow-emerald-900/30 hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
                    >
                      <ShoppingBag size={17} className="text-yellow-400" />
                      Send Wholesale Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

function NotFoundPage() {
  return (
    <PageFrame>
      <section className="flex min-h-[60vh] items-center justify-center px-6 py-24 text-center">
        <div>
          <span className="text-5xl font-black text-yellow-500">404</span>
          <h1 className="mt-4 text-3xl font-extrabold text-slate-900">Page Not Found</h1>
          <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
            The page you requested is not part of the Riziki Semuna website. Please return to the homepage or explore our products.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-800 px-6 py-3 text-xs font-bold text-white"
          >
            Return to Homepage <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </PageFrame>
  );
}

function SmartImage({
  src,
  fallback,
  alt,
  className,
}: {
  src: string | { local: string; fallback: string };
  fallback?: string;
  alt: string;
  className?: string;
}) {
  const resolvedSrc = typeof src === "string" ? src : src.local;
  const resolvedFallback =
    typeof src === "string" ? fallback : src.fallback;

  const [currentSrc, setCurrentSrc] = useState(resolvedSrc);
  const [usedFallback, setUsedFallback] = useState(false);

  useEffect(() => {
    setCurrentSrc(resolvedSrc);
    setUsedFallback(false);
  }, [resolvedSrc]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (resolvedFallback && !usedFallback) {
          setCurrentSrc(resolvedFallback);
          setUsedFallback(true);
        }
      }}
    />
  );
}

function PageFrame({ children }: { children: ReactNode }) {
  return <motion.div {...pageMotion}>{children}</motion.div>;
}

function PageHeader({
  badge,
  title,
  description,
  image,
}: {
  badge: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-emerald-950 py-20 border-b border-emerald-900/40 text-white">
      <div className="absolute inset-0 z-0 opacity-25">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-emerald-950/80" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5 text-xs font-extrabold text-yellow-300 mb-4">
          {badge}
        </span>
        <h1 className="text-3xl font-black text-white sm:text-5xl tracking-tight max-w-4xl mx-auto">
          {title}
        </h1>
        <p className="mt-4 text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </section>
  );
}

function ShopPage() {
  const { addToCart, cart } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAddToCart = (product: typeof shopProducts[0]) => {
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("sw-TZ", { style: "currency", currency: "TZS", maximumFractionDigits: 0 }).format(price);
  };

  return (
    <PageFrame>
      <PageHeader
        image={images.packagedBags}
        badge="Online Shop"
        title="Order Semuna products directly from our website."
        description="Browse our range of maize flour and animal feed products. Add to cart and checkout via WhatsApp for fast delivery across Tanzania."
      />

      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-sm font-extrabold tracking-[0.34em] text-emerald-700 uppercase">Shop Now</p>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-balance sm:text-5xl text-emerald-950">
              Premium maize products delivered to your door.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              All products are freshly milled at our Kigoma facility and shipped within 24-48 hours. Payment on delivery available for orders in Kigoma region.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {shopProducts.map((product) => {
              const inCart = cart.some((item) => item.product.id === product.id);
              const isAdded = addedId === product.id;

              return (
                <motion.article
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-800 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-auto object-contain transition-transform group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-yellow-400 px-3 py-1 text-xs font-black text-emerald-950 shadow-md">
                      {product.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-black text-emerald-950">{product.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 flex-1">{product.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-2xl font-black text-emerald-800">{formatPrice(product.price)}</span>
                      <button
                        type="button"
                        onClick={() => handleAddToCart(product)}
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-black transition-all ${
                          isAdded
                            ? "bg-emerald-700 text-white"
                            : inCart
                            ? "bg-yellow-400 text-emerald-950 hover:bg-yellow-500"
                            : "bg-emerald-800 text-white hover:bg-emerald-700"
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check size={16} /> Added
                          </>
                        ) : (
                          <>
                            <ShoppingBag size={16} /> {inCart ? "In Cart" : "Add to Cart"}
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.article>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-900 p-8 text-center text-white sm:p-12"
            >
              <h3 className="text-3xl font-black">Need a bulk order?</h3>
              <p className="mt-4 text-lg text-emerald-100 max-w-2xl mx-auto">
                For orders above 100 bags, contact us directly for wholesale pricing and scheduled delivery.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href={`https://wa.me/255282804400?text=Hello, I'm interested in bulk order pricing for Semuna products.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-emerald-900 transition hover:bg-yellow-400"
                >
                  <Phone size={16} /> WhatsApp Us
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-black transition hover:bg-white hover:text-emerald-900">
                  Contact Sales
                </Link>
              </div>
          </motion.div>
        </div>
      </section>
    </PageFrame>
  );
}

function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("sw-TZ", { style: "currency", currency: "TZS", maximumFractionDigits: 0 }).format(price);
  };

  const handleCheckoutWhatsApp = () => {
    const message = cart
      .map((item) => `- ${item.product.name} x${item.quantity} = ${formatPrice(item.product.price * item.quantity)}`)
      .join("%0A");
    const totalMessage = `%0A*Total: ${formatPrice(cartTotal)}*`;
    const fullMessage = `Hello, I would like to order:%0A%0A${message}${totalMessage}%0A%0APlease confirm availability and delivery time. Thank you!`;
    window.open(`https://wa.me/255282804400?text=${fullMessage}`, "_blank");
  };

  const handleCheckoutEmail = () => {
    const subject = encodeURIComponent("Semuna Product Order");
    const body = encodeURIComponent(
      `Hello,\n\nI would like to place an order:\n\n${cart
        .map((item) => `- ${item.product.name} x${item.quantity} = ${formatPrice(item.product.price * item.quantity)}`)
        .join("\n")}\n\nTotal: ${formatPrice(cartTotal)}\n\nPlease confirm availability and delivery time.\n\nThank you!`
    );
    window.open(`mailto:${SALES_EMAIL}?subject=${subject}&body=${body}`, "_blank");
  };

  if (cart.length === 0) {
    return (
      <PageFrame>
        <section className="flex min-h-[60vh] items-center justify-center px-5 py-24 text-center sm:px-8 lg:px-10">
          <div>
            <ShoppingBag className="mx-auto h-20 w-20 text-emerald-900/30" />
            <h1 className="mt-6 text-4xl font-black text-emerald-950">Your cart is empty</h1>
            <p className="mt-4 text-lg text-slate-600 max-w-md mx-auto">
              Browse our shop to add Semuna maize flour and other products to your cart.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-800 px-8 py-4 text-sm font-black text-white transition hover:bg-emerald-700"
            >
              Go to Shop <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </PageFrame>
    );
  }

  return (
    <PageFrame>
      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-black text-emerald-950 mb-8">Shopping Cart</h1>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.product.id} className="flex gap-4 rounded-2xl border border-emerald-900/10 bg-white p-4">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-b from-neutral-900 to-neutral-800 flex items-center justify-center">
                    <img src={item.product.image} alt={item.product.name} className="h-full w-auto object-contain" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-emerald-950">{item.product.name}</h3>
                      <p className="text-sm text-slate-600">{formatPrice(item.product.price)} per unit</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-900/20 text-emerald-800 hover:bg-emerald-50"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-bold">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-900/20 text-emerald-800 hover:bg-emerald-50"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-sm font-bold text-red-600 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-emerald-800">{formatPrice(item.product.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 rounded-2xl border border-emerald-900/10 bg-emerald-50 p-6">
                <h2 className="text-xl font-black text-emerald-950">Order Summary</h2>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Subtotal</span>
                    <span className="font-bold text-emerald-900">{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Delivery</span>
                    <span className="font-bold text-emerald-900">Calculated at checkout</span>
                  </div>
                  <div className="border-t border-emerald-900/20 pt-3">
                    <div className="flex justify-between">
                      <span className="text-base font-black text-emerald-950">Total</span>
                      <span className="text-xl font-black text-emerald-800">{formatPrice(cartTotal)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <button
                    type="button"
                    onClick={handleCheckoutWhatsApp}
                    className="w-full rounded-full bg-[#25D366] py-3.5 text-sm font-black text-white transition hover:bg-[#20bd5a]"
                  >
                    Checkout via WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={handleCheckoutEmail}
                    className="w-full rounded-full border border-emerald-900/30 bg-white py-3.5 text-sm font-black text-emerald-900 transition hover:bg-emerald-100"
                  >
                    Checkout via Email
                  </button>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="w-full rounded-full py-3 text-xs font-bold text-slate-500 transition hover:text-slate-700"
                  >
                    Clear Cart
                  </button>
                </div>

                <p className="mt-4 text-xs text-slate-500 text-center">
                  After checkout, our team will confirm your order and arrange delivery within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

function Footer() {
  return (
    <footer className="border-t border-emerald-900/20 bg-emerald-950 text-emerald-200 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <LogoImage className="h-12 w-16" />
              <span className="text-lg font-black text-white tracking-tight">RISE <span className="font-medium text-emerald-200 text-base">Investment Co.</span></span>
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-emerald-200/80 max-w-sm">
              {COMPANY_NAME} is a leading food processing and agricultural milling company based in Kigoma, Tanzania. Specializing in high-quality corn flour and animal feed while empowering smallholder farmers across East Africa.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs text-yellow-300 font-bold">
              <ShieldCheck size={16} />
              <span>TBS Certified Quality • Zero Waste Processing</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-yellow-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4">Our Products</h4>
            <ul className="space-y-2.5 text-xs text-emerald-200/80">
              <li>Super Corn Flour (1kg - 50kg)</li>
              <li>Fortified Nutritional Flour Blends</li>
              <li>Corn Bran Animal Feed (Pumba)</li>
              <li>Bulk Institutional Sacks</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4">Kigoma Processing Plant</h4>
            <address className="not-italic text-xs space-y-2 text-emerald-200/80">
              <p className="text-white font-bold">Kigoma, Tanzania</p>
              <p>Industrial Area, Kasulu Road</p>
              <p className="mt-3 text-yellow-400 font-bold">{COMPANY_PHONE}</p>
              <p>{COMPANY_EMAIL}</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-300/70 gap-4">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-yellow-400 cursor-pointer">Quality Policy</span>
            <span className="hover:text-yellow-400 cursor-pointer">Smallholder Charter</span>
            <span className="hover:text-yellow-400 cursor-pointer">TBS Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
