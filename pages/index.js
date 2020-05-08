// @flow
import React from 'react';
import Land from '../components/Land';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => (
  <Land title="Socratic Combat">
    <img style={{"max-height": "200px"}} className="pure-img centered" src={`/logo.png`} />
    <p className="pure-u-1">Socratic Combat is an initiaive to scale the impact of passionate educators into learners by inviting them to compete here for the ultimate prize: <em>Enriching Curious Minds</em></p>

    <h1 className="pure-u-1 centered-text">A Learning Platform that Learns</h1>
    <p className="pure-u-1">Socratic Combat aims to algorthmically synthesize informative lessons and quizzes into a dynamic curriculum personalized for learners.  As learners assess themselves with quizzes, the platform improves itself continuously by identifying which teaching materials are yielding the strongest student performance.</p>

    <h1 className="pure-u-1 centered-text">Empower Curiosity</h1>
    <p className="pure-u-1">Socratic Combat puts students as the central navigators of their educational journey, where the menus of lessons and quizzes are highlighted with algorithmically measured signals that help guide students towards their own criteria for success.</p>
    <div className="pure-u-1 pure-u-md-1-3 padding-side-sm">
      <pre><FontAwesomeIcon icon="check" style={{color: "green"}} /> Frequently Completed</pre>
      <p>helps highlight common concepts</p>
    </div>
    <div className="pure-u-1 pure-u-md-1-3 padding-side-sm">
      <pre><FontAwesomeIcon icon="arrow-up" transform={{ rotate: 45 }} /> Common Pre-Requisite</pre>
      <p> identifies critical building blocks</p>
    </div>
    <div className="pure-u-1 pure-u-md-1-3 padding-side-sm">
      <pre><FontAwesomeIcon icon="fire-alt" style={{color: "red"}} /> Strong Motivator</pre>
      <p> stokes the fire of curiosity</p>
    </div>
    <div className="pure-u-1 pure-u-md-1-6"></div>
    <div className="pure-u-1 pure-u-md-1-3 padding-side-sm">
      <pre><FontAwesomeIcon icon={["far", "clock"]} swapOpacity /> Shortest Time</pre>
      <p>for the expedient</p>
    </div>
    <div className="pure-u-1 pure-u-md-1-3 padding-side-sm">
      <pre><FontAwesomeIcon icon="chart-line" style={{color: "darkgreen"}} /> Improves Performance</pre>
      <p> rewards but challenges</p>
    </div>
    <div className="pure-u-1 pure-u-md-1-6"></div>

    <h1 className="pure-u-1 centered-text">Teach with Metrics</h1>
    <div className="pure-u-1 pure-u-lg-1-2">
      <p>At the back of every instructor's mind are doubts:</p>
      <ul>
        <li>😴 "Are my students engaged?"</li>
        <li>📉 "How much of an impact have I actually had?"</li>
        <li>🙄 "Have I kindled an ongoing curiosity in my students?"</li>
      </ul>
    </div>

    <div className="pure-u-1 pure-u-lg-1-2">
      <p>Socratic Combat aims to answer these questions:</p>
      <ul>
        <li> 😯 Get precise engagement metrics </li>
        <li> 🧐 Quantify your impact on students </li>
        <li> 🤔 Motivate long term learning </li>
      </ul>
    </div>
  </Land>
);
