import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"

const LandingPage = (props) => {
  return (
    <div>
      <div>
        This project is inspired by FAIR Guiding Principles for scientific data management.
        The main aim of this project is to make scientific data findable, accessible, interoperable and reusable.
        In order to do so this website offers an opportunity to search for scientific article summaries, upload them, edit them and share them.
      </div>

      <Link to={'/articles'}>
        List of articles
      </Link>

      <div>
      <h1>FAIR Principles</h1>
      <p>FAIR data are data which meet principles of findability, accessibility, interoperability, and reusability (FAIR).</p>
      <p>The acronym and principles were defined in a March 2016 paper in the journal Scientific Data by a consortium of scientists and organizations.</p>
      </div>

      <div>
        <p>The FAIR principles apply to both data and metadata.</p>
      </div>

      <div>
        <h2>Findability</h2>
        <p>
        This means that the data can be discovered by both humans and machines, for instance by exposing meaningful machine-actionable metadata and keywords to search engines and research data catalogues. 
        The data are referenced with unique and persistent identifiers (e.g. DOIs or Handles) and the metadata include the identifier of the data they describe.
        </p>
      </div>

      <div> <h2>Accessibility</h2>
        <p>
        This means that the data are archived in long-term storage and can be made available using standard technical procedures. 
        This does not mean that the data have to be openly available for everyone, but information on how the data could be retrieved (or not) has to be available. 
        For example, data can be marked “Access only with explicit permission from the author” and include the author’s contact details. 
        Ideally, though, the information about data accessibility can also be read by machines, e.g. by way of machine-readable standard licences.
        </p>
      </div>

      <div> <h2>Interoperable</h2>
        <p>
        This means that the data can be exchanged and used across different applications and systems — also in the future, for example, by using open file formats. 
        It also means that the data can be integrated with other data from the same research field or data from other research fields. 
        This is made possible by using metadata standards, standard ontologies, and controlled vocabularies as well as meaningful links between the data and related digital research objects.
        </p>
      </div>

      <div> <h2>Reusable</h2>
        <p>
        This means that the data are well documented and curated and provide rich information about the context of data creation. 
        The data should conform to community standards and include clear terms and conditions on how the data may be accessed and reused, preferably by applying machine-readable standard licences. 
        This allows others either to assess and validate the results of the original study, thus ensuring data reproducibility, or to design new projects based on the original results, in other words data reuse in the stricter sense. 
        Reusable data encourage collaboration and avoid duplication of effort. 
        </p>
      </div>

      <div>
        Text Source:
        D.B. Deutz, M.C.H. Buss, J. S. Hansen, K. K. Hansen, K.G. Kjelmann, A.V. Larsen, E. Vlachos, K.F. Holmstrand (2020). 
        How to FAIR: a Danish website to guide researchers on making research data more FAIR 
        https://doi.org/10.5281/zenodo.3712065
      </div>
    </div>
  )
}
export default LandingPage