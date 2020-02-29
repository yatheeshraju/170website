import React from 'react';
import './Home.scss';
import LandingBox from '../LandingBox/LandingBox';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import WhatOurClientsSay from '../WhatOurClientsSay/WhatOurClientsSay';

function Home() {
    return (
        <div>
            <LandingBox/>
            <WhoWeAre/>
            <WhatWeDo/>
            <WhatOurClientsSay/>
        </div>
    )
}

export default Home
