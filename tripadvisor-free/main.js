import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();
    await Apify.metamorph('maxcopell/tripadvisor', {
        ...input,
      includeAttractions: false,
      includeRestaurants: true,
      includeHotels: false,
      includeTags: true,
        proxy: {
            "useApifyProxy": true,
        },
    });
});