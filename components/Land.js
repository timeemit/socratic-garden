// @flow
import React, { type Node } from 'react';
import Page from '../components/Page';

type Props = {
  children: Node,
  title: string,
}

export default ({ children, title }: Props) => (
  <section>
    <Page title={title} children={children} />

    {/* Mailchimp Footer */}
    <h1 className="centered-text">Join the Alpha</h1>
    <div id="mc_embed_signup">
      <form action="https://beautiful-mimic.us8.list-manage.com/subscribe/post?u=01032a27f69729090a9cd31f0&amp;id=a5deae97ac" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="pure-form validate" target="_blank" noValidate>
        <fieldset id="mc_embed_signup_scroll" className="pure-u-1 centered-text">
          <legend className="centered-text">Sign up for free and let's build a thriving community.</legend>
          {/*<label for="mce-EMAIL">Join the Alpha</label>*/}
          <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
          <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
            <input type="text" name="b_01032a27f69729090a9cd31f0_a5deae97ac" />
          </div>
          <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="pure-button" />
        </fieldset>
      </form>
    </div>
    {/* End Mailchimp Footer */}

    {/* Mailchimp Popup */}
    <script type="text/javascript" src="https://downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script><script type="text/javascript" dangerouslySetInnerHTML={{__html: 'window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us8.list-manage.com","uuid":"01032a27f69729090a9cd31f0","lid":"a5deae97ac","uniqueMethods":true}) })'}} />
    {/* End Mailchimp Popup */}
  </section>
)
