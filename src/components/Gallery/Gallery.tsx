import { useGetProductsQuery } from "../../redux/api/baseApi";
import { TProducts } from "../types/Product.type";
import { useRef } from "react";
import Loader from "../shared/Loader";
import "./Gallery.css";
import default_thumbnail from "../../assets/images/default_thumbnail.png";

const Gallery = () => {
  const { data: products, isLoading } = useGetProductsQuery({
    sort: "-createdAt",
    limit: 3,
  });
  const magnifierGlassRef = useRef<HTMLDivElement>(null);
  const zoom = 3;

  if (isLoading) {
    return <Loader />;
  }

  const magnify = (img: HTMLImageElement, zoom: number) => {
    const glass = magnifierGlassRef.current;

    if (!img || !glass) return;

    glass.style.backgroundImage = `url(${img.src})`;
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;

    const moveMagnifier = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const pos = getCursorPos(e, img);
      let x = pos.x;
      let y = pos.y;
      const w = glass.offsetWidth / 2;
      const h = glass.offsetHeight / 2;

      if (x > img.width - w / zoom) {
        x = img.width - w / zoom;
      }
      if (x < w / zoom) {
        x = w / zoom;
      }
      if (y > img.height - h / zoom) {
        y = img.height - h / zoom;
      }
      if (y < h / zoom) {
        y = h / zoom;
      }

      glass.style.left = `${img.getBoundingClientRect().left + x - w}px`;
      glass.style.top = `${img.getBoundingClientRect().top + y - h}px`;
      glass.style.backgroundPosition = `-${x * zoom - w}px -${y * zoom - h}px`;
    };

    const getCursorPos = (
      e: MouseEvent | TouchEvent,
      img: HTMLImageElement
    ) => {
      const a = img.getBoundingClientRect();
      const x = (e as MouseEvent).pageX - a.left - window.pageXOffset;
      const y = (e as MouseEvent).pageY - a.top - window.pageYOffset;
      return { x, y };
    };

    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);

    const removeEventListeners = () => {
      glass.removeEventListener("mousemove", moveMagnifier);
      img.removeEventListener("mousemove", moveMagnifier);
      glass.removeEventListener("touchmove", moveMagnifier);
      img.removeEventListener("touchmove", moveMagnifier);
    };

    img.addEventListener("mouseleave", () => {
      removeEventListeners();
      glass.style.display = "none";
    });

    img.addEventListener("touchend", () => {
      removeEventListeners();
      glass.style.display = "none";
    });
  };

  return (
    <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      <div
        ref={magnifierGlassRef}
        className="img-magnifier-glass absolute border-4 border-black rounded-full pointer-events-none"
        style={{ width: "100px", height: "100px", display: "none" }}
      ></div>
      {products?.data?.result?.map((item: TProducts) => (
        <div key={item._id} className="relative img-magnifier-container">
          <img
            src={item?.thumbnail || default_thumbnail}
            alt={item?.name}
            className="w-full h-full object-cover"
            onMouseEnter={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              magnifierGlassRef.current!.style.display = "block";
              magnify(img, zoom);
            }}
            onMouseLeave={() => {
              magnifierGlassRef.current!.style.display = "none";
            }}
          />
          <div className="text-center mt-2 mb-10">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
