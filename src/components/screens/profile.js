import React from 'react';
import '../allcss/profile.css';
import testImage from '../images/man.png';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            padding: theme.spacing(0),
        },
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}


function Profile() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const defaultBtnClick = () => {
        const dbtn = document.getElementById("defaultbtn");
        dbtn.click();
    };


    function previewImageHandler() {
        const profilePic = document.getElementById("profilePic");
        const dbtn = document.getElementById("defaultbtn");
        const file = dbtn.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function fileReader() {
                profilePic.setAttribute("src", this.result);
            }
            reader.readAsDataURL(file);
        }
    };


        return (
            <div className="profile-bg">
                <div className="navbar-p" id="navbar-p">
                    <p className="profile-name">Honey</p>
                    <span className="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>...</span>
                    <Menu id="simple-menu" anchorEl={anchorEl} className="box" keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                        <MenuItem onClick={handleClose}>Settings</MenuItem>
                        <MenuItem onClick={handleClose}>My Bussiness account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
                <div className="avatar">
                    <img className="profilePic" id="profilePic" src={testImage} onClick={() => { defaultBtnClick() }} alt="" />
                    <div className="profile-ring">
                        <input type="file" className="defaultbtn" id="defaultbtn" onChange={() => { previewImageHandler() }} hidden />
                    </div>
                </div>
                {/* <div className="bio"></div> */}
                <div className="follower-menu">
                    <div className="following">
                        <i className="fa fa-user icon"></i>
                        <div className="fg">
                            <p className="f1">Following</p>
                            <p className="f1">4</p>
                        </div>
                    </div>
                    <div className="followers">
                        <i className="fa fa-users icon"></i>
                        <div className="fg">
                            <p className="f1">Followers</p>
                            <p className="f1">490</p>
                        </div>
                    </div>
                </div>
                <div className="btn-menu">
                    <div className="btn-nav">
                        <AppBar position="dynamic" className="ul">
                            <Tabs
                                variant="fullWidth"
                                value={value}
                                onChange={handleChange}
                                aria-label="nav tabs example"
                            >
                                <LinkTab label="p" href="/images" {...a11yProps(0)} />
                                <LinkTab href="/videos" {...a11yProps(1)} />
                                <LinkTab href="/bs" {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>
                    </div>
                </div>
                <div className="output">
                    <TabPanel value={value} index={0}>
                        <Images />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Videos />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Bussiness />
                    </TabPanel>
                </div>
            </div>
        );
    }

    function Images() {
        return (
            <div className="images">
                <div className="postImage"></div>
                <div className="postImage"></div>
                <div className="postImage"></div>
                <div className="postImage"></div>
                <div className="postImage"></div>
                <div className="postImage"></div>
            </div>
        );
    }


    function Videos() {
        return (
            <div>
                <p>videosld</p>
            </div>
        );
    }


    function Bussiness() {
        return (
            <div>
                <p>Bussiness</p>
            </div>
        );
    }

    export default Profile;