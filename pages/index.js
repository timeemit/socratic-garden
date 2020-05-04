// @flow
import React from 'react';
import Land from '../components/Land';
import Prototype from '../components/Prototype';

export default () => (
  <Prototype>
    <Land title="Socratic Combat" className="pure-g">
      <p className="pure-u-1">Welcome to Socratic Combat, the education platform where instructors compete to cultivate students, everything is measured, and nothing is assumed.</p>
      <h1 className="pure-u-1 centered-text">Let The Competition Begin</h1>
      <p className="pure-u-1">Instructors are competing here for the ultimate prize: the opportunity to enrich curious minds.  The platform measures resources by how well they are engaging students, motivating continued studies, and improving subject comprehension.  The better a lesson performs, the more students it reaches.</p>

        <h1 className="pure-u-1 centered-text"><p>We Can Invert</p><p>The Student:Teacher Ratio</p></h1>
      <p className="pure-u-1">Socratic Combat synthesizes educational resources (lessons and their associated quizzes, organized by topics) into an algorithmically generated curriculum personalized for the student.  Each student is continuously guided, prompted, and supported by numerous teachers. While students assess themselves with quizzes, the platform continuously improves itself by attentively identifying which teaching materials are yielding the strongest student performance.</p> 

      <h1 className="pure-u-1 centered-text">Empower Curiosity</h1>
      <p className="pure-u-1">Socratic Combat puts students as the central navigators of their educational journey, where the menus of topics, lessons, and quizzes are highlighted with algorithmically measured signals that help guide students towards their own criteria for success.</p>
      <ul className="pure-u-1">
        <li>✅ “Most frequently completed” helps highlight common concepts</li>
        <li>↗️ “Pre-requisite concept” identifies critical building blocks</li>
        <li>🔥 “Strongest motivator of further study” stokes the fire of curiosity</li>
        <li>🕐 “Shortest time to complete” highlights opportunities for quick win</li>
        <li>📈 “Improves future performance” rewards but challenges</li>
      </ul>

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
          <li>
            <p>😯 Get precise engagement metrics</p>
          </li>
          <li>
            <p>🧐 Quantify your impact on students</p>
          </li>
          <li>
            <p>🤔 Motivate long term learning</p>
          </li>
        </ul>
      </div>

      <h1 className="pure-u-1 centered-text">Join the Alpha</h1>
      <p className="pure-u-1">Socratic Combat is an effort to measurably scale the impact of passionate, capable educators into the lives of students of all ages and interests.  Sign up and let's build a thriving community.</p>  
    </Land>
  </Prototype>
);
