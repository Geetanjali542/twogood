// // const scroll = new LocomotiveScroll({
// //     el: document.querySelector('#main'),
// //     smooth: true
// // });
// // the above is locomotive js and the y -axis scrollbar appears because of this



// function locomotiveAnimation(){
//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });


// // // --- RED PANEL ---
// // gsap.from(".line-1", {
// //   scrollTrigger: {
// //     trigger: ".line-1",
// //     scroller: ".smooth-scroll",
// //     scrub: true,
// //     start: "top bottom",
// //     end: "top top",
// //     onUpdate: self => console.log(self.direction)
// //   },
// //   scaleX: 0,
// //   transformOrigin: "left center", 
// //   ease: "none"
// // });


// // // --- ORANGE PANEL ---
// // gsap.from(".line-2", {
// //   scrollTrigger: {
// //     trigger: ".orange",
// //     scroller: ".smooth-scroll",
// //     scrub: true,
// //     pin: true,
// //     start: "top top",
// //     end: "+=100%"
// //   },
// //   scaleX: 0, 
// //   transformOrigin: "left center", 
// //   ease: "none"
// // });


// // // --- PURPLE/GREEN PANEL ---
// // var tl = gsap.timeline({
// //     scrollTrigger: {
// //       trigger: ".purple",
// //       scroller: ".smooth-scroll",
// //       scrub: true,
// //       pin: true,
// //       start: "top top",
// //       end: "+=100%"
// //     }
// //   });

// // tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
// //   .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
// //   .to(".purple", {backgroundColor: "#28a92b"}, 0);



// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// }


// locomotiveAnimation()





// // -----------------------------------------------------------------------------------------------------------------------
// // below is gsap

// function navbarAnimation(){
//     gsap.to("#nav-part1 svg",{
//         transform:"transalateY(-100%)",
//         scrollTrigger:{
//             trigger:"page1",
//             scroller:"#main",
//             markers:true,
//             start:"top 0",
//             end:"top -5%",
//             scrub:true
//         }
//     })
    
    
//     gsap.to("#nav-part2 #links",{
//         transform:"transalateY(-100%)",
//         opacity:0,
//         scrollTrigger:{
//             trigger:"page1",
//             scroller:"#main",
//             start:"top 0",
//             end:"top -5%",
//             scrub:true
//         }
//     })
// }
// navbarAnimation()



// function videoconAnimation(){
//     var videocon = document.querySelector("#video-container")
// var playbtn = document.querySelector("#play")


// videocon.addEventListener("mouseenter",function(){
//       gsap.to(playbtn,{
//         scale:1,
//         // above note - the  scale property allows you to change the size of selected element , earlier it was set to 0 and now 1 so it becomes 0 to 1
//         opacity:1
//       })

// })

// videocon.addEventListener("mouseleave", function(){

//     gsap.to(playbtn,{
//         scale:0,
//         // above note - the  scale property allows you to change the size of selected element , 
//         // earlier it was set to 0 and now 1 so it becomes 0 to 1 to 0 , that's how animation on 
//         // play button is being done
//         opacity:0
//         // similary for the opacity as scale
//       })
// })

// videocon.addEventListener("mousemove", function(dets){

//     gsap.to(playbtn,{
//        left:dets.x-70,
//        top:dets.y-80
//     //    because of the above two properties the play button moves along with the arrow and 70 80 decides the closeness of the button with arow
//       })
// })
// }
// videoconAnimation()



// function loadinganimation(){
//     gsap.from("#page1 h1",{
//         // from() - you define the starting values to animate "from", GSAP uses the current 
//         // values as the destinations (like a tween running backwards)
//         y:100,
//         // above basically is the speed of appearing change the course content
//         opacity:0,
//         delay:0.5,
//         duration:0.9,
//         stagger:0.3
//         // basically stagger is the time taken between the different frames of the animation from start to last 
//     })



//     gsap.from("#page1 video-container",{
//         // from() - you define the starting values to animate "from", GSAP uses the current 
//         // values as the destinations (like a tween running backwards)
//         scale:0.9,
//         // above basically is the speed of appearing change the course content
//         opacity:0,
//         delay:1.3,
//         duration:0.3,
       
//     })
// }
// loadinganimation()


// // --------------------------------------------------------------------------------
// // document.querySelector("#child1").addEventListener("mouseenter", function(){

// //     gsap.to("#cursor",{
// //         transform:'translate(-50%, -50%) scale(1)'
// //         // above we have made scale to 1 when it appears on child1 because by default it's size 
// //         // is defined as zero by me

// //     })
// // })


// // document.querySelector("#child1").addEventListener("mouseleave", function(){

// //     gsap.to("#cursor",{
// //         transform:'translate(-50%, -50%) scale(0)'
// //         // above we have made scale to 1 when it appears on child1 because by default 
// //         // it's size is defined as zero by me, now again it's size is defined as 0 when
// //         // it moves out of the element

// //     })
// // })
// // ----------------------------------------------------------------------------------
// // OR




// function cursorAnimation(){

//         document.addEventListener("mousemove", function
//     (dets){

//         gsap.to("#cursor", {
//             left:dets.x,
//             top:dets.y
//             // because of above these two properties the cursor on the document one moves along with arrow
//         })
//     })

//     document.querySelectorAll(".child").forEach(function(elem){
//         // this works for each child of .child class
    
//         elem.addEventListener("mouseenter", function(){
//         gsap.to("#cursor",{
//                     transform:'translate(-50%, -50%) scale(1)'
//             //         // above we have made scale to 1 when it appears on child1 because by default 
//             //         // it's size is defined as zero by me, now again it's size is defined as 0 when
//             //         // it moves out of the element
            
//             });   
//         });
    
    
    
//         elem.addEventListener("mouseleave", function(){
//             gsap.to("#cursor",{
//                         transform:'translate(-50%, -50%) scale(0)'
//                 //         // above we have made scale to 1 when it appears on child1 because by default 
//                 //         // it's size is defined as zero by me, now again it's size is defined as 0 when
//                 //         // it moves out of the element
                
//                 });   
//             });
//     });
    
    
// }

// mine ended
// ----------------------------------------------------------------------------------------------

function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  locomotiveAnimation();
  
  function navbarAnimation() {
    gsap.to("#nav-part1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
    gsap.to("#nav-part2 #links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
  }
  navbarAnimation()
  
  function videoconAnimation() {
    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");
    videocon.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
      });
    });
    videocon.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
      });
    });
    document.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn, {
        left: dets.x - 70,
        top: dets.y - 80,
      });
    });
  }
  videoconAnimation();
  
  function loadinganimation() {
    gsap.from("#page1 h1", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });
    gsap.from("#page1 #video-container", {
      scale: 0.9,
      opacity: 0,
      delay: 1.3,
      duration: 0.5,
    });
  }
  loadinganimation();
  
  function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
      });
    });
    // document.querySelector("#child1").addEventListener("mouseenter",function(){
  
    // })
  
    // document.querySelector("#child1").addEventListener("mouseleave",function(){
    //   gsap.to("#cursor",{
    //     transform: 'translate(-50%,-50%) scale(0)'
    //   })
    // })
    document.querySelectorAll(".child").forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(1)",
        });
      });
      elem.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(0)",
        });
      });
    });
  }
  cursorAnimation();


