import React from 'react';


const menus = [
    { id: 1, name: 'Biriyani', img: 'menu1.jpg' },
    { id: 2, name: 'Spaghetti pasta', img: 'menu2.jpg' },
    { id: 3, name: 'Fried Rice with Chicken', img: 'menu3.jpg' },
    { id: 4, name: 'Dal Curry', img: 'menu4.jpg' },

]
const Menu = () => {
    return (
        <div id='menus' className='container'>
            <h2 className='text-primary text-center mt-5'>Our  Menu</h2>
            <div className="row">
                {
                    menus.map(menu => <Menu
                        key={menu.id}
                        menu={menu}
                    ></Menu>)
                }
            </div>
        </div>
    );
};

export default Menu;