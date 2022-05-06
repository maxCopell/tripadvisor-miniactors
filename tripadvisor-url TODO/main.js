import Apify from 'apify'

Apify.main(async () => {
  const input = await Apify.getInput()
  await Apify.metamorph('maxcopell/tripadvisor-source', {
    ...input,
    includeAttractions: true,
    includeRestaurants: false,
    includeHotels: false,
    includeTags: true,
    proxy: {
      useApifyProxy: true
    }
  })
})
