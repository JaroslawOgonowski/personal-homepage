import { GHTiles, PortfolioIcon, SubTitle, Title, Wrapper } from "./styled";
import portfolioIcon from "./portfolioIcon.svg"
import GHTile from "./GHTile";
import { useDispatch } from "react-redux";
import { getRepo } from "./getRepo";
import { useEffect } from "react";
import { fetchRepositories } from "./portfolioSlice";
const Portfolio = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch((fetchRepositories()));
      }, [dispatch]);

    return (
        <Wrapper>
            <PortfolioIcon src={portfolioIcon} alt="" />
            <Title>Portfolio</Title>
            <SubTitle>My recent projects</SubTitle>
            <GHTiles>
                <GHTile></GHTile>
                <GHTile></GHTile>
                <GHTile></GHTile>
                <GHTile></GHTile>
            </GHTiles>
        </Wrapper>
    )
};

export default Portfolio;
