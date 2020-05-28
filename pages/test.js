// @flow
import React from 'react';
import Page from '../components/PageWithNavigator';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => (
  <Page title="UI Components">
    <div>
      <header>
        <img style={{"max-height": "200px"}} className="pure-img centered" src={`/logo.png`} />
        <nav>
          Navigation: <a href="/">Home Page</a> | <a href="/unvisited">Unvisited</a>
        </nav>
      </header>
        <main>
          <h1>Most Important</h1>
          <div>Varius Aenean Cras vel, mollis nisi. Eu dui! Massa porttitor pretium; Eget eget, sociis nec, Nulla semper felis, augue. Dolor dolor;</div>
          <section>
            <h2>Very Prominent</h2>
            <div>Ultricies imperdiet vitae, quis ante, eu, ultricies amet, nascetur nisi ligula, Cras pede a, vulputate tincidunt! Aliquet tellus. Aliquam eget, dolor laoreet?</div>

            <h3>A Great Point</h3>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ultrices vitae auctor eu augue ut lectus arcu. Ac turpis egestas integer eget aliquet nibh. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus.</div>
          </section>
          <section>
            <h2>Another Section</h2>
            <div>Enim aliquet quis ligula, ligula Lorem dapibus! Eu pellentesque viverra justo, quis, ullamcorper ut dolor eget nisi;</div>
            <h3>With Some Better Detail</h3>
            <div>Ultricies vulputate eget ullamcorper montes, dapibus semper Integer justo, tincidunt; Vivamus felis Aenean justo? Laoreet; </div>
          </section>
          <section>
            <h2>Inputs</h2>
            <form className="pure-form">
              <fieldset>
                <legend>You should press the buttons</legend>
                <button type="text" className="pure-button">Button</button>
                <button type="text" className="pure-button pure-button-primary">Primary</button>
              </fieldset>
              <fieldset>
                <label for="big-button">
                  Big Button Label
                  <input id="big-button" type="button" className="pure-button" value="Big Button" />
                </label>
              </fieldset>
            </form>
          </section>
        </main>
    </div>
  </Page>
);
