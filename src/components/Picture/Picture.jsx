import "./Picture.styles.css";

function Picture({ path, alt, sizeX, sizeY }) {
  return (
    <>
      <img
        src={path}
        style={{
          width: `${sizeX}`,
        }}
        className="image-display"
        alt={alt}
      />
    </>
  );
}

export default Picture;
