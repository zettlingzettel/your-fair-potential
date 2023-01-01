import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"

const LandingPage = (props) => {
  return (
    <div className="grid-x grid-margin-x div-landing-padding custom-font">
      <div className="cell small-12 medium-12 large-12 custom-text">
        <p>This project is inspired by FAIR Guiding Principles for scientific data management.</p>
        <p>The main aim of this project is to make scientific data findable, accessible, interoperable and reusable.</p>
        <p>In order to do so this website offers an opportunity to search for scientific article summaries, upload them, edit them and share them.</p>
      </div>

      <Link to={'/articles'} className="cell small-12 medium-12 large-12 to-align-center custom-link">
        Click me to go to the articles
      </Link>

      <Link to={'/summaries'} className="cell small-12 medium-12 large-12 to-align-center custom-link">
        Click me to go to the summaries
      </Link>

      <Link to={'/summaries/new'} className="cell small-12 medium-12 large-12 to-align-center custom-link">
        Click me to add new summaries
      </Link>
      
      <div className="cell small-12 medium-12 large-12">
      <h1 className="to-align-center violet-text">FAIR Principles</h1>
      <p>FAIR data are data which meet principles of findability, accessibility, interoperability, and reusability (FAIR).</p>
      <p>The acronym and principles were defined in a March 2016 paper in the journal Scientific Data by a consortium of scientists and organizations.</p>
      <p>The FAIR principles apply to both data and metadata.</p>
      </div>

      <div className="cell small-12 medium-6 large-3">
        <h2 className="to-align-center violet-text">Findable</h2>
        <p>
        This means that the data can be discovered by both humans and machines, for instance by exposing meaningful machine-actionable metadata and keywords to search engines and research data catalogues. 
        The data are referenced with unique and persistent identifiers (e.g. DOIs or Handles) and the metadata include the identifier of the data they describe.
        </p>
      </div>

      <div className="cell small-12 medium-6 large-3"> 
      <h2 className="to-align-center violet-text">Accessible</h2>
        <p>
        This means that the data are archived in long-term storage and can be made available using standard technical procedures. 
        This does not mean that the data have to be openly available for everyone, but information on how the data could be retrieved (or not) has to be available. 
        For example, data can be marked “Access only with explicit permission from the author” and include the author’s contact details. 
        Ideally, though, the information about data accessibility can also be read by machines, e.g. by way of machine-readable standard licences.
        </p>
      </div>

      <div className="cell small-12 medium-6 large-3"> 
      <h2 className="to-align-center violet-text">Interoperable</h2>
        <p>
        This means that the data can be exchanged and used across different applications and systems — also in the future, for example, by using open file formats. 
        It also means that the data can be integrated with other data from the same research field or data from other research fields. 
        This is made possible by using metadata standards, standard ontologies, and controlled vocabularies as well as meaningful links between the data and related digital research objects.
        </p>
      </div>

      <div className="cell small-12 medium-6 large-3"> 
        <h2 className="to-align-center violet-text">Reusable</h2>
        <p>
        This means that the data are well documented and curated and provide rich information about the context of data creation. 
        The data should conform to community standards and include clear terms and conditions on how the data may be accessed and reused, preferably by applying machine-readable standard licences. 
        This allows others either to assess and validate the results of the original study, thus ensuring data reproducibility, or to design new projects based on the original results, in other words data reuse in the stricter sense. 
        Reusable data encourage collaboration and avoid duplication of effort. 
        </p>
      </div>

      <div className="cell small-12 medium-12 large-12">
        Text Source:
        D.B. Deutz, M.C.H. Buss, J. S. Hansen, K. K. Hansen, K.G. Kjelmann, A.V. Larsen, E. Vlachos, K.F. Holmstrand (2020). 
        How to FAIR: a Danish website to guide researchers on making research data more FAIR 
        https://doi.org/10.5281/zenodo.3712065
      </div>
    </div>
  )
}
export default LandingPage