import styled from "styled-components";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { DialogActions } from "@mui/material";
import React from "react";
import * as ReactBootStrap from 'react-bootstrap'

export const RecipeComponent = (props)=>{

    const [show, setShow] = React.useState(false);
    const { recipeObj }=props;
    return(
        <>
        <Dialog open={show}>
            <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
            <DialogContent>
                <table>
                    <thead>
                        <th></th>
                        <th>Ingredients</th>
                        <th>Weight (grams)</th>
                    </thead>
                    <tbody>
                        {recipeObj.ingredients.map((ingredientObj)=>
                            <tr>
                                <td><img src={ingredientObj.image} width="50px"/></td>
                                <td>{ingredientObj.text}</td>
                                <td>{ingredientObj.weight} gm</td>

                            </tr>
                        )}
                    </tbody>
                </table>
            </DialogContent>
            <DialogActions>
                <Ingredients onClick={()=>window.open(recipeObj.url)}>See More</Ingredients>
                <SeeMoreText onClick={()=>setShow("")}>Close</SeeMoreText>
            </DialogActions>
        </Dialog>
        <ReipeContainer>
              <CoverImage src={recipeObj.image} />
              <RecipeName>{recipeObj.label}</RecipeName>
              <IngTextContainer>
                <Ingredients onClick={()=> setShow(true)}>Ingredients</Ingredients>
                <SeeMoreText onClick={()=>window.open(recipeObj.url)}>See more</SeeMoreText>
              </IngTextContainer>
        </ReipeContainer>
        </>
    )
  }

export const RecipeListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px;
    gap: 20px;
    justify-content: space-evenly;
`;

export const ReipeContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 3px 10px #aaa;
    width: 300px;
`;

export const CoverImage = styled.img`
    height: 200px;
    object-fit:cover;
`;

export const RecipeName = styled.span`
    font-size: 22px;
    font-weight: bold;
    color: black;
    margin: 11px 0;
    margin-left: 2px;
    padding: 10px;
    height: 55px;
    justify-content:center; 
`;

export const Ingredients = styled.span`
    font-size: 18px;
    color: black;
    background-color: #D1FBD6;
    padding: 10px;
    width: 43%;
    cursor: pointer;
    border-radius: 5px;
`;

export const SeeMoreText = styled.span`
    font-size: 18px;
    color: black;
    padding: 10px;
    background-color: #FF7F7F;
    width: 43%;
    cursor: pointer;
    border-radius: 5px;
`;

export const IngTextContainer = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`;

