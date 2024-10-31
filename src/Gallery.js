import React from "react";
import Gallery1 from "./assests/images/gallery1.jpg";
import Gallery2 from "./assests/images/gallery2.jpg";
import Gallery3 from "./assests/images/gallery3.jpg";
import Gallery4 from "./assests/images/gallery4.jpg";
import Gallery5 from "./assests/images/gallery5.jpg";
import Gallery6 from "./assests/images/gallery6.jpg";

export const GalleryApi = [
	{ id: 1, galleryUrl: Gallery1 },
	{ id: 2, galleryUrl: Gallery2 },
	{ id: 3, galleryUrl: Gallery3 },
	{ id: 4, galleryUrl: Gallery4 },
	{ id: 5, galleryUrl: Gallery5 },
	{ id: 6, galleryUrl: Gallery6 },
];

function Gallery() {
	return (
		<>
		  <section className="gallery">
			  <h2 className="text-center fw-bold">
				  <span className="spantext">Gallery</span>
			  </h2>

			  <div className="container my-5">
				  <div className="row">
					  {GalleryApi.map((gallery, index) => {
						  return (
							  <div key={index} id={gallery.id} className="col-md-4">
								  <img
						  src={gallery.galleryUrl}
						  alt={`image-${gallery.id}`}
						  className="img-fluid rounded"
					  />
				  </div>
				);
			})}
				  </div>
			  </div>
		  </section>
	  </>
  );
}

export default Gallery;
