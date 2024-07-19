import React from 'react';
import Menu from '../../components/Menu';
import './Battle.css';
import { AppContainer, AppSection, Footer } from '../../components/StyledComponents';
import OrderingCard from '../../components/Battle/OrderingCard/OrderingCard';
import IniciativeCard from '../../components/Battle/IniciativeCard/IniciativeCard';
import defaultTheme from '../../themes/defaultTheme';

const Battle = () => {
  return (
    <AppContainer theme={defaultTheme}>
      <Menu />
      <AppSection align_conf='column' className="section">
        <div className='battle-container'>
          <div id="players-card-container">
            <OrderingCard>
              <div>
                <span className='character-name'>Juao</span>
                <span className='character-class'>Barbarian</span>
                <span className='character-iniciative-bonus'>+2</span>
              </div>
              <div>
                <span className='character-name'>Marco</span>
                <span className='character-class'>Paladin</span>
                <span className='character-iniciative-bonus'>+1</span>
              </div>
              <div>
                <span className='character-name'>Pedro Pedro Pedro Pedro</span>
                <span className='character-class'>Wizard</span>
                <span className='character-iniciative-bonus'>+0</span>
              </div>
              <div>
                <span className='character-name'>Bob</span>
                <span className='character-class'>Monk</span>
                <span className='character-iniciative-bonus'>+5</span>
              </div>
            </OrderingCard>
          </div>
          <div id="iniciative-card-container">
            <IniciativeCard>
              <div>
                <span className='character-name'>Juao</span>
                <div className='character-iniciative'>
                  <span>20</span>
                </div>
                <span className='character-class'>Barbarian</span>
              </div>
              <div>
                <span className='character-name'>Marco</span>
                <div className='character-iniciative'>
                  <span>16</span>
                </div>
                <span className='character-class'>Paladin</span>
              </div>
            </IniciativeCard>
          </div>
        </div>
      </AppSection>
      <Footer theme={defaultTheme} className='footer' />
    </AppContainer>
  );
};

export default Battle;