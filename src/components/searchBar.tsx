import { useState } from 'react';
import '../style/app.css';
import User from '../user';
import { fetchUser } from '../service/fetchUser';
import { UserDataType } from '../types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchBar = () => {
    const [input, setInput] = useState<string>('');
    const [user, setUser] = useState<UserDataType>();
    const [loading, setLoading] = useState<boolean>(false);

    const handleSearch = async () => {
        if (!input) return;
        setLoading(true);
        const userData = await fetchUser(input);
        setUser(userData);
        setLoading(false);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };
    return (
        <div className='searchbox-container'>
            <Form.Control
                type='text'
                value={input}
                placeholder='Enter a GitHub username'
                onChange={handleInputChange}
                onKeyDown={(event: any) => {
                    if (event.key === 'Enter') {
                        handleSearch();
                    }
                }}
                className="mr-sm-2"
                style={{ width: 500 }}
            />
            <div style={{margin:10}}>
                <Button className="search-button" onClick={handleSearch} style={{marginRight:10}}>Search</Button>
                <Button onClick={() => setInput('')}>Clear</Button>
            </div>
            
            <div>
                {loading && <p>Loading...</p>}
                {user && <User user={user} setUser={setUser} />}
            </div>
        </div>
    )
}

export default SearchBar