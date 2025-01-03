import React, { useState } from "react";
import AndrewAndI from "../assets/images/know-jay/andrew-and-i.jpg";
import BadAssLane from "../assets/images/know-jay/bad-ass-lane.jpg";
import BattleCreek from "../assets/images/know-jay/battle-creek.jpg";
import BlackLightNight from "../assets/images/know-jay/black-light-night.jpg";
import Catfish from "../assets/images/know-jay/catfish.jpg";
import DonutFalls from "../assets/images/know-jay/donut-falls.jpg";
import FreshFishTacos from "../assets/images/know-jay/fresh-fish-tacos.jpg";
import Gardens from "../assets/images/know-jay/gardens.jpg";
import GreenRiverFirstCatch from "../assets/images/know-jay/green-river-first-catch.jpg";
import GreenRiverBrown from "../assets/images/know-jay/green-river-brown.jpg";
import Hawaii from "../assets/images/know-jay/hawaii.jpg";
import Illuminaria from "../assets/images/know-jay/illuminaria.jpg";
import LakeHavasu from "../assets/images/know-jay/lake-havasu.jpg";
import LaBeaus from "../assets/images/know-jay/la-beaus.jpg";
import MirrorLake from "../assets/images/know-jay/mirror-lake.jpg";
import Newsies from "../assets/images/know-jay/newsies.jpg";
import PCC from "../assets/images/know-jay/pcc.jpg";
import PostCNC from "../assets/images/know-jay/post-cnc.jpg";
import RedReefTrail from "../assets/images/know-jay/redReefTrail.jpg";
import RappingStGeorge from "../assets/images/know-jay/rapping-st-george.jpg";
import StewartFalls from "../assets/images/know-jay/stewart-falls.jpg";
import SundialPeak from "../assets/images/know-jay/sundial-peak.jpg";
import TempleFam from "../assets/images/know-jay/temple-fam.jpg";
import TempleTrip from "../assets/images/know-jay/temple-trip.jpg";
import { PropTypes } from "prop-types";

