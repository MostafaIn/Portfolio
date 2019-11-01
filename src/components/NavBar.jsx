import React from 'react';
import { useSpring, animated } from 'react-spring';
import {
	AppBar,
	Toolbar,
	IconButton,
	CssBaseline,
	Divider,
	Drawer,
	Tabs,
	Tab,
	Button,
	Hidden,
	List,
	ListItem,
} from '@material-ui/core';
import { Menu, Home, LaptopMac, Info, Contacts } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import myLogo from '../Images/myLogo2.png';

const drawerWidth = 160;

const useStyles = makeStyles((theme) => ({
	logo: {
		height: 60,
		width: 180,
		margin: theme.spacing(2, 10, 2, 0),
	},
	appBar: {
		maxWidth: '100%',
		paddingLeft: theme.spacing(7),
		[theme.breakpoints.down('sm')]: {
			paddingLeft: theme.spacing(2),
		},
		background: '#121d25',
		color: '#fff',
	},
	shortIndicator: {
		maxWidth: 60,
		marginLeft: theme.spacing(6),
    },
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: '#121d25',
	},
	drawer: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			background: '#121d25',
			flexShrink: 0,
		},
	},
	nav: {
		margin: 'auto',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	menuButton: {
		color: 'white',
		'&:hover': {
			color: '#ffb503',
			background: 'none',
		},
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	menuBtns: {
		textTransform: 'capitalize',
		fontSize: 14,
		color: '#ffe',
		width: '90%',
		display: 'flex',
		justifyContent: 'space-between',
	},
	menuIcons: {
		color: '#ffb503',
		marginRight: '10px',
	},
}));

const NavBar = (props) => {
	const classes = useStyles();
	const logoFade = useSpring({
		from: { opacity: -1 },
		to: { opacity: 1 },
		config: { delay: 1000, duration: 1000 },
	});
	const { container } = props;
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [value, setValue] = React.useState(0);

	function handleChange(event, newValue) {
		setValue(newValue);
	}
	function handleToggle() {
		setMobileOpen(!mobileOpen);
	}

	const drawer = (
		<div style={{ position: 'sticky' }}>
			<div className={classes.toolbar} />
			<Divider />
			<List>
				<ListItem>
					<Button onClick={handleToggle} href="#home" className={classes.menuBtns}>
						Home
						<Home className={classes.menuIcons} />
					</Button>
				</ListItem>
				<ListItem>
					<Button onClick={handleToggle} href="#projects" className={classes.menuBtns}>
						Projects
						<LaptopMac className={classes.menuIcons} />
					</Button>
				</ListItem>
				<ListItem>
					<Button onClick={handleToggle} href="#about" className={classes.menuBtns}>
						About
						<Info className={classes.menuIcons} />
					</Button>
				</ListItem>
				<ListItem>
					<Button onClick={handleToggle} href="#contact" className={classes.menuBtns}>
						Contact
						<Contacts className={classes.menuIcons} />
					</Button>
				</ListItem>
			</List>
		</div>
	);
	return (
		<AppBar position="sticky" elevation={0} className={classes.appBar}>
			<Toolbar>
				<CssBaseline />
				<div style={{ display: 'flex' }}>
					<IconButton
						onClick={handleToggle}
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="Menu"
					>
						<Menu />
					</IconButton>
					<animated.div style={logoFade}>
						<img src={myLogo} alt="myLOGO" className={classes.logo} />
					</animated.div>
					<Tabs
						value={value}
						onChange={handleChange}
						className={classes.nav}
						classes={{ indicator: classes.shortIndicator }}
						centered
					>
						<Tab label="Home" href="#home" />
						<Tab label="Projects" href="#projects" />
						<Tab label="About" href="#about" />
						<Tab label="Contact" href="#contact" />
					</Tabs>
				</div>
				<nav className={classes.drawer}>
					<Hidden smUp implementation="css">
						<Drawer
							container={container}
							variant="temporary"
							anchor={theme.direction === 'rtl' ? 'right' : 'left'}
							open={mobileOpen}
							onClose={handleToggle}
							classes={{
								paper: classes.drawerPaper,
							}}
							ModalProps={{
								keepMounted: true, // Better open performance on mobile.
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden xsDown implementation="css">
						<Drawer
							classes={{
								paper: classes.drawerPaper,
							}}
							variant="permanent"
							open
						>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
