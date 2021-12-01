import React from "react"
import { Layout, Seo, Table, Section } from "../components/index"
const AboutPage = () => {
  return (
    <Layout>
      <Seo title="Shop" />
      <div className="">
      <Section title="Information">
            {/* <h1>About Jing Daily Modern Collectibles</h1> */}
            <div className="rte ">
<p>
Jing Daily Modern Collectibles is a new mindset that contextualizes and defines highly sought-after products, ranging from sneakers and handbags to toys and jewelry. This new world merges editorial with commerce to take a deeper look at the products that define modern luxury, serving as a handbook for both consumers and brands.

At the core of Jing Daily’s exploration is the friction within the words “modern” and “collectibles''. In the age of digital media and immediacy, a product’s collectible value is not defined by time, but by demand and ingenuity. Here, our focus is on the brands and creators that break and subvert the traditional mold of what reaches collectible status. 

Jing Daily Modern Collectibles creates a both physical and digital experience, giving consumers the ability to buy products and interact with content online. Our first activation comes in partnership with Sotheby’s, where together we will be selling 117 pieces from the Louis Vuitton x Supreme collection. 

For more on modern collectibles, read our full criteria and parameters. 
</p>
</div>
<Section title="Background">
    <div className="rte">
<p>
Launched in 2009, Jing Daily is the leading digital publication on luxury consumer trends in China. It is our mission to understand the forces shaping the future of the luxury industry by bringing our readers the latest news, analysis, features, and reports exploring developments in that landscape. We seek to understand how the definition of luxury, and by turn its consumption, are changing, how the digital landscape in China is developing, and how brands are adapting and taking advantage of those changes. Our readers are industry leaders seeking to understand China’s complex and rapidly evolving luxury industry.

Jing Daily is the flagship publication of the Jing Group, which also includes China Film Insider, MOVE THE MIND, Jing Travel, and Jing Culture & Commerce. Together, the Jing Group is one of the most trusted English-language sources of news and information about global trends in culture, technology, and the business of luxury and fashion, including Chinese culture and commerce, for institutions, companies, and professionals worldwide.
</p>
</div>
</Section>

</Section>
        <Section title="Inquiries">
            <div class="grid grid-cols-2 gap-8  mx-auto text-center max-w-xl mx-auto">
            <div className="aspect-w-4 aspect-h-4 border flex items-center justify-center border-black"><a href="mailto:editorial@jingdaily.com" className="flex items-center justify-center">EDITORIAL</a></div>
                <div className="aspect-w-4 aspect-h-4 border  flex items-center justify-center border-black">
<a href="mailto:daphne@jingdaily.com" className="flex items-center justify-center">PARTNERSHIP</a></div>

            </div>
</Section>
      </div>
    </Layout>
  )
}

export default AboutPage
