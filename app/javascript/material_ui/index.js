import React from 'react';

import {
  getMuiTheme,
  MuiThemeProvider,
  darkBaseTheme,
  lightBaseTheme
} from 'material-ui/styles';

import NavigationClose from 'material-ui/svg-icons/navigation/close';

import {
  FontIcon,
  SvgIcon,
  IconButton,
  FlatButton,
  RaisedButton,
  AppBar
} from 'material-ui';

import {
  fullWhite,
  blue500,
  red500,
  greenA200,
  grey50
} from 'material-ui/styles/colors';


const MyAwesomeReactComponent = () => (
  <RaisedButton label="Default" />
);
const iconStyles = {
  // marginRight: 24,
};
const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);
const SvgIconExampleSimple = () => (
  <div>
    <HomeIcon
      style={iconStyles}
      color={fullWhite}
    />
  </div>
);


const handleTouchTap = () => {
  alert('triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
  appBar: {
    backgroundColor: blue500,
  },
  marginBottom: {
    marginBottom: 20,
  },
  divStyle: {
    backgroundColor: grey50,
    padding: 20,
    border: '1px solid #eee',
  },
};

const App = React.createClass({
  render () {
    return (
      <div style={styles.divStyle}>
        <AppBar
          style={styles.appBar, styles.marginBottom}
          title={<span style={styles.title}>sample</span>}
          onTitleTouchTap={handleTouchTap}
          iconElementLeft={<IconButton><SvgIconExampleSimple /></IconButton>}
          iconElementRight={<FlatButton label="Save" />}
        />
        <AppBar
          style={styles.appBar}
          title={<span style={styles.title}>タイトル</span>}
          onTitleTouchTap={handleTouchTap}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={<FlatButton label="Save" />}
        />
      </div>
    )
  }
})

const customStyle = getMuiTheme({
  appBar: {
    height: 50,
  },
});


const AppBox = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(customStyle)}>
  <App style={customStyle.appBar} />
  </MuiThemeProvider>
);

export default AppBox;