const CollageImage = ({
  source,
  isPortrait = false,
  alternate = "image",
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false); // Image has loaded, hide skeleton
  };

  const Skeleton = () => (
    <div
      className={`skeleton-loader absolute inset-0 bg-gray-200 dark:bg-neutral-700 rounded-lg z-10 ${
        isPortrait ? "h-40" : "h-20"
      }`}
    />
  );

  return (
    <div className="relative group">
      {isLoading && <Skeleton />}
      <img
        className="h-auto max-w-full rounded-lg object-cover object-center z-20 opacity-0 transition-opacity duration-1000"
        src={source}
        alt={alternate}
        onLoad={handleImageLoad}
        style={{ opacity: isLoading ? 0 : 1 }} // Hide the image until it's loaded
      />
      <div className="absolute inset-0 bg-black bg-opacity-80 text-white flex items-end p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100 overflow-hidden rounded-lg">
        <div
          className={
            isPortrait
              ? "overflow-y-auto text-xs h-32 sm:text-sm sm:h-44 md:text-md md:h-24 lg:h-36 lg:text-lg no-scrollbar"
              : "overflow-y-auto text-xs h-16 md:text-md md:h-24 lg:h-36 lg:text-lg no-scrollbar"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const ImageCollage = () => {
  const imageSection = [
    {
      images: [
        {
          imgSource: AndrewAndI,
          alternate: "My friend Andrew and I eating ice cream.",
          caption:
            "After nearly 20 years since our last trip, best friend, Andrew and I went out fishing on the Green River. The trip included big catches, white water rafting, 4x4ing, and fresh fish tacos. A complete success.",
          isPortrait: false,
        },
        {
          imgSource: FreshFishTacos,
          alternate: "Fresh fish tacos",
          caption:
            "The Green River rainbow and brown trouts are some of the best tasting fish I've ever had. Field dress them, throw them in a cooler, and then butterfly fillet and deep fry them with flour, salt, pepper, and paprika that night. Top with sliced cabbage, fresh pico de gallo and a secret recipe siracha-mayo sauce and queso fresco. 🤤",
          isPortrait: true,
        },
        {
          imgSource: BattleCreek,
          alternate: "Battle Creek Trail, PG, UT",
          caption: "A quick run up Battle Creek Trail with the boys.",
          isPortrait: false,
        },
      ],
    },
    {
      images: [
        {
          imgSource: DonutFalls,
          alternate: "Donut Falls, Big Cottonwood Canyon, UT",
          caption:
            "Got out early with the family as the season closed out to hike Donut Falls in Big Cottonwood Canyon. The trail was busy, but we hiked back behind the falls and screamed at the top of our lungs for fun. Grabbed donuts on the way home of course.",
          isPortrait: true,
        },
        {
          imgSource: LaBeaus,
          alternate: "LaBeaus in Bear Lake, UT",
          caption:
            "Lake, Shake, & Paddleboard! Hit Bear Lake with the fam. We don't have a boat so we paddleboarded instead of wakeboarding. Fresh Raspberry Shakes at the famous LaBeau's to completed the day.",
          isPortrait: false,
        },
        {
          imgSource: MirrorLake,
          alternate: "Mirror Lake, Uintas, UT",
          caption:
            "Snuck out of the tent while the family slept to get some early rays and throw in some lines. Wife followed for a fun morning date. Pic doesn't show that I soaked a leg falling in. 😅",
          isPortrait: false,
        },
      ],
    },
    {
      images: [
        {
          imgSource: Gardens,
          alternate: "Gardens, Lehi UT",
          caption: "Quick and fun date night with the wife at the Gardens.",
          isPortrait: false,
        },
        {
          imgSource: RappingStGeorge,
          alternate: "Dixie Rock, St. George UT",
          caption:
            "Vacation in St. George, UT with the fam. Brought the climbing/rappelling gear and set up rap lines on the face of Dixie Rock. Easy 45 ft. rappel. My awesome kids hit it no problem.",
          isPortrait: true,
        },
        {
          imgSource: Hawaii,
          alternate: "Cliff's Edge Below Light House, Honalulu, Hawaii",
          caption:
            "Between COVID, a depressed economy, and helping the company I'm at grow, it had been years since Jen & I enjoyed a couples vacation. Finally made it happen in Hawaii. Hiked down to some less known volcanic pools. A fun and long awaited trip.",
          isPortrait: false,
        },
      ],
    },
    {
      images: [
        {
          imgSource: RedReefTrail,
          alternate: "Reed Reef Trail, St. George UT",
          caption:
            "A quick shot before we started Red Reef Trail in St. George, UT. It was a hot day and Red Reef is known for its cool pools slot canyons... but we came late in the season, missed the water, and got lots of sun. Ha. Took great pics though!",
          isPortrait: false,
        },
        {
          imgSource: StewartFalls,
          alternate: "Stewart Falls, Sundance Canyon, UT",
          caption:
            "On a whim we set out for a hike after work. We showed up on the 3.25 mile round trip hike as the day closed in early fall. We pulled it off just before sunset. Kids did great but one of them is missing from this shot!",
          isPortrait: false,
        },
        {
          imgSource: PostCNC,
          alternate: "Selfies Post CNC Plasma Cutting",
          caption:
            "While I'm usually writing code, I used to run my own Metal CNC & Fab shop. How I generally look after a day of wrenching, fabing, or grinding. I've always loved working with my hands. Keyboard & code, cars, electronics, metal or machines, I'm a lover of work and fabrication.",
          isPortrait: true,
        },
      ],
    },
    {
      images: [
        {
          imgSource: Catfish,
          alternate: "Biggest Catfish Yet",
          caption: `In what my brothers and I call the White Mountain Mudhole in Northern, AZ (on the convergence of the Black and White River) I pulled out this monster of a catfish.
                        I've never hunted a specific fish until this one. We were fishing with leftover steak from the night before and I felt a very distinct chomping - not tugging on my line.
                        I attempted to set the line and got nothing. Steak nearly gone. Rinse and Repeat in the same spot 3 more times and I was convinced it was a big one. I worked him for an hour,
                        foregoing breakfast with my bros. I allowed him to chew the steak for close to three mins to be sure it was deep enough I could set it. Maybe that's why he has the fat stomach.
                        The wait was worth the catch!`,
          isPortrait: true,
        },
        {
          imgSource: Newsies,
          alternate: "Newsies @ Hale Theater",
          caption:
            "While I wasn't a drama kid in high school, I've been amazed by the skill of live actors in plays. Newsies was one of the first musicals I watched as a kid and one I totally connected with. Seeing it live as an adult was just as fun.",
          isPortrait: false,
        },
        {
          imgSource: LakeHavasu,
          alternate: "Lake Havasu, Havasu Arizona",
          caption:
            "Family and Connection - that's what it's all about. Throw some good music, food, weather, and water in the mix and you couldn't ask for a better day.",
          isPortrait: false,
        },
      ],
    },
    {
      images: [
        {
          imgSource: BadAssLane,
          alternate: "Sundial Peak, Cottonwood Canyon UT",
          caption:
            "You can't see it here, but we just hiked a 1/2 mile long by 10 feet wide ridge line with a 200 ft drop off on both sides. The address? 666 Badass Lane Sundial Peak. A 10+ mile, unforgiving hike. Paired with my friend in the orange hat, you couldn't have asked for a better adventure.",
          isPortrait: false,
        },
        {
          imgSource: BlackLightNight,
          alternate: "Black Light Night Dance Party",
          caption:
            "Attending a school event with my kids - Black Light Night! Elementary schools now have raves! 🤣",
          isPortrait: false,
        },
        {
          imgSource: GreenRiverFirstCatch,
          alternate: "Green River, Flaming Gorge UT",
          caption:
            "The little ones are just as fun as the big ones... when it's your first one of the trip!",
          isPortrait: true,
        },
      ],
    },
    {
      images: [
        {
          imgSource: GreenRiverBrown,
          alternate: "Green River, Flaming Gorge UT",
          caption: `My favorite hole on Greenriver, never fished this hole without pulling out a 15"+ trout. Rainbow or Brown, always big!`,
          isPortrait: true,
        },
        {
          imgSource: SundialPeak,
          alternate: "Sundial Peak, Cottonwood Canyon UT",
          caption:
            "That peak in the background... that's Sundial Peak! A 10+ Mile hike which includes a 200ft drop off ridge that we climbed. See other pics with this stud to learn more!",
          isPortrait: false,
        },
        {
          imgSource: TempleTrip,
          alternate: "Orem Temple, Orem UT",
          caption:
            "Quick pics after a sesh with my wife, my little bro, and his wife. Family first, it's what fuels the rest!",
          isPortrait: false,
        },
      ],
    },
    {
      images: [
        {
          imgSource: TempleFam,
          alternate: "Gilbert Temple, Gilbert AZ",
          caption:
            "Attended a wedding and got to take pics with the kids after. Planting roots where it matters.",
          isPortrait: false,
        },
        {
          imgSource: Illuminaria,
          alternate: "Illuminaria, Gardens, Lehi UT",
          caption:
            "Got a chance to take my kids out on a cold night to the local Christmas Luminaria. Hot chocolate, marshmelos, and Christmas lights... and a fire and ice show!",
          isPortrait: false,
        },
        {
          imgSource: PCC,
          alternate: "PCC Hawaii",
          caption:
            "Taking in my first show at PCC in Hawaii. Probably old news for the wife, but a new experience together. After 16 years, those are harder to come by!",
          isPortrait: true,
        },
      ],
    },
  ];

  return (
    <div className="w-10/12 m-auto pt-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {imageSection.map((section, idx) => (
          <div key={idx} className="grid gap-4">
            {section.images.map((image, index) => (
              <CollageImage
                key={index}
                source={image.imgSource}
                alternate={image.alternate}
                isPortrait={image.isPortrait}
              >
                {image.caption}
              </CollageImage>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

CollageImage.propTypes = {
  source: PropTypes.string.isRequired, // source must be a string (required)
  isPortrait: PropTypes.bool, // isPortrait must be a boolean (optional)
  alternate: PropTypes.string, // alternate must be a string (optional)
  children: PropTypes.node, // children can be any renderable node (optional)
};

export default ImageCollage;
