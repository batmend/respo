import { useEffect, useState } from 'react';
import moment from 'moment';
import Header from "../layout/header-2";


function ComingSoon() {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [showSemicolon, setShowSemicolon] = useState(false);
	

	

  return (
    <>
        <Header />
      <div className="page-content bg-white">
        {/* <!-- inner page banner END --> */}
		<div className="content-block">
            {/* <!-- About Us --> */}
            <div className="section-full bg-white coming-soon overlay-black-dark" style={{"backgroundImage":"url(images/background/bg2.jpg)","backgroundSize":"cover"}}>
                <div className="container">
					<div className="text-center">
						<div className="cs-logo">
							<div className="logo"><img src="images/logo-white.png" alt=""/></div>
						</div>
						<div className="cs-text"> --- Real Estate Market Digital Shift ---</div>
						<div className="cs-title">Coming Soon</div>
	

					</div>
				</div>
			</div>
			{/* <!-- About Us End --> */}
        </div>
		{/* <!-- contact area END --> */}
    </div>
    </>
  )
}

export default ComingSoon;