(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=[{id:1,name:"Laptop",category:"Computers",brand:"ExampleBrand",price:2999.99,stock:50,description:"A powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",image:"../images/lapi.webp"},{id:2,name:"Smartphone",category:"Mobiles",brand:"TechGadget",price:499.99,stock:100,description:"A feature-rich smartphone with a 6.2-inch screen, 12MP dual camera, 128GB storage, and a 4000mAh battery.",image:"../images/iphone.webp"},{id:3,name:"Wireless Headphones",category:"Audio",brand:"SoundBeats",price:149.99,stock:30,description:"High-quality wireless headphones with an over-ear design, 20 hours of battery life, and a sleek black color.",image:"../images/headphone.webp"},{id:4,name:"Watches",category:"Wearables",brand:"FitTech",price:99.99,stock:20,description:"A smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color.",image:"../images/watch.webp"},{id:5,name:"Speakers",category:"Audio",brand:"SoundBeats",price:999.99,stock:30,description:"High-quality wireless speakers with rich sound, 12-hour battery life, and a sleek black design.",image:"../images/speakers.webp"},{id:6,name:"Television",category:"Video",brand:"Samsung",price:2999.99,stock:20,description:"A 55-inch smart TV with 4K resolution, HDR support, and built-in streaming apps for all your favorite content.",image:"../images/tv.webp"},{id:7,name:"Tablet",category:"Mobiles",brand:"TechGadget",price:1299.99,stock:40,description:"A lightweight tablet with a 10.5-inch display, 64GB storage, and 12-hour battery life, perfect for entertainment on the go.",image:"../images/tablet.webp"},{id:8,name:"Fitness Tracker",category:"Wearables",brand:"FitTech",price:99.99,stock:60,description:"A sleek fitness tracker with heart rate monitoring, sleep tracking, and a 10-day battery life, helping you stay on top of your health.",image:"../images/fitnesstracker.webp"},{id:9,name:"Camera",category:"Photography",brand:"CaptureVision",price:1999.99,stock:15,description:"A digital camera with 24MP resolution, 4K video recording, and a 3-inch touch display, ideal for capturing stunning photos and videos.",image:"../images/camera.webp"},{id:10,name:"Gaming Console",category:"Gaming",brand:"PlayPro",price:2999.99,stock:25,description:"A next-gen gaming console with 8K resolution, 1TB storage, and support for the latest AAA games.",image:"../images/console.webp"}],n=document.querySelector(".cart-val"),c=a=>n.textContent=a.length,p=()=>{let a=localStorage.getItem("added-product");return a?(a=JSON.parse(a),c(a),a):[]},l=(a,i)=>{const r=document.createElement("div");r.classList.add("toast"),a==="add"?r.textContent=`Product With ID ${i} has Been Added`:r.textContent=`Product With ID ${i} has Been Removed`,document.body.appendChild(r),setTimeout(()=>{r.remove()},1500)};export{p as g,d as p,l as s,c as u};
