import React, { Component } from 'react'
import Header from '../container/Header'
import MainUsers from '../container/MainCompaniesAndJobs'
import Footer from '../container/Footer'

export class Users extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MainUsers/>
                <Footer/>
            </div>
        )
    }
}

export default Users
