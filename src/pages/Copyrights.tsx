import Footer from "@/components/Footer";

const Copyrights = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-playfair font-bold mb-8">Copyright Notice</h1>
          <div className="prose max-w-none space-y-8">
            <p className="text-lg text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Copyright Ownership</h2>
              <p className="mb-4">
                All content on PivotSimply, including but not limited to digital courses, 
                coaching materials, videos, audio recordings, written content, graphics, 
                and software, is owned by PivotSimply and is protected by copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Digital Content Rights</h2>
              <p className="mb-4">Our digital content includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Online coaching programs and sessions</li>
                <li>Wellness and transformation courses</li>
                <li>Audio recordings and video content</li>
                <li>Written materials and workbooks</li>
                <li>Software applications and digital tools</li>
                <li>Website design and user interface</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Permitted Use</h2>
              <p className="mb-4">
                You may use our digital content solely for your personal, non-commercial use 
                in accordance with our Terms of Service. You may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Copy, distribute, or share digital content</li>
                <li>Modify or create derivative works</li>
                <li>Use content for commercial purposes</li>
                <li>Remove copyright notices or watermarks</li>
                <li>Reverse engineer software or applications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">DMCA Compliance</h2>
              <p className="mb-4">
                We respect intellectual property rights and respond to notices of alleged 
                copyright infringement in accordance with the Digital Millennium Copyright Act (DMCA).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Trademark Information</h2>
              <p className="mb-4">
                "PivotSimply" and our logos are trademarks of PivotSimply. All other trademarks 
                mentioned on our platform are the property of their respective owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Copyright Infringement</h2>
              <p className="mb-4">
                If you believe your copyrighted work has been used without permission, 
                please contact us at hello@pivotsimply.com with detailed information 
                about the alleged infringement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                For copyright-related inquiries, please contact us at hello@pivotsimply.com.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Copyrights;