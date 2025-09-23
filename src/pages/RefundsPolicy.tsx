import Footer from "@/components/Footer";

const RefundsPolicy = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-playfair font-bold mb-8">Refunds Policy</h1>
          <div className="prose max-w-none space-y-8">
            <p className="text-lg text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Digital Products Refund Policy</h2>
              <p className="mb-4">
                Due to the digital nature of our products and services, all sales are final. 
                However, we want you to be completely satisfied with your purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">30-Day Satisfaction Guarantee</h2>
              <p className="mb-4">
                We offer a 30-day satisfaction guarantee for our digital coaching programs 
                and courses. If you're not satisfied, you may request a refund within 30 days 
                of purchase, provided you have:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Completed less than 25% of the digital content</li>
                <li>Made a good faith effort to engage with the material</li>
                <li>Provided specific feedback about your concerns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
              <p className="mb-4">To request a refund:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Contact us at hello@pivotsimply.com within 30 days</li>
                <li>Include your order number and reason for the refund request</li>
                <li>We will review your request within 5 business days</li>
                <li>If approved, refunds will be processed within 7-10 business days</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Non-Refundable Services</h2>
              <p className="mb-4">The following are not eligible for refunds:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>One-on-one coaching sessions after they have occurred</li>
                <li>Digital downloads that have been completely accessed</li>
                <li>Services used beyond the 30-day guarantee period</li>
                <li>Subscription services (subject to cancellation terms)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Subscription Cancellations</h2>
              <p className="mb-4">
                Recurring subscriptions can be cancelled at any time. Cancellations take effect 
                at the end of the current billing period. No partial refunds are provided 
                for unused portions of subscription periods.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Technical Issues</h2>
              <p className="mb-4">
                If you experience technical difficulties accessing your digital content, 
                please contact our support team first. We will work to resolve technical 
                issues before considering refund requests.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                For refund requests or questions about this policy, contact us at 
                hello@pivotsimply.com or through our contact form.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundsPolicy;