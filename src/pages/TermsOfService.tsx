
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
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
              <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
              
              <p className="text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2>Agreement to Terms</h2>
              <p>
                By accessing and using our services, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>

              <h2>Services</h2>
              <p>
                We provide web development, design, photography, videography, and related digital services. 
                Service details, timelines, and pricing are outlined in individual project agreements.
              </p>

              <h2>Payment Terms</h2>
              <ul>
                <li>Payment schedules are defined in project contracts</li>
                <li>Late payments may incur additional fees</li>
                <li>Refunds are handled according to our refund policy</li>
                <li>All prices are in USD unless otherwise specified</li>
              </ul>

              <h2>Intellectual Property</h2>
              <p>
                Upon full payment, clients receive ownership of the final deliverables. We retain the right 
                to showcase completed work in our portfolio unless otherwise agreed.
              </p>

              <h2>Client Responsibilities</h2>
              <p>Clients are responsible for:</p>
              <ul>
                <li>Providing necessary content and materials in a timely manner</li>
                <li>Timely feedback and approvals</li>
                <li>Payment according to agreed terms</li>
                <li>Ensuring content legality and copyright compliance</li>
              </ul>

              <h2>Project Timelines</h2>
              <p>
                Project timelines depend on project scope and client responsiveness. Delays in client 
                feedback or content provision may extend project completion dates.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                Our liability is limited to the amount paid for services. We are not liable for 
                indirect, incidental, or consequential damages.
              </p>

              <h2>Termination</h2>
              <p>
                Either party may terminate services with written notice. Termination terms and 
                compensation for completed work are outlined in project agreements.
              </p>

              <h2>Governing Law</h2>
              <p>
                These terms are governed by the laws of the jurisdiction where our business is 
                registered.
              </p>

              <h2>Contact Information</h2>
              <p>
                For questions about these Terms of Service, contact us at:
                <br />
                Email: legal@webdevstudio.com
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
