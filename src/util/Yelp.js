/*
Client ID
-srIfyUbANEl_1OwGpPchw

API Key
FSS5cO9bGNH-WgD-CNewgJ376sDol6O4v0IcF9Z3FkDeaKVc9yPmLJUaQ5-X6mwh8MXkR53JPm45bNcZjmg_Q5y7YPbdkn_BRz27Jw8f7z_77A7aUzXl2db_yWqPXHYx
*/

const apiKey = 'FSS5cO9bGNH-WgD-CNewgJ376sDol6O4v0IcF9Z3FkDeaKVc9yPmLJUaQ5-X6mwh8MXkR53JPm45bNcZjmg_Q5y7YPbdkn_BRz27Jw8f7z_77A7aUzXl2db_yWqPXHYx';
//const Yelp = {};
	
export function search(term, location, sortBy) {
	console.log('Starting search in Yelp...');
	return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
		{
			headers: {
				Authorization : `Bearer ${apiKey}`
			}
		})
	.then(response => response.json())
	.then(jsonResponse => {
		if(jsonResponse.businesses){
			return jsonResponse.businesses.map(business => {
				return {
					id : business.id,
					imageSrc : business.image_url,
					name : business.name,
					address : business.location.address1,
					city: business.location.city,
					state: business.location.state,
					zipCode: business.location.zip_code,
					category: business.categories[0].title,
					rating: business.rating,
					reviewCount: business.review_count
				};
			});
		}
	});
}

//export default Yelp;