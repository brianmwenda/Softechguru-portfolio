
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <section className="section">
          <div className="container">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
              
              <p className="text-muted-foreground mb-8">
                Last updated: 06/16/2025
              </p>

              <h2>Information We Collect</h2><br />
              <p>
                We collect information you provide directly to us, such as when you create an account, 
                contact us, or use our services. This may include your name, email address, phone number, 
                and project details.
                
              </p>
<br />
              <h2>How We Use Your Information</h2><br />
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and maintain our services</li>
                <li>Process your requests and communicate with you</li>
                <li>Send you updates about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
<br />
              <h2>Information Sharing</h2><br />
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share your information:
              </p>
              <ul>
                <li>With service providers who assist us in operating our website</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
<br />
              <h2>Data Security</h2><br />
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2>Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can control cookie settings through your browser preferences.
              </p>
<br />
              <h2>Your Rights</h2><br />
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
<br />
              <h2>Contact Us</h2><br />
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: info@softechguru.com
                <br />
                Phone: +(254) 701-443-181
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
