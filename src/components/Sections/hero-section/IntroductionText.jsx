// IntroductionText.js
import React from 'react';
import { IntroductionTextStyled } from '../../../styles/HeroSection.styles';

const IntroductionText = () => (
  <IntroductionTextStyled>
    <div className="line">
      <span className="prompt">user@hamza-elaloui:~$</span>
      <span className="command typing-text">
        echo "Welcome to my cosmic coding journey!"
      </span>
    </div>
    <div className="line">
      <span className="prompt">user@hamza-elaloui:~$</span>
      <span className="command typing-text">
        git clone universe-of-technology
      </span>
    </div>
    <div className="line">
      <span className="prompt">user@hamza-elaloui:~$</span>
      <span className="command typing-text">
        cd universe-of-technology && code .
      </span>
    </div>
  </IntroductionTextStyled>
);

export default IntroductionText;