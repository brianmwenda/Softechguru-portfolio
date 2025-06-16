
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, User, Clock } from "lucide-react";

// Sample blog post data - in a real app, this would come from a CMS or API
const blogPosts = {
  "1": {
    title: "The Future of Web Development: Trends to Watch in 2024",
    content: `
      <p>Web development is evolving at an unprecedented pace, and 2024 promises to bring exciting new trends that will reshape how we build and interact with websites. In this comprehensive guide, we'll explore the most significant trends that every developer and business owner should be aware of.</p>
      <br/>
      <h3>1. AI-Powered Development Tools</h3>
       <br/>
      <p>Artificial Intelligence is revolutionizing the development process. From code generation to automated testing, AI tools are making developers more productive than ever. Tools like GitHub Copilot and ChatGPT are already changing how we write code, and this trend will only accelerate in 2024.</p>
       <br/>
      <h3>2. Progressive Web Apps (PWAs)</h3>
       <br/>
      <p>PWAs continue to bridge the gap between web and native applications. With improved browser support and new capabilities, PWAs offer near-native performance while maintaining the reach and accessibility of web applications.</p>
       <br/>
      <h3>3. Serverless Architecture</h3> <br/>
      <p>Serverless computing is becoming the default choice for many applications. It offers better scalability, reduced costs, and faster deployment times. Edge computing is also gaining traction, bringing computation closer to users for improved performance.</p>
       <br/>
      <h3>4. Advanced CSS Features</h3> <br/>
      <p>CSS continues to evolve with new features like container queries, cascade layers, and improved grid layouts. These features give developers more control over responsive design and layout management.</p>
       <br/>
      <h3>5. Enhanced Security Measures</h3> <br/>
      <p>With increasing cyber threats, security is becoming a top priority. Zero-trust architecture, advanced authentication methods, and improved encryption standards are becoming standard practices.</p>
       <br/>
      <h3>Conclusion</h3> <br/>
      <p>The future of web development is bright and full of opportunities. By staying informed about these trends and continuously learning, developers can create better, more efficient, and more secure web applications.</p>
    `,
    image: "/assets/images/website.jpg",
    date: "June 09, 2025",
    readTime: "5 min read",
    author: "Development Team",
    category: "Web Development"
  },
  "2": {
    title: "UI/UX Design Principles That Convert Visitors to Customers",
    content: `
      <p>Great design is more than just aesthetics—it's about creating experiences that guide users toward taking action. In this article, we'll explore the fundamental UI/UX principles that can significantly improve your conversion rates.</p>
      
      <h3>1. Clear Value Proposition</h3>
      <p>Your visitors should understand what you offer within seconds of landing on your page. A clear, compelling value proposition placed prominently on your homepage is crucial for keeping visitors engaged.</p>
      
      <h3>2. Intuitive Navigation</h3>
      <p>Users should never feel lost on your website. Implement clear, logical navigation structures with descriptive labels. Breadcrumbs, search functionality, and a well-organized menu system all contribute to better user experience.</p>
      
      <h3>3. Responsive Design</h3>
      <p>With mobile traffic accounting for over 50% of web browsing, responsive design isn't optional—it's essential. Your website must provide an excellent experience across all devices and screen sizes.</p>
      
      <h3>4. Loading Speed Optimization</h3>
      <p>Page speed directly impacts both user experience and conversion rates. Optimize images, minimize HTTP requests, and use content delivery networks (CDNs) to ensure fast loading times.</p>
      
      <h3>5. Trust Signals</h3>
      <p>Build credibility with testimonials, reviews, security badges, and professional design. Trust signals help reduce friction in the conversion process and make users more comfortable taking action.</p>
      
      <h3>Best Practices for Conversion</h3>
      <p>Focus on creating a seamless user journey from awareness to action. Use A/B testing to optimize your designs and always prioritize user needs over business preferences.</p>
    `,
    image: "/assets/images/principles.jpg",
    date: "June 12, 2025",
    readTime: "4 min read",
    author: "Design Team",
    category: "Design"
  },
  "3": {
    title: "Professional Photography Tips for Your Business Brand",
    content: `
      <p>Visual content is more important than ever in today's digital landscape. Professional photography can set your brand apart and create a lasting impression on your audience. Here are essential tips to elevate your brand photography.</p>
      
      <h3>1. Define Your Brand Aesthetic</h3>
      <p>Before picking up a camera, establish a clear visual identity for your brand. Consider your color palette, mood, and style. Consistency across all your visual content will strengthen brand recognition.</p>
      
      <h3>2. Invest in Quality Equipment</h3>
      <p>While smartphone cameras have improved dramatically, professional equipment still makes a difference. A good DSLR or mirrorless camera, quality lenses, and proper lighting equipment are worthwhile investments.</p>
      
      <h3>3. Master Lighting Techniques</h3>
      <p>Lighting can make or break a photograph. Learn to work with natural light and invest in artificial lighting setups. Soft, diffused light generally works best for business photography.</p>
      
      <h3>4. Focus on Composition</h3>
      <p>Apply fundamental composition rules like the rule of thirds, leading lines, and framing. These techniques will help create more visually appealing and professional-looking images.</p>
      
      <h3>5. Show Your Team and Culture</h3>
      <p>Authentic photos of your team and workplace help humanize your brand. Candid shots of your team working, collaborating, and celebrating create emotional connections with your audience.</p>
      
      <h3>6. Product Photography Excellence</h3>
      <p>If you sell products, high-quality product photography is crucial. Use clean backgrounds, multiple angles, and detail shots to showcase your products effectively.</p>
      
      <h3>Post-Processing Tips</h3>
      <p>Learn basic photo editing skills to enhance your images. Consistency in editing style helps maintain your brand aesthetic across all platforms.</p>
    `,
    image: "/assets/images/photo.jpg",
    date: "June 14, 2025",
    readTime: "6 min read",
    author: "Photography Team",
    category: "Photography"
  },
  "4":{
  title: "Video Marketing Strategies That Drive Engagement",
  content: `
    <p>In today’s fast-paced digital world, video marketing has emerged as one of the most powerful tools for capturing attention, building trust, and driving engagement. Whether you're promoting a product, service, or story, the right video strategy can make your brand unforgettable. Here are essential video marketing strategies that can help your business boost viewer engagement and generate real results.</p>
    <br/>
    <h3>1. Understand Your Audience</h3> <br/>
    <p>The foundation of a successful video marketing strategy is a deep understanding of your target audience. Who are they? What problems do they face? What kind of content do they enjoy watching? Knowing these answers will guide your content creation and ensure your videos resonate with your viewers.</p>
     <br/>
    <h3>2. Define Clear Goals</h3> <br/>
    <p>Every video should have a specific purpose. Are you trying to increase brand awareness, generate leads, drive traffic, or boost conversions? Defining your goals will help determine the video style, length, platform, and call to action.</p>
     <br/>
    <h3>3. Hook Viewers in the First 5 Seconds</h3> <br/>
    <p>Online viewers are quick to scroll. That’s why your video must grab attention within the first 3 to 5 seconds. Use bold visuals, compelling questions, or powerful statements to immediately capture interest. Don’t wait to get to the point—start with it.</p>
     <br/>
    <h3>4. Optimize for Mobile Viewing</h3> <br/>
    <p>Over 75% of video content is watched on mobile devices. To drive engagement, ensure your videos are mobile-friendly. Use vertical or square formats for social media, include large text overlays, and keep visuals clean and easy to follow without sound.</p>
     <br/>
    <h3>5. Incorporate Storytelling</h3> <br/>
    <p>People connect with stories. A well-told story can make your brand feel more human and relatable. Whether it’s a customer testimonial, a behind-the-scenes look, or a journey through your product’s development, storytelling builds emotional connections that drive engagement.</p>
     <br/>
    <h3>6. Keep It Concise</h3> <br/>
    <p>Attention spans are short. Aim to keep your marketing videos under 2 minutes, especially for social media. For product demos or explainer videos, 60–90 seconds is ideal. If the content requires more time, consider splitting it into a video series.</p>
     <br/>
    <h3>7. Add Subtitles and Captions</h3> <br/>
    <p>Many users watch videos without sound—especially on platforms like LinkedIn, Facebook, and Instagram. Adding subtitles ensures your message is delivered clearly, regardless of how your audience consumes the video. Captions also make your content more accessible.</p>
     <br/>
    <h3>8. Use Strong Calls to Action (CTAs)</h3> <br/>
    <p>Guide viewers on what to do next. Whether it’s visiting your website, signing up for a newsletter, following your page, or making a purchase, a strong CTA is essential. Place your CTA at both the middle and end of the video to increase conversions.</p>
     <br/>
    <h3>9. Repurpose Video Content</h3> <br/>
    <p>Maximize your ROI by repurposing long-form videos into short clips, GIFs, reels, and stories. A single video shoot can yield multiple pieces of content optimized for YouTube, TikTok, Instagram, LinkedIn, and more. This ensures wider reach without creating more from scratch.</p>
     <br/>
    <h3>10. Go Live and Stay Real</h3> <br/>
    <p>Live video builds authenticity and trust. Host Q&A sessions, product launches, or behind-the-scenes events to engage your audience in real time. The spontaneity and human element of live videos often drive more comments and shares than pre-recorded content.</p>
     <br/>
    <h3>11. Analyze and Adjust</h3> <br/>
    <p>Track video performance using metrics like watch time, engagement rate, click-through rate, and conversions. Platforms like YouTube Analytics, Meta Insights, and Google Analytics provide valuable data. Use this information to refine your content strategy and improve future videos.</p>
     <br/>
    <h3>12. Collaborate With Influencers and UGC Creators</h3> <br/>
    <p>Working with influencers or encouraging user-generated content (UGC) is a great way to amplify reach and build trust. Audiences tend to trust peers more than brands. Partner with creators who align with your values and let them share their own spin on your brand.</p>
     <br/>
    <h3>13. Brand Your Videos</h3> <br/>
    <p>Consistent branding makes your content instantly recognizable. Include your logo, brand colors, and fonts in your videos. Use intros and outros to build familiarity. Don’t let branding overpower the message—but make sure it’s always present.</p>
     <br/>
    <h3>14. Leverage YouTube SEO</h3> <br/>
    <p>For long-form content, YouTube remains the king. Optimize your titles, tags, descriptions, and thumbnails with relevant keywords. Use chapters and playlists to organize your content. Engaging thumbnails and compelling titles increase click-through rates and watch time.</p>
     <br/>
    <h3>15. Experiment With Video Formats</h3> <br/>
    <p>Don’t limit your brand to one type of video. Explore various formats like tutorials, customer testimonials, behind-the-scenes footage, webinars, animated explainers, reels, and brand documentaries. Different formats appeal to different audience segments and offer variety.</p>
     <br/>
    <h3>Final Thoughts</h3> <br/>
    <p>Video marketing is no longer optional—it’s essential. With the right strategy, you can capture attention, spark conversations, and convert viewers into loyal customers. Start small, stay consistent, and let your creativity lead the way.</p>
  `,
  image: "/assets/images/videomarket.jpg",
  date: "June 15, 2025",
  readTime: "7 min read",
  author: "Content Strategy Team",
  category: "Marketing"
},
"5":{
  title: "Building Responsive Websites: A Complete Guide",
  content: `
    <p>With users accessing websites from a wide range of devices—smartphones, tablets, laptops, and desktops—responsive web design is no longer optional; it's a necessity. A responsive website ensures your content looks great and functions well on every screen size. This complete guide will walk you through the fundamentals, tools, and best practices for building fully responsive websites.</p>
<br/>
    <h3>1. What is Responsive Web Design?</h3><br/>
    <p>Responsive web design (RWD) is an approach to web development that makes web pages render well across all devices and window sizes. Instead of creating multiple versions for different screens, responsive design adapts layout, images, and content dynamically using CSS, flexible grids, and media queries.</p>
<br/>
    <h3>2. Why Responsiveness Matters</h3><br/>
    <p>According to recent studies, over 60% of web traffic comes from mobile devices. A non-responsive site leads to poor user experience, higher bounce rates, and lower SEO rankings. Google prioritizes mobile-first indexing, meaning your mobile design can directly affect search engine visibility.</p>
<br/>
    <h3>3. Start With Mobile-First Design</h3><br/>
    <p>Mobile-first design is the practice of designing for the smallest screens first and then progressively enhancing the layout for larger screens. This approach ensures core functionality and content are optimized for mobile users, who often make up the majority of traffic.</p>
<br/>
    <h3>4. Use Flexible Grid Layouts</h3><br/>
    <p>Instead of fixed pixel-based layouts, use percentage-based widths and grid systems. Frameworks like CSS Grid and Flexbox allow you to create fluid and adaptable layouts. For example, setting column widths to <code>50%</code> instead of <code>600px</code> makes the layout adjust to screen size.</p>
<br/>
    <h3>5. Media Queries are Your Best Friend</h3><br/>
    <p>Media queries let you apply CSS rules based on screen size, orientation, and resolution. Use breakpoints to change layout elements when the screen crosses specific width thresholds. A typical example:</p>
    <pre><code>
    @media (max-width: 768px) {
      .navbar { flex-direction: column; }
    }
    </code></pre>
    <p>This snippet changes the navigation bar layout on tablets and smaller devices.</p>
<br/>
    <h3>6. Optimize Typography</h3><br/>
    <p>Readable typography is key to user experience. Use relative units like <code>em</code> or <code>rem</code> instead of pixels for font sizes. Ensure line height, spacing, and font contrast are optimized for both small and large screens.</p>
<br/>
    <h3>7. Make Images and Media Flexible</h3><br/>
    <p>Use the <code>max-width: 100%</code> rule on images to ensure they scale within their parent container. Consider using the <code>&lt;picture&gt;</code> element or <code>srcset</code> attribute to load different image sizes for different devices, improving load times and performance.</p>
<br/>
    <h3>8. Navigation for All Devices</h3><br/>
    <p>Navigation menus must adapt to different screens. Use hamburger menus for mobile, sticky headers for quick access, and clearly visible CTAs. Ensure clickable elements are touch-friendly, with enough padding and spacing to prevent errors.</p>
<br/>
    <h3>9. Test Across Multiple Devices</h3><br/>
    <p>Use browser tools like Chrome DevTools to simulate devices and test responsiveness. Also, test on actual smartphones and tablets. Tools like BrowserStack or Responsively App can help automate multi-device testing.</p>
<br/>
    <h3>10. Use Responsive Frameworks</h3><br/>
    <p>Frameworks like Bootstrap, Tailwind CSS, and Foundation include built-in responsive grids and components. They simplify the development process and help maintain consistency across devices. Customize breakpoints and utility classes to match your design requirements.</p>
<br/>
    <h3>11. Optimize for Performance</h3><br/>
    <p>Responsiveness isn’t just about layout—it’s also about speed. Optimize images, use lazy loading, minify CSS/JS files, and use responsive fonts. A fast, responsive site improves both UX and SEO.</p>
<br/>
    <h3>12. Accessibility and Responsiveness</h3><br/>
    <p>Make sure your responsive design also considers accessibility. Use semantic HTML, provide sufficient color contrast, and support keyboard navigation. ARIA roles and labels help screen readers understand your content structure.</p>
<br/>
    <h3>13. Common Mistakes to Avoid</h3><br/>
    <ul>
      <li>Using fixed-width containers</li>
      <li>Overlooking horizontal scrolling on mobile</li>
      <li>Neglecting testing on real devices</li>
      <li>Hiding essential content on smaller screens</li>
    </ul>
    <p>Being aware of these pitfalls helps create a smoother, more inclusive experience.</p>
<br/>
    <h3>14. Tools and Resources</h3><br/>
    <p>Here are some tools to help build responsive sites faster:</p>
    <ul>
      <li><strong>Can I Use:</strong> Check browser compatibility</li>
      <li><strong>Figma:</strong> Design and prototype responsive layouts</li>
      <li><strong>Tailwind CSS:</strong> Utility-first responsive framework</li>
      <li><strong>Media Query Generator:</strong> Create custom breakpoints</li>
      <li><strong>Lighthouse:</strong> Audit responsiveness and performance</li>
    </ul>
<br/>
    <h3>Final Thoughts</h3><br/>
    <p>Responsive web design is essential for delivering great user experiences and succeeding in search engines. By focusing on mobile-first design, flexible layouts, media queries, and performance, you’ll build websites that are not only visually appealing but also function flawlessly across all devices. Stay consistent with testing and updates to keep your site future-proof.</p>
  `,
  image: "/assets/images/webdesign.jpg",
  date: "June 16, 2025",
  readTime: "7 min read",
  author: "Web Dev Team",
  category: "Web Development"
},
"6":{
  title: "Color Psychology in Web Design",
  content: `
    <p>Color isn’t just about aesthetics—it’s a powerful communication tool. In web design, the strategic use of color can influence user emotions, guide behavior, and enhance the overall user experience. Understanding color psychology helps designers craft interfaces that connect deeply with users and drive engagement.</p>
<br/>
    <h3>1. What is Color Psychology?</h3><br/>
    <p>Color psychology is the study of how colors affect human emotions and decision-making. Different colors evoke different feelings and associations, which can be cultural, emotional, or even subconscious. When applied to web design, colors can influence how users perceive your brand, navigate your site, and take action.</p>
<br/>
    <h3>2. Why Color Matters in Web Design</h3><br/>
    <p>In the digital space, first impressions are everything. Visitors form an opinion about your website within the first few seconds—and color plays a significant role in that judgment. Effective color usage enhances readability, reinforces branding, increases conversions, and creates an emotional connection with users.</p>
<br/>
    <h3>3. Color Meanings and Associations</h3><br/>
    <p>Here’s a breakdown of common colors and their typical psychological associations in web design:</p>
    <ul>
      <li><strong>Blue:</strong> Trust, security, calm. Often used by tech companies and banks (e.g., PayPal, Facebook).</li>
      <li><strong>Red:</strong> Energy, urgency, passion. Useful for CTAs or promotions, but can also signify danger.</li>
      <li><strong>Green:</strong> Growth, health, tranquility. Common in eco, wellness, and financial websites.</li>
      <li><strong>Yellow:</strong> Optimism, warmth, attention. Great for drawing focus but should be balanced.</li>
      <li><strong>Black:</strong> Sophistication, power, elegance. Frequently used in luxury and fashion brands.</li>
      <li><strong>White:</strong> Simplicity, cleanliness, openness. A favorite for minimal and modern designs.</li>
      <li><strong>Purple:</strong> Creativity, wisdom, luxury. Popular among beauty, education, and spiritual brands.</li>
      <li><strong>Orange:</strong> Friendliness, enthusiasm, action. Ideal for playful brands or strong CTAs.</li>
    </ul>
<br/>
    <h3>4. Choosing the Right Color Scheme</h3><br/>
    <p>Start with your brand’s core identity. Are you a bold and modern tech company or a warm and inviting artisan bakery? Choose colors that reflect your personality and appeal to your target audience. Use tools like Adobe Color or Coolors to explore complementary color palettes.</p>
<br/>
    <h3>5. Understanding Color Harmony</h3><br/>
    <p>Color harmony refers to aesthetically pleasing color combinations. Some common approaches include:</p>
    <ul>
      <li><strong>Analogous:</strong> Colors next to each other on the color wheel (e.g., blue, teal, green) for calm and unity.</li>
      <li><strong>Complementary:</strong> Opposites on the wheel (e.g., red and green) for contrast and energy.</li>
      <li><strong>Monochromatic:</strong> Variations of a single hue for a clean, elegant look.</li>
      <li><strong>Triadic:</strong> Three evenly spaced colors on the wheel (e.g., red, yellow, blue) for vibrant designs.</li>
    </ul>
<br/>
    <h3>6. Using Color to Drive Action</h3><br/>
    <p>Color plays a vital role in influencing user behavior. CTAs (call-to-action buttons), forms, and banners benefit from high-contrast, attention-grabbing colors. Red and orange are common for urgency and conversions, while green is popular for positive actions like “Buy Now” or “Submit.”</p>
<br/>
    <h3>7. Color Accessibility Matters</h3><br/>
    <p>Designing with color accessibility in mind ensures everyone—including users with visual impairments—can navigate your site comfortably. Use tools like WebAIM or Stark to test color contrast ratios and avoid problematic combinations (e.g., red on green). Include visual cues beyond color for important information.</p>
<br/>
    <h3>8. Emotion and Culture in Color</h3><br/>
    <p>Color interpretations can vary by culture and context. For example, white symbolizes purity in Western cultures but mourning in some Asian countries. When designing for a global audience, consider cultural nuances and test variations with different user groups.</p>
<br/>
    <h3>9. Color in Branding and Identity</h3><br/>
    <p>Color consistency is key to building brand recognition. Stick to your primary color palette across all digital assets—websites, emails, social media, and print. Strong brands like Coca-Cola (red), Spotify (green), and LinkedIn (blue) are instantly recognizable due to consistent color usage.</p>
<br/>
    <h3>10. Examples of Effective Color Use in Web Design</h3><br/>
    <p>Here are a few types of websites and how they use color to reinforce messaging:</p>
    <ul>
      <li><strong>Tech Startup:</strong> Uses clean whites and bright accent colors to feel modern and innovative.</li>
      <li><strong>Luxury Brand:</strong> Black, gold, and dark tones to communicate elegance and exclusivity.</li>
      <li><strong>Healthcare Website:</strong> Blue and green tones to build trust and signal calmness and care.</li>
      <li><strong>Creative Agency:</strong> Bold color contrasts and gradients to showcase innovation and personality.</li>
    </ul>
<br/>
    <h3>Final Thoughts</h3><br/>
    <p>Color is more than just decoration—it's a language. When used intentionally, it can attract attention, guide users, evoke emotion, and elevate your entire brand experience. Mastering color psychology in web design means understanding your audience, testing your choices, and always designing with purpose. The right color choices can turn a good website into a great one.</p>
  `,
  image: "/assets/images/colortheory.jpg",
  date: "June 17, 2025",
  readTime: "7 min read",
  author: "UX Design Team",
  category: "Web Design"
}



};

export default function BlogPost() {
  const { id } = useParams();
  const post = id ? blogPosts[id as keyof typeof blogPosts] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background">
          <div className="container relative z-10 pt-20">
            <div className="max-w-4xl mx-auto">
              <Button asChild variant="ghost" className="mb-6">
                <Link to="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              
              <div className="mb-6">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Image */}
        <section className="py-0">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-xl mb-12">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Content */}
        <section className="pb-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div 
                className="prose prose-lg max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-12 pt-8 border-t">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Ready to get started?</h3>
                    <p className="text-muted-foreground">Let's discuss your project and bring your ideas to life.</p>
                  </div>
                  <Button asChild className="btn-primary">
                    <Link to="/contact">Get In Touch</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
