import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import GetAppIcon from '@material-ui/icons/GetApp';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import PropTypes, { bool } from 'prop-types';
import { withStyles } from '@material-ui/core';
import { uploadAnnotations } from './AnnotationUploader';

/** */
const styles = (theme) => ({
  listitem: {
    '&:focus': {
      backgroundColor: theme.palette.action.focus,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
});

export let content;

/** */
class AnnotationExportDialog extends Component {
  /** */
  constructor(props) {
    super(props);
    this.state = {
      exportLinks: [],
    };
    this.closeDialog = this.closeDialog.bind(this);
  }

  /** */
  componentDidUpdate(prevProps) {
    const { canvases, config, open } = this.props;
    const { open: prevOpen } = prevProps || {};
    if (prevOpen !== open && open) {
      /** */
      const reducer = async (acc, canvas) => {
        const store = config.annotation.adapter(canvas.id);
        const resolvedAcc = await acc;
        content = await store.all();
        if (content) {
          // eslint-disable-next-line no-underscore-dangle
          const label = (canvas.__jsonld && canvas.__jsonld.label) || canvas.id;
          const data = new Blob([JSON.stringify(content)], { type: 'application/json' });
          const url = window.URL.createObjectURL(data);
          return [...resolvedAcc, {
            canvasId: canvas.id,
            id: content.id || content['@id'],
            label,
            url,
          }];
        }
        return resolvedAcc;
      };
      if (canvases && canvases.length > 0) {
        canvases.reduce(reducer, []).then((exportLinks) => {
          this.setState({ exportLinks });
        });
      }
    }
  }

  /** */
  closeDialog() {
    const { handleClose } = this.props;
    this.setState({ exportLinks: [] });
    handleClose();
  }

  /** */
  render() {
    const { classes, handleClose, open } = this.props;
    const { exportLinks } = this.state;
    return (
      <Dialog
        aria-labelledby="annotation-export-dialog-title"
        id="annotation-export-dialog"
        onClose={handleClose}
        onEscapeKeyDown={this.closeDialog}
        open={open}
      >
        <DialogTitle id="annotation-export-dialog-title" disableTypography>
          <Typography variant="h2">Upload Annotations</Typography>
        </DialogTitle>
        <DialogContent>
          {exportLinks === undefined || exportLinks.length === 0 ? (
            <Typography variant="body1">No annotations stored yet.</Typography>
          ) : (
            <MenuList>
              {exportLinks.map((dl) => (
                <MenuItem
                  button
                  className={classes.listitem}
                  component="a"
                  key={dl.canvasId}
                  aria-label={`Upload annotations to the server`}
                  onClick={uploadAnnotations}
                // href={dl.url}
                // download={`${dl.id}.json`}
                >
                  <ListItemIcon>
                    <GetAppIcon />
                  </ListItemIcon>
                  <ListItemText>
                    {`Upload annotations for the server`}
                  </ListItemText>
                </MenuItem>
              ))}
            </MenuList>
          )}
        </DialogContent>
      </Dialog>
    );
  }
}

AnnotationExportDialog.propTypes = {
  canvases: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string }),
  ).isRequired,
  classes: PropTypes.objectOf(PropTypes.string),
  config: PropTypes.shape({
    annotation: PropTypes.shape({
      adapter: PropTypes.func,
    }),
  }).isRequired,
  handleClose: PropTypes.func.isRequired,
  open: bool.isRequired,
};

AnnotationExportDialog.defaultProps = {
  classes: {},
};

export default withStyles(styles)(AnnotationExportDialog);

/* {
  "name": "mirador-annotations",
  "version": "0.5.0",
  "description": "mirador-annotations React component",
  "main": "lib/index.js",
  "module": "es/index.js",
  "files": [
    "css",
    "es",
    "lib",
    "umd"
  ],
  "scripts": {
    "build": "nwb build-react-component",
    "clean": "nwb clean-module && nwb clean-demo",
    "lint": "eslint ./src ./__tests__",
    "prepublishOnly": "npm run build",
    "start": "nwb serve-react-demo",
    "test": "npm run lint && jest",
    "test:coverage": "jest --coverage",
    "test:watch": "jest --watch"
  },
  "dependencies": {
    "@psychobolt/react-paperjs": "^1.0.0",
    "@psychobolt/react-paperjs-editor": "^0.0.14",
    "draft-js": "^0.11.6",
    "draft-js-export-html": "^1.4.1",
    "draft-js-import-html": "^1.4.1",
    "immutable": "^4.0.0-rc.12",
    "material-ui-color-components": "^0.3.0",
    "paper": "^0.12.11",
    "react-color": "^2.18.1"
  },
  "peerDependencies": {
    "@material-ui/core": "^4.9.13",
    "@material-ui/icons": "^4.9.1",
    "@material-ui/lab": "^4.0.0-alpha.52",
    "lodash": "^4.17.11",
    "mirador": "^3.0.0-rc.5",
    "prop-types": "^15.7.2",
    "react": "^17.0",
    "react-dom": "^17.0",
    "uuid": "^8.0.0"
  },
  "devDependencies": {
    "@babel/core": "^7.10.4",
    "@babel/preset-env": "^7.10.4",
    "@babel/preset-react": "^7.10.4",
    "@material-ui/core": "^4.11.0",
    "@material-ui/icons": "^4.9.1",
    "@material-ui/lab": "^4.0.0-alpha.56",
    "@wojtekmaj/enzyme-adapter-react-17": "^0.6.0",
    "babel-eslint": "^10.1.0",
    "canvas": "^2.6.1",
    "enzyme": "^3.11.0",
    "eslint": "^7.2",
    "eslint-config-airbnb": "^18.2.0",
    "eslint-config-react-app": "^6.0.0",
    "eslint-plugin-flowtype": "^5.6.0",
    "eslint-plugin-import": "^2.22.0",
    "eslint-plugin-jest": "^23.18.0",
    "eslint-plugin-jsx-a11y": "^6.3.1",
    "eslint-plugin-react": "^7.20.3",
    "eslint-plugin-react-hooks": "^4.0.6",
    "jest": "^26.1.0",
    "jest-canvas-mock": "^2.2.0",
    "jest-localstorage-mock": "^2.4.2",
    "mirador": "^3.0.0-rc.5",
    "nwb": "^0.24.7",
    "prop-types": "^15.7.2",
    "react": "^17.0",
    "react-dom": "^17.0",
    "uuid": "^8.2.0"
  },
  "author": "",
  "homepage": "",
  "license": "Apache-2.0",
  "repository": "",
  "keywords": [
    "react-component"
  ]
}

*/