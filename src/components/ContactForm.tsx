
import { useState } from "react";
import { Check, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the contact data to a server
    console.log("Contact form submitted:", { name, email, message });
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setMessage("");
    }, 3000);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="glass-card p-6 space-y-6 animate-fade-in [animation-delay:200ms]"
    >
      <h3 className="text-2xl font-bold text-center mb-6">{t.contact.sendMessage}</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            {t.contact.fullName}
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            {t.contact.email}
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium">
            {t.contact.message}
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            placeholder={t.contact.tellUsAboutProject}
            required
          />
        </div>
      </div>
      
      <Button type="submit" className="w-full btn-primary relative">
        {submitted ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            {t.contact.messageSent}
          </>
        ) : (
          <>
            <MessageSquare className="mr-2 h-4 w-4" />
            {t.contact.send}
          </>
        )}
      </Button>
    </form>
  );
}
