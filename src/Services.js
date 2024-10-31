import React from "react";

export const ServicesApi = [
	{
		id: 1,
		serviceIcon: (
			<i className="fa-solid fa-hand-holding-dollar fa-3x my-4 text-muted"></i>
		),
		serviceTitle: "Affordable Hotels",
		serviceText:
			"Enjoy comfortable stays at budget-friendly hotels that cater to all your needs.",
	},
	{
		id: 2,
		serviceIcon: <i className="fa-solid fa-utensils fa-3x my-4 text-muted"></i>,
		serviceTitle: "Food & Drinks",
		serviceText:
			"Experience local cuisines with curated dining options, including traditional meals and street food tours.",
	},
	{
		id: 3,
		serviceIcon: (
			<i className="fa-solid fa-shield-halved fa-3x my-4 text-muted"></i>
		),
		serviceTitle: "Safety Guide",
		serviceText:
			"Travel with peace of mind with our trained safety guides who provide insights and assistance during your adventures.",
	},
	{
		id: 4,
		serviceIcon: <i className="fa-solid fa-taxi fa-3x my-4 text-muted"></i>,
		serviceTitle: "Transportation Services",
		serviceText:
			"Hassle-free transfers and transportation options, including airport pickups, car rentals, and guided tours.",
	},
	{
		id: 5,
		serviceIcon: (
			<i className="fa-solid fa-sack-dollar fa-3x my-4 text-muted"></i>
		),
		serviceTitle: "Exclusive Travel Deals",
		serviceText:
			"Unlock special discounts and offers on flights, hotels, and activities, giving you the best value for your trip.",
	},
	{
		id: 6,
		serviceIcon: <i className="fa-solid fa-headset fa-3x my-4 text-muted"></i>,
		serviceTitle: "24/7 Customer Support",
		serviceText:
			"Reach out to our dedicated customer support team anytime for assistance, inquiries, or changes to your bookings.",
	},
];

function Services() {
	return (
		<>
		  <section className="services">
			  <h2 className="text-center fw-bold">
				  Our <span className="spantext">Services</span>
			  </h2>
			  <div className="services-grid my-5">
				  {ServicesApi.map((service, index) => {
					  return (
						  <div
							  key={index}
							  id={service.id}
							  className="card service-card bg-white bg-opacity-75 border border-0 text-center"
						  >
							  <div className="card-body">
								  {service.serviceIcon}
								  <h5 className="card-title fw-semibold">
									  {service.serviceTitle}
								  </h5>
								  <p className="card-text text-wrap text-muted">
									  {service.serviceText}
								  </p>
							  </div>
						  </div>
			  );
		  })}
			  </div>
		  </section>
	  </>
  );
}

export default Services;
