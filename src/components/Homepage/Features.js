const FeatureList = [
  {
    title: 'QoL Galore',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        A host of QoL options so you can focus on the playing the game and spend less time grinding!
      </>
    )
  },
  {
    title: 'Enhanced Difficulty',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Inspired by Radical Red, enjoy a higher challenge which will test the limits of your Pokémon skills.
      </>
    )
  },
  {
    title: 'All 9 Gens',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        All 9 generations of Pokémon. All in one hack! What more could you want?
      </>
    )
  }
]

function Feature({ Svg, title, description }) {
  return (
    <div>
      <div className='text--center'>
        <Svg className='mx-auto h-52 w-52' role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <p className='mb-2 text-xl font-bold'>{title}</p>
        <p className='mx-auto max-w-sm'>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className='py-10'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
