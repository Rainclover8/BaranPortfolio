import Foto from "../assets/bg-4.png";
import { motion, useScroll } from "framer-motion";
import Navbar from "./Navbar";
import aboutFoto from "../assets/bg-4.png";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import Bootstrap from "../assets/BOOTSTRAP5.png";
import { FaCode } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import cv from'../assets/cv.pdf';

function AboutMe() {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);
  AOS.init();

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  const form = useRef();
  const serviceId = "service_2sz8rpg";
  const templateId = "template_1q0lbne";
  const publicKey = "rbrLE2kMjqEklQUPG";
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          alert("Mesajınız başarılı bir şekilde iltilmiştir!");

        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const sertifikalar = [
    {
      name: "HTML",
      resim: HTML,
    },
    {
      name: "CSS",
      resim: CSS,
    },
    {
      name: "Bootstrap",
      resim: Bootstrap,
    },
  ];
  const services = [
    {
      name: "UI/UX Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ipsam voluptas similique quae voluptate quas dolor enim dolorem, omnis doloremque adipisci consectetur? Dolores officia optio consequuntur necessitatibus, ea commodi voluptatem.",
    },
    {
      name: "Web Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ipsam voluptas similique quae voluptate quas dolor enim dolorem, omnis doloremque adipisci consectetur? Dolores officia optio consequuntur necessitatibus, ea commodi voluptatem.",
    },
    {
      name: "Ceo",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ipsam voluptas similique quae voluptate quas dolor enim dolorem, omnis doloremque adipisci consectetur? Dolores officia optio consequuntur necessitatibus, ea commodi voluptatem.",
    },
  ];
  const clikCvHandler = () =>{
    const cvPath = cv;
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Baran.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="bg-dark h-screen">
      <div className="md:flex hidden">
        <Navbar />
      </div>
      <div className="">
        <motion.div
          className="progress-bar md:top-12 top-0 sticky"
          style={{
            scaleX: scrollYProgress,
            height: 12,
            backgroundColor: "#fff",
            zIndex: 99,
          }}
        />

        <div className="md:flex md:justify-around md:items-center md:px-20  bg-dark ">
          <motion.div
            // screen sildim 100vh
            className=" md:mt-3 -mt-28 h-screen md:grid-cols-2 md:w-1/2 mx-auto flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              //   type: "spring",
              //   stiffness: 100,
              //   ease: "linear",
              //   duration: 2,
              scale: { duration: 4 },
              opacity: { duration: 5 },
              x: { duration: 4 },
              y: { duration: 4 },
            }}
          >
            <motion.img
              src={Foto}
              className="rounded-full bg-dark1 shadow-2xl shadow-dark2"
              alt="Logo"
            />
          </motion.div>
          <div className="md:me-20  md:p-20 flex flex-col items-center w-full -mt-20">
            <motion.h1
              className="font-extrabold -rotate-12 md:text-4xl text-xl text-red-200"
              transition={{
                x: { duration: 2 },
                scale: { duration: 2 },
                opacity: { duration: 2 },
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              Merhaba 👋
            </motion.h1>
            <motion.h2
              className="-rotate-12 md:text-4xl text-xl font-Pacifico text-red-300 "
              transition={{
                x: { duration: 2 },
                scale: { duration: 2 },
                opacity: { duration: 3 },
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              Ben <span></span>
              <span className="rotate-45 text-dark2 md:text-4xl text-xl font-Titan-One">
                Baran Çiçek,
              </span>
            </motion.h2>
            <motion.p
              className="-rotate-12 text-dark3 md:text-2xl font-Titan-One text-lg "
              transition={{
                x: { duration: 3 },
                scale: { duration: 3 },
                opacity: { duration: 4 },
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              Full Stack Web Developerim
            </motion.p>
            <motion.div
              className=" flex  md:gap-20 gap-5 justify-center"
              transition={{
                x: { duration: 2 },
                scale: { duration: 2 },
                opacity: { duration: 5 },
                scale: { duration: 2 },
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <button className="bg-dark3 rounded-lg p-2" onClick={clikCvHandler} >Cv Indir</button>
              <button className="bg-dark2 rounded-lg p-2">Hire Me!</button>
            </motion.div>
          </div>
        </div>
        {/* h-200vh silindi */}
        <main className="md:h-screen  bg-dark overflow-x-hidden">
          <div className="md:flex justify-around items-center">
            <div className="md:w-1/2 w-screen justify-center flex flex-col items-center gap-4">
              <h1
                data-aos="fade-right"
                data-aos-delay="300"
                className="text-dark3 text-3xl font-extrabold text-center w-1/2"
              >
                About
                <span
                  data-aos="fade-right"
                  data-aos-delay="400"
                  className="text-dark2  text-6xl font-normal "
                >
                  Me!
                </span>
              </h1>
              <p
                data-aos="fade-left"
                data-aos-delay="400"
                className="text-center  text-dark2 font-extrabold shadow-lg shadow-dark2 p-3 font-SpaceMono text-4xl"
              >
                Merhaba 👋 Ben Baran Çiçek, 3 yıllık yazılım geliştirme
                deneyimine sahip bir freelancerım. Özellikle JavaScript, React,
                Python ve Django gibi teknolojilere ilgi duyuyorum. Şu anda
                kendimi geliştirerek ve kendi çağımda projeler gerçekleştirerek
                yeni beceriler kazanıyorum. Bu süreçte açık kaynaklı projelere
                katkıda bulunuyor ve çeşitli teknoloji alanlarında deneyimlerimi
                artırıyorum.
              </p>
            </div>
            <div
              className="rounded-full flex justify-center mt-12"
              data-aos-delay="400"
              data-aos="fade-left"
            >
              <img
                src={aboutFoto}
                className="rounded-full object-contain bg-dark2 "
                alt="Logo"
              />
            </div>
          </div>
        </main>
        <main className=" bg-dark overflow-hidden">
          {/* <div className="flex text-center flex-col items-center justify-center">
            <div className="">
              <h1 className="text-6xl text-dark2 font-SpaceMono tracking-widest">
                What I Do?
              </h1>
            </div>
            <div className="flex gap-10 p-24">
              <div className="text-dark3 font-extrabold border">
                <span>Foto</span>
                <h1>Başlık</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci, deleniti quos? Error aperiam mollitia exercitationem
                  dolore eum deserunt, corporis maiores provident culpa in
                  recusandae labore beatae dicta? Cumque, obcaecati non.
                </p>
              </div>
              <div className="text-dark3 font-extrabold border">
                <span>Foto</span>
                <h1>Başlık</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci, deleniti quos? Error aperiam mollitia exercitationem
                  dolore eum deserunt, corporis maiores provident culpa in
                  recusandae labore beatae dicta? Cumque, obcaecati non.
                </p>
              </div>
              <div className="text-dark3 font-extrabold border">
                <span>Foto</span>
                <h1>Başlık</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci, deleniti quos? Error aperiam mollitia exercitationem
                  dolore eum deserunt, corporis maiores provident culpa in
                  recusandae labore beatae dicta? Cumque, obcaecati non.
                </p>
              </div>
              <div className="text-dark3 font-extrabold border">
                <span>Foto</span>
                <h1>Başlık</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci, deleniti quos? Error aperiam mollitia exercitationem
                  dolore eum deserunt, corporis maiores provident culpa in
                  recusandae labore beatae dicta? Cumque, obcaecati non.
                </p>
              </div>
              <div className="text-dark3 font-extrabold border">
                <span>Foto</span>
                <h1>Başlık</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci, deleniti quos? Error aperiam mollitia exercitationem
                  dolore eum deserunt, corporis maiores provident culpa in
                  recusandae labore beatae dicta? Cumque, obcaecati non.
                </p>
              </div>
            </div>
          </div> */}
          <div className="text-dark3">
            <div className="w-1/4 ms-20">
              <motion.h1
                className="text-4xl font-Nunito font-extrabold"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  opacity: { duration: 2 },
                  scale: { duration: 1.2 },
                }}
              >
                My Service's
              </motion.h1>
              <motion.div
                className="border-2 rounded-full border-dark2"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{
                  opacity: { duration: 2 },
                  scaleX: { duration: 3 },
                }}
              ></motion.div>
            </div>
            <div className="">
              <motion.div
                className="grid lg:grid-cols-3 md:grid-cols-2 md:px-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ opacity: { duration: 5 } }}
              >
                <div
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  data-aos="fade-in"
                  className="flex flex-col bg-dark1 rounded-lg shadow-2xl shadow-dark2  items-center justify-center font-extrabold text-center w-3/5 mx-auto border p-4 mt-4"
                >
                  <FaCode size={40} />
                  <h1>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Inventore nemo similique cupiditate voluptatibus ut enim
                    earum esse repellat minima repellendus fuga eius aut
                    reiciendis quas saepe dolore, at rerum tenetur.
                  </h1>
                  <p></p>
                </div>
                <div
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos="fade-in"
                  className="flex flex-col bg-dark1 rounded-lg shadow-2xl shadow-dark2 items-center justify-center font-extrabold text-center w-3/5 mx-auto border p-4 mt-4 "
                >
                  <MdDesignServices size={40} />
                  <h1>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Inventore nemo similique cupiditate voluptatibus ut enim
                    earum esse repellat minima repellendus fuga eius aut
                    reiciendis quas saepe dolore, at rerum tenetur.
                  </h1>
                  <p></p>
                </div>
                <div
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos="fade-in"
                  className="flex flex-col bg-dark1 rounded-lg shadow-2xl shadow-dark2 items-center justify-center font-extrabold text-center w-3/5 mx-auto border p-4 mt-4 "
                >
                  <FaHandsHelping size={40} />
                  <h1>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Inventore nemo similique cupiditate voluptatibus ut enim
                    earum esse repellat minima repellendus fuga eius aut
                    reiciendis quas saepe dolore, at rerum tenetur.
                  </h1>
                  <p></p>
                </div>
              </motion.div>
            </div>
            {/* {sertifikalar.map((sertifika, index) => {
              return (
                <div className=" relative">
                  <h1 key={index} className="hover:text-dark1 p-20">
                    {sertifika.name}
                  </h1>
                  <div className="">
                    <img
                      src={sertifika.resim}
                      className="absolute top-0 bottom-0 left-0 right-0 hover:-top-20 duration-500"
                      alt={sertifika.name}
                    />
                  </div>
                </div>
              );
            })} */}
          </div>
          {/* Screen Sildim */}
          <div className="">
            <h1
              className="text-4xl font-Nunito font-extrabold ms-20 mt-20 text-dark2 text-decoration-underline "
              data-aos="fade-left"
            >
              Hire <span className="text-dark3"> Me!</span>
            </h1>
            <form
              className="flex flex-col items-center text-dark2 text-4xl font-Pacifico"
              data-aos="fade-in"
              ref={form}
              onSubmit={sendEmail}
            >
              <label>Ad - Soyad</label>
              <input
                type="text"
                name="user_name"
                id=""
                className="py-3 rounded-full mt-2  md:w-1/4 w-72"
              />
              <label>Mail</label>
              <input
                type="email"
                name="user_email"
                id=""
                className="py-3 rounded-full mt-2 md:w-1/4 w-72"
              />
              <label>Açıklama</label>
              <input
                type="text"
                name="message"
                id=""
                className="py-12 rounded-lg mt-2  md:w-1/4 w-72"
              />
              <button className="bg-dark1 shadow-lg shadow-dark2 hover:shadow-dark3 hover:text-dark hover:bg-dark3 hover:shadow-lg p-4 rounded-full mt-5 mb-20">
                Gönder
              </button>
            </form>
          </div>
        </main>
      </div>

      {/* <Egitim />
      <Sertifika /> */}
    </div>
  );
}

export default AboutMe;
