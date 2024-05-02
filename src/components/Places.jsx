import React from "react";
import { AiFillStar } from "react-icons/ai";

const Places = () => {
  return (
    <div className="w-4/5 m-auto">
      <div className="w-full xl:w-1/2 m-auto text-center my-10 space-y-5">
        <h1 className="text-4xl font-bold">YOUR BALI discovery BEGINS HERE</h1>
        <p className="text-lg">
          Fully dedicated to make your travel planning easier. Explore reliable
          & helpful tips about Bali so you can enjoy the best experience.{" "}
        </p>
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-4 w-full h-[300px] md:h-[450px] pb-10 border-b">
        <div className="row-span-1 col-span-2">
          <img
            className="w-full h-full object-cover rounded-md"
            src="images/image1.jpg"
            alt=""
          />
        </div>
        <div className="row-span-1 col-span-1">
          <img
            className="w-full h-full object-cover rounded-md"
            src="images/image3.jpg"
            alt=""
          />
        </div>
        <div className="row-span-1 col-span-1">
          <img
            className="w-full h-full object-cover rounded-md"
            src="images/image2.jpg"
            alt=""
          />
        </div>
        <div className="row-span-2 col-span-1">
          <img
            className="w-full h-full object-cover rounded-md"
            src="images/image4.jpg"
            alt=""
          />
        </div>
        <div className="row-span-1 col-span-1">
          <img
            className="w-full h-full object-cover rounded-md"
            src="images/image6.jpg"
            alt=""
          />
        </div>
        <div className="row-span-1 col-span-1">
          <img
            className="w-full h-full object-cover rounded-md"
            src="images/image7.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="my-10 text-center">
        <h1 className="text-4xl font-bold">Our Recomendation</h1>
        <section className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-10 my-10 justify-items-center items-center">
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/ubud-tour.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-blue-500">All-Inclusive Ubud Tour</p>
                <p className="font-bold">$90.00</p>
              </div>
              <p className="font-semibold">
                If you’re visiting Ubud for the first time, get your bearings on
                a private tour that allows you to customize your itinerary
                according to your interests. As well as beating the heat in an
                air-conditioned car, benefit from both the insider knowledge and
                undivided attention of your guide as you zip between top
                attractions such as the Tegalalang Rice Terrace, Tegenungan
                Waterfall, and the Sacred Monkey Forest Sanctuary.
              </p>
              <div className="flex justify-between items-center">
                <h2>8-10 hours</h2>
                <p className="flex items-center space-x-2 text-yellow-450">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/Batur-Sunrise.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-blue-500">
                  Mount Batur Sunrise Hiking with Natural Hot Spring Option
                </p>
                <p className="font-bold">$33.00</p>
              </div>
              <p className="font-semibold">
                It’s not possible to climb Mt. Batur without a local guide. This
                convenient package arranges everything for you: door-to-door
                private transfers, trekking guides, breakfast, raincoats,
                flashlights, and even a soak in the beautiful hot springs beside
                the lake. Start the day right with perhaps Bali’s most
                photogenic sunrise from the crater rim, enjoy breakfast
                surrounded by monkeys, then soothe tired muscles in the hot
                springs once you descend.
              </p>
              <div className="flex justify-between items-center">
                <h2>24 hours</h2>
                <p className="flex items-center space-x-2 text-yellow-450">
                  <AiFillStar />
                  <span>4.6</span>
                </p>
              </div>
            </div>
          </div>

          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/nusa-penida.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-blue-500">
                  Nusa Penida All-Inclusive Day Trip
                </p>
                <p className="font-bold">$73.00</p>
              </div>
              <p className="font-semibold">
                If you check the Bali tag on Instagram, Penida Island is hard to
                miss. See the best of this undeveloped isle in just a day on
                this convenient all-inclusive package, with private transfers
                from your hotel to the fast boat, and a private driver on
                Penida. Capture Broken Beach (Pasih Uug), Angel’s Billabong, and
                Kelingking Beach, and enjoy lunch and lounging time on the white
                sands of Crystal Bay.
              </p>
              <div className="flex justify-between items-center">
                <h2>12 hours</h2>
                <p className="flex items-center space-x-2 text-yellow-450">
                  <AiFillStar />
                  <span>4.9</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/uluwatu-sunset.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-blue-500">
                  Uluwatu Sunset, Kecak Dance, and Dinner Jimbaran Beach
                </p>
                <p className="font-bold">$35.00</p>
              </div>
              <p className="font-semibold">
                There's no better place in Bali to see the kecak dance, a lively
                performance featuring a beatboxing male voice choir, a demon
                king, and a flirtatious deer, than on the Uluwatu cliffs. Pair
                the Kecak and Fire Dance with a visit to the temple itself then
                feast on seafood by candlelight when you book this private tour.
                Your chauffeur will collect you direct from your hotel and drop
                you back.
              </p>
              <div className="flex justify-between items-center">
                <h2>6 hours</h2>
                <p className="flex items-center space-x-2 text-yellow-450">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/snorkeling.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-blue-500">
                  Snorkeling Manta Ray Safari in Nusa Penida
                </p>
                <p className="font-bold">$15,79</p>
              </div>
              <p className="font-semibold">
                As well as vibrant coral, Nusa Penida is famed for its majestic
                giant manta rays. Discover them in a group no larger than 15 on
                this snorkeling safari by boat, with an underwater photographer
                on hand to grab shots of you all. The places you visit depend on
                water conditions, but you’ll typically stop at three or four
                spots like Manta Bay, Crystal Bay, Gamat Bay, and Wall Bay
                Point.
              </p>
              <div className="flex justify-between items-center">
                <h2>2 hours 30 minutes</h2>
                <p className="flex items-center space-x-2 text-yellow-450">
                  <AiFillStar />
                  <span>4.75</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/cooking-class.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-blue-500">
                  Subak cooking class (Balinese cooking school) 9 Dish Cooking
                  and Market Tour
                </p>
                <p className="font-bold">$26.00</p>
              </div>
              <p className="font-semibold">
                While most cooking classes give you the chance to create a few
                dishes, this experience lets you learn to prepare nine Balinese
                classics, making it the ultimate choice for food lovers. As well
                as mastering the basics of Balinese cuisine, you’ll benefit from
                the insider knowledge of your guide. Opt for the morning tour to
                include a market visit and shop for ingredients like a local.
              </p>
              <div className="flex justify-between items-center">
                <h2>5 hours</h2>
                <p className="flex items-center space-x-2 text-yellow-450">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/ATV-BALI.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-blue-500">
                  {" "}
                  ATV Quad Bike Bali with Waterfall Gorilla Cave and Lunch
                </p>
                <p className="font-bold">$36.00</p>
              </div>
              <p className="font-semibold">
                Get off the beaten path on this private all-terrain vehicle
                (ATV) tour of the countryside near Ubud. After a full safety
                briefing, hop on your ATV and follow your guide through the
                unseen side of Bali past rice paddies, plantations, jungles, and
                picturesque villages. This tour includes lunch and pickup and
                drop-off from many areas in Bali.
              </p>
              <div className="flex justify-between items-center">
                <h2>3 hours</h2>
                <p className="flex items-center space-x-2 text-yellow-450">
                  <AiFillStar />
                  <span>4.5</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/private-boat.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-blue-500">
                  Nusa Penida by Private Boat - Snorkeling 4 spots, Swim with
                  Mantas + Land Tour
                </p>
                <p className="font-bold">$105.48</p>
              </div>
              <p className="font-semibold">
                Travel to Nusa Penida in style, on board on your very own 12
                meters speedboat. Optionally for snorkeling-only packages or
                upgrade to add a private land tour. Private option is available
                during the booking.
              </p>
              <p className="font-semibold">
                After booking you can add some extras - Jet Ski, Photographer,
                Drone, Fishing Rods, Drinks, Meals and more :)
              </p>
              <div className="flex justify-between items-center">
                <h2>8-10 hours</h2>
                <p className="flex items-center space-x-2 text-yellow-450">
                  <AiFillStar />
                  <span>5.0</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Places;
