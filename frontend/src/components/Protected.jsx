import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
    const { Component } = props;
    const navigate = useNavigate();

    useEffect(() => {
        let login = localStorage.getItem('login');
        console.log(localStorage.getItem('login'));

        if (!login && (window.location.pathname==='/signin')) {

            navigate("/signin");
        }
        else if(!login && (window.location.pathname==='/product-manager-signin')){
            navigate("/product-manager-signin")
        }
        else if(!login && (window.location.pathname==='/user/signin')){
            navigate("/user/signin")
        }
        else if(!login && (window.location.pathname==='/user/signup')){
            navigate("/user/signup")
        }
        else if(!login){
            navigate("/")
        }
         else if (login === 'admin' && (window.location.pathname!=='/admin/net-income-monitoring' && window.location.pathname!=='/admin/employee-management')) {
            navigate("/admin/");
        }
        else if(login === 'manager' && (window.location.pathname!=='/product-manager/product-management' && window.location.pathname!=='/product-manager/stock-monitoring')) {
            navigate("/product-manager/")
        }
        else if(login === 'user' && (window.location.pathname!=='/user/product-search' && window.location.pathname!=='/user/billing')) {
            navigate("/user/product-search")
        }
    }, [navigate]);

    return (
        <div>
            <Component />
        </div>
    );
}

export default Protected;