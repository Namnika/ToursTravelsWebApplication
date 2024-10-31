import React from "react";
import Package1 from "./assests/images/london-image.jpg";
import Package2 from "./assests/images/newyork-image.png";
import Package3 from "./assests/images/paris-image.jpg";
import Package4 from "./assests/images/germany-image.jpg";
import Package5 from "./assests/images/mumbai-image.jpg";
import Package6 from "./assests/images/toronto-image.jpg";
import Package7 from "./assests/images/dubai-image.jpg";
import Package8 from "./assests/images/santorini-image.jpg";
import Package9 from "./assests/images/sydney-image.jpg";

export const PackageApi = [
	{
		id: 1,
		packageUrl: Package1,
		packageTitle: "London, UK",
		packageText:
			"Iconic Big Ben, River Thames views, and rich British history await in London. Explore one of Europe’s most famous cities.",
		packagePrice: "$1200",
		packageRatings: "★★★★☆ (4.5/5) Ratings",
	},
	{
		id: 2,
		packageUrl: Package2,
		packageTitle: "New York, USA",
		packageText:
			"The Empire State, Times Square, and Central Park – welcome to New York City, the heart of America’s East Coast.",
		packagePrice: "$1200",
		packageRatings: "★★★★★ (4.7/5) Ratings",
	},
	{
		id: 3,
		packageUrl: Package3,
		packageTitle: "Paris, France",
		packageText:
			"Eiffel Tower, romantic streets, and French cuisine – explore Paris, the City of Lights in Western Europe.",
		packagePrice: "$1300",
		packageRatings: "★★★★★ (4.8/5) Ratings",
	},
	{
		id: 4,
		packageUrl: Package4,
		packageTitle: "Munich, Germany",
		packageText:
			"Beer gardens, Bavarian culture, and stunning castles – experience Munich, nestled in southern Germany.",
		packagePrice: "$1100",
		packageRatings: "★★★★☆ (4.6/5) Ratings",
	},
	{
		id: 5,
		packageUrl: Package5,
		packageTitle: "Mumbai, India",
		packageText:
			"Gateway of India, Bollywood, and bustling markets – dive into the energy of Mumbai on India’s west coast.",
		packagePrice: "$800",
		packageRatings: "★★★★☆ (4.4/5) Ratings",
	},
	{
		id: 6,
		packageUrl: Package6,
		packageTitle: "Toronto, Canada",
		packageText:
			"CN Tower, diverse neighborhoods, and beautiful lakeside views – discover Toronto, Canada’s cultural capital.",
		packagePrice: "$1400",
		packageRatings: "★★★★☆ (4.6/5) Ratings",
	},
	{
		id: 7,
		packageUrl: Package7,
		packageTitle: "Dubai, UAE",
		packageText:
			"Burj Khalifa, luxury malls, and desert adventures – explore futuristic Dubai in the heart of the UAE.",
		packagePrice: "$1000",
		packageRatings: "★★★★★ (4.9/5) Ratings",
	},
	{
		id: 8,
		packageUrl: Package8,
		packageTitle: "Santorini, Greece",
		packageText:
			"Whitewashed houses, blue domes, and magical sunsets – Santorini, a gem in the Aegean Sea, awaits.",
		packagePrice: "$1200",
		packageRatings: "★★★★★ (4.9/5) Ratings",
	},
	{
		id: 9,
		packageUrl: Package9,
		packageTitle: "Sydney, Australia",
		packageText:
			"Sydney Opera House, Harbour Bridge, and golden beaches – discover the coastal magic of Sydney, Australia.",
		packagePrice: "$1600",
		packageRatings: "★★★★★ (4.8/5) Ratings",
	},
];

function Package() {
	return (
		<>
		  <section className="package my-3">
			  <h2 className="text-center fw-bold">
				  Package <span className="spantext">Gallery</span>
			  </h2>
			  <div className="package-grid my-5">
				  {PackageApi.map((pack, index) => {
					  return (
						  <div
							  key={index}
							  id={pack.id}
							  className="card package-card border border-opacity-25"
						  >
					<img
						src={pack.packageUrl}
						className="card-img"
						alt={`package-${pack.id}`}
					/>
					<div className="card-body">
						<h5 className="card-title fw-semibold">
							{pack.packageTitle}
						</h5>
						<p className="card-text text-wrap">{pack.packageText}</p>

						<div className="fs-5 fw-bold">{pack.packagePrice}</div>
						{/* Book Now Button */}
						<div className="my-4 d-flex flex-column flex-md-row justify-content-between">
							<button
								type="submit"
								className="btn btn-outline-dark order-1 order-md-0"
								id="submit"
							>
								Book Now
							</button>
							<div className="fs-6 fw-light order-0 order-md-1">
								{pack.packageRatings}
							</div>
						</div>
					</div>
				</div>
			  );
		  })}
			  </div>
		  </section>
	  </>
  );
}

export default Package;
