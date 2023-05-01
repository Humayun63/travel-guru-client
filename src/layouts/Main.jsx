import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import '../index.css'

const Main = () => {
    const location = useLocation()
    const isTrue = location.pathname === '/' || location.pathname === '/booking'
    return (
        <div className={isTrue ? `travel-background-img` : ''}>
            <Container>
                <Header></Header>
                <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default Main;