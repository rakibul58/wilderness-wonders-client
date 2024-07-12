import Gallery from "../components/Gallery/Gallery";
import ComponentTitle from "../components/shared/ComponentTitle";

const GalleryPage = () => {
  return (
    <div className="mt-10">
      <ComponentTitle title="Gallery" subTitle="Showcasing Our Latest Products" />
      <Gallery />
    </div>
  );
};

export default GalleryPage;