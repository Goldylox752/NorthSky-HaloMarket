import Link from "next/link";

const listings = [
  {
    id: 1,
    title: "Premium AI Laptop",
    category: "Electronics",
    price: "$899",
    location: "Edmonton, AB",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
  {
    id: 2,
    title: "Professional Camera Kit",
    category: "Photography",
    price: "$650",
    location: "Calgary, AB",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
  },
  {
    id: 3,
    title: "Modern Office Setup",
    category: "Furniture",
    price: "$420",
    location: "Toronto, ON",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
  },
  {
    id: 4,
    title: "Gaming Desktop PC",
    category: "Computers",
    price: "$1200",
    location: "Vancouver, BC",
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5",
  },
];


export default function LatestListings(){

  return (

    <section className="latest-listings">

      <div className="container">

        <div className="section-header">

          <div>

            <h2>
              Latest Listings
            </h2>

            <p>
              Discover the newest products added to Halo Market.
            </p>

          </div>


          <Link
            href="/marketplace"
            className="view-all"
          >
            View All
          </Link>

        </div>



        <div className="listing-grid">


          {listings.map((item)=>(

            <article
              key={item.id}
              className="listing-card"
            >


              <div className="listing-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>



              <div className="listing-content">


                <span className="category">

                  {item.category}

                </span>



                <h3>

                  {item.title}

                </h3>



                <p className="location">

                  📍 {item.location}

                </p>



                <div className="listing-footer">


                  <strong>

                    {item.price}

                  </strong>



                  <Link
                    href={`/listing/${item.id}`}
                  >

                    View

                  </Link>


                </div>


              </div>


            </article>


          ))}


        </div>


      </div>


    </section>

  );

}
