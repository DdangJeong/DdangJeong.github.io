import Layout from '../components/layout'

export default function JobOpenings() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12">Job Openings</h1>
        
        <section id="phd" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">PhD Positions</h2>
          {/* Add PhD openings here */}
        </section>

        <section id="postdoc">
          <h2 className="text-3xl font-bold mb-8">Postdoc Positions</h2>
          {/* Add postdoc openings here */}
        </section>
      </div>
    </Layout>
  )
}

