import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-playfair font-bold mb-8">Disclaimer</h1>
          <div className="prose max-w-none space-y-8">
            <p className="text-lg text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">General Disclaimer</h2>
              <p className="mb-4">
                The information and services provided by PivotSimply are for educational and 
                personal development purposes only. Results may vary based on individual 
                circumstances, effort, and commitment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">No Guarantee of Results</h2>
              <p className="mb-4">
                While our digital coaching programs and wellness services are designed to support 
                personal transformation, we cannot guarantee specific outcomes or results. 
                Success depends on many factors including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Individual commitment and application</li>
                <li>Personal circumstances and background</li>
                <li>Consistency in implementing strategies</li>
                <li>External factors beyond our control</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Not Professional Medical Advice</h2>
              <p className="mb-4">
                Our digital wellness and coaching services are not intended to replace professional 
                medical, psychological, or therapeutic treatment. Always consult with qualified 
                healthcare professionals for medical concerns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Digital Content Accuracy</h2>
              <p className="mb-4">
                While we strive to provide accurate and up-to-date information in our digital 
                content, we make no representations or warranties about the completeness, 
                accuracy, or reliability of any information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Personal Responsibility</h2>
              <p className="mb-4">
                You acknowledge that participation in our digital programs is voluntary and 
                at your own risk. You are responsible for your own decisions and actions 
                based on the information provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Business and Financial Results</h2>
              <p className="mb-4">
                Any business or financial strategies discussed in our digital content are for 
                educational purposes only. We do not guarantee business success or financial 
                results. Past performance does not predict future results.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
              <p className="mb-4">
                Our digital platform may contain links to third-party websites or services. 
                We are not responsible for the content, privacy policies, or practices of 
                external sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="mb-4">
                PivotSimply shall not be liable for any direct, indirect, incidental, or 
                consequential damages arising from the use of our digital services or content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have questions about this disclaimer, please contact us at 
                hello@pivotsimply.com.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Disclaimer;