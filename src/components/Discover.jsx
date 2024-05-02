import React from "react";

const Discover = () => {
  return (
    <>
      <div className="w-4/5 xl:w-9/12 m-auto flex flex-col sm:flex-row space-y-10 md:space-x-10 justify-between items-center py-10">
        <div className="w-[500px] space-y-5">
          <img
            className="drop-shadow-2xl"
            src="images/jumana-bali-ungasan-resort.jpeg"
            alt=""
          />
          <div>
            <h2 className="font-bold">Umana Bali</h2>
            <h1 className="text-2xl font-bold">LXR Hotels & Resorts Hilton</h1>
          </div>
          <p className="text-sm">
            Inspired by Bali’s renowned uma, or ancient rice paddy fields, Umana
            Bali features 72 luxurious villas, each with its own private
            infinity-edge pool and outdoor hot tub, laid out in cascading
            terraces to afford panoramic views from every vantage point. A
            secluded escape, Umana Bali gracefully blends curated experiences,
            unparalleled clifftop vistas and local culture to immerse guests in
            the Balinese way of life through a myriad of resolutely authentic
            encounters that yields new discoveries for both first-time visitors
            and seasoned Bali travelers.
          </p>
          <p className="text-sm">
            The design of the resort is a fresh, modern interpretation of motifs
            found in Balinese architecture and textiles, crafts and dance. Umana
            Bali will offer a unique distillation of Bali’s Tri Hita Karana
            philosophy, which emphasizes the harmonious relationship among
            humans, nature, and the divine, and the belief that well-being and
            happiness will come naturally when all three pillars are balanced.
          </p>
        </div>
        <div className="w-[500px] space-y-2 text-center">
          <h2 className="font-semibold">Padma Bali</h2>
          <h1 className="font-bold text-2xl">Padma Resort</h1>
          <p className="text-sm">
            Nestled within an unspoiled river valley and overlooking the
            enchanting forests of Payangan, the 149-room Padma Resort Ubud is an
            expansive and tranquil luxury destination. Located north of Ubud,
            Bali’s celebrated capital of arts and culture, Padma Resort Ubud
            features all the five-star amenities and facilities one would expect
            from the renowned Padma hospitality brand, including stunning views
            from every room or suite, a first-class spa, an awe-inspiring
            89-metre infinity swimming pool with panoramic views, signature
            world-class dining and modern event venues.
          </p>
          <p className="text-sm">
            Our Ubud resort is idyllic and the perfect place to refresh your
            mind and body, and to explore the wonders of north and central Bali.
          </p>
          <img
            className="border-8 border-stones-700"
            src="images/Hotel-padma-ubud.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className="w-full h-[400px] my-10 relative">
        <img
          className="w-full h-full object-cover "
          src="images/image4.jpg"
          alt=""
        />
        <div className="w-full h-full absolute top-0 flex justify-center items-center">
          <h1 className="text-4xl text-white font-bold px-5 py-2 border">
            View Details
          </h1>
        </div>
      </div>
      <div className="my-20 flex justify-between items-center h-[500px]">
        <div className="xl:w-[500px] w-1/3">
          <img
            className="w-full h-full object-cover"
            src="images/pura.jpg"
            alt=""
          />
        </div>
        <div className="xl:w-[500px] w-1/3 p-5 text-center space-y-5 sm:space-y-2">
          <h1 className="md:text-xl sm:text-sm">
            YOUR BALI Discovery BEGINS HERE
          </h1>
          <h2 className="md:text-4xl sm:text-base">Plan your Bali Trip</h2>
          <p className="md:text-base sm:text-xs">
            On our website you will probably find more information about Bali,
            than in a printed Travel Guide Book. The sheer amount of things to
            do and places can be quite overwhelming. If you have not been to
            Bali yet and want to get a brief overview, then this little Travel
            FAQ will help you to start your travel planning.
          </p>
          <button className="mt-5 px-5 py-2 border border-black">
            Book A trip Now
          </button>
        </div>
        <div className="xl:w-[500px] w-1/3">
          <img
            className="w-full h-full object-cover"
            src="images/pura.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Discover;
