import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';

import { WorkArea } from '../../Components';
import { ABakers, AUsers, AdminNav, Dashboard, AOrders, APastry, APastryS, AProfile, SOrders, Profile } from '../../sections';
import styles from './Admin.module.css';

const Admin = (props) => {
    const { user, token } = props;
    return (
        <div className={styles.admin}>
            <AdminNav />
            <WorkArea>
                {(!token || !user.hasOwnProperty('name')) ? <Redirect to='/login' /> :
                    <Switch>
                    <Route path="/admin/dashboard" exact component={Dashboard} />
                    <Route path="/admin/dashboard/bakers" component={ABakers} />
                    <Route path="/admin/dashboard/users" component={AUsers} />
                    <Route path="/admin/dashboard/orders" component={AOrders} />
                    <Route path="/admin/dashboard/orders-super" component={SOrders} />
                    <Route path="/admin/dashboard/pastry" component={APastry} />
                    <Route path="/admin/dashboard/pastry-super" component={APastryS} />
                    <Route path="/admin/dashboard/profile" component={AProfile} />
                    <Route path="/admin/dashboard/adminprofile" component={Profile} />
                </Switch>}
            </WorkArea>
        </div>
    )
};

const mapStateToProps = ({ auth }) => {
    return {
        user: auth.user,
        token: auth.token,
    }
}

export default connect(mapStateToProps)(Admin);
