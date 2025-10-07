import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Home from './Home.jsx';
import Profile from './Profile.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import ThemeContext from './contexts';

const themes = [
  {
    id: 1,
    name: 'White',
    className: 'light',
  },
  {
    id: 2,
    name: 'Black',
    className: 'dark',
  },
  {
    id: 3,
    name: 'Blue',
    className: 'dark-blue',
  },
];

class App extends React.Component {
  // BEGIN (write your solution here)
  constructor(props) {
    super(props);
    this.state = {
      currentTheme: themes[0]
    };
    this.setTheme = this.setTheme.bind(this);
  }

  setTheme(themeId) {
    const selectedTheme = themes.find((theme) => theme.id === themeId);
    this.setState({ currentTheme: selectedTheme });
  }

  render() {
    const { currentTheme } = this.state;
    const contextValue = {
      themes,
      currentTheme,
      setTheme: this.setTheme,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
          <ThemeSwitcher />
          <Tabs defaultActiveKey="login" id="tabs">
            <Tab eventKey="login" title="Login">
              <Home />
            </Tab>
            <Tab eventKey="registration" title="Registration">
              <Profile />
            </Tab>
          </Tabs>
        </ThemeContext.Provider>
    );
  }
  // END
}

export default App;
