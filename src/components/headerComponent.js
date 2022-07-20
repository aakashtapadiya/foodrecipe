import styled from "styled-components";
import App from "../App";

export const Header = styled.div`
  color: #006165;
  background-color: #FFFFFF;
  display: flex;
  flex-directon: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  justify-content: space-between; 
`;

export const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`;

export const AppIcon= styled.img`
  width: 50px;
  height: 50px;
  margin: 10px;
`;

export const SearchNameComponent = styled.div`
  display: flex;
  flex-directon: row;
  box-shadow: 0 2px 5px #aaa;
  padding: 10px;
  border-radius: 50px;
  width: 50%;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 15px;
  font-weight: bold;
`;

export const SearchIcon = styled.img`
width: 32px;
height: 32px;
`;
