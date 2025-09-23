import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-playfair font-bold mb-8">Terms of Service</h1>
          <div className="prose max-w-none space-y-8">
            <p className="text-lg text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using PivotSimply's digital services, you accept and agree to be 
                bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Digital Services</h2>
              <p className="mb-4">
                PivotSimply provides digital coaching, wellness programs, and educational content. 
                All services are delivered digitally through our platform.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Online coaching sessions</li>
                <li>Digital wellness programs</li>
                <li>Educational content and resources</li>
                <li>Community access and support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
              <p className="mb-4">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use services for personal transformation and growth</li>
                <li>Maintain confidentiality of your account credentials</li>
                <li>Engage respectfully in community spaces</li>
                <li>Not share or redistribute digital content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p className="mb-4">
                All digital content, including courses, coaching materials, and resources, 
                are the intellectual property of PivotSimply and are protected by copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="mb-4">
                PivotSimply's digital services are provided for educational and personal development 
                purposes. We do not guarantee specific outcomes or results.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Termination</h2>
              <p className="mb-4">
                We reserve the right to terminate or suspend access to our digital services 
                at our sole discretion, without notice, for any reason.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p>
                For questions about these Terms of Service, contact us at hello@pivotsimply.com.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;