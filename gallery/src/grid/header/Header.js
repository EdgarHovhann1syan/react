import './Header.css';
import { useState } from 'react';

function Header({ current }) {
    const [imgUrl, setUrl] = useState('');

    const handleClick = () => {
        current(imgUrl); // Pass the imgUrl to the parent component
        setUrl(''); // Clear the input field after submission
    };

    const handleChangeUrl = (evt) => {
        setUrl(evt.target.value);
    };

    return (
        <div className="Header">
            <input 
                type="text" 
                placeholder="Enter Image URL" 
                value={imgUrl} 
                onChange={handleChangeUrl} 
            />
            <input 
                type="submit" 
                value="Add" 
                onClick={handleClick} 
            />
        </div>
    );
}

export default Header;
