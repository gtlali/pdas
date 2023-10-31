import React from "react";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

export default function DigitalAssistants() {
  return (
    <div className='block'>
      <div className='box'>
        <div>
          <section className='hero is-primary'>
            <div className='hero-body'>
              <p className='title'>Personal Digital Assistants</p>
            </div>
          </section>
        </div>
      </div>
      <div className='box'>
        <div className='container'>
          <section className='section'>
            <div className='columns'>
              <div className='column is-3'>
                <ProfileCard
                  title='Alexa'
                  socialMediahandle='@Alexa99'
                  myimage={AlexaImage}
                  description='Alexa was created by amazon that helps you buy things on Amazon'
                />
              </div>
              <div className='column is-3'>
                <ProfileCard
                  title='Cortana'
                  socialMediahandle='@Cortana27'
                  myimage={CortanaImage}
                  description='Cortana was created by Microsoft that helps you on windows 10'
                />
              </div>
              <div className='column is-3'>
                <ProfileCard
                  title='Siri'
                  socialMediahandle='@Siri61'
                  myimage={SiriImage}
                  description='Siri was created by Apple that helps you on Apple iPhones everything'
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
