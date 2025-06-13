
import { useState } from "react";
import { ShoppingCart, X, Minus, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Cart() {
  const { t } = useLanguage();
  const { items, removeItem, updateItemDetails, clearCart, getTotalPrice, getItemCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckout = () => {
    const cartSummary = items.map(item => 
      `• ${item.name} - $${item.price}${item.additionalDetails ? `\n  Details: ${item.additionalDetails}` : ''}`
    ).join('\n');
    
    const totalPrice = getTotalPrice();
    const whatsappMessage = `Hello! I'd like to proceed with the following services:\n\n${cartSummary}\n\nTotal: $${totalPrice}\n\nPlease contact me to discuss the project details.`;
    
    const whatsappUrl = `https://wa.me/254701443181?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    clearCart();
    setIsOpen(false);
  };

  return (
    <>
      {/* Cart Icon */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="relative"
      >
        <ShoppingCart className="h-5 w-5" />
        {getItemCount() > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
          >
            {getItemCount()}
          </Badge>
        )}
      </Button>

      {/* Cart Modal - Fixed fullscreen overlay */}
      {isOpen && (
        <div className="fixed inset-10 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-2xl max-h-[auto] bg-background rounded-lg shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold">{t.cart.title}</h2>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)}
                className="hover:bg-muted rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <p className="text-lg text-muted-foreground">{t.cart.empty}</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.category}</p>
                          <p className="text-2xl font-bold text-primary mt-2">${item.price}</p>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium block mb-2">{t.cart.additionalDetails}</label>
                        <Textarea
                          placeholder="Add any specific requirements or details..."
                          value={item.additionalDetails || ''}
                          onChange={(e) => updateItemDetails(item.id, e.target.value)}
                          rows={3}
                          className="resize-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {items.length > 0 && (
              <div className="border-t p-6 bg-muted/50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-semibold">{t.cart.total}:</span>
                  <span className="text-3xl font-bold text-primary">${getTotalPrice()}</span>
                </div>
                
                <Button onClick={handleCheckout} className="w-full h-12 text-lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t.cart.checkout}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
