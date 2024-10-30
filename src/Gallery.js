import React from "react";

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
								src="images/gallery1.jpg"
								alt="image-1"
								class="img-fluid rounded"
							/>
						</div>
						<div class="col-md-4">
							<img
								src="images/gallery2.jpg"
								alt="image-2"
								class="img-fluid rounded"
							/>
						</div>
						<div class="col-md-4">
							<img
								src="images/gallery3.jpg"
								alt="image-3"
								class="img-fluid rounded"
							/>
						</div>
					</div>

					<div class="row">
						<div class="col-md-4">
							<img
								src="images/gallery4.jpg"
								alt="image-4"
								class="img-fluid rounded"
							/>
						</div>
						<div class="col-md-4">
							<img
								src="images/gallery5.jpg"
								alt="image-5"
								class="img-fluid rounded"
							/>
						</div>
						<div class="col-md-4">
							<img
								src="images/gallery6.jpg"
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
