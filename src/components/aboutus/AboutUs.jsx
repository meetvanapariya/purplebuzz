import React from 'react';
import TeamCard from './TeamCard';
import PartnerCard from './PartnerCard';
import Progressbar from './Progressbar';
import GoalBox from './GoalBox';
import UpToDateSection from './UpToDateSection';
const AboutUs = () => {
    return (
        <>
        <section className="about-section-one">
            <div className="container section-one-div">
                <div>
                    <h1>About Us</h1>
                    <p>Vector illustration credit goes to FreePik website. Purple Buzz is provided by TemplateMo. Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
                <div>
                    <img src="https://templatemo.com/templates/templatemo_561_purple_buzz/assets/img/banner-img-02.svg" alt="section img" />
                </div>
            </div>
        </section>
        <section className="about-section-two container py-5">
        <div className="pt-5 pb-3 d-lg-flex align-items-center gx-5">
            <div className="col-lg-3">
                 <h2 className="h2 py-5 typo-space-line">Our Team</h2>
                <p className="text-muted light-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>    
            <div className="col-lg-9 row">
                <TeamCard name="John Doe" description="Business Development" img="https://templatemo.com/templates/templatemo_561_purple_buzz/assets/img/team-01.jpg"/>
                <TeamCard name="John Doe" description="Business Development" img="https://templatemo.com/templates/templatemo_561_purple_buzz/assets/img/team-02.jpg"/>
                <TeamCard name="John Doe" description="Business Development" img="https://templatemo.com/templates/templatemo_561_purple_buzz/assets/img/team-03.jpg"/>
            </div>
        </div>
        </section>
        <section className="about-section-three">
            <div className="container">
                <h1>Our partner</h1>
                <div className="partner-div">
                  <PartnerCard faclass="fa fa-archive"/>
                  <PartnerCard faclass="fa fa-archive"/>
                  <PartnerCard faclass="fa fa-archive"/>
                  <PartnerCard faclass="fa fa-archive"/>
                </div>
            </div>
        </section>
        <section className="bg-white py-5 about-section-four">
        <div className="container my-4">

            <h1 className="creative-heading h2 pb-3">Creative &amp; Make Perfect</h1>

            <div className="creative-content row py-3">
                <div className="col-md-5">
                    <p className="text-muted col-lg-8 light-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus.
                    </p>
                </div>
                <div className="creative-progress col-md-7">
                    <Progressbar title="Developement" progress_per="66"/>
                    <Progressbar title="Design" progress_per="74"/>
                    <Progressbar title="Marketing" progress_per="90"/>
                </div>
            </div>
        </div>
        </section>
        <section className="about-section-five">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <img src="https://templatemo.com/templates/templatemo_561_purple_buzz/assets/img/work.svg" alt="" />
                    </div>
                    <div className="col-lg-7 content">
                        <h2>Why Choose Us?</h2>
                        <p>You are allowed to download and use this Purple Buzz template for your websites. You are not allowed to re-distribute this template ZIP file on other template websites. It is quite easy to simply copy and repost the ZIP file on any Free CSS collection websites.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="banner-bg bg-white py-5 about-section-six">
        <div class="container my-4">
            <div class="row text-center">
              <GoalBox />
              <GoalBox />
              <GoalBox />
            </div>
        </div>
        </section>
        <UpToDateSection />
        </>
    );
}


export default AboutUs;