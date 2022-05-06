import Apify from 'apify'

Apify.main(async () => {
  const input = await Apify.getInput()
  await Apify.metamorph('maxcopell/tripadvisor-source', {
    ...input,
    includeAttractions: false,
    includeRestaurants: false,
    includeHotels: true,
    includeTags: true,
    proxy: {
      useApifyProxy: true
    }
  })
})
