import React, { useState } from 'react';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';

import './BakerDetails.section.css';
import {Input, Selector} from '../../Components';
import { AuthMail, AuthTel } from '../../utils/auth';
import {BASE_URL} from '../../utils/globalVariable';

const animatedComponents = makeAnimated();

const BakerDetails = (props) => {
    const {
        name,
        tel,
        email,
        password,
        idCard,
        categories,
        companyName,
        setPassword,
        setIdCard,
        setCategories,
        setCompanyName,
        errorPassword,
        errorIdCard,
        errorCategories,
        errorCompanyName,
        setErrorName,
        setErrorEmail,
        setErrorPassword,
        setErrorIdCard,
        setErrorTel,
        setErrorCategories,
        setErrorCompanyName,
        loading,
        setLoading,
    } = props;

    const authenticate = () => {
        let hasError = false;
        setLoading(true);


        if (name.length < 5) {
            hasError = true;
            setErrorName(true);
        }

        if (!AuthMail (email)) {
            hasError = true;
            setErrorEmail(true);
        }

        if (!AuthTel(tel)) {
            hasError = true;
            setErrorTel(true);
        }

        if(password.length < 5) {
            hasError = true;
            setErrorPassword(true);
        }

        if (idCard.length < 7) {
            hasError = true;
            setErrorIdCard(true);
        }

        if (companyName.length < 3) {
            hasError = true;
            setErrorCompanyName(true);
        }

        if (categories.length < 1) {
            hasError = true;
            setErrorCategories(true);
        }

        if(!hasError) {
            setLoading(false)
            return false;
        }

        const body = {
            name,
            categories,
            idCard,
            password,
            tel,
            companyName
        }

        let url = `${BASE_URL}/baker/register`;
        let statusCode, responseJson;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        .then((response) => {
            statusCode = response.status;
            responseJson = response.json();
            return Promise.all([statusCode, responseJson]);
        })
        .then((res) => {
            statusCode = res[0];
            responseJson = res[1];
            setLoading(false);
            console.log(responseJson, statusCode);
        })
        .catch(err => {
            console.log(err, 'The ultimate error');
            setLoading(false);
        })
    }

    const [_categories] = useState([
        { value: 'birthday-cake', label: 'Birthday Cakes' },
        { value: 'wedding-cake', label: 'Wedding Cakes' },
        { value: 'cookies', label: 'Cookies' },
        { value: 'doughnuts', label: 'Doughnuts' },
        { value: 'pancakes', label: 'Pancakes' },
        { value: 'cup-cakes', label: 'Cup Cake' },
    ]);

    const previous = () => {
        props.history.push({pathname: '/register'});
    }

    return (
         <section className="sec-bakersignup" id="signup">
            <div className="row-3">
                <div className="signup">
                    <div className="signup__form-1">
                        <form>
                            <Input 
                                len={2}
                                type='number'
                                placeholder='000400370'
                                label='ID card number'
                                value={idCard}
                                setValue={(event) => setIdCard(event.target.value)}
                                error={errorIdCard}
                                serError={() => setErrorIdCard()}
                            />
                            <Input 
                                len={2}
                                type='text'
                                placeholder='Henry pastries'
                                label='Company name'
                                value={companyName}
                                setValue={(event) => setCompanyName(event.target.value)}
                                error={errorCompanyName}
                                serError={() => setErrorCompanyName()}
                            />
                            <div className="form__select">
                                    <Select 
                                        value={categories}
                                        options={_categories}
                                        styles={colourStyles}
                                        onChange={(value) => setCategories(value)}
                                        components={animatedComponents} 
                                        isMulti 
                                        className="form__length-4 form__select-input" />
                                </div>
                            <Input 
                                len={5}
                                type='password'
                                placeholder="******"
                                label="password"
                                value={password}
                                setValue={(event) => setPassword(event.target.value)}
                                error={errorPassword}
                                serError={() => setErrorPassword()}
                            />
                            <div className="form__group-2">
                                <button type="submit" className="btn btn-deep--pink" onClick={() => previous()}>Back</button>
                                <button className="btn btn-deep--pink" onClick={() => authenticate()}>Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <div className="signup__form-2 txt-cnt">
                        <h2 className="title-lil-1 txt-white-2">
                            Sign up
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default BakerDetails;

const colourStyles = {
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#ff1493" : null,
      color: isFocused ? "white" : '#999',
    };
  },
  control: (base, {isFocused}) => ({
    ...base,
    border: 'none',
    // This line disable the blue border
    boxShadow: 'none',
    borderBottom: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: isFocused ? "#ff1493" : 'transparent',
    borderRadius: '2px',
    // overflow: 'hidden',
    // clipPath: ,
    
    '&:hover': {
        border: 'none',
        boxShadow: 'none',
        borderBottom: '2px',
        borderBottomStyle: 'solid',
        borderBottomColor: isFocused ? "#ff1493" : 'transparent',
    }
  })
};