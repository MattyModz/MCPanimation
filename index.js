import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Sectionone() {
  const { ref: myRef1, inView: myElementIsVisible1 } = useInView({});
  const { ref: myRef2, inView: myElementIsVisible2 } = useInView({});
  const { ref: myRef3, inView: myElementIsVisible3 } = useInView({});

  const { ref: myRef4 } = useInView({});

  const spring = {
    type: "spring",
    stiffness: 66,
    damping: 11,
  };

  //  className={`flex justify-end sticky top-0    ${
  //                 myElementIsVisible1 ? "flex justify-start" : ""
  //               }`}
  return (
    <>
      {/* card container */}

      <div
        className="flex flex-col font-inter container  p-8  text-white bg-body-dark "
        id="how"
      >
        {/* end card container */}
        <div className="lg:block hidden w-full container sticky top-40 h-screen ">
          <div className="    sm:block hidden   h-full relative ">
            {/* Back panel */}
            <div
              className={`flex abs justify-start   absolute  w-full   ${
                myElementIsVisible2 ? " flex justify-end w-full " : ""
              }`}
            >
              {" "}
              <motion.img
                layout="true"
                transition={spring}
                className="object-fill  rotate-x-10 w-1/2 sm:block hidden top-0 left-0 shadow-lg bg-blend-multiply rounded-2xl"
                src="BackPanel.svg"
              />
            </div>

            {/* Assets */}
            <div
              className={`flex justify-start  0  relative h-1/2 w-full   ${
                myElementIsVisible2 ? " flex justify-end w-full " : ""
              }`}
            >
              {" "}
              <motion.img
                layout="true"
                transition={spring}
                className={`object-fill absolute   w-1/2 p-24  sm:block   rounded-2xl   ${
                  myElementIsVisible1 && !myElementIsVisible2
                    ? "opacity-100"
                    : "opacity-0"
                }`}
                src="Asset 116.svg"
              />
              <motion.img
                layout="true"
                transition={spring}
                className={`object-fill absolute   w-1/2  sm:block p-24  rounded-2xl   ${
                  myElementIsVisible2 && !myElementIsVisible3
                    ? "opacity-100"
                    : "opacity-0"
                }`}
                src="Asset 117.svg"
              />
              <motion.img
                layout="true"
                transition={spring}
                className={`object-fill absolute   w-1/2  sm:block p-24  rounded-2xl   ${
                  (!myElementIsVisible1 && !myElementIsVisible2) ||
                  myElementIsVisible3
                    ? "opacity-100"
                    : "opacity-0"
                }`}
                src="Asset 119.svg"
              />
            </div>
          </div>
        </div>
        {/* End assets -  */}

        <div className="md:flex-cols-1 lg:flex   sm:flex-row    lg:h-screen lg:absolute container lg:mb-8  ">
          <div className="flex items-center lg:mb-8   w-full  shadow-full "></div>
          <motion.div
            className="flex flex-col lg:py-24 mt-5  lg:mb-16 md:mt-0  lg:w-3/4 sm:pr-16 h-screen "
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,

              transition: { duration: 2 },
            }}
          >
            <p className="p-y8 text-sm font-semibold leading-none text-left text-transparent bg-clip-text bg-gradient-to-br from-[#FB8753] to-[#FB7877]  uppercase">
              Prep.
            </p>

            <h3 className="mt-5 text-2xl sm:text-left md:text-4xl s  ">
              Understand your content creation aim.
            </h3>
            <p className="mt-5 text-l  text md:text-left font-interr ">
              Our prepping team will follow your brief meticulously. They’ll
              follow our Prepping Guide to outline your article, so it looks
              attractive and simple for your readers. They also use tools such
              as Text Razor and create the content structure on Surfer SEO,
              which brings the best keywords for your headline compared to
              competitor examples.
              <span ref={myRef1} />
            </p>
            <a
              href="https://mycontentpal.spp.io/order/buy-content"
              className=" mt-8 p-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2  border-transparent rounded-full shadow-sm text-base font-inter text-white btnPrimary"
            >
              Buy Premium Content
            </a>
            <div className="md:w-full relative w-full lg:hidden py-8 mt-8   ">
              <motion.img
                layout="true"
                transition={spring}
                className="object-fill absolute    top-0 left-0 shadow-lg bg-blend-multiply rounded-2xl"
                src="BackPanel.svg"
              />
              <motion.img
                layout="true"
                transition={spring}
                src="Asset 116.svg "
                className="lg:hidden absolute   py-8  "
              />
            </div>
          </motion.div>
        </div>

        {/* SECTION TWO*/}

        <div className="lg:flex md:flex-cols-1  mt-8   sm:flex-row  h-screen ">
          <div className="flex items-center  sm:order-last lg:w-3/4 "></div>
          <motion.div
            className="flex flex-col relative z-100 sm:mt-5 mb-8 md:mt-0  lg:w-7/12  h-screen lg:py-48"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,

              transition: { duration: 2 },
            }}
          >
            <p className="mt-5 text-sm  font-semibold leading-none text-left text-transparent bg-clip-text bg-gradient-to-br from-[#FB8753] to-[#FB7877]  uppercase">
              Research.
            </p>
            <span ref={myRef2}></span>
            <h3 className="mt-5 text-2xl sm:text-left md:text-4xl ">
              A great grasp of your niche.
            </h3>
            <p className="mt-5 text-l  text md:text-left  font-interr">
              Don’t worry if you have a tedious subject. Our writers won’t begin
              writing until they’ve researched your niche and become an expert
              themselves. This includes reading articles, watching YouTube
              videos, reading statements on social media, and scanning through
              questions and answers on sites such as Quora.
            </p>
            <a
              href="https://mycontentpal.spp.io/order/buy-content"
              className=" mt-8 p-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2  border-transparent rounded-full shadow-sm text-base font-inter text-white btnPrimary"
            >
              Boost My Rank
            </a>
            <div className=" md:w-full relative w-full  lg:hidden py-8 mt-8 ">
              <motion.img
                transition={spring}
                className="object-fill absolute    top-0 left-0 shadow-lg bg-blend-multiply rounded-2xl"
                src="BackPanel.svg"
              />
              <motion.img
                transition={spring}
                src="Asset 117.svg "
                className="lg:hidden absolute py-8  shadow-sm  "
              />
            </div>
          </motion.div>
        </div>
        {/* SECTION THREE*/}

        <div className="flex flex-cols-1   lg:mt-8 sm:flex-row  h-screen ">
          <div className="flex items-center   lg:w-3/4   "></div>
          <motion.div
            className="flex flex-col relative z-100 lg:py-24 mt-5 mb-8 md:mt-0  lg:w-7/12 sm:pr-16"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,

              transition: { duration: 2 },
            }}
          >
            <p className="mb-2 text-sm font-semibold leading-none text-left text-transparent bg-clip-text bg-gradient-to-br from-[#FB8753] to-[#FB7877]  uppercase">
              Create.
            </p>
            <span ref={myRef3}></span>
            <h3 className="mt-5 text-2xl sm:text-left md:text-4xl">
              Pen put to paper.
            </h3>
            <p className="mt-5  text-l  text md:text-left font-interr">
              Then our super squad of writers will put their powers to work. You
              will always have an introduction, conclusion, and FAQs unless you
              specifically asked not to have them. Our writers are professionals
              at writing in any tone of voice,
              <span>
                whether to make people laugh or inform them of the importance of
                sourdough{""}
              </span>
              bread.
            </p>
            <a
              href="https://mycontentpal.spp.io/order/buy-content"
              className=" mt-8 p-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2  border-transparent rounded-full shadow-sm text-base font-inter text-white btnPrimary"
            >
              Write For Me
            </a>
            <span ref={myRef4}></span>
            <div className="md:w-full   relative w-full lg:hidden py-8 mt-8  ">
              <motion.img
                layout="true"
                transition={spring}
                className="object-fill absolute    top-0 left-0 shadow-lg bg-blend-multiply rounded-2xl"
                src="BackPanel.svg"
              />
              <motion.img
                layout="true"
                transition={spring}
                src="Asset 119.svg "
                className="lg:hidden absolute p-8  shadow-sm "
              />
            </div>
          </motion.div>
        </div>
        {/* SECTION FOUR*/}
      </div>
    </>
  );
}

