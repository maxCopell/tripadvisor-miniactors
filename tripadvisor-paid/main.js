import Apify from 'apify'

const isBetaVersion = async () => {
  const BETA_VERSION_NUM = '0.1.';
  const runId = Apify.getEnv().actorRunId;
  const { buildNumber } = await Apify.newClient().run(runId).get();
  return buildNumber.startsWith(BETA_VERSION_NUM);
}

Apify.main(async () => {
  const input = await Apify.getInput()
  
  await Apify.metamorph('maxcopell/tripadvisor-source', {
    ...input,
  }, {
    build: await isBetaVersion() ? 'beta' : 'latest',
  })
})
