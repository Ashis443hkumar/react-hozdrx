
import React from "react";
import Banner from "../../../common/banner/Banner";
import Hero from "../../home/hero/Hero";
import ToClient from "../../home/home1/homeToClients/ToClient";
import Processing from "../../home/home6/Porcessing/Processing";
import AlertMessage from "../../sortCoder/alertMessage/AlertMessge";
import BulletList from "../../sortCoder/element/bulletList/BulletList";
import Button from "../../sortCoder/element/button/Button";
import TabsContent from "../../sortCoder/element/tabsContent/TabsContent";
import Toggle from "../../sortCoder/element/toggle/Toggle";
import Wells from "../../sortCoder/element/wells/Wells";
import Prograssing from "../../sortCoder/progessing/Prograssing";
import SocailButton from "../../sortCoder/socialButton/SocialButton";
import Tables from "../../sortCoder/table/Tables";

export default function Elements() {
  return (
    <div>
       <Hero/>
       <Button/>
       <SocailButton/>
       <AlertMessage/>
       <Banner/>
       <Tables/>    
       <Wells/>
       <TabsContent/>
       <Toggle/>   
       <BulletList/>
       <Prograssing/>
       <Processing/>
       <ToClient/>
    </div>
  );
}
