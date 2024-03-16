import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import Swiper from "swiper";
import { SwiperOptions } from 'swiper/types';
import { Pagination, Autoplay } from 'swiper/modules';
import { useState } from "react";



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
    // Initialize Swiper once the component is mounted
    const swiper = new Swiper(".mySwiper", swiperParams);

    // // Cleanup function (optional)
    // return () => {
    //   swiper.destroy();
    // };
  }, []); 

//   useEffect(() => {
//     const menuIcon = document.querySelector('.menu-open') as HTMLElement;
//     const menu = document.querySelector('.menu-item') as HTMLElement;

//     const handleClick = () => {
//       menu.classList.toggle('show');
//       menuIcon.innerHTML = menu.classList.contains('show') ? '<i className="fas fa-times"></i>' : '<i className="fas fa-bars"></i>';
//     //   <i className="fa fa-bars"></i>
//     // <i className="fa fa-times"></i>
//     };


//     // menuIcon.innerHTML = menu.classList.contains('show') ? '<p>Hallo</p>' : '<i className="fa fa-bars"></i>';

//     menuIcon.addEventListener('click', handleClick);

//     // Cleanup function (optional)
//     return () => {
//       menuIcon.removeEventListener('click', handleClick);
//     };
//   }, []);

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
        // Email sent successfully
        // setSubmissionStatus('success');
        // Redirect to your desired page
        // window.location.href = '/';
        setIsLoading(false)
        alert('Message sent successfully')
      } else {
        // Email sending failed
        // setSubmissionStatus('error');
        setIsLoading(false)
        alert('Message not being sent successfully')
      }
    } catch (error) {
      setIsLoading(false)
      console.error('Error submitting form:', error);
      alert('Error submitting form: '+error)
    // setSubmissionStatus('error');
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
    {/* <html> */}
      <Head>
        {/* <meta charset='utf-8' /> */}
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <title>Nusa Spices</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='stylesheet' type='text/css' media='screen' href='styles.css' />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"  />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        {/* <!--<script src='main.js'></script>--> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
        />
        <title>Best Indonesian Vanilla Beans - Kobus Spice</title>
        <meta name="description" content="We offer the highest quality Indonesian vanilla beans at wholesale prices. Our beans are sourced from the best farms in Indonesia and are hand-picked for their rich flavor and aroma. We offer a wide variety of vanilla beans, including Tahitian and Planifolia, at affordable prices. We guarantee that you will be satisfied with our products." />
        <meta name="keywords" content="indonesian vanilla beans, vanilla beans from indonesia, indonesian vanilla, vanilla from indonesia, vanilla beans, vanilla bean, vanilla extract, gourmet vanilla beans" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Best Indonesian Vanilla - Kobus Spice" />
        <meta property="og:description" content="We offer the highest quality Indonesian vanilla beans at wholesale prices. Our beans are sourced from the best farms in Indonesia and are hand-picked for their rich flavor and aroma. We offer a wide variety of vanilla beans, including Tahitian and Planifolia, at affordable prices. We guarantee that you will be satisfied with our products." />
        <meta property="og:url" content="https://kobusspice.com/" />
        <meta property="og:site_name" content="Kobus Spice" />
        {/* <script type="application/ld+json">
            {
                "@context": "http://schema.org/",
                "@type": "Organization",
                "name": "The Finest Vanilla Beans from Indonesia",
                "url": "https://www.example.com/",
                "description": "We are a leading supplier of Indonesian vanilla beans, one of the finest vanillas in the world. We source our vanilla beans from the lush, tropical forests of Indonesia, where the ideal climate and soil conditions create the perfect environment for vanilla beans to thrive. Our vanilla beans are known for their rich, complex flavor, with notes of sweetness, creaminess, and earthiness. They are also high in vanillin, the compound that gives vanilla its characteristic flavor. Our vision is to be the leading supplier of high-quality Indonesian vanilla beans, with the finest vanilla products in the world. Our mission is to source, process, and distribute the finest Indonesian vanilla beans, improve the welfare of our farmers, enhance public prosperity around our plantation, sustainably preserve the environment. We have been sourcing, processing, and distributing Indonesian vanilla beans for over 20 years. We have a deep understanding of the vanilla bean industry and we are committed to providing our customers with the finest vanilla products in the world. Over the years, we have successfully exported our vanilla beans to a diverse range of countries, including USA, China, UK, Saudi Arabia, UAE, Russia, France, Germany, Italy, Denmark, Austria, Swiss, Turkey, Lebanon, Japan, South Korea, Australia, South Africa, and many more. We source our beans from the best farms in Indonesia. We work with a network of trusted farmers who grow our beans using traditional methods and sustainable practices. This ensures that our beans are of the highest quality and that they are grown in an environmentally friendly way. We offer a wide variety of Indonesian vanilla beans, including Bourbon, Planifolia, and Tahitensis. We also offer beans in different grades, so you can find the perfect beans for your needs. We carefully select our beans and package them using sealed plastic to ensure that they arrive to you fresh and delicious. Our beans are hand-picked and cured using traditional methods, resulting in a rich, complex flavor that is second to none. We offer competitive prices on our Indonesian vanilla beans, so you can save money without sacrificing quality. We offer wholesale and retail pricing, and we are always happy to work with you to find the best price for your needs.",
                "image": "https://www.example.com/images/vanilla-beans.jpg",
                "knowsAbout": "Indonesian vanilla",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Indonesian Vanilla Beans",
                  "description": "Our vanilla beans are known for their sweet, creamy, and rich pure vanilla flavor. They are also high in vanilin content, with a black to dark brown color and non-split pods. Our beans have a strong and pleasant aroma that is perfect for adding to a variety of dishes and desserts. Packaged in airtight bags to preserve freshness. We provide a full package of export documents. Documents for vanilla beans export include: Commercial Invoice, Packing List, and Phytosanitary Certificate. Minimum Order Quantity (MOQ) for vanilla beans is 1 kg. We accept credit cards, PayPal, and bank transfers for payment of vanilla beans. Please contact us for more details. The shipping time and cost will vary depending on the destination country, the quantity of your order, and the shipping method you choose. Our shipping methods include air freight and express shipping along with shipping insurance and tracking information. We will offer the fastest, safest, and most efficient shipping. Please contact us and specify your needs for more information.",
                  "image": "https://www.example.com/images/vanilla-beans.jpg",
                  "itemListElement": [
                    {
                      "@type": "Product",
                      "name": "Planifolia Vanilla - Grade A",
                      "description": "Planifolia vanilla beans from Indonesia that are high in vanillin content and have a rich, complex flavor.",
                      "offers": {
                        "@type": "Offer",
                        "availability": "https://schema.org/InStock",
                        "price": "55.00",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "Product",
                      "name": "Planifolia Vanilla - Grade B",
                      "description": "Planifolia vanilla beans from Indonesia that are high in vanillin content and have a rich, complex flavor.",
                      "offers": {
                        "@type": "Offer",
                        "availability": "https://schema.org/InStock",
                        "price": "55.00",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "Product",
                      "name": "Planifolia Vanilla - Grade C",
                      "description": "Planifolia vanilla beans from Indonesia that are high in vanillin content and have a rich, complex flavor.",
                      "offers": {
                        "@type": "Offer",
                        "availability": "https://schema.org/InStock",
                        "price": "55.00",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "Product",
                      "name": "Tahitian Vanilla - Grade A",
                      "description": "Planifolia vanilla beans from Indonesia that are high in vanillin content and have a rich, complex flavor.",
                      "offers": {
                        "@type": "Offer",
                        "availability": "https://schema.org/InStock",
                        "price": "55.00",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "Product",
                      "name": "Tahitian Vanilla - Grade B",
                      "description": "Planifolia vanilla beans from Indonesia that are high in vanillin content and have a rich, complex flavor.",
                      "offers": {
                        "@type": "Offer",
                        "availability": "https://schema.org/InStock",
                        "price": "55.00",
                        "priceCurrency": "USD"
                      }
                    },
                    {
                      "@type": "Product",
                      "name": "Tahitian Vanilla - Grade C",
                      "description": "Planifolia vanilla beans from Indonesia that are high in vanillin content and have a rich, complex flavor.",
                      "offers": {
                        "@type": "Offer",
                        "availability": "https://schema.org/InStock",
                        "price": "55.00",
                        "priceCurrency": "USD"
                      }
                    }
                  ]
                }
            }
        </script> */}
      </Head>

      <div style={{margin: '0', padding: '0'}}>
      <header>
        <nav className={"desktop"}>
            <a href="#" style={{fontWeight: 'bold', fontSize: '25px', display: 'flex', alignItems: 'center'}}>
                {/* <img src="../../public/kobus-logo.png" alt="KOBUS LOGO" style={{width: '15%'}} /> */}
                <Image alt="logo" style={{width: '24%'}} src="/kobus-logo.png" width={500} height={500}/>
                <p>KOBUS Spices</p>
            </a>
            <ul>
                <li>
                    <a href="#about-us">ABOUT US</a>
                    <div className="bar hide"></div>
                </li>
                <li>
                    <a href="#product">PRODUCT</a>
                    <div className="bar hide"></div>
                </li>
                <li>
                    <a href="#faq">FAQ</a>
                    <div className="bar hide"></div>
                </li>
                <li>
                    <a href="#contact-us">CONTACT US</a>
                    <div className="bar hide"></div>
                </li>
                {/* <!-- <li>
                    <a href="#">SUSTAINABILITY</a>
                    <div className="bar hide"></div>
                </li>
                <li>
                    <a href="#">MEDIA</a>
                    <div className="bar hide"></div>
                </li> --> */}
            </ul>
        </nav>
        <nav className="mobile">
            <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                <a href="#" style={{fontWeight: 'bold', fontSize: '20px', display: 'flex', alignItems: 'center'}}>
                    {/* <img src="../../public/kobus-logo.png" alt="KOBUS LOGO" style={{width: '15%'}} /> */}
                    <Image src="/kobus-logo.png" style={{width: '24%'}} alt="KOBUS LOGO" width={500} height={500} />
                    <p>KOBUS Spices</p>
                </a>
                {/* <!-- <a href="#" className="menu-open"><i className="fa fa-bars"></i></a> --> */}
                <button className="menu-open" onClick={toggleMenu}><i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i></button>
            </div>
            <ul className={`menu-item ${menuOpen ? 'show' : ''}`} style={{ marginTop: 0, backgroundColor: '#f5ec4f', height: '100vh' }}>
                <li>
                    <a href="#about-us" onClick={toggleMenu}>ABOUT US</a> 
                </li>
                <li>
                    <a href="#product" onClick={toggleMenu}>PRODUCT</a>
                </li>
                <li>
                    <a href="#faq" onClick={toggleMenu}>FAQ</a>
                </li>
                <li>
                    <a href="#contact-us" onClick={toggleMenu}>CONTACT US</a>
                </li>
                {/* <!-- <li>
                    <a href="#">SUSTAINABILITY</a>
                </li>
                <li>
                    <a href="#">MEDIA</a>
                </li> --> */}
            </ul>
        </nav>
      </header>


      <main>
        <div className="container">
            <div className="swiper mySwiper">
                {/* <!-- <div className="textbanner">
                    <div className="swiper-pagination"></div>
                    <div className="bar1"></div>
                    <h2>To be a world-className, global operator within the energy and mining sectors.</h2>
                </div> --> */}
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><Image alt="banner-1" src="/home-2.jpg" className="img-responsive" width={1257} height={835}/></div>
                    <div className="swiper-slide"><Image alt="banner-2" src="/home-3.png" className="img-responsive" width={1342} height={897}/></div>
                    <div className="swiper-slide"><Image alt="banner-3" src="/home-1.png" className="img-responsive"  width={1297} height={886}/></div>
                    <div className="swiper-slide"><Image alt="banner-4" src="/home-4.png" className="img-responsive" width={1591} height={894}/></div>
                </div>
                {/* <!-- <div className="swiper-pagination"></div> --> */}
            </div>
            <div className="textbanner">
                <div className="swiper-pagination"></div>
                <div className="bar1"></div>
                <h1>The Finest Vanilla Beans from Indonesia</h1>
            </div>
        </div>                                                                   
        <div className="container productionprocess vision-mission" id="about-us">
            <div className="vision">
                <div className="bar2"></div>
                <div className="vision-content">
                    <div className="title title-white">about us</div>
                    <h2>VISION</h2>
                    <p style={{marginBottom: '0px'}}>To be the leading supplier of high-quality Indonesian vanilla beans, with the finest vanilla products in the world.</p>
                </div>
                
            </div>
            <div className="mission">
                <div className="mission-content">
                    <h2>MISSION</h2>
                    <p>Our action are guided by three underlying principles:</p>
                    <ul>
                        <li>Source, process, and distribute the finest Indonesian vanilla beans</li>
                        <li>Improve the welfare of our farmers</li>
                        <li>Enhance public prosperity around our plantation</li>
                        <li>Sustainably preserve the environment</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container aboutus" style={{ clear: 'both' }}>
            <div className="bar2"></div>
            <span className="title">ABOUT US</span>
            <h2 className="text-invert">The Leading Supplier of Indonesian Vanilla</h2>
            <div className="row">
                <p>We are a leading supplier of Indonesian vanilla, one of the finest vanillas in the world. We source our vanilla beans from the lush, tropical forests of Indonesia, where the ideal climate and soil conditions create the perfect environment for vanilla beans to thrive. <br />Our vanilla beans are known for their rich, complex flavor, with notes of sweetness, creaminess, and earthiness. They are also high in vanillin, the compound that gives vanilla its characteristic flavor.</p>
                {/* <img decoding="async" src="../../public/about-us.png" sizes="(max-width: 1980px) 100vw, 1980px" data-no-retina="" /> */}
                {/* <Image src="/about-us.png" alt="about-us" width={612} height={408} /> */}
                <Image
                  src="/about-us.png"  // Adjust the path to the correct location of your image
                  alt="About Us"
                  decoding="async"
                  // layout="responsive"
                  width={612}
                  height={408}  // Adjust the height based on your image's aspect ratio
                  sizes="(max-width: 1980px) 100vw, 1980px"
                />
            </div>
        </div>
        <div className="container productionprocess ourexperience"> 
            <div className="ourexperience-content">
                <div className="ourexperience-content-text">
                    <div className="ourexperience-overlay"></div>
                    <div className="bar2"></div>
                    <h2>Our 20 Years of Experience in the Vanilla Bean Industry</h2>
                    <p>We have been sourcing, processing, and distributing Indonesian vanilla beans for over 20 years. We have a deep understanding of the vanilla bean industry and we are committed to providing our customers with the finest vanilla products in the world.</p>
                    <p>Over the years, we have successfully exported our vanilla beans to a diverse range of countries, including USA, China, UK, Saudi Arabia, UAE, Russia, France, Germany, Italy, Denmark, Austria, Swiss, Turkey, Lebanon, Japan, South Korea, Australia, South Africa, and many more.</p>
                </div>
                {/* <img src="../../public/WORLDMAP.png" alt="world map" /> */}
                <Image src="/WORLDMAP.png" alt="world map" width={1438} height={918} />
            </div>
        </div>
        <div className="container product" id="product">
            <div className="overlay"></div>
            <div className="bar2"></div>
            <span className="title title-white">PRODUCT</span>
            <h2 className="text-invert title-white thirtyfivepx">The Sweet and Creamy Flavor of Indonesian Vanilla Beans</h2>
            {/* <!-- s, , oily, flexible, ,  --> */}
            <div className="additional-div">
                <div className="product-feature" style={{ height: 'fit-content' }} >
                    <ul>
                        <li>
                            <p>Sweet, creamy and rich pure vanilla flavor</p>
                        </li>
                        <li>
                            <p>High vanilin content</p>
                        </li>
                        <li>
                            <p>Black to dark brown color</p>
                        </li>
                        <li>
                            <p>Non-split pods</p>
                        </li>
                        <li>
                            <p>Strong and pleasant aroma</p>
                        </li>
                        {/* <!-- <li>
                            <p>Complex vanilla flavor</p>
                        </li> -->
                        <!-- <li>
                            <p>Free from cracks</p>
                        </li> --> */}
                    </ul>
                </div>
                {/* <!-- <div className="additional-div product-feature" style="justify-content: center;">
                    <div className="swiper1 mySwiper1" style="width: 60%;">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <p>CUBE</p>
                                <img decoding="async" src="../assets/product-6.png" sizes="(max-width: 1980px) 100vw, 1980px" data-no-retina="">
                            </div>
                            <div className="swiper-slide">
                                <p>CUBE</p>
                                <img decoding="async" src="https://template86.webekspor.com/wp-content/uploads/2022/10/Product-4.jpg" alt="Product-4" srcset="https://template86.webekspor.com/wp-content/uploads/2022/10/Product-4.jpg 500w, https://template86.webekspor.com/wp-content/uploads/2022/10/Product-4-300x300.jpg 300w, https://template86.webekspor.com/wp-content/uploads/2022/10/Product-4-150x150.jpg 150w, https://template86.webekspor.com/wp-content/uploads/2022/10/Product-4-200x200.jpg 200w" sizes="(max-width: 1980px) 100vw, 1980px" data-no-retina="">
                            </div>
                            <div className="swiper-slide">
                                <p>CUBE</p>
                                <img decoding="async" src="https://template86.webekspor.com/wp-content/uploads/2022/10/Product-3.jpg" alt="Product-3" srcset="https://template86.webekspor.com/wp-content/uploads/2022/10/Product-3.jpg 500w, https://template86.webekspor.com/wp-content/uploads/2022/10/Product-3-300x300.jpg 300w, https://template86.webekspor.com/wp-content/uploads/2022/10/Product-3-150x150.jpg 150w, https://template86.webekspor.com/wp-content/uploads/2022/10/Product-3-200x200.jpg 200w" sizes="(max-width: 1980px) 100vw, 1980px" data-no-retina="">
                            </div>
                            <div className="swiper-slide">
                                <p>CUBE</p>
                                <img decoding="async" src="https://template86.webekspor.com/wp-content/uploads/2022/10/Product-6.jpg" alt="Product-6" srcset="https://template86.webekspor.com/wp-content/uploads/2022/10/Product-6.jpg 500w, https://template86.webekspor.com/wp-content/uploads/2022/10/Product-6-300x300.jpg 300w, https://template86.webekspor.com/wp-content/uploads/2022/10/Product-6-150x150.jpg 150w, https://template86.webekspor.com/wp-content/uploads/2022/10/Product-6-200x200.jpg 200w" sizes="(max-width: 1980px) 100vw, 1980px" data-no-retina="">
                            </div>
                            
                        </div>                           
                    </div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div> --> */}
                
            </div>  
        </div>
        <div className="container productionprocess briquettequality">
            <div className="bar2"></div>
            <p>Vanilla Quality</p>
            <div className="flex" style={{ marginBottom: '30px' }}>
                <div className="product-type" style={{ marginRight: '40px' }}>
                    
                    <div style={{ display: 'inline-block', marginTop: '10px', marginBottom: '30px' }}>
                        <h2 style={{ fontSize: '32px', display: 'inline', borderBottom: '2px solid #f5ec4f', color: '#004f46' }}>Planifolia Vanilla</h2>
                    </div>
                    
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th className="transparent">
                                </th>
                                <th style={{ paddingTop: '20px', paddingBottom: '20px', fontSize: '24px' }}>
                                    A Grade
                                </th>
                                <th style={{ paddingTop: '20px', paddingBottom: '20px', fontSize: '24px' }}>
                                    B Grade
                                </th>
                                <th style={{ paddingTop: '20px', paddingBottom: '20px', fontSize: '24px' }}> 
                                    C Grade
                                </th>
                            </tr>
                        </thead>
                        <tbody style={{ padding: '20px' }}>
                            <tr>
                                <td className="product-attribute">
                                    Moisture
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                            </tr>
                            <tr>
                                <td className="product-attribute">
                                    Length
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                            </tr>
                            <tr>
                                <td className="product-attribute">
                                    Vanilin Content
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                            </tr>
                            {/* <!-- <tr>
                                <td className="product-attribute">
                                    Fix Carbon
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                            </tr>
                            <tr>
                                <td className="product-attribute">
                                    Burning Time
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                            </tr>
                            <tr>
                                <td className="product-attribute">
                                    Volatile Matter
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                            </tr> --> */}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex">
                <div className="product-type" style={{ marginRight: '40px' }}>
                    {/* <!-- <p style="font-size: 49px;  margin-bottom: 0;">Vanilla Quality</p> --> */}
                    <div style={{ display: 'inline-block', marginTop: '10px', marginBottom: '30px' }}>
                        <h2 style={{ fontSize: '32px', display: 'inline', borderBottom: '2px solid #f5ec4f', color: '#004f46' }}>Tahitian Vanilla</h2>
                    </div>
                    
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th className="transparent">
                                </th>
                                <th style={{ paddingTop: '20px', paddingBottom: '20px', fontSize: '24px' }}>
                                    A Grade
                                </th>
                                <th style={{ paddingTop: '20px', paddingBottom: '20px', fontSize: '24px' }}>
                                    B Grade
                                </th>
                                <th style={{ paddingTop: '20px', paddingBottom: '20px', fontSize: '24px' }}> 
                                    C Grade
                                </th>
                            </tr>
                        </thead>
                        <tbody style={{ padding: '20px' }}>
                            <tr>
                                <td className="product-attribute">
                                    Moisture
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                            </tr>
                            <tr>
                                <td className="product-attribute">
                                    Length
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                            </tr>
                            <tr>
                                <td className="product-attribute">
                                    Vanilin Content
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                            </tr>
                            {/* <!-- <tr>
                                <td className="product-attribute">
                                    Fix Carbon
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                            </tr>
                            <tr>
                                <td className="product-attribute">
                                    Burning Time
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                            </tr>
                            <tr>
                                <td className="product-attribute">
                                    Volatile Matter
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                                <td>
                                    5%
                                </td>
                            </tr> --> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
         {/* <!-- <div className="container productionprocess briquettequality">
             <div className="bar2"></div> 
            
        </div> --> */}
        {/* <!-- <div className="container productionprocess">
            <div className="bar2"></div>
            <span className="title title-black">PRODUCT</span>
            <h2 className="text-invert title-black thirtyfivepx">Briquette Shapes and Sizes</h2>
            <div className="product-catalog">
                <div className="product-catalog-width">
                    <img src="../assets/cube.jpg" alt="cube briquette">
                    <div>
                        <p>Cube Briquette</p>
                        <p>20 x 20 x 20 mm</p>
                        <p>22 x 22 x 22 mm</p>
                        <p>25 x 25 x 25 mm</p>
                        <p>26 x 26 x 26 mm</p>
                        <p>28 x 28 x 28 mm</p>
                    </div>
                </div>
                <div className="product-catalog-width">
                    <img src="../assets/finger.png" alt="finger briquette">
                    <div>
                        <p>Hexagonal Briquette</p>
                        <p>18 x 35 mm</p>
                        <p>20 x 35 mm</p>
                        <p>20 x 50 mm</p>
                        <p>22 x 35 mm</p>
                        <p>22 x 50 mm</p>
                    </div>
                </div>
                <div className="product-catalog-width">
                    <img src="../assets/flat.jpg" alt="flat briquette">
                    <div>
                        <p>Flat Briquette</p>
                        <p>25 x 25 x 15 mm</p>
                    </div>
                </div>
                <div className="product-catalog-width">
                    <img src="../assets/hexagonal.jpg" alt="hexagonal briquette">
                    <div>
                        <p>Hexagonal Briquette</p>
                        <p>18 x 35 mm</p>
                        <p>20 x 35 mm</p>
                        <p>20 x 50 mm</p>
                        <p>22 x 35 mm</p>
                        <p>22 x 50 mm</p>
                    </div>
                </div> 
            </div>
            <p className="custom-size-message">Custom Size Available For Each Shape</p>
            <a href="#" className="custom-size-button">
                <span className="custom-size-button-text">CONTACT US FOR CUSTOM SIZES</span>
                <span><svg aria-hidden="true" role="img" width="2em" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg></span>
            </a>
        </div>
        <div className="container aboutus" id="free-sample">
            <div className="bar2"></div>
            <span className="title title-white">FREE SAMPLE</span>
            <h2 className="text-invert thirtyfivepx">TEST OUR COCONUT CHARCOAL BRIQUETTE NOW</h2>
            <div className="flex-sp-bw">
                <div className="freesample-text">
                    <span className="title title-black">FREE COCONUT CHARCOAL BRIQUETTE</span>
                    <p>Get a free samples of the premium coconut charcoal briquettes for shisha from our Indonesia factory</p>
                    <p>We provide 1 kg sample of cube size coconut charcoal briquettes</p>
                    <p>Samples are free, delivery by DHL or FedEx paid by the customer</p>
                    <div className="cta-button">
                        <a href="#">
                            <span>GET FREE SAMPLE</span>
                            <span><svg aria-hidden="true" role="img" width="2em" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg></span>
                        </a>
                    </div>
                </div>
                <img src="https://charcoal.pro/wp-content/uploads/2022/11/free-samples-of-coconut-charcoal-briquettes-for-shisha.jpg.webp">
            </div>
        </div>
        <div className="container productionprocess">
            <div className="bar2"></div>
            <span className="title title-black">PRODUCT</span>
            <h2 className="text-invert title-black thirtyfivepx">production process</h2>
            <div className="productionprocesscontainer">
                <div className="additionalcontainer">
                    <div className="verticalline">
                    </div>
                    <div className="productionprocesstext">
                        <div className="text">
                            <div className="text-headline" onclick="displaybutton(0)">
                                <p>Coconut Shell Selection and Cleaning</p>
                                <div className="circle">
                                    <div className="arrow-down"></div>
                                </div>
                            </div>
                            <div className="text-content">
                                <p>We have established robust partnerships with numerous reputable suppliers and diligent farmers who consistently deliver high-quality coconut shells directly to our advanced production centers strategically located throughout Indonesia. Our meticulous selection process prioritizes sourcing coconut shells exclusively from fully mature and fresh coconuts, ensuring improved yields and exceptional quality throughout the charcoal production journey. Each coconut shell undergoes thorough manual inspection and rigorous cleaning before proceeding to the carbonization stage. Furthermore, we maintain optimal storage conditions, ensuring our coconut shells are consistently stored in dry environments to preserve their pristine quality.</p>
                            </div>
                        </div>
                        <div className="bullet">
                        </div>
                    </div>
                    <div className="productionprocesstext">
                        <div className="text">
                            <div className="text-headline" onclick="displaybutton(1)">
                                <p style="overflow-wrap: break-word;">Carbonization</p>
                                <div className="circle">
                                    <div className="arrow-down"></div>
                                </div>
                            </div>
                            <div className="text-content">
                                <p>We firmly believe that the quality of the final product is profoundly influenced by the charcoal utilized in the briquettes. To ensure superior results, we take great care in producing our own raw charcoal derived from meticulously selected coconut shells. Our production process results in charcoal with an elevated fixed carbon content, low volatile matter and low ash content. By expelling volatile matter during our meticulous carbonization process, we effectively mitigate the generation of excessive smoke and undesirable odors during briquette lighting. Furthermore, we refrain from using water to cool down the charcoal, allowing it to naturally cool over several hours. This meticulous approach guarantees the utilization of only the highest quality charcoal in the production of our briquettes. In addition, we maintain partnerships with a select group of suppliers who provide us with high quality coconut shell charcoal, meeting our exacting standards for fixed carbon content and ash characteristics.</p>
                            </div>
                        </div>
                        <div className="bullet">
                        </div>
                    </div>
                    <div className="productionprocesstext">
                        <div className="text">
                            <div className="text-headline" onclick="displaybutton(2)">
                                <p>Charcoal Crushing, Sieving, and Mixing</p>
                                <div className="circle">
                                    <div className="arrow-down"></div>
                                </div>
                            </div>
                            <div className="text-content">
                                <p>Following the meticulous carbonization process, the coconut shell charcoal undergoes a comprehensive crushing and sieving procedure to remove any excess ash, enabling us to maintain the ash content in our briquettes below 1.6%. Subsequently, the charcoal is finely powdered, ensuring a consistent texture. This powder is then meticulously blended in an industrial mixer with approximately 4% of a natural, eco-friendly binder, such as tapioca starch, to achieve an uniform coating across all charcoal particles. The binder plays a crucial role in maintaining the structural integrity of the charcoal during the pressing and briquette production stages, allowing the charcoal powder to stay intact.</p>
                                <p>Notably, we adhere strictly to a policy of not mixing any extraneous substances or chemicals, such as wood charcoal, nitrates, sawdust, borax, lime, and the like. These additives are commonly added by certain briquette manufacturers as cost-cutting fillers or to achieve specific characteristic, such as faster lighting times, albeit at the expense of shorter overall burn duration. Rest assured, our briquettes are 100% natural, devoid of any harmful emissions, smoke, or odors during the combustion process. Whether indulging in shisha or grilling, our customers can enjoy their experience with complete peace of mind.</p>
                            </div>
                        </div>
                        <div className="bullet">
                        </div>
                    </div>
                    <div className="productionprocesstext">
                        <div className="text">
                            <div className="text-headline" onclick="displaybutton(3)">
                                <p>Briquette Forming and Pressing</p>
                                <div className="circle">
                                    <div className="arrow-down"></div>
                                </div>
                            </div>
                            <div className="text-content">
                                <p>The meticulously prepared blend of coconut shell charcoal powder and binder is meticulously fed into a state-of-the-art briquette pressing machine, where it undergoes a precisely controlled process. Subsequently, the mixture is manually sliced to produce individual briquettes fashioned into the desired shape. For shisha/hookah enthusiasts, our popular briquette shapes include 25mm or 26mm cubes, as well as 20x50mm or 20x35mm hexagonal forms. On the other hand, barbeque enthusiasts can enjoy our briquettes crafted in hexagonal shapes, featuring hollow centers. With unwavering dedication to precision, we exercise stringent attention to detail to ensure that each individual briquette are uniformly and neatly shaped with straight and smooth edges and faces.</p>
                            </div>
                        </div>
                        <div className="bullet">
                        </div>
                    </div>
                    <div className="productionprocesstext">
                        <div className="text">
                            <div className="text-headline" onclick="displaybutton(4)">
                                <p>Drying and Packaging</p>
                                <div className="circle">
                                    <div className="arrow-down"></div>
                                </div>
                            </div>
                            <div className="text-content">
                                <p>Following the briquetting process, meticulous care is taken to dry the individual briquettes until the moisture level reaches below 5%. This lower moisture content facilitates quicker lighting and full combustion of the briquettes. To achieve this, we employ advanced industrial ovens capable of drying at temperatures of up to 80 degrees Celsius, ensuring thorough drying before the packaging stage. Throughout the drying process, strict monitoring is implemented to prevent the formation of any internal cracks within the briquettes. Once dried, the briquettes are meticulously cooled down to room temperature prior to packaging.</p>
                                <p>At our facility, we tailor the packaging of our coconut shell charcoal briquettes to meet our customers' specific requirements. For instance, a common packaging option involves clear plastic wrapping of 1 kg briquette packages, with multiple packages then inserted into master carton boxes of various weights, such as 20 kg or 30 kg. We also offer the option of printing individual color carton boxes with inner plastic lining, custom-sized to accommodate desired weights of 1 kg, 3 kg, or any other specifications requested by our customers. These colorfully printed carton boxes are then arranged within master carton boxes and meticulously loaded into shipping containers, ensuring optimal protection during transportation.</p>
                            </div>
                        </div>
                        <div className="bullet">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container productionprocess packaging">
            <div className="bar2"></div>
            <h2 className="packaging-title">Packaging</h2>
            <div className="flex title-black">
                <div className="width-40">
                    <p>We provide OEM service packaging, white label packaging, private label packaging with your own brand</p>
                    <p>Packaging Types</p>
                    <p>1. Master box + inner plastic</p>
                    <p>Available default size for master box (customizable): 10 kg, 15 kg, 20 kg</p>
                    <p>2. Master box + inner box + inner plastic</p>
                    <p>Available default size for inner box (customizable): 500 gr, 1 kg, 2 kg, 5 kg</p>
                    <p>All boxes are printed with full colour on your own brand</p>
                    <a href="#" className="custom-size-button width-90">
                        <span className="custom-size-button-text">CONTACT US FOR PACKAGING</span>
                        <span><svg aria-hidden="true" role="img" width="2em" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg></span>
                    </a>
                </div>
                <img src="../assets/packaging.png" alt="briquettepackaging">
            </div>
        </div> --> */}
        <div className="container productionprocess">
            <div className="bar2"></div>
            <span className="title title-black">PACKAGING</span>
            <h2 className="text-invert title-black thirtyfivepx">Fresh, High-Quality Indonesian Vanilla Beans in Sealed Plastic Packaging</h2>
            <div className="flex-sp-ar">
                <Image src="/packaging.jpg" alt="packaging" width={722} height={586} />
                <div>
                    {/* <!-- <p>We provide white label packaging,<br> private label packaging, <br>best OEM charcoal briquettes packaging<br> with your own brand</p> --> */}
                    <p>Our Indonesian vanilla beans are packaged using sealed plastic to ensure freshness and quality. The beans are individually wrapped in airtight bags to prevent moisture and oxidation, which can degrade the flavor of the beans.</p>
                    <div className="cta-button margintop45 width60">
                        <a href="#">
                            <span>DISCUSS YOUR PACKAGING WITH US</span>
                            <span><svg aria-hidden="true" role="img" width="2em" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg></span>
                        </a>
                    </div>
                </div>     
            </div>   
        </div>
        <div className="container productionprocess title-black faq" style={{ color: 'black' }} id="faq">
            <div className="bar2"></div>
            <h2 className="thirtysixpx">FREQUENTLY ASKED QUESTION</h2>
            <div className="flex">
            <div className="fiftypercent"> 
            <div className="text green" style={{paddingTop: '20px', paddingBottom: '20px'}}>
                <div className="text-headline" onClick={() => displayButton(0)}>
                    <p>Export Documents</p>
                    <div className="circle">
                        <div className="arrow-down"></div>
                    </div>
                </div>
                <div className="text-content">
                    <p className="title-black">We provide a full package of export documents. Documents for vanilla beans export include: Commercial Invoice, Packing List, and Phytosanitary Certificate</p>
                </div>
            </div>
            <div className="text green" style={{paddingTop: '20px', paddingBottom: '20px'}}>
                <div className="text-headline" onClick={() => displayButton(1)}>
                    <p>Minimum Order Quantity</p>
                    <div className="circle">
                        <div className="arrow-down"></div>
                    </div>
                </div>
                <div className="text-content">
                    <p className="title-black">Minimum Order Quantity (MOQ) for vanilla beans is 1 kg</p>
                </div>
            </div>
            </div>
            <div className="fiftypercent">
            <div className="text green" style={{paddingTop: '20px', paddingBottom: '20px'}}>
                <div className="text-headline" onClick={() => displayButton(2)}>
                    <p>Payment Term</p>
                    <div className="circle">
                        <div className="arrow-down"></div>
                    </div>
                </div>
                <div className="text-content">
                    <p className="title-black">We accept credit cards, PayPal, and bank transfers for payment of vanilla beans. Please contact us for more details</p>
                </div>
            </div>
            <div className="text green" style={{paddingTop: '20px', paddingBottom: '20px'}}>
                <div className="text-headline" onClick={() => displayButton(3)}>
                    <p>Delivery Time and Cost</p>
                    <div className="circle">
                        <div className="arrow-down"></div>
                    </div>
                </div>
                <div className="text-content">
                    <p className="title-black">The shipping time and cost will vary depending on the destination country, the quantity of your order, and the shipping method you choose. Our shipping methods include air freight and express shipping along with shipping insurance and tracking information. We will offer the fastest, safest, and most efficient shipping. Please contact us and specify your needs for more information</p>
                </div>
            </div>
            </div>
            </div>
        </div>
        <div className="container productionprocess whychooseus">
            <div className="bar2"></div>
            <span className="title">WHY CHOOSE US</span>
            <div className="flex">
                <p className="whychooseus-title">Sourced from the Best Farms in Indonesia</p>
                <p className="whychooseus-text">We source our beans from the best farms in Indonesia. We work with a network of trusted farmers who grow our beans using traditional methods and sustainable practices. This ensures that our beans are of the highest quality and that they are grown in an environmentally friendly way. Our beans are harvested in 9 months of maturity, resulting in a rich, complex flavor that is second to none.</p>
            </div>
            <div className="horizontalseparator"></div>
            <div className="flex">
                <p className="whychooseus-title">Offer a Wide Variety of Beans</p>
                <p className="whychooseus-text">We offer a wide variety of Indonesian vanilla beans, including Bourbon, Planifolia, and Tahitensis. We also offer beans in different grades, so you can find the perfect beans for your needs.</p>
            </div>
            <div className="horizontalseparator"></div>
            <div className="flex">
                <p className="whychooseus-title">Fresh and Delicious</p>
                <p className="whychooseus-text">We carefully select our beans and package them using sealed plastic to ensure that they arrive to you fresh and delicious. Our beans are hand-picked and cured using traditional methods, resulting in a rich, complex flavor that is second to none.</p>
            </div>
            <div className="horizontalseparator"></div>
            <div className="flex">
                <p className="whychooseus-title">Competitive Prices</p>
                <p className="whychooseus-text">We offer competitive prices on our Indonesian vanilla beans, so you can save money without sacrificing quality. We offer wholesale and retail pricing, and we are always happy to work with you to find the best price for your needs.</p>
            </div>
        </div>
        <div className="container factory-visit" id="visit-us">
            <div className="overlay" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}></div>
            {/* <!--<h2>VISIT OUR COCONUT CHARCOAL BRIQUETTE FACTORY</h2>
            <p>You are invited to visit our production site</p>   
            <p>We'll pick you up in the airport and bring you to our factory</p>
            --> */}
            <div className="factory-visit-content">
                <p>Secure your supply</p>
                <a href="#">
                    <span>ORDER NOW</span>
                    <span><svg aria-hidden="true" role="img" width="2em" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg></span>
                </a>
            </div>
        </div>
        <div className="container contactus" id="contact-us">
            <div className="contactus-title">
                <div className="bar2"></div>
                <h2 className="title title-white">CONTACT US</h2>
                {/* <img src="../../public/contact-icon.png" alt="CONTACT US LOGO" /> */}
                <Image src="/contact-icon.png" alt="CONTACT US LOGO" width={119} height={118} />
            </div>
            <div className="contactus-overlay">
                <div className="contactus-overlay-content"></div>
            </div>
            {/* <img src="../../public/plantation.jpg" alt="briquette plant" className="img-responsive" /> */}
            <Image src="/plantation.jpg" alt="vanilla plant" width={1600} height={900} />
            {/* <!-- <h1>Contact Us</h1>
            <div className="border"></div> --> */}
            {/* <form action="http://localhost:3000/api/sendMail" method="post" className="contactus-form"> */}
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
               {/* <!-- <input
                  type="submit"
                  id="form-submit"
                  className="contact-form-btn"
                  value="SEND"
                  required
                  style="font-size: 12px; display: block; width: 15%; border-radius: 30px; background-color: #F5EC4F; padding-top: 7px; padding-bottom: 7px;"
                  />
                 --> */}
                 <button onClick={handleSubmit}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                    SEND
                    {/* <img src="../../public/arrow-right.png" alt="arrow right button" /> */}
                    <Image src="/arrow-right.png" alt="arrow right button" width={16} height={16} />
                 </button>
            </div>
        </div>
        <div className="container productionprocess footer">
            <div className="bar2"></div>
            <div className="flex">
                <div className="footer-col">
                    {/* <!-- <img src="../assets/finger.png" alt="Company Logo" style="width:100%;"> -->
                    <!-- <img src="../assets/kobus-logo.png" alt="KOBUS LOGO" style="width: 100%;"> --> */}
                    <h2 style={{ textAlign: 'center' }}>KOBUS Spices</h2>
                    {/* <img src="../../public/kobus-logo.png" alt="KOBUS LOGO" style={{ width: '50%', marginLeft: '25%' }} /> */}
                    <Image src="/kobus-logo.png" alt="KOBUS LOGO" width={500} height={500} style={{ width: '50%', marginLeft: '25%' }} />
                    <p>Indonesia's Leading Supplier of Vanilla Beans</p>
                    
                </div>
                <div className="footer-col">
                    <h2 style={{marginBottom: '20px'}}>CONTACT US</h2>
                    {/* <p>Mayapada Tower Lt 10</p> */}
                    <span>
                        <a href="#">
                            <Image src="/whatsapp-white.png" alt="WhatsApp logo" width={225} height={225} />
                            {/* <img src="../../public/whatsapp-white.png" alt="Whatsapp logo" /> */}
                            +6282166731667
                        </a>
                    </span>
                    {/* <span className="margintop15">
                        <a href="#">
                            <Image src="/email1.png" alt="Email logo" width={595} height={419} />
                            <img src="../../public/email1.png" alt="Email logo" />
                            info@nusaspices.com
                        </a>
                    </span> */}
                    <span className="margintop15">
                        <a href="#">
                            <Image src="/facebook.png" alt="Facebook logo" width={31} height={31} />
                            {/* <img src="../assets/facebook.png" alt="Facebook logo"> */}
                            kobusspices
                        </a>
                    </span>
                    <span className="margintop15">
                        <a href="#">
                            <Image src="/instagram2.png" alt="Instagram logo" width={31} height={31} />
                            {/* <img src="../assets/instagram.png" alt="Instagram logo"> */}
                            kobusspices
                        </a>
                    </span>
                    <span className="margintop15">
                        <a href="#">
                            <Image src="/linkedin.png" alt="Linkedin logo" width={31} height={31} />
                            {/* <img src="../assets/instagram.png" alt="Instagram logo"> */}
                            kobusspices
                        </a>
                    </span>
                    <span className="margintop15">
                        <a href="#">
                            <Image src="/twitter.png" alt="Twitter logo" width={31} height={31} />
                            {/* <img src="../assets/instagram.png" alt="Instagram logo"> */}
                            kobusspices
                        </a>
                    </span>
                </div>
                <div className="footer-col">
                    <h2 style={{marginBottom: '20px'}}>OUR OFFICE</h2>
                    <p>Buana Vista Indah 1 Blok K No.91, Belian, Batam Kota, Kota Batam, Kepulauan Riau 29465</p>
                </div>
            </div>
        </div>
        <a href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." className="float" target="_blank">
            <i className="fa fa-whatsapp my-float"></i>
        </a>
      </main>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
      {/* <script>
        var swiper = new Swiper(".mySwiper", {
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
        });
      </script> */}
      {/* <script>
        var swiper1 = new Swiper(".mySwiper1", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      </script> */}
      {/* <script>
          function displaybutton(i) {
              var x = document.getElementsByClassName("text-content");
              if (x[i].style.display === "none" || x[i].style.display === "") {
                  x[i].style.display = "block";
              } else {
                  x[i].style.display = "none";
              }
          }
      </script> */}
      {/* <script>
          const menuIcon = document.querySelector('.menu-open');
          const menu = document.querySelector('.menu-item');
          menuIcon.addEventListener('click', () => {
              menu.classList.toggle('show');
              menuIcon.innerHTML = menu.classList.contains('show') ? '<i className="fa fa-times"></i>' : '<i className="fa fa-bars"></i>';
          });
      </script> */}

    {/* </html> */}
    </div>

  );
}
