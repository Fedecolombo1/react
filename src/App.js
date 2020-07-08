import React from 'react'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
    return(
        <div id="wrapper">

		<SideBar />

		{/* <!-- Content Wrapper --> */}
		<div id="content-wrapper" className="d-flex flex-column">

			<Main />

			<Footer />

		</div>
		{/* <!-- End of Content Wrapper --> */}

    </div>

    )
}

export default App;