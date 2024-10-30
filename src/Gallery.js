import React from "react";
import Gallery1 from "./assests/images/gallery1.jpg";
import Gallery2 from "./assests/images/gallery2.jpg";
import Gallery3 from "./assests/images/gallery3.jpg";
import Gallery4 from "./assests/images/gallery4.jpg";
import Gallery5 from "./assests/images/gallery5.jpg";
import Gallery6 from "./assests/images/gallery6.jpg";

function Gallery() {
	return (
		<>
			<section class="gallery">
				<h2 class="text-center fw-bold">
					Our <span class="spantext">Services</span>
				</h2>

				<div class="container my-5">
					<div class="row">
						<div class="col-md-4">
							<img
								src={Gallery1}
								alt="image-1"
								class="img-fluid rounded"
							/>
						</div>
						<div class="col-md-4">
							<img
								src={Gallery2}
								alt="image-2"
								class="img-fluid rounded"
							/>
						</div>
						<div class="col-md-4">
							<img
								src={Gallery3}
								alt="image-3"
								class="img-fluid rounded"
							/>
						</div>
					</div>

					<div class="row">
						<div class="col-md-4">
							<img
								src={Gallery4}
								alt="image-4"
								class="img-fluid rounded"
							/>
						</div>
						<div class="col-md-4">
							<img
								src={Gallery5}
								alt="image-5"
								class="img-fluid rounded"
							/>
						</div>
						<div class="col-md-4">
							<img
								src={Gallery6}
								alt="image-6"
								class="img-fluid rounded"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Gallery;
