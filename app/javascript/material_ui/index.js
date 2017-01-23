import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import RaisedButton from 'material-ui/RaisedButton'
const MyAwesomeReactComponent = () => (
  <RaisedButton label="Default" />
);

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const App = () => (
  <MuiThemeProvider>
    <AppBar
      title={<span style={styles.title}>ほげほげ</span>}
      onTitleTouchTap={handleTouchTap}
      iconElementLeft={<IconButton><NavigationClose /></IconButton>}
      iconElementRight={<FlatButton label="Save" />}
    />
  </MuiThemeProvider>
);

export default App;
