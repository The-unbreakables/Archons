import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import { Login, Register } from '../components/home';
export default function Home() {

  
 if(typeof window === 'object')
 {
  const createSVG = (width, height, radius) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  
    const rectangle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
  
    svg.setAttributeNS(
      "http://www.w3.org/2000/svg",
      "viewBox",
      `0 0 ${width} ${height}`
    );
  
    rectangle.setAttribute("x", "0");
    rectangle.setAttribute("y", "0");
    rectangle.setAttribute("width", "100%");
    rectangle.setAttribute("height", "100%");
    rectangle.setAttribute("rx", `${radius}`);
    rectangle.setAttribute("ry", `${radius}`);
    rectangle.setAttribute("pathLength", "10");
  
    svg.appendChild(rectangle);
  
    return svg;
  };
  
  document.querySelectorAll(".sketch-button").forEach((button) => {
    const style = getComputedStyle(button);
  
    const lines = document.createElement("div");
  
    lines.classList.add("lines");
  
    const groupTop = document.createElement("div");
    const groupBottom = document.createElement("div");
  
    const svg = createSVG(
      button.offsetWidth,
      button.offsetHeight,
      parseInt(style.borderRadius, 10)
    );
  
    groupTop.appendChild(svg);
    groupTop.appendChild(svg.cloneNode(true));
    groupTop.appendChild(svg.cloneNode(true));
    groupTop.appendChild(svg.cloneNode(true));
  
    groupBottom.appendChild(svg.cloneNode(true));
    groupBottom.appendChild(svg.cloneNode(true));
    groupBottom.appendChild(svg.cloneNode(true));
    groupBottom.appendChild(svg.cloneNode(true));
  
    lines.appendChild(groupTop);
    lines.appendChild(groupBottom);
  
    button.appendChild(lines);
  
    button.addEventListener("pointerenter", () => {
      button.classList.add("start");
    });
  
    svg.addEventListener("animationend", () => {
      button.classList.remove("start");
    });
  });
 }
  
  return (
   <div>
         
<section class="background-radial-gradient overflow-hidden">
  

  <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div class="row gx-lg-5 align-items-center mb-5">
      <div class="col-lg-6 mb-5 mb-lg-0" style={{zIndex: '10'}}>
        <div class="my-5 display-5 fw-bold ls-tight" style={{color: 'hsl(218, 81%, 95%)'}}>
          The best <br />
        </div>
        <Image src="/bg.svg" height="400" width="500" />
      </div>
      
     <Register></Register>
     <Login></Login>

    </div>
  </div>
</section>
  </div>
  )
}
