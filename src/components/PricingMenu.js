import React, { useState } from "react";
import "./PricingMenu.css";

const menuData = [
    {
        name: "Supplier Product",
        submenus: [
            { name: "Supplier Product Setup", submenus: [
                { name: "Supplier Product Level Setup" },
                { name: "Supplier Product Maintenance Workbench" },
                { name: "Supplier Product Detail" }
            ]}
        ]
    },
    {
        name: "Product",
        submenus: [
            { name: "Product Hierarchy & Grouping", submenus: [
                { name: "Setting Product Grouping" }
            ]}
        ]
    },
    {
        name: "Product Price",
        submenus: [
            { name: "Supplier Product Pricing", submenus: [
                { name: "Supplier Product Pricing Maintenance" },
                { name: "Bulk Price Update for Supplier Products" },
                { name: "Manual Price Overrides" }
            ]},
            { name: "Supplier Cost Structure & Calculations", submenus: [
                { name: "Supplier Cost Breakdown & Calculations" }
            ]},
            { name: "Discount & Markups", submenus: [
                { name: "Discount Configurations" },
                { name: "Supplier Discounts & Rebates Processing" },
                { name: "Promotional Discounts" }
            ]},
            { name: "Markup Strategies", submenus: [
                { name: "Dynamic Markup Rules" }
            ]},
            { name: "Price Definition & Structuring", submenus: [
                { name: "Define Pricing Methods" },
                { name: "Cost-Based Pricing" },
                { name: "Market-Based Pricing" },
                { name: "Competitor-Based Pricing" }
            ]},
            { name: "Price List Setup", submenus: [
                { name: "Multi-Tier Price Lists" }
            ]},
            { name: "Price List Management", submenus: [
                { name: "Price List Maintenance & Adjustments" }
            ]}
        ]
    },
    {
        name: "Simulation Batch",
        submenus: [
            { name: "Price Simulation Setup", submenus: [
                { name: "Define Simulation Parameters" }
            ]},
            { name: "Running Price Simulation", submenus: [
                { name: "Simulated Price Adjustments" },
                { name: "Apply Bulk Pricing Adjustments" },
                { name: "Dynamic Price Recalculation" },
                { name: "Multi-Tier Pricing Scenarios" }
            ]},
            { name: "Price Simulation Analysis", submenus: [
                { name: "Margin Impact Analysis" },
                { name: "Competitor Price Benchmarking" },
                { name: "Profitability Forecasting" }
            ]}
        ]
    }
];

const PricingMenu = ({ onReturn }) => {
    const [openMenus, setOpenMenus] = useState({});

    const toggleMenu = (menuName) => {
        setOpenMenus((prev) => {
            const newOpenMenus = {};
            newOpenMenus[menuName] = !prev[menuName];
            return newOpenMenus;
        });
    };

    const renderSubmenus = (submenus, level = 0) => (
        <ul className="submenu active">
            {submenus.map((submenu, index) => (
                <li key={index} className="nested-menu">
                    {submenu.submenus ? (
                        <>
                            <button className="menu-button" onClick={() => toggleMenu(submenu.name)}>
                                {submenu.name}
                            </button>
                            {openMenus[submenu.name] && renderSubmenus(submenu.submenus, level + 1)}
                        </>
                    ) : (
                        <div style={{ paddingLeft: `${level * 15}px` }}>{submenu.name}</div>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <div className="pricing-menu-container">
            {menuData.map((menu, index) => (
                <div key={index}>
                    <button className="menu-button" onClick={() => toggleMenu(menu.name)}>
                        {menu.name}
                    </button>
                    {openMenus[menu.name] && renderSubmenus(menu.submenus)}
                </div>
            ))}
            <button className="return-button" onClick={onReturn}>Return</button>
        </div>
    );
};

export default PricingMenu;
