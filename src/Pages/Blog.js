import React, { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Top 5 Ways to Style Statement Earrings",
    content:
      "Statement earrings can elevate any outfit. Pair them with a simple dress or bold colors to make them pop. Make sure to consider the occasion, as statement earrings can be perfect for parties, weddings, or casual outings.",
    image: "/Images/Blogimg/p1.avif", // Replace with real image URL
    additionalcontent:[
    "Keep the Rest Minimal: Let your statement earrings shine by pairing them with simple outfits. A classic white shirt, a little black dress, or a neutral-toned outfit ensures the focus stays on your bold accessories without overwhelming the look.", 
    "Pair with a Sleek Hairstyle: Opt for hairstyles that showcase your earrings, such as a slicked-back ponytail, a bun, or tucked-back hair. This not only highlights the earrings but also adds an elegant touch to your overall appearance.",
    "Match with Complementary Colors: Coordinate the color or tone of your earrings with your outfit or makeup. For instance, gold earrings pair beautifully with earthy tones, while silver or crystal earrings elevate pastel or monochrome ensembles.",
    "Balance Boldness: If your earrings are oversized or intricate, keep other accessories like necklaces and bracelets minimal or skip them altogether. This prevents the look from feeling cluttered and keeps the earrings as the focal point.",
    "Choose the Right Occasion: Statement earrings can instantly glam up casual wear, like jeans and a blouse, or enhance formal outfits for weddings, parties, or dinners. Select designs that suit the mood—playful tassels for casual days or sparkling chandeliers for evening events."
  ],
  },
  {
    id: 2,
    title: "Jewelry Trends for the Season",
    content:
      "Hoops are making a big comeback this season! Explore textured, oversized, and layered hoops for a chic look. Pair them with layered necklaces or mix metals for a contemporary vibe.",
    image: "/Images/Blogimg/p2.jpg", // Replace with real image URL
    additionalcontent:[
      "This season's jewelry trends are all about bold expressions and versatile designs. Chunky gold chains are making a strong comeback, adding a statement to both casual and formal outfits. Layered necklaces with mixed metals and unique pendants are perfect for creating a personalized look. Earrings are embracing asymmetry, with mismatched designs and ear cuffs taking center stage. Meanwhile, colorful gemstones in vibrant hues like emerald green, sapphire blue, and ruby red are adding a playful yet elegant touch to rings, bracelets, and necklaces. For a more minimalist approach, sleek and geometric designs in silver and rose gold continue to dominate. Whether you prefer maximalist glamour or subtle sophistication, there’s a trend for everyone this season."
    ],
  },
  {
    id: 3,
    title: "How to Choose Earrings for Your Face Shape",
    content:
      "From studs to danglers, discover how to pick the perfect earrings that complement your face shape. For round faces, choose long earrings. For square faces, go for circular hoops or soft curves.",
    image: "/Images/Blogimg/p3.jpg", // Replace with real image URL
    additionalcontent:[
      "Choosing the right earrings for your face shape can enhance your natural features and balance your overall look. For round faces, opt for long, dangling earrings or drop styles to create the illusion of length. If you have an oval face, you're in luck—most earring styles, from studs to hoops, complement this versatile shape. For square faces, round or curved earrings, such as hoops or teardrops, help soften angular features. If your face is heart-shaped, earrings that are wider at the bottom, like chandeliers or teardrops, add balance to a narrower chin. Lastly, for long faces, choose round studs, clustered designs, or wider earrings to add width and avoid overly long styles that can elongate the face further. Matching your earrings to your face shape ensures your jewelry flatters you effortlessly."
    ],
  },
];

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div className="container mt-5" style={{marginTop:"20px"}}>
      <h2 className="text-center mb-4">Fashion Tips & Jewelry Trends</h2>
      <div className="row" >
        {blogs.map((blog) => (
          <div className="col-md-4 mb-4" key={blog.id} >
            <div className="card h-100" >
              <img
                src={blog.image}
                alt={blog.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content.slice(0, 100)}...</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleReadMore(blog)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Display full blog details below */}
      {selectedBlog && (
        <div className="mt-5">
          <h3>{selectedBlog.title}</h3>
          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            style={{ width: "100%", height: "300px", objectFit: "cover", marginBottom: "20px" }}
          />
          <p>{selectedBlog.additionalcontent}</p>
        </div>
      )}
    </div>
  );
};

export default Blog;
