import styled from "styled-components";

import { faCalendar, faEdit, faTrashAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import axiosApi from "../../utils/AxiosApi";
import BoxRow, { BoxRowContainer } from "./Box-Row";
import Button, { StyledBtn, BoxButtonLeft, BoxButtonCenter, BoxButtonRight } from '../../components/layouts/Button';
import StyledLink from "./StyledLink";
import { StyledInput } from "../forms/Input";



const Searcher = ({}) => {
    const [input, setInput] = useState({});
    const [searchPatients, setsearchPatients] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setInput((prevState) => ({
        ...prevState,
        [name]: value,
        }));
    };

    const searchPatient = async event => {
        event.preventDefault()
        console.log('search clicked')
        
        try {
            const response = await axiosApi.post('/patients/search', input)
            const data = await response;
            console.log('New patient was found', data.data)//data.data devuelve un []
            setsearchPatients(data.data)
        } catch (err) {
            console.error(err)
        } 
    } 
    
    //
    const renderSearch = () => {
        return searchPatients && searchPatients.map(({ _id, surname, name }) => {
            return (
                <SearchDiv key={_id}>
                    <Styledtd>{_id}</Styledtd>
                    <Styledtd>{surname}</Styledtd>
                    <Styledtd>{name}</Styledtd>
                    <BoxRow>
                        <BoxButtonLeft to="/calendar"><FontAwesomeIcon icon={faCalendar} /></BoxButtonLeft>
                        <BoxButtonCenter to={`edit/${_id}`}><FontAwesomeIcon icon={faEdit} /></BoxButtonCenter>
                        {/* <BoxButtonRight onClick={() => deletePatient(_id)}><FontAwesomeIcon icon={faTrashAlt} /></BoxButtonRight> */}
                    </BoxRow>
                </SearchDiv>
            )
        })
    }
  
    //
    return(
        <StyledArt>
            <SearchBar onSubmit={searchPatient}>
                            
                            <IconDiv><FontAwesomeIcon icon={faSearch} /></IconDiv>
                            <SearchInput
                                name= "name"
                                required
                                value={input.name} 
                                placeholder= "Name"
                                onChange= {handleChange}
                                type = "text"
                            />
                            <SearchInput
                                name= "surname"
                                required
                                value={input.surname} 
                                placeholder= "Surname"
                                onChange= {handleChange}
                                type = "text"
                            />
                            <BtnSearch type="submit">Seach</BtnSearch>                 
                    
            </SearchBar>

            <StyledRow>
                {renderSearch()}
            </StyledRow>
        </StyledArt>
        
       
    )
  
}
const StyledArt= styled.article`
    width:100%
`
const SearchDiv = styled(BoxRowContainer)`
    width:100%;
    padding: 0.5rem;
    margin-top: 25px;
    width: 100%;
    justify-content:space-around;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    background-color: white; ${'' /*  rgba(222, 232, 249 ) */}
`
const Styledtd = styled.td`
    background-color: secondary_light;
    padding: 0.9rem;
    text-align: center;
`;

const StyledRow = styled(BoxRowContainer)`
    width: 100%;   
`
//Search Bar
const SearchBar = styled.form`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: row;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: 0 0 20px rgb(0 0 0 / 15%);
`
const IconDiv = styled.div`
    padding: 0.7rem;
    border-radius: 5px 0px 0px 5px;
    background-color: lightgrey;
    height: calc(1.5em + 0.75rem + 2px);
`
const SearchInput = styled(StyledInput)`
  border-radius: 0;
`
const BtnSearch = styled(StyledBtn)`
    border-radius: 0 5px 5px 0;
`

export default Searcher;