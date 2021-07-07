import React from 'react'
import { connect } from 'react-redux';
import { getUsername } from "../../redux/auth/auth.selectors";
import {logOut} from "../../redux/auth/auth.operations"
import defaultAvatar from "./fish.png"
import styles from "./UserMenu.Module.css";

const UserMenu = ({ avatar, name, onLogout }) => (
  <div>
    <img src={avatar} alt="" width="12" height="20" />
    <span className={styles.userMenu}>Welcome, {name}</span>
    <button type="button" onClick={onLogout} className={styles.userMenuBtn}>
      Logout
    </button>
  </div>
);

const mapStateToProps = (state) => ({
    name: getUsername(state),
    avatar: defaultAvatar
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);