//  <div className=" grid   h-full  translate-x-12 ">
//                 <motion.img
//                   layout
//                   transition={spring}
//                   className={`object-fill  w-2/3  shadow-lg bg-blend-multiply rounded-2xl     ${
//                     myElementIsVisible2 ? "opacity-100" : "opacity-0"
//                   }`}
//                   src="Asset 117.svg"
//                 />
//               </div>
//               <div className=" grid   h-full  translate-x-12 ">
//                 <motion.img
//                   layout
//                   transition={spring}
//                   className={`object-fill  w-2/3  shadow-lg bg-blend-multiply rounded-2xl     ${
//                     myElementIsVisible3
//                       ? "opacity-100"
//                       : myElementIsVisible2
//                       ? "opacity-0"
//                       : myElementIsVisible1
//                       ? "opacity-0"
//                       : ""
//                   }`}
//                   src="Asset 119.svg"
//                 />
//               </div>

//  <div className="absolute  w-full   h-full  ">
//    <div className="grid-cols-2 m:grid-cols-1  grid  h-full ">
//      <div className=" grid   h-full   place-content-end ">
//        <motion.img
//          layout
//          transition={spring}
//          className={`object-fill  w-2/3  shadow-lg bg-blend-multiply rounded-2xl     ${
//            myElementIsVisible2 ? "opacity-0" : ""
//          }`}
//          src="Asset 116.svg"
//        />
//      </div>
//    </div>
//  </div>;
