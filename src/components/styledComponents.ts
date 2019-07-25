import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 75px;
  position: relative;
`

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
  width: 80%;
  height: 800px;
  flex-wrap: wrap;
`

export const Header: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: fixed;
  top: 0px;
  background-color: #fff;
  z-index: 10;
  height: 120px;
  box-shadow: rgb(235, 235, 235) 0px 1px 0px;
`;

export const PokemonCard: any = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px; 
    border: 3px solid;
    border-color: ${(props: any) => `${props.color}`};
    background-color: #fff;
    border-radius: 8px;
    text-decoration: none;
    width: 300px;
    height: 480px;
    margin: 20px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        transform: scale(1.01);
    }
`;

export const Name: any = styled.div`
  margin-top: 8px;
  font-size: 18px;
  font-weight: bold;
  color: ${(props: any) => props.color};
`

export const Input: any = styled.input`
    display: flex;
    align-items: center;
    background-color: white;
    box-sizing: border-box;
    height: 45px;
    width: 300px;
    box-shadow: rgba(0, 41, 83, 0.3) 0px 1px 3px 0px;
    font-size: 1rem;
    color: rgb(0, 41, 83);
    border-radius: 10px;
    border-style: initial;
    padding: 0px 1.5rem;
    outline: none;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Image = styled.img`
  max-height: 200px;
 `;

export const HeaderImage = styled.img`
  max-height: 200px;

  &:hover {
    transform: scale(1.01);
}`;

export const Stats = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Delete = styled.i`
  cursor: pointer;
  position: absolute;
  top: 35px;
  right: 20px;
`;

export const Line = styled.div`
    height: 3px;
    width: 80%;
    border-top: 1px solid #000;
    margin-top: 15px;
    margin-bottom: 15px
`;

export const Types = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-height: 105px;
`;

export const Type = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props: any) => props.color};
    border: 1px solid;
    border-radius: 24px;
    margin: 5px;
    padding: 10px;
    color: #fff;
    width: 50px;
`;

export const Title = styled.span`
  color: ${(props: any) => props.color};
  text-align: left;
  width: 90%;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Button = styled.div`
  background-color: ${(props: any) => props.color};
  color: #fff;
  text-align: center;
  padding: 15px;
  font-weight: bold;
  cursor: pointer;
  opacity: 0.8;
  position: absolute;
  bottom: 40px;
  width: 70%;
  border-radius: 15px;

  &:hover {
      opacity: 1;
  }
`;