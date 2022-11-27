import React from 'react'
import Banner from '../../../common/banner/Banner';
import Hero from '../hero/Hero';
import Home6Banner from './home6Banner/home6Banner';
import Home6Design from './Home6Design/Home6Design';
import Home6Mobile from './Home6Mobile/Home6Mobile';
import RecentNew from './Home6RecentNew/RecentNew';
import SimpleCart from './Home6SimpleCart/SimpleCart';
import Processing from './Porcessing/Processing';

export default function Home6() {
  return (
    <div>
      <Hero/>
      <SimpleCart/>
      <Home6Design/>
      <Home6Banner/>
      <Home6Mobile/>
      <Processing/>
      
      <RecentNew/>
      <Banner/>

    </div>
  );
}
