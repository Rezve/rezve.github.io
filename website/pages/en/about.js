/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function About(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the [documentation on this site.](${docUrl(
        'doc1.html',
      )})`,
      title: 'Browse Docs',
    },
    {
      content: 'Ask questions about the documentation and project',
      title: 'Join the community',
    },
    {
      content: "Find out what's new with this project",
      title: 'Stay up to date',
    },
  ];

  const imageStyle = {
    float: 'left',
    paddingRight: '20px',
    width: '220px'
  };

  const skillStyle = {
    listStyleType: 'circle', 
    float: 'left',
    paddingLeft: '20px'
  }

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>About Me</h1>
          </header>
          <p style={{fontSize: '18px'}}>
            <img src={`${baseUrl}img/rezve_hasan.jpg`} style={imageStyle} alt="Md. Rezve Hasan" />
            Hi, I am Md. Rezve Hasan. Enthusiastic software engineer with 2+ years of experience participating<br/>
            in the complete product development lifecycle of successfully launched applications. <br/>
            My current stack is Node.js, TypeScript, MongoDB, Angular etc. </p>

            <h6>TECHNICAL SKILLS</h6>
            
            <ul style={skillStyle}>
              <li>Node.js – Express.js, Mongoose, Mocha, Chai, Istanbul, Webpack, Babel </li>
              <li>PHP – Wordpress, CodeIgniter ( Helper, Hook, HMVC, MVC)</li>
              <li>Java – Android, Socket Programming (TCP, UDP), Servlet, JSP</li>
              <li>MySQL (Stored Procedure, Indexing, Trigger, CLI, MySQL Workbench)</li>
              <li>NoSQL (MongoDB, CLI), SQLite</li>
              <li>Angular (Module, Service, Routing, DI)</li>
              <li>Git</li>
            </ul>
          {/* <GridBlock contents={supportLinks} layout="threeColumn" /> */}
        </div>
      </Container>
    </div>
  );
}

module.exports = About;
