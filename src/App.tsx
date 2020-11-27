import React from 'react';
import './App.css';
import { categories } from './categories';

const buildId = (name: string) => {
  return `${name.replace(/\s/g, '-')}`;
}

const buildIdSign = (name: string) => {
  return `#${buildId(name)}`;
}

const App = () => {
  return (
    <div id="main" className="fix-sidebar">
      <div className="sidebar">
        <div className="sidebar-inner">
          <div className="list">
            <h2>Style Guide<sup className="beta">beta</sup></h2>

            <ul className="menu-root">
              {categories.map((category, index) =>
                <li key={index}>
                  <a className="section-link" data-scroll="" href={buildIdSign(category.categoryName)}>{category.categoryName}</a>
                  <ul className="menu-sub">
                    {category.sections.map((section, index) =>
                      <li key={index}>
                        <a className="section-link" data-scroll="" href={buildIdSign(section.sectionName)}>{section.sectionName}</a>
                      </li>
                    )}
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="content style-guide with-sidebar ">
        {categories.map((category, index) =>
          <React.Fragment key={index}>
            <h2 id={buildId(category.categoryName)} tabIndex={-1} style={{ outline: 'none' }}>
              <a href={buildIdSign(category.categoryName)} className="headerlink" title={category.categoryName} data-scroll="">{category.categoryName}</a>
            </h2>

            {category.sections.map((section, index) =>
              <React.Fragment key={index}>
                <h3 id={buildId(section.sectionName)}>
                  <a href={buildIdSign(section.sectionName)} className="headerlink" title={section.sectionName} data-scroll="">{section.sectionName} <sup data-p="a">essential</sup></a>
                </h3>
                {section.content}
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div >
    </div >
  );
}

export default App;
