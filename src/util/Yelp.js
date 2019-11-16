const apiKey = 'DrcSCtjf4UWodf1lxDoID7v21R3ElIbbXhIpBG2iCxXjgIpi-ujG4J7gwrNjeQNYwizW0VRhlSD9YgHb1uacJd7m1JHE2uZpc6nR-l6IeJqMBKPvRs3g69XgVfPOXXYx';
const Yelp = {
    search(term,location,sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{headers:{Authorization:`Bearer ${apiKey}`}}).then(response => { return response.json();}).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_Code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_Count

                    }
                })
            }
        })
    }
};

export default Yelp;