import React, { useState } from 'react';

import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Image from 'react-bootstrap/Image';

const Contact = ({ id, avatar, first_name, last_name, email}) => {
    const [isActive, setIsActive] = useState(false);

    const initials = first_name.charAt(0)+""+last_name.charAt(0);

    //Toggle active list element and showing it's id to console
    const toggleActive = () => {
        setIsActive(!isActive);
        console.log(id);
    }

    return (
        <ListGroupItem 
        className={isActive ? "item-active" : "item"}
        onClick={toggleActive}>
            <div>
            {avatar ? <Image src={avatar} alt={initials} className="avatar" /> : <span>{initials}</span>}
            </div>
            <div>
                <p className="name">{first_name} {last_name}</p>
                <p className="email">{email}</p>
            </div>
        </ListGroupItem>
    );
};

export default Contact;
