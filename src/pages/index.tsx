import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import Swiper from "swiper";
import { SwiperOptions } from 'swiper/types';
import { Pagination, Autoplay } from 'swiper/modules';
import { useState } from "react";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const swiperParams: SwiperOptions = {
      modules: [Pagination, Autoplay],
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
    }
    
    const swiper = new Swiper(".mySwiper", swiperParams);

  }, []); 



  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const displayButton = (i: number) => {
    const x = document.getElementsByClassName("text-content") as HTMLCollectionOf<HTMLElement>;
    
    if (x[i].style.display === "none" || x[i].style.display === "") {
      x[i].style.display = "block";
    } else {
      x[i].style.display = "none";
    }
  };

  const [youremail, setYourEmail] = useState('')
  const [yourname, setYourName] = useState('')
  const [yoursubject, setYourSubject] = useState('')
  const [yourmessage, setYourMessage] = useState('')

  const handleNameChange = (e: any) => {
    setYourName(e.target.value);
    console.log('yourname'+yourname)
  };

  const handleEmailChange = (e: any) => {
    setYourEmail(e.target.value);
    console.log('youremail'+youremail)
  };

  const handleSubjectChange = (e: any) => {
    setYourSubject(e.target.value);
    console.log('yoursubject'+yoursubject)
  };

  const handleMessageChange = (e: any) => {
    setYourMessage(e.target.value);
    console.log('yourmessage'+yourmessage)
  };

  const handleSubmit = async (e: any) => {
    setIsLoading(true)
    try {
      
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        body: JSON.stringify({ yourname, youremail, yoursubject, yourmessage }),
      });

      if (response.ok) {
        
        setIsLoading(false)
        alert('Message sent successfully')
      } else {
        
        setIsLoading(false)
        alert('Message not being sent successfully')
      }
    } catch (error) {
      setIsLoading(false)
      console.error('Error submitting form:', error);
      alert('Error submitting form: '+error)
    
    }
    window.location.href = '/'
  };

  const [isLoading, setIsLoading] = useState(false);
  
  if(isLoading) 
    return (
    <p className='flex justify-center items-center w-screen h-screen'>
      <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
    </p>
    )


  return (
    <div>
    
      <Head>
        
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <title>Richard Haris's Portfolio Website</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='stylesheet' type='text/css' media='screen' href='styles.css' />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"  />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
        />
        
        
        
      </Head>

      <div style={{margin: '0', padding: '0'}}>
      <header>
        <nav className={"desktop"}>
            <Link href="#" style={{fontSize: '25px', display: 'flex', alignItems: 'center'}}>
               
                
                <p>Richard</p>
            </Link>
            <ul>
                <li>
                    <Link href="#about-me">ABOUT ME</Link>
                    <div className="bar hide"></div>
                </li>
                <li>
                    <Link href="#skill">SKILL</Link>
                    <div className="bar hide"></div>
                </li>
                <li>
                    <Link href="#portofolio">PORTOFOLIO</Link>
                    <div className="bar hide"></div>
                </li>
                <li>
                    <Link href="#contact-me">CONTACT ME</Link>
                    <div className="bar hide"></div>
                </li>
                
            </ul>
        </nav>
        <nav className="mobile">
            <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                <Link href="#" style={{fontSize: '20px', display: 'flex', alignItems: 'center'}}>

                    <p>Richard</p>
                </Link>
                
                <button className="menu-open" onClick={toggleMenu}><i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i></button>
            </div>
            <ul className={`menu-item ${menuOpen ? 'show' : ''}`} style={{ marginTop: 0, backgroundColor: '#f5ec4f', height: '100vh' }}>
                <li>
                    <Link href="#about-me" onClick={toggleMenu}>ABOUT ME</Link> 
                </li>
                <li>
                    <Link href="#skill" onClick={toggleMenu}>SKILL</Link>
                </li>
                <li>
                    <Link href="#portofolio" onClick={toggleMenu}>PORTOFOLIO</Link>
                </li>
                <li>
                    <Link href="#contact-me" onClick={toggleMenu}>CONTACT ME</Link>
                </li>
               
            </ul>
        </nav>
      </header>


      <main>
        <div className="container">
            <div className="swiper mySwiper">
                
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><Image alt="banner-1" src="/sibiru.png" className="img-responsive" width={1920} height={892}/></div>
                    <div className="swiper-slide"><Image alt="banner-2" src="/simplicity_2.png" className="img-responsive" width={661} height={496}/></div>
                    <div className="swiper-slide"><Image alt="banner-3" src="/cospacej_2.png" className="img-responsive"  width={1920} height={874}/></div>
                    <div className="swiper-slide"><Image alt="banner-4" src="/aerontime_1.png" className="img-responsive" width={1893} height={885}/></div>
                </div>
                
            </div>
            <div className="textbanner">
                <div className="swiper-pagination"></div>
                <div className="bar1"></div>
                <h1>Hi, I'm <br></br>Richard Haris</h1>
            </div>
        </div>                                                                   
        
        <div id="about-me" className="container aboutus" style={{ clear: 'both' }}>
            <div className="bar2"></div>
            <span className="title">ABOUT ME</span>
            <h2 className="text-invert">An IT Enthusiast</h2>
            
                <p>I'm an experienced software developer with high proficiency in TypeScript, JavaScript, along with expertises in frameworks such as React, Node.js, FastAPI, and so much more. I'm a quick learner and collaborate closely with clients, creating effective, efficient, scalable, and user-friendly solutions solving real-world problems. Let's work together to bring your ideas to life!</p>
                
            
            <div className="flex">
                <div>      
                    <Image className="ml-[auto] mr-[auto] mt-[20px]" alt="software developer" src={'/webdeveloper.png'} width={500} height={500}></Image>
                    <p style={{color: 'white', textAlign: 'center', marginTop:'15px', lineHeight: '1'}}>Web developer</p>
                </div>
                <div>
                    <Image className="ml-[auto] mr-[auto]" alt="software developer" src={'/softwaredeveloper.png'} width={500} height={500}></Image>
                    <p style={{color: 'white', textAlign: 'center', lineHeight: '1'}}>Software developer</p>
                </div>
                <div>
                    <Image className="ml-[auto] mr-[auto] mt-[10px]" alt="software developer" src={'/mobiledeveloper.png'} width={500} height={500}></Image>
                    <p style={{color: 'white', textAlign: 'center', marginTop: '6px', lineHeight: '1'}}>Mobile developer</p>
                </div>
            </div>
        </div>
        
        <div className="container productionprocess title-black faq" style={{ color: 'black' }} id="skill">
            <div className="bar2"></div>
            <span className="title">SKILLS</span>
            
            <div className="flex px-auto">
                <div className="w-[20%] max-[768px]:w-[35%] mx-auto">
                    <Image src={'/c++.png'} alt="c++" width={800} height={899}></Image>
                    <Image className="mt-[20px]" src={'/css.png'} alt="c++" width={1200} height={1693}></Image>
                    <Image className="mt-[20px]" src={'/django.svg'} alt="c++" width={800} height={899}></Image>
                    <Image className="mt-[20px]" src={'/fastapi.png'} alt="c++" width={1024} height={369}></Image>
                </div>
                <div className="w-[20%] max-[768px]:w-[35%] mx-auto">
                    <Image src={'/firebase.png'} alt="c++" width={800} height={899}></Image>
                    <Image className="mt-[20px]" src={'/haskell.png'} alt="c++" width={1200} height={1693}></Image>
                    <Image className="mt-[20px]" src={'/html.png'} alt="c++" width={800} height={899}></Image>
                    <Image className="mt-[20px]" src={'/supabasse.png'} alt="c++" width={800} height={899}></Image>
                    <Image className="mt-[20px]" src={'/tailwind.png'} alt="c++" width={1024} height={369}></Image>
                    
                </div>
                <div className="w-[20%] max-[768px]:w-[35%] mx-auto">
                    <Image src={'/javascript.png'} alt="c++" width={800} height={899}></Image>
                    <Image className="mt-[20px]" src={'/mariadb.png'} alt="c++" width={1200} height={1693}></Image>
                    <Image className="mt-[20px]" src={'/mongodb.png'} alt="c++" width={800} height={899}></Image>
                    <Image className="mt-[20px]" src={'/MySQL.png'} alt="c++" width={1024} height={369}></Image>
                </div>
                <div className="w-[20%] max-[768px]:w-[35%] mx-auto">
                    <Image src={'/nextjs.png'} alt="c++" width={800} height={899}></Image>
                    <Image className="mt-[20px]" src={'/nodejs.png'} alt="c++" width={1200} height={1693}></Image>
                    <Image className="mt-[20px]" src={'/typescript.png'} alt="c++" width={800} height={899}></Image>
                    <Image className="mt-[20px]" src={'/postgresql.svg'} alt="c++" width={1024} height={369}></Image>
                </div>
                <div className="w-[20%] max-[768px]:w-[35%] mx-auto">
                    <Image src={'/python.png'} alt="c++" width={800} height={899}></Image>
                    <Image className="mt-[20px]" src={'/react.png'} alt="c++" width={1200} height={1693}></Image>
                    <Image className="mt-[20px]" src={'/java.png'} alt="c++" width={1024} height={369}></Image>
                </div>
            </div>
        </div>
        <div id="portofolio" className="container productionprocess whychooseus">
            <div className="bar2"></div>
            <span className="title">PORTOFOLIO</span>
            <div className="flex">
                <p className="whychooseus-title"><Image style={{width: '100%', height: '100%'}} src={'/sibiru.png'} alt="sibiru" width={1920} height={892}></Image></p>
                <p className="relative whychooseus-text">SiBiru: Your Ultimate Shuttle Bus Companion!<br></br><p className="font-normal">Tired of waiting endlessly for shuttle buses without any clue when they'll arrive? Say hello to Sibiru – your one-stop web based application for seamless shuttle bus travel! With Sibiru, you're always in the driver's seat, equipped with real-time shuttle location tracking, station information, estimated arrival times, nearest station finder and much more at your fingertips.</p>
                <br></br><Link className="font-normal absolute right-[0px] text-white" href="https://sibiru-itb.vercel.app/">detail →</Link>
                </p>
            </div>
            <div className="horizontalseparator"></div>
            <div className="flex">
                <p className="whychooseus-title"><Image style={{width: '100%', height: '100%'}} src={'/aerontime.png'} alt="aerontime" width={1282} height={499}></Image></p>
                <p className="relative whychooseus-text">AeronTime: Your Guardian Angel for Dynamic Flight Information!<br></br><p className="font-normal">Say goodbye to last-minute surprises! AeronTime is a web app that keeps you informed with instant notifications about any changes to your flight schedule – from delays to gate changes and everything in between. Get all the essential information about your flight at a glance – from departure and arrival times to gate numbers and aircraft type. AeronTime makes it easy to stay organized and informed throughout your journey.</p>
                <br></br><Link className="font-normal absolute right-[0px] text-white" href="https://aeron-time-deployment-txgz.vercel.app/">detail →</Link>
                </p>
            </div>
            <div className="horizontalseparator"></div>
            <div className="flex">
                <p className="whychooseus-title"><Image style={{width: '100%', height: '100%'}} src={'/cospacej_1.png'} alt="cospacej" width={816} height={651}></Image></p>
                <p className="relative whychooseus-text">CoSpaceJ: Where Collaboration Meets Convenience!<br></br><p className="font-normal">Say goodbye to the hassle of finding a coworking space. With CoSpaceJ, booking your ideal workspace is just a few clicks away using web app technology. Whether you're a freelancer, entrepreneur, or remote worker, CoSpaceJ is your go-to platform for securing a productive and inspiring workspace whenever you need it.</p>
                <br></br><Link className="font-normal absolute right-[0px] text-white" href="https://coworkingspacej.vercel.app/">detail →</Link>
                </p>
            </div>
            <div className="horizontalseparator"></div>
            <div className="flex">
                <p className="whychooseus-title"><Image style={{width: '100%', height: '100%'}} src={'/simplicity_1.png'} alt="simplicity" width={646} height={430}></Image></p>
                <p className="relative whychooseus-text">SimPlicity: Where Nurturing Sims is a Joyful Game!<br></br><p className="font-normal">Embark on an exciting journey of caring for your virtual companions with SimPlicity – the ultimate graphical user interface based desktop game application for nurturing and managing your sims' health, happiness, and overall well-being. Keep your sims healthy and happy by feeding them a balanced diet of delicious foods. Encourage your sims to stay active and engaged with a wide range of fun activities. </p>
                <br></br><Link className="font-normal absolute right-[0px] text-white" href="https://github.com/r11i/SimPlicity">detail →</Link>
                </p>
            </div>
            <div className="horizontalseparator"></div>
            <div className="flex">
                <p className="whychooseus-title"><Image style={{width: '100%', height: '100%'}} src={'/bnmo_2.png'} alt="bnmo" width={646} height={430}></Image></p>
                <p className="relative whychooseus-text">BNMO: CLI-Based Game Hub<br></br><p className="font-normal">BNMO is your ultimate destination for CLI-based gaming fun! Built entirely in C, BNMO offers a diverse selection of classic games, such as diner dash, hangman, snake on meteor, RnG, tower of hanoi, and many more.</p>
                <br></br><Link className="font-normal absolute right-[0px] text-white" href="https://github.com/r11i/BNMO">detail →</Link>
                </p>
            </div>
        </div>
        
        <div className="container contactus" id="contact-me">
            <div className="contactus-title">
                <div className="bar2"></div>
                <h2 className="title title-white">CONTACT ME</h2>
                
                <Image src="/contact-icon.png" alt="CONTACT US LOGO" width={119} height={118} />
            </div>
            <div className="contactus-overlay">
                <div className="contactus-overlay-content"></div>
            </div>
           
            <Image src="/professionaloffice.jpg" alt="vanilla plant" width={1600} height={900} />
            
            <div  className="contactus-form">
               <div className="bar2"></div>
               <input
                  type="text"
                  className="contactus-form-text"
                  placeholder="Your name"
                  name="yourname"
                  value={yourname}
                  onChange={handleNameChange}
                  required
                  />
               <input
                  type="email"
                  className="contactus-form-text"
                  placeholder="Your email"
                  name="youremail"
                  value={youremail}
                  onChange={handleEmailChange}
                  required
                  />
               <input
                  type="text"
                  className="contactus-form-text"
                  name="yoursubject"
                  placeholder="Subject"
                  value={yoursubject}
                  onChange={handleSubjectChange}
                  required
                  />
               <p>MESSAGE</p>
               <textarea
                  className="contactus-form-message"
                  placeholder="Your message"
                  name="yourmessage"
                  value={yourmessage}
                  onChange={handleMessageChange}
                  ></textarea>
               
                 <button onClick={handleSubmit}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                    SEND
                    
                    <Image src="/arrow-right.png" alt="arrow right button" width={16} height={16} />
                 </button>
            </div>
        </div>
        <div className="container productionprocess footer">
            <div className="bar2"></div>
            <div className="flex">
                <div className="footer-col">
                    
                    <h2>RICHARD HARIS</h2>
                    
                    <p className="mt-[20px]">An IT Enthusiast</p>
                    
                </div>
                <div className="footer-col">
                    <h2 style={{marginBottom: '20px'}}>CONTACT ME</h2>
                    
                    <span className="margintop15">
                        <Link href="https://instagram.com/richard_haris1">
                            <Image src="/instagram2.png" alt="Instagram logo" width={31} height={31} />
                            
                            richard_haris1
                        </Link>
                    </span>
                    <span className="margintop15">
                        <Link href="https://id.linkedin.com/in/richard-haris-5b9182248">
                            <Image src="/linkedin.png" alt="Linkedin logo" width={31} height={31} />
                            
                            Richard Haris
                        </Link>
                    </span>
                </div>
                <div className="footer-col">
                    <h2 style={{marginBottom: '20px'}}>SCHEDULE A MEETING</h2>
                    <p>Ask via linkedin or instagram</p>
                </div>
            </div>
        </div>
      </main>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
    </div>

  );
}
