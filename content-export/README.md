# PivotSimply Content Export for WordPress

This folder contains JSON files with all the content from your PivotSimply website, exported for manual transfer to WordPress.

## Files Included

1. **home-page.json** - Main landing page content (Hero, Services, Testimonials, Stats)
2. **about-us.json** - Complete About Us page with founder story, mission, vision, values
3. **contact-page.json** - Contact page with form fields, contact info, FAQ
4. **blog-posts.json** - All blog posts with titles, excerpts, categories, tags
5. **podcast.json** - Podcast page with episodes and platform links
6. **unbound-pivot.json** - Unbound Pivot service page
7. **conscious-creator-circle.json** - Conscious Creator Circle service page
8. **business-wealth-building.json** - Business & Wealth Building service page
9. **footer.json** - Footer content including services, awards, contact info

## How to Use These Files in WordPress

### Method 1: Manual Content Transfer (Recommended)

1. **Create Pages in WordPress**
   - Go to Pages > Add New in WordPress
   - Create a new page for each JSON file (Home, About Us, Contact, etc.)

2. **Copy Content from JSON**
   - Open each JSON file
   - Copy the text content from the relevant fields
   - Paste into WordPress page editor (using Gutenberg blocks or Classic Editor)

3. **Structure the Content**
   - Use headings (H1, H2, H3) for titles and section headers
   - Create lists for features and bullet points
   - Add buttons for CTAs (Call-to-Actions)
   - Use quote blocks for testimonials

4. **Add Images**
   - Note: Images are referenced in the React app but need to be uploaded separately to WordPress
   - Upload images to WordPress Media Library
   - Insert them in the appropriate locations

### Method 2: Use a Page Builder

If you're using a WordPress page builder like:
- **Elementor**
- **Divi**
- **WPBakery**
- **Beaver Builder**

You can:
1. Create sections/rows for each content block
2. Add text modules and paste the content from JSON
3. Style to match your desired design
4. Add images and buttons

### Example: Creating the Home Page

Using the `home-page.json` file:

1. **Hero Section**
   ```
   - Add Hero block/section
   - Heading: "You Are Just One Decision Away From Embracing Your Full Potential"
   - Subheading: "Master Your Mind, Monetize Your Genius..."
   - Add 2 buttons: "Start Your Transformation" and "Discover Our Offerings"
   ```

2. **Credentials Section**
   ```
   - Add section with cards
   - Each award gets its own card with icon, title, and organization
   ```

3. **Services Section**
   ```
   - Create 3 columns
   - Each service in its own column with:
     * Title
     * Price
     * Description
     * Feature list
     * "Learn More" button
   ```

4. **Testimonials Section**
   ```
   - Add testimonial cards
   - Include star ratings, quote, name, role, transformation
   ```

### For Blog Posts

Use `blog-posts.json`:
1. Go to Posts > Add New in WordPress
2. For each post in the JSON:
   - Create a new post
   - Set the title, content (excerpt), category, tags
   - Set featured image
   - Publish

### Important Notes

- **Images**: The JSON files reference image paths from the React app. You'll need to:
  1. Download images from the GitHub repo
  2. Upload them to WordPress Media Library
  3. Insert them in your pages

- **Links**: Update any internal links to match your WordPress site structure

- **Styling**: You'll need to apply your own CSS/styling in WordPress to match the design

- **Forms**: The contact form will need to be created using a WordPress form plugin like:
  - Contact Form 7
  - WPForms
  - Gravity Forms

## Content Structure Overview

Each JSON file is organized hierarchically:
- Top-level sections (hero, features, testimonials, etc.)
- Each section contains relevant data (headings, text, lists, etc.)
- Arrays are used for repeated items (testimonials, features, blog posts)

## Questions?

If you need help with any specific section or have questions about how to implement this content in WordPress, please let me know!
