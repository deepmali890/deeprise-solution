"use client"
import React from 'react';
import styled from 'styled-components';

const OfferButton = () => {
    return (
        <StyledWrapper>
            <button className="button">
                <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                </svg>
                
                Spacial Offer
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .button {
    padding: 5px 14px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    background-color: white;
    border-radius: 10px 10px 10px 10px; 
    color: black;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition-duration: .2s;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.116);
    padding-left: 8px;
    z-index: 9999;
  }

  .svgIcon {
    height: 25px;
    fill: black; 
    animation: spin 2s linear infinite; 
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .button:hover {
    background-color:black;
    color: white;
  }

  .button:hover .svgIcon {
    fill: white; 
  }

  .button:active {
    transform: scale(0.97);
  }
`;

export default OfferButton;
