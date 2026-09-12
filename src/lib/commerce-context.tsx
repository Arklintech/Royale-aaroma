import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { CartItem, Product, SizeOption } from "../data/types";
import { products } from "../data/products";

export const WHATSAPP_NUMBER = "919000327877";
export const WHATSAPP_DISPLAY = "+91 9000327877";

interface CommerceContextType {
  cart: CartItem[];
  cartCount: number;
  subtotal: number;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (product: Product, sizeOption?: SizeOption) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  currency: string;
  setCurrency: (c: string) => void;
  formatPrice: (amountInInr: number) => string;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  quizOpen: boolean;
  setQuizOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  getWhatsAppProductUrl: (product: Product, size?: SizeOption) => string;
  getWhatsAppCartUrl: () => string;
  getWhatsAppGeneralUrl: (context?: string) => string;
}

const CommerceContext = createContext<CommerceContextType | undefined>(undefined);

export function CommerceProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [currency, setCurrency] = useState("INR");
  const [searchOpen, setSearchOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Lock body scroll when overlays/modals are active
  useEffect(() => {
    const hasModal = cartOpen || searchOpen || quizOpen || !!quickViewProduct;
    document.body.style.overflow = hasModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen, searchOpen, quizOpen, quickViewProduct]);

  const addToCart = (product: Product, sizeOption?: SizeOption) => {
    const selectedSize: SizeOption =
      sizeOption || product.sizes[0] || { size: "Standard", price: product.startingPrice };
    const itemId = `${product.id}-${selectedSize.size}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prev, { id: itemId, product, selectedSize, quantity: 1 }];
    });

    setCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === cartItemId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null),
    );
  };

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  );

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.selectedSize.price * item.quantity, 0),
    [cart],
  );

  const formatPrice = (amountInInr: number) => {
    if (amountInInr === 0) return "Upcoming Release";
    if (currency === "USD") return `$${Math.round(amountInInr / 83)}`;
    if (currency === "EUR") return `€${Math.round(amountInInr / 90)}`;
    return `₹${amountInInr.toLocaleString("en-IN")}`;
  };

  const getWhatsAppProductUrl = (product: Product, size?: SizeOption) => {
    const activeSize: SizeOption =
      size || product.sizes[0] || { size: "Standard", price: product.startingPrice };
    const priceText = activeSize.price > 0 ? ` (${formatPrice(activeSize.price)})` : "";
    const msg = `Hello Royale Aaroma, I would like to order:
*${product.name}*
Size: ${activeSize.size}${priceText}
Collection: ${product.collectionName}

Please guide me with payment details and delivery timeline.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const getWhatsAppCartUrl = () => {
    if (cart.length === 0) {
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hello Royale Aaroma, I would like to place an order.",
      )}`;
    }

    const itemsSummary = cart
      .map(
        (item, index) =>
          `${index + 1}. *${item.product.name}* (${item.selectedSize.size}) x${item.quantity} - ${formatPrice(
            item.selectedSize.price * item.quantity,
          )}`,
      )
      .join("\n");

    const msg = `Hello Royale Aaroma, I would like to place an order for the following fragrances from my bag:

${itemsSummary}

*Total Order Value:* ${formatPrice(subtotal)}
*Shipping:* Complimentary within India

Please share payment options (UPI/Card) and shipping details.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const getWhatsAppGeneralUrl = (context?: string) => {
    const text = context
      ? `Hello Royale Aaroma, I am inquiring regarding: ${context}.`
      : "Hello Royale Aaroma, I would like to consult with your fragrance concierge.";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <CommerceContext.Provider
      value={{
        cart,
        cartCount,
        subtotal,
        cartOpen,
        setCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        currency,
        setCurrency,
        formatPrice,
        searchOpen,
        setSearchOpen,
        quizOpen,
        setQuizOpen,
        quickViewProduct,
        setQuickViewProduct,
        getWhatsAppProductUrl,
        getWhatsAppCartUrl,
        getWhatsAppGeneralUrl,
      }}
    >
      {children}
    </CommerceContext.Provider>
  );
}

export function useCommerce() {
  const context = useContext(CommerceContext);
  if (!context) {
    throw new Error("useCommerce must be used within a CommerceProvider");
  }
  return context;
}
