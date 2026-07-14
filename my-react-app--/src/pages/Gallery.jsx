import hero from "../assets/home.webp"
import chef from "../assets/chef.webp"
import beef from "../assets/beef.webp"
import boul from "../assets/boul.webp"
export default function Gallery() {
  return (
     <div
  className="homebg"
  style={{
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  }}
>

    <div className="pages">
      <div className="homes">
      <h1><u>Gallery</u></h1>
      <div className="gallery">
      <img src={chef} alt="gallery" />
      <p> Our chefs do their best</p>
      </div>
      <div className="gallery1">
        <p>One of our speciality</p>
        <img src={beef} alt="gallery" />
      </div>
      <div className="gallery2">
        <img src={boul} alt="gallery" />
        <p>Something Soothing to your tastebuds</p>
      </div>
      </div>
    </div>
    </div>
  );
}