
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
    
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
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

      {/* Cart Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md max-h-[80vh] overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle>{t.cart.title}</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            
            <CardContent className="space-y-4 max-h-[60vh] overflow-y-auto">
              {items.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">{t.cart.empty}</p>
              ) : (
                <>
                  {items.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.category}</p>
                          <p className="font-bold text-primary">${item.price}</p>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => removeItem(item.id)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium">{t.cart.additionalDetails}</label>
                        <Textarea
                          placeholder="Add any specific requirements or details..."
                          value={item.additionalDetails || ''}
                          onChange={(e) => updateItemDetails(item.id, e.target.value)}
                          className="mt-1"
                          rows={2}
                        />
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold">{t.cart.total}:</span>
                      <span className="font-bold text-lg">${getTotalPrice()}</span>
                    </div>
                    
                    <Button onClick={handleCheckout} className="w-full btn-primary">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {t.cart.checkout}
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
